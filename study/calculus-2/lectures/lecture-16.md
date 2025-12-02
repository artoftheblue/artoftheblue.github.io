---

title: Лекция 16. Ряды Фурье
date: 2025-12-02
author: Artemis Feidenheimer
description: 
numbering:
  enumerator: 16.%s

---

:::{prf:definition} Полная система векторов в пространстве
Пусть $V$ --- нормированное пространство. 

Система векторов $\{x_\alpha\}_{\alpha\in A}\in V$ называется {bluehighlight}`полной по отношению к множеству` $U\in V$ (или полной в $U$), если любой векторов из $U$ можно сколько угодно близко приблизить конечными линейными комбинациями векторов системы.

$$\forall x\in U, \forall \ve>0,\exists \lambda_1,\ldots,\lambda_N\colon \left\|x-\sum^{N}_{k=1}\lambda_kx_k\right\|<\ve$$
:::

:::{prf:theorem} Эквивалентные условия полноты ортогональной системы
$V$ --- линейное пространство со скалярным произведением $\langle\cdot, \cdot\rangle$. <br>
$U$ --- некоторое подмножество $V$. <br>
$\{e_k\}$ --- не более, чем счётная система ненулевых взаимно ортогональных векторов из $V$. 

Тогда следующий условия эквивалентны:
1. $\{e_k\}$ --- полная в $U$;
2. $\forall x\in U$ верно $\displaystyle x=\sum_{k}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k$ (то есть ряд Фурье сходится по норме);
3. $\forall x\in U$ верно {bluehighlight}`равенство Парсеваля` $||x||^2=\sum_k\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}$.
:::

:::{prf:proof}
:nonumber:
1. $\boxed{1} \implies \boxed{2}$
   
    Имеем $\{e_k\}$ --- полная в $U\implies \displaystyle\forall x \in U, \forall \ve>0, \exists \lambda_1,\ldots,\lambda_N, (\exists N),\colon \left\|x-\sum^{N}_{k=1}\lambda_kx_k\right\|<\ve$
    
    Хотим показать, что ряд Фурье сходится по норме.

    $$S_n=\sum^n_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\implies\lim_{n\to\infty}||s_n-x||=0$$ 

    Рассмотрим 
    
    $$n>N\colon \left\|x-\sum^n_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\right\|\leq\left\|x-\sum^N_{k=1}\lambda_k e_k\right\|<\ve$$

    $$\implies\forall \ve>0,\exists N\colon\forall n>N,||x-S_n||<\ve=\implies\lim_{n\to\infty}||S_n-x||=0$$

2. $\boxed{2} \implies \boxed{3}$
   
    Имеем, что $$\implies\forall \ve>0,\exists N\colon\forall n>N,||x-S_n||<\ve=\implies\lim_{n\to\infty}||S_n-x||=0$$

    Рассмотрим

    $$\begin{align*}
       \left\|x-\sum^n_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\right\|^2&=||x||^2-\left\|\sum^n_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\right\|^2\\
       &=||x||^2-\sum^n_{k=1}\left\|\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\right\|\\
       &=||x||^2\sum^n_{k=1}\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}<\ve
    \end{align*}$$

    $$\implies\lim_{n\to\infty}\sum^n_{k=1}\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}=||x||^2\implies ||x||^2=\sum^\infty_{k=1}\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}$$

3. $\boxed{3} \implies \boxed{1}$

    Выполняется равенство Парсиваля 
    
    $$\implies \forall \ve > 0, \exists N\colon ||x||^2-\sum^n_{k=1}\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}<\ve$$

    Рассмотрим

    $$\left\|x-\sum^N_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\right\|^2=||x||^2-\sum^N_{k=1}\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}<\ve\implies$$

    выполняется определение полной системы.
:::

:::{prf:corollary} Необходимое условие полноты системы
Если $\exists\{e_k\}$ --- не более, чем счётная ортогональная система ненулевых векторов в $V$ полная в $U$, то в $U$ не существует ненулевого вектора, ортогонального вектору $\{e_k\}$.
:::

## Полнота основной тригонометрической системы

$V=\riemann[-\pi,\pi]$ --- пространство интегрируемых по Риману на отрезке $[-\pi,\pi]$ функций.

$$\forall f, g \in V\colon  \langle f, g\rangle=\int\limits_{-\pi}^\pi f(x)g(x)\d x$$

Если ортонормированная система: $\displaystyle\left\{\frac{1}{\sqrt{2\pi}}, \frac{\cos kx}{\sqrt{\pi}}, \frac{\sin kx}{\sqrt{\pi}}\right\}_{k\in\NN}$ --- полная в некотором $U$, то:

1. Любая функция может быть представлена в виде своего ряда Фурье: $$\forall f\in V, f(x)=\sum^\infty_{k=1}\frac{\langle f, e_k\rangle}{\langle e_k, e_k\rangle}e_k=\frac{A_0}{\sqrt{2\pi}}+\sum^\infty_{k=1}\left(A_k\frac{\cos kx}{\sqrt{\pi}}+B_k\frac{\sin kx}{\sqrt{\pi}}\right)$$
2. Выполняется равенство Персиваля: 
   $$||f||^2=A_0^2+\sum_k^\infty(A_k^2+B_k^2)$$
3. Если $f,g\in V\colon\forall k\in \NN,f_k=\langle f, e_k\rangle=\langle g, e_k\rangle=g_k\implies f=g$

:::{prf:proof} 3

$$\begin{align*}
||g-f||&=\left\|f-\sum_{k=1}^n\langle f, e_k\rangle e_k +\sum^n_{k=1}\langle f, e_k\rangle e_k -g\right\|\\
&\leq\left\|f-\sum_{k=1}^n\langle f, e_k\rangle e_k\right\| +\left\|\sum^n_{k=1}\langle g, e_k\rangle e_k -g\right\|<\frac{\ve}{2}+\frac{\ve}{2}=\ve
\end{align*}$$
:::

Этапы:

1. Интеграл на $[-\pi, \pi]\sim$ ступечатая функция
2. Ступенчатая функция $\sim$ непрерывна на $[-pi,\pi]$
3. Непрерывные $\sim$ $2\pi$-периодические
4. $2\pi$-периодические $\sim$ тригонометрические

Этап 1

Определим ступенчатую на отрезке $[a, b]$ функцию:

$$f(x)=\sum^N_{k=1}\alpha_j\chi_{\Delta_k},\quad \alpha_k=\const,\quad k\in\overline{1, N},\quad a=t_0<t_1<\ldots<t_N=b$$

$$\begin{align*}
    \Delta_k&=[t_{k-1}, t_k), \quad k=\overline{1, N-1}\\
    \Delta_N&=[t_{N-1}, t_N]
\end{align*}$$

$$\chi_{\Delta_k}=\begin{cases}
    1, & x\in \Delta_k\\
    0, & x\notin\Delta_k
\end{cases}$$

:::{prf:theorem} О приближении интегральной функции ступенчатой
$\forall f\in\riemann[-\pi, \pi], \exists g_n$ --- ступенчатая на $\ds[-\pi, \pi]\colon \lim_{n\to\infty}\|g_n-f\|=0$
:::

:::{prf:proof}
1. Покажем, что $\ds\lim_{n\to\infty}\int\limits_{-\pi}^\pi|g_n-f|\d x=0$.

    Введём $-\pi=t_0<t_1<\ldots<t_n=\pi$. $g_n(x)$ существует в силу определения

    $$g_n(x)=\sum^n_{k=1}f(t_{k-1})x_{\Delta_k}$$

    $$\begin{align*}
    \int\limits_{-\pi}^\pi\left|f-\sum^n_{k=1}f(t_{k-1})\chi_{\Delta_x}\right|\d x&=\int\limits_{-\pi}^\pi\left|f-f(t_{k-1})\cdot\chi_{\Delta_x}\right|\d x\\
    &\leq\int\limits^\pi_{-\pi}\sum^n_{k=1}|f-f(t_{k-1})|\chi_{\Delta_k}\d x\\
    &\leq \sum^n_{k=1}\int^\pi_{-\pi}(\sup_{\Delta_k}f-\inf_{\Delta_k}f)\chi_{\Delta_k}\d x\\
    &= \sum^n_{k=1}(\sup_{\Delta_k}f-\inf_{\Delta_k}f)|\Delta_k|\d x\\
    &= \sum^n_{k=1}(\sup_{\Delta_k}(f)|\Delta_k|-\sum^n_{k=1}\inf_{\Delta_k}(f)|\Delta_k|)|\d x\\
    &=\Su(f,\pi)-\Sl(f,\pi)\implies\lim_{n\to\infty}(\Iu-\Il)=0
    \end{align*}$$

2. $$\|f-g\|=\sqrt{\int\limits_{-\pi}^\pi(f-g_n)^2\d x}\xrightarrow{?}0$$

    $$\sqrt{\int\limits_{-\pi}^\pi(f-g_n)^2\d x}=\sqrt{\int\limits_{-\pi}^\pi|f-g_n|\cdot|f-g_n|\d x}$$

    $f\in\riemann[-\pi,\pi]\implies$ ограничена $\implies \exists M: |f|\leq M$ на $[-\pi,\pi]$ и $|g_n|\leq M\implies \lim_{n\to\infty}||f-g_n||=0$ 

    $$||f-g||=\sqrt{2M}\sqrt{\int_{-\pi}^\pi|f-g_n|\d x}\xrightarrow{n\to\infty} 0$$

:::
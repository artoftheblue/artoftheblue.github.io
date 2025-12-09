---

title: Лекции 17–19. Ряды Фурье–3. Полнота основной тригонометрической системы
date: 2025-12-02
author: Artemis Feidenheimer
description: Полнота системы векторов в нормированном пространстве. Эквивалентные условия полноты ортогональной системы векторов. Равенство Парсиваля. Необходимое условие полноты системы векторов. Полнота основной тригонометрической системы. Приближение интегрируемой функции ступечатой. Приближение ступенчатых функций непрерывными. Приближение непрерывной функции 2π-периодической. Ядро Дирихле. Свойства ядра Дирихле. Частичная сумма ряда Фурье через ядро Дирихле. Ядро Фейера. Свойства ядра Фейера. Частичная сумма ряда Фурье по Чезаро. Теорема Фейера о равномерной сходимости n-й частичной суммы по Чезаро. Теорема Вейерштрасса о приближении непрерывной функции тригонометрическими многочленами.
numbering:
  enumerator: 17.%s

---

## Полнота системы векторов в нормированном пространстве

:::{prf:definition} Полная система векторов в нормированном пространстве
:label: complete-vector-system
Пусть $V$ --- нормированное пространство. <br>
Система векторов $\{x_\alpha\}_{\alpha\in A}\in V$ называется {bluehighlight}`полной по отношению к множеству` $U\in V$ (или полной в $U$), если любой векторов из $U$ можно сколько угодно близко приблизить конечными линейными комбинациями векторов системы.

$$\forall x\in U, \forall \ve>0,\exists \lambda_1,\ldots,\lambda_N\colon \left\|x-\sum^{N}_{k=1}\lambda_kx_k\right\|<\ve$$
:::

### Эквивалентные условия полноты ортогональной системы векторов

:::{prf:theorem} Эквивалентные условия полноты ортогональной системы векторов
:label: equivalence-conditions-completeness
$V$ --- линейное пространство со скалярным произведением $\langle\cdot, \cdot\rangle$. <br>
$U$ --- некоторое подмножество $V$. <br>
$\{e_k\}$ --- не более, чем счётная, система ненулевых взаимно ортогональных векторов из $V$. 

Тогда следующие условия эквивалентны:
1. $\{e_k\}$ --- [полная](#complete-vector-system) в $U$;
2. $\forall x\in U$ верно $\displaystyle x=\sum_{k}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k$ (то есть [ряд Фурье](#fourier-series) [сходится по норме](#norm-convergence));
3. $\forall x\in U$ верно {bluehighlight}`равенство Парсеваля`: $\boxed{\ds||x||^2=\sum_k\frac{|\langle x,e_k\rangle|^2}{\langle e_k, e_k\rangle}}$.
:::

:::{prf:proof}
:nonumber:
1. $\boxed{1} \implies \boxed{2}$
   
    Имеем $\{e_k\}$ --- полная в $U\implies \displaystyle\forall x \in U, \forall \ve>0, \exists \lambda_1,\ldots,\lambda_N, (\exists N),\colon \left\|x-\sum^{N}_{k=1}\lambda_kx_k\right\|<\ve$
    
    Хотим показать, что ряд Фурье сходится по норме.

    $$S_n=\sum^n_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\implies\lim_{n\to\infty}||s_n-x||=0$$ 

    Рассмотрим 
    
    $$n>N\colon \left\|x-\sum^n_{k=1}\frac{\langle x,e_k\rangle}{\langle e_k, e_k\rangle}e_k\right\|\leq\left\|x-\sum^N_{k=1}\lambda_k e_k\right\|<\ve$$

    $$\implies\forall \ve>0,\exists N\colon\forall n>N,||x-S_n||<\ve\implies\lim_{n\to\infty}||S_n-x||=0$$

2. $\boxed{2} \implies \boxed{3}$
   
    Имеем, что $$\implies\forall \ve>0,\exists N\colon\forall n>N,||x-S_n||<\ve\implies\lim_{n\to\infty}||S_n-x||=0$$

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

    выполняется [определение полной системы](#complete-vector-system).
:::

### Необходимое условие полноты системы векторов

:::{prf:corollary} Необходимое условие полноты системы векторов
:label: completeness-required-condition
Если $\exists\{e_k\}$ --- не более, чем счётная ортогональная система ненулевых векторов в $V$ [полная](#complete-vector-system) в $U$, то в $U$ не существует ненулевого вектора, ортогонального вектору $\{e_k\}$.
:::

## Полнота основной тригонометрической системы

:::{prf:theorem} Следствия полноты основной тригонометрической системы
:label: completeness-trig-system
$V=\riemann[-\pi,\pi]$ --- пространство [интегрируемых по Риману](#integrable-function) на отрезке $[-\pi,\pi]$ функций.

$$\forall f, g \in V\colon  \langle f, g\rangle=\int\limits_{-\pi}^\pi f(x)g(x)\d x$$

Если [ортонормированная система](#orthonormal-system): $\displaystyle\left\{\frac{1}{\sqrt{2\pi}}, \frac{\cos kx}{\sqrt{\pi}}, \frac{\sin kx}{\sqrt{\pi}}\right\}_{k\in\NN}$ --- [полная](#complete-vector-system) в некотором $U$, то:

1. Любая функция может быть представлена в виде своего [ряда Фурье](#fourier-series): $$\forall f\in V, f(x)=\sum^\infty_{k=1}\frac{\langle f, e_k\rangle}{\langle e_k, e_k\rangle}e_k=\frac{A_0}{\sqrt{2\pi}}+\sum^\infty_{k=1}\left(A_k\frac{\cos kx}{\sqrt{\pi}}+B_k\frac{\sin kx}{\sqrt{\pi}}\right)$$
2. Выполняется {bluehighlight}`равенство Персиваля`: 
   $$||f||^2=A_0^2+\sum_k^\infty(A_k^2+B_k^2)$$
3. Если $f,g\in V\colon\forall k\in \NN,f_k=\langle f, e_k\rangle=\langle g, e_k\rangle=g_k\implies f=g$
:::

:::{prf:proof} Третий пункт
:nonumber:

$$\begin{align*}
||g-f||&=\left\|f-\sum_{k=1}^n\langle f, e_k\rangle e_k +\sum^n_{k=1}\langle f, e_k\rangle e_k -g\right\|\\
&\leq\left\|f-\sum_{k=1}^n\langle f, e_k\rangle e_k\right\| +\left\|\sum^n_{k=1}\langle g, e_k\rangle e_k -g\right\|<\frac{\ve}{2}+\frac{\ve}{2}=\ve
\end{align*}$$
:::

:::{seealso} Этапы доказательства, что основная тригонометрическая система полная

1. Интеграл на $[-\pi, \pi]\sim$ ступечатая функция;
2. Ступенчатая функция $\sim$ непрерывна на $[-\pi,\pi]$;
3. Непрерывные $\sim$ $2\pi$-периодические;
4. $2\pi$-периодические $\sim$ тригонометрические.
:::

### Этап 1. Приближение интегрируемой функции ступенчатой

:::{card}
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
:::

:::{prf:theorem} О приближении интегрируемой функции ступенчатой
:label: approx-integral-step
$\forall f\in\riemann[-\pi, \pi], \exists g_n$ --- ступенчатая на $\ds[-\pi, \pi]\colon$

$$\lim_{n\to\infty}\|g_n-f\|=0$$
:::

:::{prf:proof}
:nonumber:
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

    $f\in\riemann[-\pi,\pi]\implies$ f ограничена $\implies \exists M\colon |f|\leq M$ на $[-\pi,\pi]$ и $|g_n|\leq M\implies \ds\lim_{n\to\infty}||f-g_n||=0$ 

    $$||f-g_n||=\sqrt{2M}\sqrt{\int\limits_{-\pi}^\pi|f-g_n|\d x}\xrightarrow{n\to\infty} 0$$

:::

### Этап 2. Приближение ступенчатой функции непрерывной

:::{prf:theorem} О приближении ступенчатой функции непрерывной
:label: approx-step-cont
$\forall$ ступенчатых функций $f\colon\exists g_n\in\contclass[-\pi, \pi]\colon$

$$\lim_{n\to\infty}\|f-g_n\|=0$$
:::


:::{prf:proof}
:nonumber:
Рассмотрим ступечатую функцию, т. е. $f(x)=\alpha\cdot x_\Delta$, где $\Delta=[a, b]\subset[-\pi,\pi]$.

$$g_\delta(x)=\begin{cases}
    f(x), & x\in[a+\delta, b-\delta]\\
    \frac{\alpha}{\delta}(x-a), & x\in[a, a+\delta]\\
    \frac{\alpha}{\delta}(b-x), & x\in[b-\delta, b]\\
    0 & \text{otherwise}
\end{cases}$$

$f$ --- ступенчатая, следовательно она ограничена на $[a, b]\implies$ 

$$\exists M\colon |f(x)|\leq M, |g_\delta(x)\leq M|$$

---

$$\begin{align*}
    \|f-g_\delta\|&=\sqrt{\int\limits^{\pi}_{-\pi}(f-g_\delta)^2\d x}=\sqrt{\int\limits^b_a(f-g_\delta)^2\d x}\\
    &=\sqrt{\int\limits^{a+\delta}_a(f-g_\delta)^2\d x + \int\limits_{b-\delta}^b(f-g_\delta)^2\d x}\leq \sqrt{M^2\delta + M^2\delta}=\sqrt{2M^2\delta}\\
    &\implies\lim_{\delta\to\infty}\sqrt{2M^2\delta}=0
\end{align*}$$

что верно для одной ступеньки, но так как ступенек конечное число $N\implies\forall N$ все ступени тоже $\to 0$.
:::

### Этап 3. Приближение непрерывной функции $2\pi$-периодической

:::{prf:theorem} О приближении непрерывной функции $2\pi$-периодической
:label: approx-cont-2pi

$\forall f\in\contclass[-\pi,\pi], \exists g_n\in\contclass(\RR)$ --- $2\pi$-периодическая функция:

$$\lim_{n\to\infty}\|f_n-g\|=0$$
:::

:::{prf:proof}
:nonumber:
Рассмотрим $g_n(x)$ на $[-\pi,\pi]$. 

$$g_n(x)=\begin{cases}
    f(x), & x\in[-\pi+\frac{1}{n}, \pi-\frac{1}{n}]\\
    \frac{f(-\pi+\frac{1}{n})}{\frac{1}{n}}(x+\pi), & x\in[-\pi, -\pi + \frac{1}{n}]\\
    \frac{f(\pi-\frac{1}{n})}{\frac{1}{n}}(\pi-x), & x\in[\pi-\frac{1}{n},\pi]
\end{cases}$$

1. Продлим $g_n(x)$ $2\pi$-периодически на $\RR\implies g_n(x)\in\contclass(\RR)$.
2. $f\in\contclass[-\pi,\pi]\implies f$ ограничена на $[-\pi, \pi] \implies$ 
   $$\exists M\colon |f(x)|\leq M, |g_n|\leq M$$
   
   $$\begin{align*}
    \|f-g_n\|&=\sqrt{\int\limits^\pi_{-\pi}(f-g_n)^2\d x}\\
    &=\sqrt{\int\limits_{-\pi}^\pi(f-g_n)^2\d x+\int\limits^\pi_{-\pi}-\frac{1}{n}(f-g_n)^2\d x}\leq\sqrt{2M^2\cdot\frac{1}{n}}\\
    &\implies\lim_{n\to\infty}\sqrt{2M^2\cdot\frac{1}{n}}=0
    \end{align*}$$
:::

:::{prf:definition} Ядро Дирихле
:label: dirichlet-kernel
Функция
$$D_n(t)=\frac{1}{2}+\sum^n_{k=1}\cos kt$$
называется {bluehighlight}`ядром Дирихле`.
:::

:::{prf:corollary} Свойства ядра Дирихле
:label: dirichlet-kernel-properties
1. $D_n(t)$ --- $2\pi$-периодичная.
2. $D_n(t)$ --- чётная.
3. $D_n(t)\in\contclass^\infty(\RR)$
4. $\ds\frac{1}{\pi}\int\limits^\pi_{-\pi}D_n(t)\d t=1$
5. $$D_n(t)=\begin{cases}
        \frac{\sin(n+\frac{1}{2})t}{2\sin\frac{t}{2}}, & t\neq 2\pi m, m\in\ZZ\\
        n + \frac{1}{2}, & t=2\pi m
   \end{cases}$$
:::

:::{prf:proof}
:nonumber:
$(1–3)$ из свойств членов функции.

$$\begin{align*}
(4)\colon \frac{1}{\pi}\int\limits_{-\pi}^\pi D_n(t)\d t&=\frac{1}{\pi}\int^\pi_{-\pi}\left(\frac{1}{2}+\sum^n_{k=1}\cos kt\right)\d t\\
&=\frac{1}{\pi}\cdot\frac{1}{2}\int\limits_{-\pi}^\pi 1\d t+\sum^n_{k=1}\frac{1}{\pi}\int\limits_{-\pi}^\pi\cos kt\d t 
\end{align*}$$

$$(5)\colon t=2\pi m, m\in\ZZ, \quad D_n(2\pi m)=\frac{1}{2}+\sum^n_{k=1}\underset{=1}{\cos(2\pi k m)}=n+\frac{1}{2}$$
 $$t\neq 2\pi m\implies\frac{1}{2}\neq \pi m$$

$$\begin{align*}
   D_n(t)&=\left(\frac{1}{2}+\sum^n_{k=1}\cos kt\right)=\frac{\left(\frac{1}{2}+\sum^n_{k=1}\cos kt\right)\cdot\sin\frac{t}{2}}{\sin\frac{t}{2}}\\
   &=\frac{\frac{1}{2}\sin\frac{t}{2}+\sum^n_{k=1}\frac{1}{2}\left(\sin\left(\frac{1}{2}-k\right)t+\sin\left(\frac{1}{2}+k\right)t\right)}{\sin\frac{t}{2}}\\
   &=\frac{\frac{1}{2}\sin\frac{t}{2}-\frac{\sin \frac{t}{2}}{2}+\frac{\sin(n+\frac{1}{2})t}{2}}{\sin\frac{t}{2}}=\frac{\sin(n+\frac{1}{2})t}{2\sin\frac{t}{2}}
\end{align*}$$

:::

:::{prf:theorem} О частичной сумме ряда Фурье через $D_n$
:label: fourier-through-dirichlet

$f\in\riemann[-\pi,\pi]$ со скалярным произведением 

$$\la f, g\ra=\int^\pi_{-\pi}f\cdot g\d x$$

Обозначим $n$-тую частичную сумму ряда Фурье:

$$S_n(x, f)=\frac{a_0}{2}+\sum^n_{k=1}(a_k\cos kx+b_k\sin kx)$$

в ортонормированной системе векторов

$$
\left\{\frac{1}{\sqrt{2\pi}},\frac{\cos kx}{\sqrt{pi}},\frac{\sin kx}{\sqrt{\pi}}\right\}\implies \boxed{S_n(x,f)=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(x + t) D_n(t) \d t}
$$

$$
S_n(x, f)=\frac{A_0}{\sqrt{2\pi}}+\sum^n_{k=1}\left(A_k\cdot\frac{\cos kx}{\sqrt{\pi}}+B_k\frac{\sin kx}{\sqrt{\pi}}\right),\qquad S_n=\sum^n_{k=1}x_ie_i
$$
:::

:::{prf:proof}
:nonumber:

$$\begin{align*}
    a_0&=\sqrt{\frac{2}{\pi}}A_0=\sqrt{\frac{2}{\pi}}\int\limits_{-\pi}^\pi f\frac{1}{\sqrt{2\pi}\d t}=\frac{1}{\pi}\int\limits_{-\pi}^\pi f\d t\\
    a_k&=\frac{A_k}{\sqrt{\pi}}=\frac{1}{\sqrt{\pi}}\int^{\pi}_{-\pi}\int\limits^\pi_{-\pi}f\cdot\frac{\cos kt}{\sqrt{\pi}}\d t=\frac{1}{\pi}\int\limits^\pi_{-\pi}f\cos kt \d t\\
    b_k&=\frac{B_k}{\sqrt{\pi}}=\ldots=\frac{1}{\pi}\int\limits^\pi_{-\pi}f\cdot\sin kt\d t\\
\end{align*}$$

$$\begin{align*}
    S_n(x, f)&=\frac{a_0}{2}+\sum^n_{k=1}(a_k\cos kx+b_k \sin kx)\\
    &=\frac{1}{2\pi}\int\limits^\pi_{-\pi} f \d t +\sum^n_{k=1}\frac{1}{\pi}\int\limits_{-\pi}^\pi f(\cos kt \cos kx + \sin kt\sin kx)\d t\\
    &=\frac{1}{2\pi}\int\limits^\pi_{-\pi} f \d t +\sum^n_{k=1}\frac{1}{\pi}\int\limits_{-\pi}^\pi f(\cos k(t-x))\d t\\
    &=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(t)\left(\frac{1}{2}+\sum^n_{k=1}\cos k(t-x)\right)\d t\\
    &=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(t)(D_n(k(t-x)))\d t
\end{align*}$$

Переобозначим $t-x=y,\ t=y+x$

$$\frac{1}{\pi}\int\limits_{-\pi-x}^{\pi-x} f(y+x)\cdot D_n(y)\d y=\frac{1}{\pi}\int\limits_{-\pi}^{\pi} f(y+x)\cdot D_n(y)\d y$$

по $2\pi$-периодичности сдвинули на $x$.
:::

:::{prf:definition} Ядро Фейера
:label: feier-kernel
Функция $\ds\Phi_n(t)=\frac{1}{n+1}\sum^{n}_{k=0}D_k(t)$ называется {bluehighlight}`ядром Фейера`.
:::

:::{prf:corollary} Свойства ядра Фейера
:label: feier-kernel-properties
1. $2\pi$-периодичность.
2. Чётность.
3. $\Phi(t)\in\in\contclass^\infty(\RR)$
4. $\ds\frac{1}{\pi}\int\limits_{-\pi}^\pi\Phi_n(t)\d t = 1$
5. $$\Phi_n(t)=\begin{cases}
        \frac{\sin^2(\frac{n+1}{2}t)}{2(n+1)\sin^2\frac{1}{2}}, & t\neq 2\pi m, m\in \ZZ\\
        \frac{n+1}{2}, & t=2\pi m
   \end{cases}$$

% \Phi_n\geq 0
:::

:::{prf:proof}
:nonumber:

$(1-3)$ из свойств $D_n(t)$.

$$\begin{align*}
    (4)\colon\frac{1}{\pi}\int\limits_{-\pi}^\pi\Phi_n\d t=\frac{1}{\pi}\int_{-\pi}^\pi\frac{1}{n+1}\sum^n_{k=0}D_k(t)\d t=\frac{1}{n+1}\sum^n_{k=0}\frac{1}{\pi}\int\limits_{-\pi}^\pi D_k(t)\d t=1
\end{align*}$$

$$\begin{align*}
    (5)\colon t&=2\pi m\implies D_k(2\pi m)=k+\frac{1}{2}\implies\\
    \Phi_n(2\pi m)&=\frac{1}{n+1}\sum^n_{k=0}\left(\frac{1}{2}+k\right)\\
    &=\frac{1}{n+1}\left(\frac{n+1}{2}+\frac{(n+1)n}{2}\right)=\frac{1}{2}+\frac{n}{2}=\frac{n+1}{2}
\end{align*}$$

$$t\neq 2\pi m \implies \frac{t}{2}=\pi m$$

$$\begin{align*}
    \Phi_n(t)&=\frac{1}{n+1}\sum^n_{k=0}D_n(t)=\frac{1}{n+1}\sum^n_{k=0}\frac{\sin(n+\frac{1}{2})t}{2\sin\frac{t}{2}}\cdot\frac{\sin\frac{t}{2}}{\sin\frac{t}{2}}\\
    &=\frac{1}{n+1}\sum_{k=0}^n\frac{\frac{1}{2}(\cos kt-\cos (k+1)t)}{2\sin^2\frac{t}{2}}\\
    &=\frac{\frac{1}{2}(\cos 0 - \cos (n+1)t)}{2(n+1)\sin^2\frac{t}{2}}=\frac{\sin^2(\frac{n+1}{2}t)}{2(n+1)\sin^2\frac{t}{2}}
\end{align*}$$
:::

> Здесь начинается лекция 19

:::{prf:definition} Частичная сумма ряда Фурье по Чезаро

Функция 

$$\boxed{\sigma_n(x, f)=\frac{1}{n+1}\sum^n_{k=0} S_k(x,f)}$$

называется $n$-й {bluehighlight}`частичной суммой ряда Фурье по Чезаро`.
:::

:::{prf:theorem} О частичных суммах ряда Фурье по Чезаро
$$\sigma_n(x,f)=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(x+t) \Phi_n(t)\d t$$
:::

:::{prf:proof}
:nonumber:
$$S_n(f,x)=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(x+t) D_n(t)\d t$$

$$\begin{align*}
    \sigma_n(x,f)&=\frac{1}{n+1}\sum^n_{k=0}S_k(x,f)=\frac{1}{n+1}\sum^n_{k=0}\frac{1}{\pi}\int\limits_{-\pi}^\pi f(x+t)D_k(t)\d t\\
    &=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(x+t)\left(\sum^n_{k=0}D_k(t)\right)\cdot\frac{1}{n+1}\d t=\frac{1}{\pi}\int\limits_{-\pi}^\pi f(x+t)\Phi_n(t)\d t
\end{align*}$$
:::

:::{prf:theorem} Фейера о равномерной сходимости $n$-й частичной суммы по Чезаро
:label: feier-theorem
$$\left.\begin{align*}
    &f\colon\RR\mapsto\RR\\
    &f - 2\pi\text{-периодичная}\\
    &f(\pi)=f(-\pi)\\
    &f\in\contclass[-\pi, \pi]\\
\end{align*}\right\}\implies \sigma_n(x,f)\overset{\RR}{\uniconverges} f$$
:::

:::{prf:proof}
:nonumber:

1. $f\in\contclass[-\pi, \pi]\implies f$ --- равномерно непрерывная на $[-\pi, \pi]$ в силу $2\pi$-периодичности $f \implies f$ --- равномерно непрерывная $\forall [a, b]\subset \RR$ и на $\RR$:

$$\forall \ve>0, \exists \delta\colon \forall x, y\in\RR\colon |x-y|<\delta\implies |f(x)-f(y)|<\ve$$

2. $$\begin{align*}
       |\sigma_n(x,f)-f(x)|&=\left|\frac{1}{\pi}\int\limits_{-\pi}^\pi\cdot\Phi_n(t)\d t-f(x)\cdot 1\right|\\
       &=\left|\frac{1}{\pi}\int_{-\pi}^\pi f(x+t)\Phi_n(t)\d t-f(x)\cdot\frac{1}{\pi}\int\limits^\pi_{-\pi}\Phi_n(t)\d t\right|\\
       &=\left|\frac{1}{\pi}\int\limits_{-\pi}^\pi\left(f(x+t)-f(x)\right)\Phi_n(t)\d t\right|\\
       &=\left|\frac{1}{\pi}\int\limits_{-\delta}^\delta\left(f(x+t)-f(x)\right)\Phi_n(t)\d t\right.\\
       &\ \left.+\ \frac{1}{\pi}\int\limits_{\delta\leq|t|\leq\pi}\left(f(x+t)-f(x)\right)\Phi_n(t)\d t\right|\\
       &=|\II_1+\II_2|<\frac{\ve}{2}+\frac{\ve}{2}=\ve
    \end{align*}$$

    $$\begin{align*}
        \II_1&\leq \frac{1}{\pi}\int\limits_{-\delta}^\delta|f(x+t)-f(x)|\cdot|\Phi_n(t)|\d t<\frac{\ve}{2\pi}\int\limits_{-\delta}^\delta|\Phi_n(t)|\d t\\
        &\leq\frac{\ve}{2\pi}\int\limits_{-\pi}^\pi\Phi_n(t)\d t=\frac{\ve}{2}
    \end{align*}$$

    Вспомним, что

    $$\boxed{\Phi_n(t)=\begin{cases}
        \frac{\sin^2(\frac{n+1}{2}t)}{2(n+1)\sin^2(\frac{t}{2})}, & t\neq 2\pi m\\
        \frac{n+1}{2}, & t=2\pi m
    \end{cases}}$$

    В силу периодичности $f(x)\in\contclass[-\pi, \pi]\implies \exists M\colon |f(x)|\leq M, x\in\RR$.

    $$\begin{align*}
        \II_2&\leq \frac{1}{\pi}\int\limits_{\delta\leq|t|\leq \pi}|f(x+t)-f(x)|\cdot|\Phi_n(t)\d t|\\
        &\leq 2M\cdot \frac{1}{\pi}\int\limits_{\delta\leq |t|\leq \pi}\Phi_n(t)\d t=\frac{2M}{\pi}\int\limits_{\delta\leq|t|\leq\pi}\frac{\sin^2(\frac{n+1}{2}t)}{2(n+1)\cdot\sin^2(\frac{t}{2})}\d t\\
        &\leq\frac{2M}{\pi}\int\limits_{\delta\leq|t|\leq\pi}\frac{1}{2(n+1)\cdot\sin^2\frac{\delta}{2}}\d t\leq\frac{2M}{\pi\cdot\sin^2\frac{\delta}{2}}\cdot 2\pi\cdot\frac{1}{n}<\frac{\ve}{2}
    \end{align*}$$

    так как $\forall \ve>0, \exists N\colon \forall n>N, \forall x\in\RR,\dfrac{\text{const}}{n}\leq \dfrac{\ve}{2}$.

    Таким образом, $\forall \ve>0,\exists N\colon \forall n>N, \forall x\in\RR\colon|\sigma_n(x,f)-f(x)|<\ve\implies \sigma_n\overset{\RR}{\uniconverges} f$.
:::

### Этап 4. Приближение непрерывной функции тригонометрическими многочленами

:::{prf:theorem} Вейерштрасса о приближении непрерывной функции тригонометрическими многочленами

$$\left.\begin{align*}
    &f\in\contclass[-\pi,\pi]\\
    &f - 2\pi \text{-периодическая}\\
    &f(\pi)=f(-\pi)\\
\end{align*}\right\}\implies \begin{align*}
    &\forall \ve>0, \exists T_n(x)\\
    &\forall x\in[-\pi, \pi]\\
    &\|f(x)-T_n(x)\|<\ve\\
\end{align*}$$
:::

:::{prf:proof}
:nonumber:
По [теореме Фейера](#feier-theorem) 

$$\sigma_n(x, f)\overset{\RR}{\uniconverges} f(x)\implies \forall \ve>0,\exists N\colon \forall n> N,\forall x\in\RR, |\sigma_n(x)-f(x)|<\ve$$

$$\|f(x)-T_n(x)\|=\sqrt{\int\limits_{-\pi}^\pi(f(x)-T_n(x))^2\d x}$$

Рассмотрим 

$$\begin{align*}
  \|f(x)-\sigma_n(x, f)\|&=\sqrt{\int\limits_{-\pi}^\pi(f(x)-\sigma_n(x,f))^2\d x}\\
  &<\sqrt{\ve^2\int_{-\pi}^\pi 1\cdot \d x}<\ve\cdot\sqrt{2\pi}
\end{align*}$$

Так как $\ds\sigma_n(x,f)=\frac{1}{n+1}\sum S_n(x, f)$, то это и есть наш тригонометрический многочлен, потому что

$$\forall \ve>0,\exists \sigma_n(x,f), \forall x\in[-\pi,\pi]\hookrightarrow \|f(x)-\sigma_n(x,f)\|<\ve\cdot\sqrt{2\pi}$$
:::
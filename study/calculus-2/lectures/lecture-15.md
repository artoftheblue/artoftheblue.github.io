---

title: Лекция 16. Ряды Фурье–2
date: 2025-11-25
author: Artemis Feidenheimer
description: Теорема Пифагора. Норма. Фундаментальность. Сходимость и предел по норме. Нормированное линейное пространство. Полное нормированное линейное пространство. Банахово пространство. Теорема о перпендикуляре. Неравенство Бесселя. Экстремальное свойство коэффициентов Фурье. Сходимость ряда Фурье в Банаховом пространстве.
numbering:
  enumerator: 16.%s

---

## Теорема Пифагора

:::{prf:theorem} Теорема Пифагора
:label: pythagoras-theorem 
1. $\{x_i\}$ --- [ортогональная система векторов](#orthogonal-system) $(x_i\neq 0)$
$$x=\sum_i x_i\implies ||x||^2=\sum_{i}||x_i||^2$$
2. $\{e_i\}$ --- [ортонормированная система векторов](#orthonormal-system) $(e_i\neq 0)$

$$x=\sum_i\alpha_ie_i\implies||x||^2=\sum_i|\alpha_i|^2$$
:::

:::{prf:proof}
:nonumber:
1. $$\begin{align*}
    ||x||^2=\langle x, x\rangle&=\left\langle\sum_{i}x_i,\sum_jx_j\right\rangle=\sum_i\left\langle x_i,\sum_jx_j\right\rangle\\&=\sum_{i,j}\left\langle x_i, x_j\right\rangle=\sum_i||x_i||^2
    \end{align*}$$
2. $$||x||^2=\sum_i||\alpha_ie_i||^2=\sum_i|\alpha_i|^2\cdot||e_i||^2=\sum_i|\alpha_i|^2$$
:::

## Норма

$V$ --- линейное пространство с нормой $||x||=\sqrt{\langle x, x\rangle}, \forall x\in V$.

### Фундаментальность

:::{prf:definition} Фундаментальная последовательность
:label: cauchy-sequence
Последовательность $\{x_n\}^\infty_{n=1}\subset V$ будем называть {bluehighlight}`фундаментальной` последовательностью (последовательностью {bluehighlight}`Коши`), если 

$$\forall \ve > 0, \exists N\colon \forall m, n > N\hookrightarrow ||x_m-x_n||<\ve$$
:::

### Сходимость и предел

:::{prf:definition} Сходимость и предел по норме
:label: norm-convergence
Последовательность $\{x_n\}_{n=1}^\infty\subset V$ {bluehighlight}`сходится по норме` к $x\in V$ и будем говорить, что $x$ является {bluehighlight}`пределом по норме` $\{x_n\}$, если 

$$\lim_{n\to \infty}||x_n-x||=0 \iff \forall \ve > 0, \exists N \colon \forall n > N \hookrightarrow ||x_n-x|| < \ve$$
:::

### Нормированное линейное пространство

:::{prf:definition} Нормированное линейное пространство
:label: normalized-linear-space
{bluehighlight}`Нормированным линейным пространством` называется линейное пространство, на котором определена норма.
:::

### Банахово пространство

:::{prf:definition} Полное нормированное линейное пространство
:label: complete-normalized-linear-space
[Нормированное линейное пространство](#normalized-linear-space) $V$ будем называть {bluehighlight}`полным`, если каждая [фундаментальная последовательность](#cauchy-sequence) на нём сходится по норме к элементу этого же пространства.
:::

:::{prf:definition} Банахово пространство
:label: banach-space
{bluehighlight}`Банахово пространство` --- [полное нормированное линейное пространство](#complete-normalized-linear-space).
:::

:::{prf:example}
$\QQ$ --- неполное нормированное пространство. $\sqrt{2}\in \RR\notin\QQ$.

$$\forall \ve_i>0,\exists x_i\in\QQ\colon |x_i-\sqrt{2}|<\ve_i$$

$$\forall \ve>0,\exists N\colon \forall n,m>N, |x_m-x_n|<\ve$$

$$x_m\to\sqrt{2}\notin\QQ$$
:::

## Теорема о перпендикуляре

:::{prf:theorem} О перпендикуляре
:label: perpendicular-theorem
$\{e_k\}$ --- не более, чем счётная система ненулевых взаимно ортогональных векторов в линейном пространстве $V$ со скалярным произведением $\langle \cdot, \cdot \rangle$. <br>
Пусть [ряд Фурье](#fourier-series) вектора $x\in V$ по $e_k$ сходится к вектору $\tilde x\in V$

$$\tilde x=\sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k$$

Тогда $y \perp \tilde x $ и $y\perp \langle \{e_k\}\rangle$, где $x=\tilde x + y$.
:::

:::{prf:proof}
:nonumber:
$\langle e_i, e_j\rangle = 0$ при $i\neq j$:

$\boxed{y=x-\tilde x}$

1. $$\begin{align*}\langle x, \tilde x \rangle &= \langle x - \tilde x, \tilde x \rangle=\langle x, \tilde x \rangle - \langle \tilde x , \tilde x \rangle =\\
   &=\left\langle x, \sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k \right\rangle-\left\langle \sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k, \sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k \right\rangle\\
   &=\sum_k\frac{\overline{\langle x, e_k \rangle}}{\langle e_k, e_k\rangle}\cdot\langle x, e_k\rangle-\sum_k\frac{|\langle x, e_k \rangle|^2}{\langle e_k, e_k\rangle}\cdot \langle e_k, e_k\rangle=0
   \end{align*}$$
2. $$\left\langle y, \sum_k \alpha_ke_k\right\rangle=\sum_k\langle y, \alpha_k, e_k\rangle=\sum_k\bar \alpha_k\langle y, e_k\rangle=0$$

    Рассмотрим 
    
    $$\begin{align*}
        \langle y, e_k\rangle&=\langle x - \tilde x, e_k\rangle=\langle x, e_k\rangle - \langle \tilde x, e_k \rangle \\
        &= \langle x, e_k\rangle-\left\langle \sum_k\frac{\langle x, e_i \rangle}{\langle e_i, e_i\rangle}e_i, e_k\right\rangle=\langle x, e_k\rangle - \langle x, e_k\rangle=0
    \end{align*}$$
:::

## Неравенство Бесселя

:::{prf:theorem} Неравенство Бесселя
:label: bessel-inequality
$\{e_k\}$ --- не более, чем счётная, ортогональная ненулевая система векторов из $V$<br> с $||\cdot||=\sqrt{\langle \cdot, \cdot \rangle}$ и $\ds\forall x\in V, \exists \tilde x =\sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k$ --- [ряд Фурье](#fourier-series), сходящийся к $\tilde x$ по норме $\ds\implies \sum_k\frac{|\langle x, e_k\rangle|^2}{\langle e_k, e_k\rangle}\leq ||x||^2$ в ортонормированной системе векторов $\ds\sum_k|\langle x, e_k\rangle|^2\leq ||x||^2$.
:::

:::{prf:proof}
:nonumber:

$x=\tilde x + y \implies$ по [теореме Пифагора](#pythagoras-theorem) $$||x||^2=||\tilde x||^2+||y||^2\implies ||x||^2\geq ||\tilde x||^2$$


$$\begin{align*}
   ||\tilde x||^2&=\left|\left|\sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k\right|\right|^2=\sum_k\left|\left|\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k\right|\right|^2\\
   &=\sum_k\left|\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}\right|^2\langle e_k, e_k\rangle=\sum_k\frac{|\langle x, e_k \rangle|^2}{\langle e_k, e_k\rangle}
\end{align*}$$
:::

## Экстремальное свойство коэффициентов Фурье

:::{prf:theorem} Экстремальное свойство коэффициентов Фурье
:label: extremum-property-fourier
$\{e_k\}$ --- ортогональная система ненулевых векторов в линейном пространстве $V$<br> с $||\cdot||=\sqrt{\langle \cdot, \cdot\rangle}$. Если $\ds\forall x \in V,\forall n, \exists \tilde x_k=\sum^n_{k=1}\frac{\langle x, e_k\rangle}{\langle e_k, e_k\rangle}e_k$, то произвольный вектор линейного пространстве лучше всего приближается $n$-ой частичной суммой [ряда Фурье](#fourier-series):

$$
\min_{\alpha_k}\left|\left|x-\sum^n_{k=1}\alpha_k e_k\right|\right| = ||x - \tilde x_n||
$$
:::

:::{prf:proof}
:nonumber:

$$
\begin{align*}
    0&\leq \left|\left|x-\sum^n_{k=1}\alpha_k e_k\right|\right|^2=\langle x-\sum^n_{k=1}\alpha_k e_k, x - \sum^n_{m=1}\alpha_m e_m \rangle\\
    &=\langle x, x\rangle-\sum_m\langle x, \alpha_m e_m\rangle-\sum_k\langle \alpha_ke_k, x\rangle +\sum_{k,m}\langle \alpha_k e_k, \alpha_m e_m\rangle\\
    &=\langle x, x\rangle-\sum_k\bar\alpha_k\langle x, e_k\rangle -\sum_k\alpha_k\langle e_k, x\rangle +\sum_{k}|\alpha_k|^2\cdot||e_k||^2\\
    &=||x||^2-\sum_k\bar\alpha_kx_k\cdot||e_k||^2-\sum_k\alpha_k\bar x_k\cdot ||e_k||^2 +\sum_{k}|\alpha_k|^2\cdot||e_k||^2\\
    &=||x||^2+\sum_k(-\bar\alpha_k x_k-\alpha_k\bar x_k+|\alpha_k|^2\plusmn|x_k|^2)\cdot ||e_k||^2\\
    &\boxed{|a-b|^2=(a+b)(\bar a - \bar b)=|a|^2-b\bar a - a \bar b+|b|^2}\\
    &=||x||^2+\sum_k(|\alpha_k-x_k|^2-|x_k|^2)\cdot ||e_k||^2\\
    &=||x||^2+\sum_k|\alpha_k-x_k|^2\cdot ||e_k||^2-\sum_k|x_k|^2\cdot||e_k||^2\to\min\\
    &\iff \alpha_k-x_k=0\iff \alpha_k=x_k
\end{align*}$$

:::

## Сходимость ряда Фурье в Банаховом пространстве

:::{prf:theorem} Сходимость ряда Фурье в Банаховом пространстве
:label: banach-convergence-fourier
$V$ --- [банахово пространство](#banach-space) с нормой $||\cdot||=\sqrt{\langle \cdot, \cdot \rangle}$. <br>
$\{e_n\}$ --- система ненулевых ортогональных векторов из $V$ $\implies \forall x\in V$ его [ряд Фурье](#fourier-series) по системе $\{e_k\}$ будет [сходиться по норме](#norm-convergence).
:::

:::{prf:proof}
1. Рассмотрим $\ds\sum_kx_ke_k=\sum_k\frac{\langle x, e_k\rangle}{\langle e_k, e_k\rangle}e_k$. <br>
   По [неравенству Бесселя](#bessel-inequality) $\ds\sum_k\frac{|\langle x, e_k|^2}{\langle e_k, e_k\rangle}\leq ||x||^2$. 

    Сумма данного ряда является монотонной неубывающей числовой последовательностью, ограниченной сверху $\implies$ этот ряд сходится по [теореме Вейерштрасса](#fseries-major-weier).
2. Покажем, что $\ds S_n=\sum^n_{k=1}x_ke_k$ --- [фундаментальная последовательность](#cauchy-sequence):
   
    $$\begin{align*}
       ||S_n-s_m||^2&=||x_{m+1}e_{m+1}+\ldots+x_ne_n||^2\\
       &=||x_{m+1}e_{m+1}||^2+\ldots+||x_ne_n||^2=b_{m+1}+\ldots+b_n\leq \ve^2
    \end{align*}$$

    так как $\ds\sum b_k$ сходится

    $$\begin{align*}
        \forall \ve > 0, \exists N\colon &\forall n > m> N\hookrightarrow b_{m+1}+\ldots + b_n<\ve^2\\
        &\implies||s_n-s_m||^2<\ve^2\implies||s_n-s_m||<\ve\implies s_n
    \end{align*}$$

    [фундаментальная](#cauchy-sequence) в [банаховом пространстве](#banach-space) $V$

    $\ds\implies\exists\lim_{n\to\infty}||s_n-s||=0$ то есть $\ds\exists S=\sum^\infty_{k=1}x_ke_k$
:::
---

title: Лекция 15. Ряды Фурье-1. Введение
date: 2025-11-21
author: Artemis Feidenheimer
description: 
numbering:
  enumerator: 15.%s

---

## Введение из линейной алгебры

$V$ --- линейное векторное пространство над полем $\FF=(\RR, \CC)$

$f_1,\ldots,f_n$ --- векторы или функции, задано $X\in\RR^n$

$\lambda_i\in\FF$

$$\lambda_1 f_1+\ldots+\lambda_n f_n$$

$$f=\sum^\infty_{i=1}\lambda_i f_i,\quad S_n=\sum^n_{i=1}\lambda_i f_i$$

$f$ --- $S_n\to 0$

### Скалярное произведение

:::{prf:definition} Скалярное произведение
:label: dot-product

$\langle \cdot, \cdot \rangle$, заданная на $V$ над $\FF=(\CC, \RR)$, называется {bluehighlight}`скалярным произведением`, если

1. $\langle x, x\rangle\geq 0$, причём $\langle x, x\rangle=0\iff x=0, \forall x\in V$.
2. $\langle x, y\rangle = \overline{\langle y, x \rangle}, \forall x, y\in V$
3. $\forall x, x_1, x_2, y\in V, \alpha \in \FF:$
    
    $\langle \alpha x, y \rangle=\alpha \langle x, y\rangle$
    
    $\langle x, \alpha y \rangle=\overline{\alpha} \langle x, y\rangle$ 

    $\langle x_1+x_2, y\rangle = \langle x_1, y \rangle + \langle x_2, y\rangle, $
:::

### Ортогональность

:::{prf:definition} Ортогональные векторы
:label: orthogonal
$V$ --- векторное пространство над $\FF$ с заданным скалярным произведением $\langle \cdot, \cdot \rangle$, тогда {bluehighlight}`векторы` $x, y\in V$ называются {bluehighlight}`ортогональными`, если $\langle x, y \rangle=0$
:::

:::{prf:definition} Ортогональная система векторов
:label: orthogonal-system
$V$ --- векторное пространство над $\FF$ с заданным скалярным произведением $\langle \cdot, \cdot \rangle$, $\{e_k\}$ --- {bluehighlight}`система векторов` из $V$ называется {bluehighlight}`ортогональной`, если $\forall e_i, e_j\in\{e_k\}$, скалярное произведение $\langle e_i, e_j\rangle=0$ при $i\neq j$.
:::

### Ортонормированность

:::{prf:definition} Ортонормированная система векторов
:label: orthonormal-system
$V$ --- векторное пространство над $\FF$ с заданным скалярным произведением $\langle \cdot, \cdot \rangle$, $\{e_k\}$ --- система векторов в $V$ называется ортонормированной (ОНС) системой векторов, если $\forall e_i, e_j \in \{e_k\}$\colon

$$\langle e_i, e_j\rangle = \delta_{ij}=\left[\begin{gathered}0, i\neq j\\ 1, i=j\end{gathered}\right.$$

:::

### Линейная независимость

:::{prf:definition} Линейная независимость конечной системы векторов
:label: linearly-dependent-end
{bluehighlight}`Конечная` система векторов $\{e_k\}_{k=1}^n$ называется {bluehighlight}`линейно независимой`, если равенство 

$$\lambda_1e_1+\ldots + \lambda_ne_n=0$$

только в случае $\lambda_1=\ldots=\lambda_n=0, \lambda_i\in\FF$.
:::

:::{prf:definition} Линейная независимость в общем виде
:label: linearly-dependent
{bluehighlight}`Произвольная` система векторов $\{e_k\}$ из $V$ называется {bluehighlight}`линейно независимой`, если линейно независима каждая её конечная подсистема.
:::

:::{prf:example}
$V$ --- векторное пространство функций: 

$\forall f\in V$ верно $f\colon D\in \RR^n\mapsto \RR$, $f\in\riemann(\fset), |f|^2\in\riemann(\fset)$. Зададим 

$$\langle f, g\rangle=\int\limits_\fset f\cdot g \d x$$

---

$$0\leq|f \cdot g|\leq \frac{1}{2}|f|^2+\frac{1}{2}$$

$$\fset=[-\pi, \pi],\quad \langle f, g \rangle= \int\limits^\pi_{-\pi}f\cdot g \d x$$

$\{1,\sin nx, \cos nx\}_{n\in\NN}$ --- ортогональная система.

---

$$\begin{align*}\int\limits_{-\pi}^\pi \cos nx \cdot \cos mx \d x &=\left[\begin{align*}
    &0, &&m \neq n\\
    &\pi, &&m=n\neq 0\\
    &2\pi, &&m=n=0
\end{align*}\right.\\
\int\limits_{-\pi}^\pi\cos nx \cdot \sin mx \d x&=0\\
\int\limits_{-\pi}^\pi\sin nx\cdot \sin m x \d x &=\left[\begin{align*}
    &0, &&m\neq n\\
    &\pi, &&m=n\neq 0
\end{align*}\right.\end{align*}$$

:::

::::{aside}
:::{card}
$$0\leq (a-b)^2=a^2-2ab+b^2\implies ab \leq \frac{1}{2}(a^2+b^2)$$
:::
::::

### Ортогонализация Грама-Шмидта

:::{prf:algorithm} Алгоритм ортогонализации Грама-Шмидта
:label: gram-schmidt
Пусть $a_1, a_2, \ldots$ --- система линейно независимых векторов.

$$\begin{align*}
    b_1&=a_1\\
    b_2&=a_2-\frac{(a_2, b_1)}{(b_1, b_1)} b_1\\
    &\ \vdots\\
    b_k&=a_k-\sum^{k-1}_{i=1}\frac{(a_k, b_i)}{(b_1, b_1)} b_i
\end{align*}$$

$b_1,\ldots,b_k,\ldots$ --- ортогональная система

$c_i=\frac{b_1}{||b_o||}$, $c_1,\ldots, c_n,\ldots$ --- ортонормированная система векторов.
:::

### Непрерывность скалярного произведения

:::{prf:theorem} О непрерывности скалярного произведения
:label: continuity-dot-product
Пусть $\langle \cdot, \cdot \rangle\colon V\times V\mapsto \CC$ --- скалярное произведение на $V$ над $\CC$. Тогда

1. $f(x,y)=\langle x, y\rangle$ --- непрерывна по совокупности переменных.
2. Если $\displaystyle x=\sum^\infty_{i=1}x_i$, то $\displaystyle\langle x, y\rangle=\sum^\infty_{i=1}\langle x_i, y\rangle$.
3. Если $\{e_i\}^\infty_{i=1}$ --- ортонормированная система векторов $V$ и $\displaystyle\lambda=\sum^\infty_{i=1}x_i e_i$ и $\displaystyle y=\sum^\infty_{j=1} y_j e_j$, то $\langle x, y\rangle=\displaystyle \sum^\infty_{i=1}x_i \bar y_i$
:::

:::{prf:proof}
1. $$x\in V\mapsto x_0\in V, \forall \ve >0, \exists \delta=\ve\colon \forall x \in \overset\circ\ball_\delta(x_0)\colon ||x-x_0||<\ve, \quad (x_0, y_0)\in V$$

   $$\begin{align*}
   |f(x, y)- f(x_0, y_0)|&=|\underline{\langle x, y \rangle} + \underline{\underline{\langle x_0, y\rangle}} - \underline{\langle x_0, y\rangle} + \langle x, y_0 \rangle - \langle x, y_0 \rangle - \underline{\underline{\langle x_0, y_0 \rangle}} |\\
   &= |\langle x- x_0, y\rangle | + |\langle  x_0, y-y_0\rangle |\\
   &\leq ||x-x_0||^2\cdot ||y||^2 + ||x_0||^2\cdot ||y-y_0||^2\\
   &< \ve^{\frac{1}{2}}\cdot||y||^2+ \cancel{||x_0||^2\cdot \ve^{\frac{1}{2}}}\\
   &=2\ve^{\frac{1}{2}}\underset{\ve^\frac{1}{4}}{\delta}+\ve^{\frac{1}{2}}\cdot||y_0||=2\ve^{\frac{3}{4}}+\ve^\frac{1}{2}\cdot ||y_0||
   \end{align*}$$

    Что будет верно $\forall \ve >0, \exists \delta=\ve^{\frac{1}{4}}\colon \forall(x, y)\in\ball_\delta(x_0, y_0)$
2. $$x=\sum^\infty_{i=1}x_i,\quad S_n=\sum^n_{i=1}x_i$$

    $$\langle x, y \rangle=\left\langle \sum^n_{i=1} x_i, y \right\rangle+\left\langle \sum^\infty_{i=n+1}, y\right\rangle=\sum^n_{i=1}\langle x_i, y\rangle + \langle x - S_n, y\rangle$$

    Это выражение будет $\displaystyle\xrightarrow{n\to\infty}\sum^\infty_{i=1}\left\langle x_i, y\right\rangle + \cancel{\left\langle 0, y \right\rangle}$ при $||x-S_n||\xrightarrow{x\to\infty}0$.

3. $\{e_i\}$ --- ортонормированная система векторов. $\langle e_i, e_j \rangle =\delta_{ij}$.

    $$\begin{align*}
       \langle x, y\rangle&=\sum^n_{i=1}\langle x_i e_i, y\rangle + \left\langle\sum^\infty_{i=n+1}x_ie_i, y\right\rangle\\
       &=\sum^n_{i=1}\sum^n_{j=1}\underbrace{\langle x_ie_i, y_je_j\rangle}_{x_i\bar y_j\underset{\delta_{ij}}{\langle e_i, e_j\rangle}} + \sum^n_{i=1}\left\langle x_ie_i, \sum^\infty_{j=n+1}y_je_j\right\rangle+\left\langle \sum^\infty_{i=n+1}x_i e_i, y \right\rangle\\
       &=\sum^\infty_{i=1} x_i \bar y_i + \langle x, 0\rangle + \langle 0, y \rangle\\
    \end{align*}$$

    $$S_n = \sum^n_{i=1} x_i e_i, \forall \ve > 0, \exists N_1\colon \forall n > N_1, ||S_n-x|| < \ve$$

    $$\tilde S_n=\sum^n_{i=1} y_ie_i, \forall \ve > 0, \exists N_2\colon \forall n > N_2, ||\tilde S_n - y||< \ve$$

    $n > N$, где $N=\max\{N_1, N_2\}$
:::

```{aside}
$$||y||=||y-y_0+y_0||\leq \underbrace{||y-y_0||}_{<\delta} + ||y_0||$$
```

---

## Ряды Фурье

$x=\sum_i x_ie_i$, $\{e_i\}$ --- ортогональная система векторов.

$\langle x, e_j\rangle=x_j\langle e_j, e_j\rangle$

$x_j=\dfrac{\langle x, e_j\rangle}{\langle e_j, e_j\rangle}$

:::{prf:definition} Коэффициенты Фурье
:label: furry-coefficients
Числа $\dfrac{\langle x, e_i\rangle}{\langle e_i, e_i \rangle}$ называются {bluehighlight}`коэффициентами Фурье` вектора $x\in V$ в ортогональной системе $\{e_i\}$. Если $\{e_i\}$ --- ортонормированная система, то коэффициенты Фурье для $x\colon \{\langle x, e_i\rangle\}$
:::

:::{prf:definition} Ряд Фурье
:label: fourier-series
$V$ --- линейное пространство со скалярным произведением $\langle \cdot,\cdot \rangle$ и $\{e_i\}$ --- ненулевая ортогональная система векторов $V$, то любому $x\in V$ можно сопоставить ряд 

$$x\sim \sum^\infty_{i=1}\frac{\langle x, e_i \rangle}{\langle e_i, e_i\rangle}e_i$$

который будем называть {bluehighlight}`рядом Фурье` вектора $x$ в ортогональной системе векторов $\{e_i\}$.
:::
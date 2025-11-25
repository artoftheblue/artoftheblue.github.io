---

title: Лекция 15. Ряды Фурье
date: 2025-11-25
author: Artemis Feidenheimer
description: 
numbering:
  enumerator: 15.%s

---

:::{prf:theorem} Теорема Пифагора
1. $\{x_i\}$ --- ортогональная система векторов $(x_i\neq 0)$
$$x=\sum_i x_i\implies ||x||^2=\sum_{i}||x_i||^2$$
1. $\{e_i\}$ --- ортонормированная система векторов $(e_i\neq 0)$

$$x=\sum_i\alpha_ie_i\implies||x||^2=\sum_i|\alpha_i|^2$$
:::

:::{prf:proof}
:nonumber:
1. $$\begin{align*}
    ||x||^2=\langle x, x\rangle&=\left\langle\sum_{i}x_i,\sum_jx_j\right\rangle=\sum_i\left\langle x_i,\sum_jx_j\right\rangle\\&=\sum_{i,j}\left\langle x_i, x_j\right\rangle=\sum_i||x_i||^2
    \end{align*}$$
2. $$||x||^2=\sum_i||\alpha_ie_i||^2=\sum_i|\alpha_i|^2\cdot||e_i||^2=\sum_i|\alpha_i|^2$$
:::

---

$V$ --- линейное пространство с нормой $||x||=\sqrt{\langle x, x\rangle}, \forall x\in V$

:::{prf:definition} Фундаментальная последовательность
Последовательность $\{x_n\}^\infty_{n=1}\subset V$ будем называть {bluehighlight}`фундаментальной` последовательностью (последовательностью {bluehighlight}`Коши`), если 

$$\forall \ve > 0, \exists N\colon \forall m, n > N\hookrightarrow ||x_m-x_n||<\ve$$
:::

:::{prf:definition} Сходимость и предел по норме
Последовательность $\{x_n\}_{n=1}^\infty\subset V$ {bluehighlight}`сходится по норме` к $x\in V$ и будем говорить, что $x$ является {bluehighlight}`пределом` $\{x_n\}$, если 

$$\lim_{n\to \infty}||x_n-x||=0 \iff \forall \ve > 0, \exists N \colon \forall n > N \hookrightarrow ||x_n-x|| < \ve$$
:::

:::{prf:definition} Нормированное линейное пространство
{bluehighlight}`Нормированным линейным пространством` называется линейное пространство, на котором определена норма.
:::

:::{prf:definition} Полное нормированное пространство
Нормированное пространство $V$ будем называть {bluehighlight}`полным`, если каждая фундаментальная последовательность на нём сходится по норме.
:::

:::{prf:definition} Банахово пространство
{bluehighlight}`Банахово пространство` --- полное нормированное пространство.
:::

:::{prf:example}
Введём такую норму: $(\RR\setminus\{0\}, ||\cdot||)$. Тогда приведём пример, когда последовательность не сходится к элементу в пространстве: $x_n=\dfrac{1}{n}\to 0 \notin \RR \setminus \{0\}$.
:::

:::{prf:theorem} О перпендикуляре
$\{e_k\}$ --- не более, чем счётная система ненулевых взаимно ортогональных векторов в линейном пространстве $V$ с $\langle \cdot, \cdot \rangle$.

Пусть ряд Фурье вектора $x\in V$ по $e_k$ сходится к вектору $\tilde x\in V$

$$\tilde x=\sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k$$

Тогда $y \perp \tilde x $ и $y\perp \langle \{e_k\}\rangle$, где $x=\tilde x + y$.
:::

:::{prf:proof}
:nonumber:
$\langle e_i, e_j\rangle = 0$ при $i\neq j$:

$\boxed{y=x-\tilde x}$

1. $$\begin{align*}\langle x, \tilde x \rangle &= \langle x - \tilde x, \tilde x \rangle=\langle x, \tilde x \rangle - \langle \tilde x , \tilde x \rangle =\\
   &=\langle x, \sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k \rangle-\langle \sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k, \sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k \rangle\\
   &=\sum_k\frac{\overline{\langle x, e_k \rangle}}{\langle e_k, e_k\rangle}\cdot\langle x, e_k\rangle-\sum_k\frac{|\langle x, e_k \rangle|^2}{\langle e_k, e_k\rangle}\cdot \langle e_k, e_k\rangle=0
   \end{align*}$$
2. $$\langle y, \sum_k \alpha_ke_k\rangle=\sum_k\langle y, \alpha_k, e_k\rangle=\sum_k\bar \alpha_k\langle y, e_k\rangle=0$$

    Рассмотрим 
    
    $$\begin{align*}
        \langle y, e_k\rangle&=\langle x - \tilde x, e_k\rangle=\langle x, e_k\rangle - \langle \tilde x, e_k \rangle \\
        &= \langle x, e_k\rangle-\langle \sum_k\frac{\langle x, e_i \rangle}{\langle e_i, e_i\rangle}e_i, e_k\rangle=\langle x, e_k\rangle - \langle x, e_k\rangle=0
    \end{align*}$$
:::

:::{prf:theorem} Неравенство Бесселя
$\{e_k\}$ --- не более, чем счётная, ортогональная ненулевая система векторов из $V\subset ||\cdot||=\sqrt{\langle \cdot, \cdot \rangle}$ и $\forall x\in V, \exists \tilde x =\sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k$ --- ряд Фурье, сходящийся к $\tilde x$ по норме $\implies \sum_k\frac{|\langle x, e_k\rangle|^2}{\langle e_k, e_k\rangle}\leq ||x||^2$ в ортонормированной системе векторов $\sum_k|\langle x, e_k\rangle|^2\leq ||x||^2$.
:::

:::{prf:proof}
:nonumber:

$x=\tilde x + y \implies$ по теореме Пифагора $$||x||^2=||\tilde x||^2+||y||^2\implies ||x||^2\geq ||\tilde x||^2$$


$$\begin{align*}
   ||\tilde x||^2&=\left|\left|\sum_k\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k\right|\right|^2=\sum_k\left|\left|\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}e_k\right|\right|^2\\
   &=\sum_k\left|\frac{\langle x, e_k \rangle}{\langle e_k, e_k\rangle}\right|^2\langle e_k, e_k\rangle=\sum_k\frac{|\langle x, e_k \rangle|^2}{\langle e_k, e_k\rangle}
\end{align*}$$
:::

:::{prf:theorem} Экстремальное свойство коэффициентов Фурье
$\{e_k\}$ --- ортогональная система ненулевых векторов в линейном пространстве $V$ с $||\cdot||=\sqrt{\langle \cdot, \cdot\rangle}$. Если $\forall x \in V,\forall n, \exists \tilde x_k=\sum^n_{k=1}\frac{\langle x, e_k\rangle}{\langle e_k, e_k\rangle}e_k$, то произвольный вектор линейного пространстве лучше всего приближается $n$-ой частичной суммой ряда Фурье:

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

:::{prf:theorem} Сходимость ряда Фурье в Банаховом пространстве

$V$ --- банахово пространство с нормой $||\cdot||=\sqrt{\langle \cdot, \cdot \rangle}$. $\{e_n\}$ --- система ненулевых ортогональных векторов из $V$ $\implies \forall x\in V$ его ряд Фурье по системе $\{e_k\}$  будет сходиться по норме.
:::

:::{prf:proof}
1. Рассмотрим $\sum_kx_ke_k=\sum_k\frac{\langle x, e_k\rangle}{\langle e_k, e_k\rangle}e_k$. По неравенству Бесселя $\sum_k\frac{|\langle x, e_k|^2}{\langle e_k, e_k\rangle}\leq ||x||^2$. 

    Сумма данного ряда является монотонной неубывающей числовой последовательностью, ограниченной сверху, $\implies$ этот ряд сходится по теореме Вейерштрасса.
2. Покажем, что $S_n=\sum^n_{k=1}x_ke_k$ --- фундаментальная последовательность:
   
    $$\begin{align*}
       ||S_n-s_m||^2&=||x_{m+1}e_{m+1}+\ldots+x_ne_n||^2\\
       &=||x_{m+1}e_{m+1}||^2+\ldots+||x_ne_n||^2=b_{m+1}+\ldots+b_n\leq \ve^2
    \end{align*}$$

    так как $\sum b_k$ сходится

    $$
        \forall \ve > 0, \exists N\colon \forall n > m> N\hookrightarrow\\ b_{m+1}+\ldots + b_n<\ve^2\implies||s_n-s_m||^2<\ve^2\implies||s_n-s_m||<\ve\implies s_n
    $$

    фундаментальная в банаховом пространстве $V$

    $\displaystyle\implies\exists\lim_{n\to\infty}||s_n-s||=0$ то есть $\displaystyle\exists S=\sum^\infty_{k=1}x_ke_k$
:::
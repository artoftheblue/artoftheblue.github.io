---

title: Лекция 12. Функциональные ряды-2. Степенные ряды-1
date: 2025-10-23
description: Признак Абеля. Теорема о почленном переходе к пределу. Теорема о непрерывности равномерно сходящегося ряда. Теорема о почленном интегрировании. Теорема о почленном дифференцировании. Степенные ряды. Радикальный признак Коши. Теорема Коши-Адамара
numbering:
  enumerator: 12.%s

---

## Функциональные ряды—2. Степенные ряды—1

### Теорема о почленном переходе к пределу

Пусть имеется $\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &x_0\text{ — предельная точка } D\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &\forall n\in\mathbb{N}\ \exists\lim\limits_{x\to x_0}a_n(x)=b_n
\end{aligned}\right\}\Longrightarrow\begin{aligned}
    &\sum_{n=1}^{\infty}b_n(x) - \text{сходится}\\
    &\sum_{n=1}^{\infty}b_n(x)=\lim\limits_{x\to x_0}\sum_{n=1}^{\infty}a_n(x)
\end{aligned}$

Для теоремы о переходе к пределу в последовательностях у нас было три условия

$
\begin{cases}
        x_0\text{ — предельная т.}D\\
        f_n(x)\overset{D}{\rightrightarrows}f(x)\\
        \forall n\in\mathbb{N}\ \exists \lim\limits_{x\to x_0}f_n(x)=c_n
    \end{cases}
$$

Так как $\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}$, то $S_k(x)=\sum_{n=1}^{\infty}a_n(x)$ и $S_k(x)\overset{D}{\rightrightarrows}$

Покажем, что $\forall k\in\mathbb{N}\ \exists \lim\limits_{x\to x_0}S_k(x):$

$
\begin{aligned}
        \lim\limits_{x\to x_0}S_k(x)&=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{k}a_n(x)\right)\\
        &=\sum_{n=1}^k\left(\lim\limits_{x\to x_1}a_n(x)\right)\\
        &=\sum_{n=1}^kb_n\\
        &=B_k
    \end{aligned}
$$

Значит, выполняется третье условие для последовательностей

Таким образом, по теореме о почленном переходе к пределу в функциональных последовательностях:

$
\sum_{k=1}^{\infty} B_k=\lim\limits_{k\to\infty}\left(\lim\limits_{x\to x_0}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\lim\limits_{k\to\infty}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{\infty}a_n(x)\right)
$$

### Теорема о непрерывности равномерно сходящегося ряда

$\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &a_n(x)\in C(D)
\end{aligned}\right\}\Longrightarrow S(x)=\sum_{n=1}^{\infty}$

*   $S_k(x)\overset{D}{\rightrightarrows}$, где $S_k(x)=\sum_{n=1}^{k}a_n(x)$

*   $S_k(x)\in C(D)$ как конечная сумма непрерывных функций на $D$

Тогда, $S(x)\in C(D)$ по теореме о непрерывности предельной функции

### Теорема о почленном интегрировании

$\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{[a;b]}{\rightrightarrows}\\
    &\forall n\in\mathbb{N} a_n(x)\in\riman{[a;b]}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &S(x)\sum_{n=1}^{\infty}a_n(x)\in\riman{[a;b]}\\
    &\int\limits_{a}^bS(x)\d{x}=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
\end{aligned}$

$S_k(x)=\sum_{n=1}^{\infty}a_n(x)$, $\forall a_n(x)\in\riman{[a;b]}\Longrightarrow S_k(x)\in\riman{[a;b]}$ как сумма конечного числа интегральных функций

Тогда, выполняется теорема о почленном интегрировании функциональных последовательностей:

$
\exists S(x):\boxed{\begin{aligned}
        &S_k(x)\overset{[a;b]}{\rightrightarrows}S(x)\\
        &S_k(x)\in\riman{[a;b]}
    \end{aligned}}\Longrightarrow\begin{aligned}
        \int\limits_{a}^bS(x)\d{x}&=\int\limits_a^b\lim\limits_{k\to\infty}S_k(x)\d{x}\\
        &=\lim\limits_{k\to\infty}\int\limits_a^b\sum_{n=1}^ka_n(x)\\
        &=\lim\limits_{k\to\infty}\sum_{n=1}^{k}\int\limits_{a}^ba_n(x)\d{x}\\
        &=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
    \end{aligned}
$$

### Теорема о почленном дифференцировании

$\left.\begin{aligned}
    &a_n(x):[a;b]\to\mathbb{R}\\
    &a_n(x)\in D[a;b]\\
    &\exists c\in[a;b]:\sum_{n=1}^{\infty}a_n(x)\text{ — сходится}\\
    &\sum_{n=1}^{\infty}a^{\prime}_n(x)\overset{[a;b]}{\rightrightarrows}\\
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\exists S(x):\sum_{n=1}^{\infty}a_n(x)\overset{[a;b]}{\rightrightarrows}S(x)\\
    &S^{\prime}(x)=\sum_{n=1}^{\infty}a^{\prime}_n(x)
\end{aligned}$

$S_k(x)=\sum_{n=1}^{k}a_n(x)$, тогда $\exists \lim\limits_{k\to\infty}S_k(c)$; $S_k(x)\in D[a;b]$; $S^{\prime}_k\overset{[a;b]}{\rightrightarrows}$

Значит, условие теоремы о почленном дифференцировании функциональных последовательностей выполнено

### Степенные ряды

Функциональный ряд вида $\sum_{n=1}^{\infty}a_n(x-x_0)^n$ будем называть степенным рядом

*   $x_0$ — центр степенного ряда

*   $a_n$ — коэффициенты степенного ряда

При $x=x_0$ степенной ряд сходится

### Радикальный признак Коши

Пусть $a_n\geqslant 0, \varlimsup\limits_{n\to\infty}\sqrt[n]{a}=q$, тогда степенной ряд $\sum_{n=1}^{\infty}a_n$ сходится при $q<1$, и расходится при $q>1$

### Теорема Коши-Адамара

$\sum_{n=1}^{\infty}a_n(x-x_0)^n,R=[0;+\infty)$. Пусть $\frac{1}{R}=\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}$

Тогда, $\sum_{n=1}^{\infty}a_n(x-x_0)^n$ сходится $\forall x:\ |x-x_0|<R$ и расходится $\forall x:\ |x-x_0|>R$

Зафиксируем $x\in\mathbb{R}$

Рассмотрим

$
\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n(x-x_0)^n|}=\left(\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}\right)\cdot|x-x_0|=\frac{|x-x_0|}{R}
$$

Получаем, что для любого фиксированного $x\in(x_0-R;x_0+R):\frac{|x-x_0|}{R}<1\Longrightarrow$ числовой ряд

$
\sum_{n=1}^{\infty}|a_n(x-x_0)^n|
$$

сходится по радикальному признаку Коши, а значит $\sum_{n=1}^{\infty}a_n(x-x_0)^n$ — сходится абсолютно

Далее, для любого фиксированного $(-\infty;x_0-R)\cup(x_0+R;+\infty):\frac{|x-x_0|}{R}>1\Longrightarrow \varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n(x-x_0)^n|}>1$ и не выполняется необходимое условие сходимости числового ряда, так как

$
\exists N\forall n>N:\sqrt[n]{|a_n(x-x_0)^n|}>1\Longrightarrow |a_n(x-x_0)|>1\not\longrightarrow0
$$

Значит, оба ряда $\sum_{n=0}^{\infty}|a_n(x-x_0)^n|$ и $\sum_{n=0}^{\infty}a_n(x-x_0)^n$ — расходятся

$R$ будем называть радиусом сходимости степенного ряда

$(x_0-R;x_0+R)$ — интервал сходимости степенного ряда
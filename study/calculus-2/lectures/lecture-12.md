---

title: Лекция 12. Функциональные ряды-2. Степенные ряды-1
date: 2025-10-23
description: Признак Абеля. Теорема о почленном переходе к пределу. Теорема о непрерывности равномерно сходящегося ряда. Теорема о почленном интегрировании. Теорема о почленном дифференцировании. Степенные ряды. Радикальный признак Коши. Теорема Коши-Адамара
numbering:
  enumerator: 12.%s

---

## Функциональные ряды—2. Степенные ряды—1

### Теорема о почленном переходе к пределу

```{prf:theorem} Теорема о почленном переходе к пределу
$$\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &x_0\text{ — предельная точка } D\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\uniconverges}\\
    &\forall n\in\mathbb{N}, \exists\lim\limits_{x\to x_0}a_n(x)=b_n
\end{aligned}\right\}\Longrightarrow\begin{aligned}
    &\sum_{n=1}^{\infty}b_n(x) - \text{сходится}\\
    &\sum_{n=1}^{\infty}b_n(x)=\lim\limits_{x\to x_0}\sum_{n=1}^{\infty}a_n(x)
\end{aligned}$$
```

```{prf:proof}
:nonumber:
В теореме о почленном переходе к пределу *в последовательностях* у нас было три условия:

$$
\left.\begin{aligned}
        x_0\text{ — предельная т.}D\\
        f_n(x)\overset{D}{\uniconverges}f(x)\\
        \forall n\in\mathbb{N},\exists \lim\limits_{x\to x_0}f_n(x)=c_n
    \end{aligned}\right\}\implies \lim_{n\to\infty}\underbrace{\left(\lim_{x\to x_0} f_n(x)\right)}_{c_n}=\lim_{x\to x_0}\underbrace{\left(\lim_{n\to\infty}f_n(x)\right)}_{f(x)}
$$

Так как $\displaystyle\sum_{n=1}^{\infty}a_n(x)\overset{D}{\uniconverges}$, то $\displaystyle S_k(x)=\sum_{n=1}^{\infty}a_n(x)$ и $S_k(x)\overset{D}{\uniconverges}$

Покажем, что $\forall k\in\mathbb{N}, \exists \lim\limits_{x\to x_0}S_k(x)$:

$$
\begin{aligned}
        \lim\limits_{x\to x_0}S_k(x)&=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{k}a_n(x)\right)\\
        &=\sum_{n=1}^k\left(\lim\limits_{x\to x_0}a_n(x)\right)\\
        &=\sum_{n=1}^kb_n=B_k
    \end{aligned}
$$

Имеем, что оба условия теоремы о почленном переходе к пределу для функциональных последовательностей выполняются для $S_k$. Также выполняется третье условие для последовательностей:

$$
\lim_{k\to\infty} B_k=\lim\limits_{k\to\infty}\left(\lim\limits_{x\to x_0}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\lim\limits_{k\to\infty}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{\infty}a_n(x)\right)
$$
```

### Теорема о непрерывности равномерно сходящегося ряда

```{prf:theorem} Теорема о непрерывности равномерно сходящегося ряда 
$$\left.\begin{aligned}
    &a_n(x)\colon \dop\mapsto\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{\dop}{\uniconverges}S(x)\\
    &a_n(x)\in \contclass(\dop)
\end{aligned}\right\}\Longrightarrow S(x)=\sum_{n=1}^{\infty}a_n(x)\in\contclass(\dop)$$
```

```{prf:proof}
:nonumber:
1. $S_k(x)\overset{\fset}{\uniconverges}$, где $\displaystyle S_k(x)=\sum_{n=1}^{k}a_n(x)$
2. $S_k(x)\in \contclass(\fset)$ как линейная комбинация конечного числа непрерывных функций на $\fset$.

Тогда, $S(x)=\displaystyle\sum^\infty_{n=1}a_n(x)\in \contclass(\fset)$ по теореме о непрерывности предельной функции 
```

### Теорема о почленном интегрировании функционального ряда

```{prf:theorem} Теорема о почленном интегрировании функционального ряда
$$\left.\begin{aligned}
    &a_n(x)\colon\fset\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{[a,b]}{\uniconverges}\\
    &\forall n\in\mathbb{N} a_n(x)\in\riemann{[a,b]}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &S(x)\sum_{n=1}^{\infty}a_n(x)\in\riemann{[a,b]}\\
    &\int\limits_{a}^bS(x)\d{x}=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
\end{aligned}$$
```

```{prf:proof}
$S_k(x)=\sum_{n=1}^{\infty}a_n(x)$, $\forall a_n(x)\in\riemann{[a,b]}\Longrightarrow S_k(x)\in\riemann{[a,b]}$ как сумма конечного числа интегральных функций

Тогда, выполняется теорема о почленном интегрировании функциональных последовательностей:

$
\exists S(x):\boxed{\begin{aligned}
        &S_k(x)\overset{[a,b]}{\uniconverges}S(x)\\
        &S_k(x)\in\riemann{[a,b]}
    \end{aligned}}\Longrightarrow\begin{aligned}
        \int\limits_{a}^bS(x)\d{x}&=\int\limits_a^b\lim\limits_{k\to\infty}S_k(x)\d{x}\\
        &=\lim\limits_{k\to\infty}\int\limits_a^b\sum_{n=1}^ka_n(x)\\
        &=\lim\limits_{k\to\infty}\sum_{n=1}^{k}\int\limits_{a}^ba_n(x)\d{x}\\
        &=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
    \end{aligned}
$$

### Теорема о почленном дифференцировании

$\left.\begin{aligned}
    &a_n(x):[a,b]\to\mathbb{R}\\
    &a_n(x)\in D[a,b]\\
    &\exists c\in[a,b]:\sum_{n=1}^{\infty}a_n(x)\text{ — сходится}\\
    &\sum_{n=1}^{\infty}a^{\prime}_n(x)\overset{[a,b]}{\uniconverges}\\
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\exists S(x):\sum_{n=1}^{\infty}a_n(x)\overset{[a,b]}{\uniconverges}S(x)\\
    &S^{\prime}(x)=\sum_{n=1}^{\infty}a^{\prime}_n(x)
\end{aligned}$

$S_k(x)=\sum_{n=1}^{k}a_n(x)$, тогда $\exists \lim\limits_{k\to\infty}S_k(c)$; $S_k(x)\in D[a,b]$; $S^{\prime}_k\overset{[a,b]}{\uniconverges}$

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
---

title: Лекция 12. Функциональные ряды-2. Степенные ряды-1
date: 2025-10-23
description: Признак Абеля. Теорема о почленном переходе к пределу. Теорема о непрерывности равномерно сходящегося ряда. Теорема о почленном интегрировании. Теорема о почленном дифференцировании. Степенные ряды. Радикальный признак Коши. Теорема Коши-Адамара
numbering:
  enumerator: 12.%s

---

## Функциональные ряды—2. Степенные ряды—1

### Признак Абеля

Пусть {math}`\left.\begin{aligned}
    &a_n,b_n:D\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &\{b_n(x)\}_{n=1}^{\infty}\text{ — монотонна на }D\\
    &\exists c>0:\ \forall n>\mathbb{N},\forall x\in D\ |b_n(x)|\leqslant c
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)b_n(x)\overset{D}{\rightrightarrows}`

Обозначим {math}`\alpha_k^m(x)=A_k(x)-A_m(x)=\sum_{n=m+1}^{k}a_n(x)\Longrightarrow \alpha_m^m=0`

Получаем, что {math}`a_n(x)=\alpha_n^m(x)-\alpha_{n-1}^{m}(x)`

Рассмотрим {math}`\left|\sum_{n=m+1}^{k} a_n(x)b_n(x)\right|`:

```{math}
\begin{aligned}
        \left|\sum_{n=m+1}^{k} a_n(x)b_n(x)\right|&=\left|\sum_{n=m+1}^{k}(\alpha_n^m(x)-\alpha_{n-1}^{m}(x))b_n(x)\right|\\
        &\leqslant |\alpha_{k}^m(x)b_k(x)|+|\alpha_{m}^m(x)b_{m+1}(x)|+\left|\sum_{n=m+1}^{k-1}\alpha_{n}^m(x)(b_n(x)-b_{n+1}(x))\right|\\
        &\leqslant |\alpha_{k}^m(x)|\cdot|b_k(x)|+\left|\sum_{n=m+1}^{k-1}\alpha_{n}^m(x)(b_n(x)-b_{n+1}(x))\right|\\
        &<\frac{\ve}{3c}\cdot c+\frac{\ve}{3c}\cdot|b_{m+1}(x)-b_k(x)|\\
        &<3c\cdot\frac{\ve}{3c}
    \end{aligned}
```

*   {math}`\{b_n(x)\}_{n=1}^{\infty}` — монотонна на {math}`D\Longrightarrow b_n(x)-b_{n+1}(x)` одного знака {math}`\forall n`

*   {math}`|b_n(x)|\leqslant c\ \forall x\in D\ \forall n\in\mathbb{N}`

*   {math}`\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\quad \forall\ve>0\ \exists N:\ \forall k>m>N:\ |\alpha_k^m(x)|<\frac{\ve}{3}`

Значит, {math}`\forall\ve>0\ \exists N:\ \forall k>m>N\ \forall x\in D\hookrightarrow\left|\sum_{n=m+1}^{k}a_m(x)b_n(x)\right|<\ve`, следовательно ряд сходится равномерно на {math}`D` по критерию Коши

### Теорема о почленном переходе к пределу

Пусть имеется {math}`\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &x_0\text{ — предельная точка } D\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &\forall n\in\mathbb{N}\ \exists\lim\limits_{x\to x_0}a_n(x)=b_n
\end{aligned}\right\}\Longrightarrow\begin{aligned}
    &\sum_{n=1}^{\infty}b_n(x) - \text{сходится}\\
    &\sum_{n=1}^{\infty}b_n(x)=\lim\limits_{x\to x_0}\sum_{n=1}^{\infty}a_n(x)
\end{aligned}`

Для теоремы о переходе к пределу в последовательностях у нас было три условия

```{math}
\begin{cases}
        x_0\text{ — предельная т.}D\\
        f_n(x)\overset{D}{\rightrightarrows}f(x)\\
        \forall n\in\mathbb{N}\ \exists \lim\limits_{x\to x_0}f_n(x)=c_n
    \end{cases}
```

Так как {math}`\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}`, то {math}`S_k(x)=\sum_{n=1}^{\infty}a_n(x)` и {math}`S_k(x)\overset{D}{\rightrightarrows}`

Покажем, что {math}`\forall k\in\mathbb{N}\ \exists \lim\limits_{x\to x_0}S_k(x):`

```{math}
\begin{aligned}
        \lim\limits_{x\to x_0}S_k(x)&=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{k}a_n(x)\right)\\
        &=\sum_{n=1}^k\left(\lim\limits_{x\to x_1}a_n(x)\right)\\
        &=\sum_{n=1}^kb_n\\
        &=B_k
    \end{aligned}
```

Значит, выполняется третье условие для последовательностей

Таким образом, по теореме о почленном переходе к пределу в функциональных последовательностях:

```{math}
\sum_{k=1}^{\infty} B_k=\lim\limits_{k\to\infty}\left(\lim\limits_{x\to x_0}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\lim\limits_{k\to\infty}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{\infty}a_n(x)\right)
```

### Теорема о непрерывности равномерно сходящегося ряда

{math}`\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &a_n(x)\in C(D)
\end{aligned}\right\}\Longrightarrow S(x)=\sum_{n=1}^{\infty}`

*   {math}`S_k(x)\overset{D}{\rightrightarrows}`, где {math}`S_k(x)=\sum_{n=1}^{k}a_n(x)`

*   {math}`S_k(x)\in C(D)` как конечная сумма непрерывных функций на {math}`D`

Тогда, {math}`S(x)\in C(D)` по теореме о непрерывности предельной функции

### Теорема о почленном интегрировании

{math}`\left.\begin{aligned}
    &a_n(x):D\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{[a;b]}{\rightrightarrows}\\
    &\forall n\in\mathbb{N} a_n(x)\in\riman{[a;b]}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &S(x)\sum_{n=1}^{\infty}a_n(x)\in\riman{[a;b]}\\
    &\int\limits_{a}^bS(x)\d{x}=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
\end{aligned}`

{math}`S_k(x)=\sum_{n=1}^{\infty}a_n(x)`, {math}`\forall a_n(x)\in\riman{[a;b]}\Longrightarrow S_k(x)\in\riman{[a;b]}` как сумма конечного числа интегральных функций

Тогда, выполняется теорема о почленном интегрировании функциональных последовательностей:

```{math}
\exists S(x):\boxed{\begin{aligned}
        &S_k(x)\overset{[a;b]}{\rightrightarrows}S(x)\\
        &S_k(x)\in\riman{[a;b]}
    \end{aligned}}\Longrightarrow\begin{aligned}
        \int\limits_{a}^bS(x)\d{x}&=\int\limits_a^b\lim\limits_{k\to\infty}S_k(x)\d{x}\\
        &=\lim\limits_{k\to\infty}\int\limits_a^b\sum_{n=1}^ka_n(x)\\
        &=\lim\limits_{k\to\infty}\sum_{n=1}^{k}\int\limits_{a}^ba_n(x)\d{x}\\
        &=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
    \end{aligned}
```

### Теорема о почленном дифференцировании

{math}`\left.\begin{aligned}
    &a_n(x):[a;b]\to\mathbb{R}\\
    &a_n(x)\in D[a;b]\\
    &\exists c\in[a;b]:\sum_{n=1}^{\infty}a_n(x)\text{ — сходится}\\
    &\sum_{n=1}^{\infty}a^{\prime}_n(x)\overset{[a;b]}{\rightrightarrows}\\
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\exists S(x):\sum_{n=1}^{\infty}a_n(x)\overset{[a;b]}{\rightrightarrows}S(x)\\
    &S^{\prime}(x)=\sum_{n=1}^{\infty}a^{\prime}_n(x)
\end{aligned}`

{math}`S_k(x)=\sum_{n=1}^{k}a_n(x)`, тогда {math}`\exists \lim\limits_{k\to\infty}S_k(c)`; {math}`S_k(x)\in D[a;b]`; {math}`S^{\prime}_k\overset{[a;b]}{\rightrightarrows}`

Значит, условие теоремы о почленном дифференцировании функциональных последовательностей выполнено

### Степенные ряды

Функциональный ряд вида {math}`\sum_{n=1}^{\infty}a_n(x-x_0)^n` будем называть степенным рядом

*   {math}`x_0` — центр степенного ряда

*   {math}`a_n` — коэффициенты степенного ряда

При {math}`x=x_0` степенной ряд сходится

### Радикальный признак Коши

Пусть {math}`a_n\geqslant 0, \varlimsup\limits_{n\to\infty}\sqrt[n]{a}=q`, тогда степенной ряд {math}`\sum_{n=1}^{\infty}a_n` сходится при {math}`q<1`, и расходится при {math}`q>1`

### Теорема Коши-Адамара

{math}`\sum_{n=1}^{\infty}a_n(x-x_0)^n,R=[0;+\infty)`. Пусть {math}`\frac{1}{R}=\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}`

Тогда, {math}`\sum_{n=1}^{\infty}a_n(x-x_0)^n` сходится {math}`\forall x:\ |x-x_0|<R` и расходится {math}`\forall x:\ |x-x_0|>R`

Зафиксируем {math}`x\in\mathbb{R}`

Рассмотрим

```{math}
\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n(x-x_0)^n|}=\left(\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}\right)\cdot|x-x_0|=\frac{|x-x_0|}{R}
```

Получаем, что для любого фиксированного {math}`x\in(x_0-R;x_0+R):\frac{|x-x_0|}{R}<1\Longrightarrow` числовой ряд

```{math}
\sum_{n=1}^{\infty}|a_n(x-x_0)^n|
```

сходится по радикальному признаку Коши, а значит {math}`\sum_{n=1}^{\infty}a_n(x-x_0)^n` — сходится абсолютно

Далее, для любого фиксированного {math}`(-\infty;x_0-R)\cup(x_0+R;+\infty):\frac{|x-x_0|}{R}>1\Longrightarrow \varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n(x-x_0)^n|}>1` и не выполняется необходимое условие сходимости числового ряда, так как

```{math}
\exists N\forall n>N:\sqrt[n]{|a_n(x-x_0)^n|}>1\Longrightarrow |a_n(x-x_0)|>1\not\longrightarrow0
```

Значит, оба ряда {math}`\sum_{n=0}^{\infty}|a_n(x-x_0)^n|` и {math}`\sum_{n=0}^{\infty}a_n(x-x_0)^n` — расходятся

{math}`R` будем называть радиусом сходимости степенного ряда

{math}`(x_0-R;x_0+R)` — интервал сходимости степенного ряда
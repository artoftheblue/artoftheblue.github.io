---

title: Лекция 13. Функциональные ряды-2. Степенные ряды-1
date: 2025-10-23
description: Признак Абеля. Теорема о почленном переходе к пределу. Теорема о непрерывности равномерно сходящегося ряда. Теорема о почленном интегрировании. Теорема о почленном дифференцировании. Степенные ряды. Радикальный признак Коши. Теорема Коши-Адамара
numbering:
  enumerator: 13.%s

---

## Теорема о почленном переходе к пределу

```{prf:theorem} Теорема о почленном переходе к пределу для функциональных рядов
:label: fseries-itemwise-limit-transform
$$\left.\begin{aligned}
    &a_n(x)\colon \fset\to\RR\\
    &x_0\text{ --- предельная точка } \fset\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges}\\
    &\forall n\in\NN, \exists\lim\limits_{x\to x_0}a_n(x)=b_n
\end{aligned}\right\}\Longrightarrow\begin{aligned}
    &\sum_{n=1}^{\infty}b_n(x) \text{ сходится}\\
    &\sum_{n=1}^{\infty}b_n(x)=\lim\limits_{x\to x_0}\sum_{n=1}^{\infty}a_n(x)
\end{aligned}$$
```

```{prf:proof}
:nonumber:
В [теореме о почленном переходе к пределу *в последовательностях*](#itemwise-transition-to-limit) у нас было три условия:

$$
\left.\begin{aligned}
        &x_0\text{ --- предельная точка }\fset\\
        &f_n(x)\overset{\fset}{\uniconverges}f(x)\\
        &\forall n\in\NN,\exists \lim\limits_{x\to x_0}f_n(x)=c_n
    \end{aligned}\right\}\implies \lim_{n\to\infty}\underbrace{\left(\lim_{x\to x_0} f_n(x)\right)}_{c_n}=\lim_{x\to x_0}\underbrace{\left(\lim_{n\to\infty}f_n(x)\right)}_{f(x)}
$$

Так как $\displaystyle\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges}$, то $\displaystyle S_k(x)=\sum_{n=1}^{\infty}a_n(x)$ и $S_k(x)\overset{\fset}{\uniconverges}$

Покажем, что $\forall k\in\NN, \exists \lim\limits_{x\to x_0}S_k(x)$:

$$
\begin{aligned}
        \lim\limits_{x\to x_0}S_k(x)&=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{k}a_n(x)\right)=\sum_{n=1}^k\left(\lim\limits_{x\to x_0}a_n(x)\right)=\sum_{n=1}^kb_n=B_k
    \end{aligned}
$$

Имеем, что оба условия [теоремы о почленном переходе к пределу для функциональных последовательностей](#itemwise-transition-to-limit) выполняются для $S_k$. Также выполняется и третье условие:

$$
\lim_{k\to\infty} B_k=\lim\limits_{k\to\infty}\left(\lim\limits_{x\to x_0}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\lim\limits_{k\to\infty}S_k(x)\right)=\lim\limits_{x\to x_0}\left(\sum_{n=1}^{\infty}a_n(x)\right)
$$
```

## Теорема о непрерывности равномерно сходящегося функционального ряда

```{prf:theorem} Теорема о непрерывности равномерно сходящегося функционального ряда 
:label: fseries-smooth-uniform
$$\left.\begin{aligned}
    &a_n(x)\colon \dop\mapsto\RR\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{\dop}{\uniconverges}S(x)\\
    &a_n(x)\in \contclass(\dop)
\end{aligned}\right\}\Longrightarrow S(x)=\sum_{n=1}^{\infty}a_n(x)\in\contclass(\dop)$$
```

```{prf:proof}
:nonumber:
1. $S_k(x)\overset{\fset}{\uniconverges}$, где $\displaystyle S_k(x)=\sum_{n=1}^{k}a_n(x)$
2. $S_k(x)\in \contclass(\fset)$ как линейная комбинация конечного числа непрерывных функций на $\fset$.

Тогда, $S(x)=\displaystyle\sum^\infty_{n=1}a_n(x)\in \contclass(\fset)$ [по теореме о непрерывности предельной функции](#continuity-of-limit-function).
```

## Теорема о почленном интегрировании функционального ряда

```{prf:theorem} Теорема о почленном интегрировании функционального ряда
:label: fseries-itemwise-integration
$$\left.\begin{aligned}
    &a_n(x)\colon\fset\to\RR\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{[a,b]}{\uniconverges}\\
    &\forall n\in\NN\colon a_n(x)\in\riemann{[a,b]}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &S(x)=\sum_{n=1}^{\infty}a_n(x)\in\riemann{[a,b]}\\
    &\int\limits_{a}^bS(x)\d{x}=\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
\end{aligned}$$
```

```{prf:proof}
:nonumber:
$\displaystyle S_k(x)=\sum_{n=1}^{k}a_n(x) \in\riemann$ как конечная линейная комбинация функций, интегрируемых на отрезках.

$$\sum^\infty_{n=1} a_n(x)\overset{[a, b)}{\uniconverges}\implies S_n(x)\overset{[a, b]}{\uniconverges} S(x)\implies \exists S(x)=\sum^\infty_{n=1} a_n(x)\in\riemann[a,b]$$

Тогда выполняется [теорема о почленном интегрировании функциональных последовательностей](#itemwise-integration-functional-sequences):

$$
\begin{aligned}
        \int\limits_{a}^bS(x)\d{x}&=\int\limits_a^b\lim\limits_{k\to\infty}S_k(x)\d{x}=\lim\limits_{k\to\infty}\int\limits_a^bS_k(x)\d{x}\\
        &=\lim\limits_{k\to\infty}\int\limits_a^b\sum_{n=1}^ka_n(x)\d{x}
        =\lim\limits_{k\to\infty}\sum_{n=1}^{k}\int\limits_{a}^ba_n(x)\d{x}
        =\sum_{n=1}^{\infty}\int\limits_{a}^ba_n(x)\d{x}
    \end{aligned}
$$
```

## Теорема о почленном дифференцировании функционального ряда

```{prf:theorem} Теорема о почленном дифференцировании функционального ряда
:label: fseries-itemwise-differentiation
$\left.\begin{aligned}
    &a_n(x)\colon [a,b]\mapsto\RR\\
    &a_n(x)\in \fset[a,b]\\
    &\exists c\in[a,b]\colon \sum_{n=1}^{\infty}a_n(x)\text{ --- сходится}\\
    &\sum_{n=1}^{\infty}a^{\prime}_n(x)\overset{[a,b]}{\uniconverges}\\
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\exists S(x)\colon\sum_{n=1}^{\infty}a_n(x)\overset{[a,b]}{\uniconverges}S(x)\\
    &S^{\prime}(x)=\sum_{n=1}^{\infty}a^{\prime}_n(x)
\end{aligned}$
```

```{prf:proof}
:nonumber:
$\displaystyle S_k(x)=\sum_{n=1}^{k}a_n(x)\in\fset[a, b]$ как конечная линейная комбинация на $[a, b)$ функция. $\displaystyle\sum^\infty_{n=1}a_n(c)$ сходится $\implies \exists \lim\limits_{k\to\infty}S_k(c)$.

$\displaystyle\tilde S_k(x)=\sum^k_{n=1}a'_n(x)=S'_k(x)$, так как $\displaystyle\sum^\infty_{n=1}a_n'(x)\overset{[a,b]}{\uniconverges}$, то $S_n'(x)\overset{[a,b]}{\uniconverges}$

$$\exists S(x)\colon S_n(x)\overset{[a,b]}{\uniconverges}S(x)=\sum^\infty_{n=1}a_n(x),\qquad S'(x)=\tilde S(x)=\sum^\infty_{n=1} a_n'(x)$$

Значит, условие [теоремы о почленном дифференцировании функциональных последовательностей](#itemwise-differentiation-functional-sequences) выполнено.
```

```{prf:example}
$$\begin{aligned}
&a_n(x)=1, x\in[a, b]\\
&a_n(x)\in\fset[a,b]\\
&a_n'(x)=0\\
&\sum^\infty_{n=1}a_n'(x)\overset{[a,b]}{\uniconverges}0\\
&\sum^\infty_{n=1}a_n(x) \text{ не сходится }
\end{aligned}$$
```

## Степенные ряды

```{prf:definition} Степенной ряд
:label: exponential-series
Функциональный ряд вида $\displaystyle\sum_{n=0}^{\infty}a_n(x-x_0)^n$ будем называть {bluehighlight}`степенным рядом`.

* $x_0$ --- {bluehighlight}`центр степенного ряда`;
* $a_n$ --- {bluehighlight}`коэффициенты степенного ряда`.

При $x=x_0$ степенной ряд {bluehighlight}`сходится`.
```

```{prf:definition} Радиус и промежуток сходимости степенного ряда
:label: radius-interval-exponential-series
Пусть $\fset=\langle x_0-R, x_0+R\rangle$. Тогда 

* $R$ --- {bluehighlight}`радиус сходимости` степенного ряда;
* $\fset$ --- {bluehighlight}`промежуток сходимости` степенного ряда.  
```

## Радикальный признак Коши сходимости числовых рядов

```{prf:theorem} Радикальный признак Коши сходимости числовых рядов
:label: root-test
$$\begin{aligned}
    &\sum_{n=1}^{\infty}a_n, a_n\geq 0\\
    &\varlimsup\limits_{n\to\infty}\sqrt[n]{a}=\mathfrak{C}
\end{aligned}$$

$\mathfrak{C}$ --- варианта Коши. <br>
Ряд сходится при $\mathfrak{C}<1$, и расходится при $\mathfrak{C}>1$. Сходимость нельзя установить с помощью этого признака, если $\mathfrak{C}=1$.
```

## Теорема Коши-Адамара

```{prf:theorem} Теорема Коши-Адамара
:label: cauchy-adamar-theorem
$$\sum_{n=1}^{\infty}a_n(x-x_0)^n,\fset=[0;+\infty)$$

$$\boxed{\frac{1}{R}=\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}}$$

Тогда $\displaystyle\sum_{n=1}^{\infty}a_n(x-x_0)^n$ сходится $\forall x\colon |x-x_0|<R$ и расходится $\forall x\colon |x-x_0|>R$.
```

```{prf:proof}
:nonumber:
Зафиксируем $x\neq x_0\in\RR$. Применим [радикальный признак Коши для числового ряда](#root-test).

$$
\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n(x-x_0)^n|}=\left(\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}\right)\cdot|x-x_0|=\frac{|x-x_0|}{R}
$$

Для ряда $\displaystyle\sum_{n=1}^{\infty}|a_n(x-x_0)^n|, \forall x\in(x_0-R;x_0+R)\colon$

* $\dfrac{|x-x_0|}{R}<1\implies$ ряд сходится, то есть сходится $\forall x\colon |x-x_0|<R$; 
* $\dfrac{|x-x_0|}{R}>1\implies$ ряд расходится, то есть расходится $\forall x\colon |x-x_0|>R$.

сходится [по радикальному признаку Коши](#root-test), а значит $\sum_{n=1}^{\infty}a_n(x-x_0)^n$ [сходится абсолютно](#fseries-absolute-convergence)

Далее, для любого фиксированного 

$$(-\infty;x_0-R)\cup(x_0+R;+\infty):\frac{|x-x_0|}{R}>1\Longrightarrow \varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n(x-x_0)^n|}>1$$ 

и не выполняется необходимое условие сходимости числового ряда, так как

$$
\exists N,\forall n>N\colon\sqrt[n]{|a_n(x-x_0)^n|}>1\Longrightarrow |a_n(x-x_0)|>1\not\to 0
$$

Значит, оба ряда $\ds\sum_{n=0}^{\infty}|a_n(x-x_0)^n|$ и $\ds\sum_{n=0}^{\infty}a_n(x-x_0)^n$ расходятся.

* $R$ --- [радиус сходимости](#radius-interval-exponential-series) степенного ряда;
* $(x_0-R;x_0+R)$ --- [интервал сходимости](#radius-interval-exponential-series) степенного ряда.

```
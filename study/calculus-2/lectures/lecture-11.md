---

title: Лекция 12. Функциональные ряды-1
date: 2025-10-22
description: Критерий Коши равномерной сходимости функционального ряда. Необходимое условие равномерной сходимости функционального ряда. Признак сравнения. Мажорантный признак Вейерштрасса о равномерной сходимости функционального ряда. Преобразование Абеля. Признак Дирихле
numbering:
  enumerator: 12.%s

---

## Сходимость функциональных рядов

Пусть $\fset\subset\RR$, $f_n, S\colon\fset\to\RR\ (\forall n\in\NN)$, а также $\ds S_k(x)=\sum_{n=1}^{k}f_n(x)$ --- частичные суммы функционального ряда.

```{prf:definition} Поточечная сходимость
:label: fseries-pointwise-convergence
Если $\exists S(x)\colon S_k\overset{\fset}{\longrightarrow}S$, то будем говорить, что функциональный ряд $\ds \sum_{n=1}^{\infty}f_n(x)$ {bluehighlight}`сходится поточечно` к $S(x)$ на $\fset$.
```

```{prf:definition} Равномерная сходимость
:label: fseries-uniform-convergence
Если $\exists S(x)\colon S_k\overset{\fset}{\uniconverges}S$, то будем говорить, что функциональный ряд $\ds \sum_{n=1}^{\infty}f_n(x)$ {bluehighlight}`сходится равномерно` к $S(x)$.
```

## Критерий Коши равномерной сходимости функционального ряда

```{prf:theorem} Критерий Коши равномерной сходимости функционального ряда
:label: fseries-cauchy-convergence
Пусть $f_n\colon \fset\mapsto\RR, \forall n\in\NN$, $\ds\sum_{n=1}^{\infty}f_n(x)\overset{\fset}{\uniconverges}$ тогда и только тогда, когда

$$
\forall \ve>0\ \exists N, \forall m>k>N, \forall x\in \fset\hookrightarrow |S_m(x)-S_k(x)|=\left|\sum_{n=k+1}^{m}f_n(x)\right|<\ve
$$
```

```{prf:proof}
:nonumber:
Следует из [критерия Коши для функциональных последовательностей](#Cauchy-convergence):

$$
S_i(x)=\sum_{n=1}^{i}f_n(x)
$$
```

## Необходимое условие равномерной сходимости функционального ряда

```{prf:theorem} Необходимое условие равномерной сходимости функционального ряда
:label: fseries-necessary-condition-uniform
Пусть $\left.\begin{aligned}
   &f_n\colon \fset\mapsto\RR\ (\forall n\in\NN)\\
   &\sum_{n=1}^{\infty}f_n(x)\overset{\fset}{\uniconverges}
\end{aligned}\right\}\Longrightarrow f_n(x)\overset{\fset}{\uniconverges}0$
```

```{prf:proof}
:nonumber:
$\ds\sum_{n=1}^{\infty}f_n(x)\overset{\fset}{\uniconverges}\implies$ выполняется [критерий Коши](#Cauchy-convergence):

$$
\forall\ve>0, \exists N, \forall k,k-1>N, \forall x\in \fset\hookrightarrow |S_k(x)-S_{k-1}(x)|=|f_{k}(x)|<\ve
$$

Получаем, что 

$$\forall\ve>0, \exists N, \forall k>N+1, \forall x\in \fset\hookrightarrow |f_k(x)|<\ve$$

то есть $f_k(x)\overset{\fset}{\uniconverges}0$.
```

```{prf:definition} Абсолютная сходимость функционального ряда
:label: fseries-absolute-convergence
Ряд $\ds\sum_{n=1}^{\infty}a_n(x)$ {bluehighlight}`сходится абсолютно`, если $\ds\forall x_0\in \sum_{n=1}^{\infty}a_n(x_0)$ сходится абсолютно.
```

## Признак сравнения

```{prf:theorem} Признак сравнения функциональных рядов
:name: functional-series-comparison
$$\left.\begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x),\sum_{n=1}^{\infty}b_n(x)\colon\\
    &\exists N\colon \forall n>N, \forall x\in \fset\\
    &|a_n(x)|\leq b_n(x)\\
    &\sum_{n=1}^{\infty}b_n(x)\overset{\fset}{\uniconverges}
\end{aligned}\right\}\Longrightarrow \begin{aligned}&\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges}\\&\sum_{n=1}^{\infty}a_n(x)\text{ сходится абсолютно на } \fset\end{aligned}$$
```

```{prf:proof}
:nonumber:
Докажем по [критерию Коши](#fseries-cauchy-convergence)

$$\begin{align*}
\quad |a_{m+1}(x)+\ldots+a_k(x)|&\leq |a_{m+1}(x)|+\ldots+|a_k(x)|\\&\leq |b_{m+1}(x)+\ldots+b_{k}(x)|<\ve
\end{align*}$$

Знаем, что $\ds \sum^\infty_{n=1}b_n(x)\overset \fset\uniconverges$, то есть 

$$\forall\ve > 0, \exists N_1\colon \forall k>m>N_1,\forall x\in \fset\hookrightarrow|b_{m+1}(x)+\ldots+b_{k}(x)|<\ve$$

Получаем, что

$$\begin{align*}
\forall\ve>0, \exists \tilde N=&\max\{N,N_1\}\colon\forall k>m>\tilde N, \forall x\in \fset\hookrightarrow\\
&|a_{m+1}(x)+\ldots+a_k(x)|<\ve\Longrightarrow\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges}
\end{align*}$$

Так как это выполняется для любого $x\in \fset$, то
 $$\forall x_0\in \fset\hookrightarrow|b_{m+1}(x)+\ldots+b_{k}(x)|<\ve$$

$$
\forall\ve>0,\exists \tilde{N}=\max\{N,N_1\}\colon \forall k>m>\tilde{N}\hookrightarrow |a_{m+1}(x)|+\ldots+|a_k(x)|<\ve,
$$

то есть $\ds\sum_{n=1}^{\infty}|a_n(x_0)|$ сходится $\implies$ сходится абсолютно $\forall x_0\in \fset$.
```

## Мажорантный признак Вейерштрасса о равномерной сходимости функционального ряда

```{prf:theorem}
:label: fseries-major-weier
$\left.\begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x)\\
    &\exists N, \forall n>N, \sup\limits_{\fset}|a_n(x)|\leq M_n\\
    &\sum_{n=1}^{\infty} M_n\text{ --- сходится}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges}\\
    &\sum_{n=1}^{\infty}a_n(x)\text{ сходится абсолютно на }\fset
\end{aligned}$
```

```{prf:proof}
:nonumber:
Если в [признаке сравнения](#functional-series-comparison) принять, что $\forall n\in \NN, b_n(x)=M_n$ и $\sum M_n\overset \fset \uniconverges$, то условие теоремы выполняется.
```


```{prf:definition} Равномерная ограниченность
:label: fseries-uniformly-bounded
Частичные суммы функционального ряда 

$$\sum_{n=1}^{\infty}f_n(x)\colon S_k(x)=\sum_{n=1}^{k}f_n(x)$$ {bluehighlight}`равномерно ограничены` на $\fset$, если

$$
\exists c>0\colon \forall k\in\NN,\forall x\in \fset\hookrightarrow|S_k(x)|\leq c
$$
```

```{prf:definition} Монотонность последовательности функций
:label: fseq-monotonous
Последовательность функций $\{f_n(x)\}_{n=1}^{\infty}$ {bluehighlight}`монотонна` на $\fset$ (по $n$), если $\forall x_0\in \fset$ соответствующая числовая последовательность $\{f_n(x_0)\}_{n=1}^{\infty}$ имеет ту же монотонность. То есть

$$
\forall x_0\in \fset, f_n(x_0)\geqslant f_{n+1}(x_0)\text{ или }f_n(x_0)\leq f_{n+1}(x_0)
$$
```

## Преобразование Абеля

```{prf:theorem} Преобразование Абеля
:label: abel-transform
Пусть $\{a_n(x)\}_{n=1}^{\infty}$ и $\{b_n(x)\}_{n=1}^{\infty}$, тогда $\forall k>m\in\NN$ верно

$$
\sum_{n=m+1}^{k}\left(a_n-a_{n-1}\right)b_n=a_kb_k-a_mb_{m+1}+\sum_{n=m+1}^{k-1}a_n\left(b_n-b_{n+1}\right)
$$
```

```{aside}
:::{note} Замечание
Здесь обозначения $a_n$ и $a_n(x)$ эквивалентны (так делаем, чтобы не загромождать выкладки).
:::
```

```{prf:proof}
:nonumber:

$$
\begin{aligned}
        \sum_{n=m+1}^{k}(a_n-a_{n-1})b_n&=\sum_{n=m+1}^{k}a_nb_n-\sum_{n=m+1}^k a_{n-1}b_n\\
        &=\sum_{n=m+1}^{k}a_nb_n-\sum_{n=m}^{k-1}a_nb_{n+1}\\
        &=a_kb_k+\sum_{n=m+1}^{k-1}a_nb_n-a_mb_{m+1}-\sum_{n=m+1}^{k-1}a_mb_{n+1}\\
        &=a_kb_k-a_mb_{m+1}+\sum_{n=m+1}^{k-1}a_n(b_n-b_{n+1})
    \end{aligned}
$$
```

## Признак Дирихле

```{prf:theorem} Признак Дирихле для функциональных рядов
:label: fseries-dirichlet
$$\left.\begin{aligned}
    &a_n(x),b_n(x)\colon \fset\to\RR\\
    &\exists c>0\colon \forall k\in\NN,\forall x\in \fset, |A_k(x)|\leq c\\
    &\{b_n(x)\}_{n=1}^{\infty}\text{ монотонна } \forall \text{ фикс. } x \in \fset \text{ по } n \\
    &b_n(x)\overset{\fset}{\uniconverges} 0
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)b_n(x)\overset{\fset}{\uniconverges}$$
```

```{prf:proof}
Докажем по [критерию Коши](#fseries-cauchy-convergence). Пусть

$$A_k(x)=\sum_{n=1}^k a_n(x),\qquad a_n(x)=A_n(x)-A_{n-1}(x)$$

Рассмотрим

$$
\begin{aligned}
    \left|\sum_{n=m+1}^{k}a_n(x)b_n(x)\right|&=\left|\sum_{n=m+1}^{k}\left(A_n(x)-A_{n-1}(x)\right)b_n(x)\right|\\
    &=\left|A_k(x)b_k(x)-A_m(x)b_{m+1}(x)\right.\\
    &\qquad\qquad\left.+\sum_{n=m+1}^{k-1}A_n(x)\left(b_n(x)-b_{n+1}(x)\right)\right|\\
    &\leq\underbrace{|A_k(x)|}_{\leq c}\cdot|b_k(x)|+\underbrace{|A_m(x)|}_{\leq c}\cdot|b_{m+1}(x)|\\
    &\qquad\qquad+\sum^{k-1}_{n=m+1}|A_n(x)|\cdot|b_n(x)-b_{n-1}(x)|\\
    &\boxed{\begin{align*}
        &\sum^{k-1}_{n=m+1}|A_n(x)|\cdot|b_n(x)-b_{n-1}(x)|\\
        &\leq c\sum^{k-1}_{n=m+1}|b_n(x)-b_{n+1}(x)|\\
        &=c\left|\sum_{n=m+1}^{k-1}(b_n(x)-b_{n+1}(x))\right|\\
        &=c|b_{m+1}(x)-b_k(x)\leq 2c(|b_x(x)|+|b_{m+1}(x)|)
    \end{align*}}\\
    &\leq c\cdot\left(|b_k(x)|+|b_{m+1}(x)|+|b_{m+1}(x)-b_{k}(x)|\right)\\
    &\leq 4c\cdot \max\{|b_k(x)|,|b_{m+1}(x)|\}\ldots
\end{aligned}
$$

Знаем, что $b_n\overset{\fset}{\uniconverges} 0$, то есть 

$$\forall \ve>0, \exists N\in\NN:\forall n>N, \forall x\in \fset\hookrightarrow|b_n(x)|<\frac{\ve}{4c}$$

тогда в итоге получим $\ldots < 4c\cdot\ds\dfrac{\ve}{4c}=\ve$.

Значит, выполняется [критерий Коши равномерной сходимости функциональных рядов](##fseries-cauchy-convergence), то есть верно, что

$$\forall \ve > 0, \exists \tilde N > N\colon \forall k > m > \tilde N, \forall x \in \fset$$

$$
\left|\sum_{n=m+1}^{k}a_n(x)b_n(x)\right|<\ve\Longrightarrow\text{ ряд }\sum_{n=m+1}^{\infty}a_n(x)b_n(x)\overset{\fset}{\uniconverges}
$$

```

## Признак Абеля

```{prf:theorem} Признак Абеля для функциональных рядов
:label: fseries-abel
$$\left.\begin{aligned}
    &a_n,b_n:\fset\to\RR\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges}\\
    &\{b_n(x)\}_{n=1}^{\infty}\text{ монотонна } \forall \text{ фикс. } x \in \fset \text{ по } n \\
    &\exists c>0\colon \forall n>\NN,\forall x\in \fset, |b_n(x)|\leq c
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)b_n(x)\overset{\fset}{\uniconverges}$$
```

```{prf:proof}
:nonumber:
Обозначим 

$$\alpha_k^m(x)=A_k(x)-A_m(x)=\sum_{n=m+1}^{k}a_n(x)$$

Обратим внимание, что $\alpha_m^m=0$. В любом случае получаем, что 

$$\begin{align*}
a_n(x)&=\alpha_n^m(x)-\alpha_{n-1}^{m}(x)\\&=A_n(x)-A_m(x)-A_{n-1}(x)+A_m(x)=A_n(x)-A_{n-1}(x)
\end{align*}$$

Рассмотрим $\ds\left|\sum_{n=m+1}^{k} a_n(x)b_n(x)\right|$:

$$
\begin{aligned}
        \left|\sum_{n=m+1}^{k} a_n(x)b_n(x)\right|&=\left|\sum_{n=m+1}^{k}(\alpha_n^m(x)-\alpha_{n-1}^{m}(x))b_n(x)\right|\\
        &\leq |\alpha_{k}^m(x)b_k(x)|+|\alpha_{m}^m(x)b_{m+1}(x)|\\
        &\qquad\qquad+\left|\sum_{n=m+1}^{k-1}\alpha_{n}^m(x)(b_n(x)-b_{n+1}(x))\right|\\
        &\leq |\alpha_{k}^m(x)|\cdot|b_k(x)|+\left|\sum_{n=m+1}^{k-1}\alpha_{n}^m(x)(b_n(x)-b_{n+1}(x))\right|\\
        &<\frac{\ve}{3c}\cdot c+\frac{\ve}{3c}\cdot|b_{m+1}(x)-b_k(x)|\\
        &<3c\cdot\frac{\ve}{3c}=\ve
    \end{aligned}
$$

1. $\{b_n(x)\}_{n=1}^{\infty}$ монотонна на $\fset\Longrightarrow b_n(x)-b_{n+1}(x)$ одного знака $\forall n$.

2. $|b_n(x)|\leq c,\forall x\in \fset, \forall n\in\NN$

3. $\ds\sum_{n=1}^{\infty}a_n(x)\overset{\fset}{\uniconverges},\forall\ve>0,\exists N\colon\forall k>m>N\colon|\alpha_k^m(x)|<\frac{\ve}{3}$

Значит, 

$$\forall\ve>, \exists N\colon \forall k>m>N, \forall x\in \fset\hookrightarrow\left|\sum_{n=m+1}^{k}a_m(x)b_n(x)\right|<\ve$$

Cледовательно ряд [сходится равномерно](#fseries-uniform-convergence) на $\fset$ по [критерию Коши](#fseries-cauchy-convergence).

```
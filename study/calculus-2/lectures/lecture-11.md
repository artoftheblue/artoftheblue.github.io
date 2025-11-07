---

title: Лекция 11. Функциональные ряды-1
date: 2025-10-22
description: Критерий Коши равномерной сходимости функционального ряда. Необходимое условие равномерной сходимости функционального ряда. Признак сравнения. Мажорантный признак Вейерштрасса о равномерной сходимости функционального ряда. Преобразование Абля. Признак Дирихле
numbering:
  enumerator: 11.%s

---

## Функциональные ряды—1

Пусть $D\subset\mathbb{R}$, $f_n, S:D\to\mathbb{R}\ (\forall n\in\mathbb{N})$, а также $S_k(x)=\sum_{n=1}^{k}f_n(x)$ — частичные суммы функционального ряда

Если $\exists S(x): S_k\overset{D}{\longrightarrow}S$, то будем говорить, что функциональный ряд $\sum_{n=1}^{\infty}f_n(x)$ *сходится поточечно* к $S(x)$ на $D$

Если $\exists S(x): S_k\overset{D}{\rightrightarrows}S$, то будем говорить, что функциональный ряд $\sum_{n=1}^{\infty}f_n(x)$ *сходится равномерно* к $S(x)$

### Критерий Коши равномерной сходимости функционального ряда

Пусть $f_n:D\to\mathbb{R}\ \forall n\in\mathbb{N}$, $\sum_{n=1}^{\infty}f_n(x)\overset{D}{\rightrightarrows}$ тогда и только тогда, когда

$$
\forall \ve>0\ \exists N:\ \forall m>k>N\ \forall x\in D\hookrightarrow |S_m(x)-S_k(x)|=\left|\sum_{n=k+1}^{m}f_n(x)\right|<\ve
$$

Следует из критерия Коши для функциональных последовательностей

$$
S_i(x)=\sum_{n=1}^{i}f_n(x)
$$

### Необходимое условие равномерной сходимости функционального ряда

Пусть $\left.\begin{aligned}
   &f_n:D\to\mathbb{R}\ (\forall n\in\mathbb{N})\\
   &\sum_{n=1}^{\infty}f_n(x)\overset{D}{\rightrightarrows}
\end{aligned}\right\}\Longrightarrow f_n(x)\overset{D}{\rightrightarrows}0$

$\sum_{n=1}^{\infty}f_n(x)\overset{D}{\rightrightarrows}$, значит выполняется критерий Коши:

$$
\forall\ve>0\ \exists N:\ \forall k,k-1>N\ \forall x\in D\hookrightarrow |S_k(x)-S_{k-1}(x)|=|f_{k}(x)|<\ve
$$

Получаем, что $\forall\ve>0\ \exists N:\ \forall k>N+1\ \forall x\in D\hookrightarrow |f_k(x)|<\ve$, то есть $f_k(x)\overset{D}{\rightrightarrows}0$

Ряд $\sum_{n=1}^{\infty}a_n(x)$ *сходится абсолютно*, если

$$
\forall x_0\in \sum_{n=1}^{\infty}a_n(x_0)\text{ — сходится абсолютно}
$$

### Признак сравнения

```{prf:theorem} Признак сравнения
:name: functional-series-comparison
$$\left.\begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x)\text{ и }\sum_{n=1}^{\infty}b_n(x):\\
    &\exists N\colon \forall n>N, \forall x\in D, |a_n(x)|\leqslant b_n(x)\\
    &\sum_{n=1}^{\infty}b_n(x)\overset{D}{\rightrightarrows}
\end{aligned}\right\}\Longrightarrow \begin{aligned}&\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\&\sum_{n=1}^{\infty}a_n(x)\text{ сходится абсолютно на }D\end{aligned}$$
```

```{prf:proof}
:nonumber:
Докажем по критерию Коши

$$\begin{align*}
\quad |a_{m+1}(x)+\ldots+a_k(x)|&\leqslant |a_{m+1}(x)|+\ldots+|a_k(x)|\\&\leqslant |b_{m+1}(x)+\ldots+b_{k}(x)|<\ve
\end{align*}$$

Знаем, что $\displaystyle \sum^\infty_{n=1}b_n(x)\overset D\uniconverges$, то есть $\forall\ve > 0, \exists N_1\colon \forall k>m>N_1,\forall x\in D$ выполняется $|b_{m+1}(x)+\ldots+b_{k}(x)|<\ve$

Получаем, что

$$
\forall\ve>0, \exists \tilde N=\max\{N,N_1\}: \forall k>m>\tilde N, \forall x\in D\hookrightarrow|a_{m+1}(x)+\ldots+a_k(x)|<\ve\Longrightarrow\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}
$$

Так как $(\star)$ выполняется для любого $x\in D$, то $\forall x_0\in D$ выполняется $|b_{m+1}(x)+\ldots+b_{k}(x)|<\ve$, 

$$
\forall\ve>0\ \exists \overset{\sim}{N}=\max\{N,N_1\}: \forall k>m>\overset{\sim}{N}\hookrightarrow |a_{m+1}(x)|+\ldots+|a_k(x)|<\ve,
$$

то есть $\sum_{n=1}^{\infty}|a_n(x_0)|$ — сходится, а значит сходится абсолютно $\forall x_0\in D$
```

### Мажорантный признак Вейерштрасса о равномерной сходимости функционального ряда

```{prf:theorem}
$\left.\begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x)\\
    &\exists N, \forall n>N, \sup\limits_{D}|a_n(x)|\leqslant M_n\\
    &\sum_{n=1}^{\infty} M_n\text{ — сходится}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &\sum_{n=1}^{\infty}a_n(x)\text{ сходится абсолютно на }D
\end{aligned}$
```

```{prf:proof}
:nonumber:
Если в [признаке сравнения](#functional-series-comparison) принять, что $\forall n\in \mathbb{N}, b_n(x)=M_n$ и $\sum M_n\overset D \uniconverges$, то условие теоремы выполняется.
```


```{prf:definition} Равномерная ограниченность
Частичные суммы функционального ряда 

$$\sum_{n=1}^{\infty}f_n(x)\colon S_k(x)=\sum_{n=1}^{k}f_n(x)$$ {bluehighlight}`равномерно ограничены` на $D$, если

$$
\exists c>0\colon \forall k\in\mathbb{N},\forall x\in D\hookrightarrow|S_k(x)|\leqslant c
$$
```

Последовательность функций $\{f_n(x)\}_{n=1}^{\infty}$ *монотонна на* $D$ (по $n$), если $\forall x_0\in D$ соответствующая числовая последовательность $\{f_n(x_0)\}_{n=1}^{\infty}$ имеет ту же монотонность. То есть

$$
\forall x_0\in D\ b_n(x_0)\geqslant b_{n+1}(x_0)\text{ или }b_n(x_0)\leqslant b_{n+1}(x_0)
$$

### Преобразование Абля

```{prf:theorem} Преобразование Абля
Пусть $\{a_n(x)\}_{n=1}^{\infty}$ и $\{b_n(x)\}_{n=1}^{\infty}$, тогда $\forall k>m\in\mathbb{N}$ верно

$$
\sum_{n=m+1}^{k}\left(a_n-a_{n-1}\right)b_n=a_kb_k-a_mb_{m+1}+\sum_{n=m+1}^{k-1}a_n\left(b_n-b_{n+1}\right)
$$
```

```{aside}
:::{note} Замечание
Здесь обозначения $a_n$ и $a_n(x)$ эквивалентны
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

### Признак Дирихле

```{prf:theorem} Признак Дирихле
$$\left.\begin{aligned}
    &a_n(x),b_n(x)\colon D\to\mathbb{R}\\
    &\exists c>0\colon \forall k\in\mathbb{N},\forall x\in D, |A_k(x)|\leqslant c\\
    &\{b_n(x)\}_{n=1}^{\infty}\text{ монотонна } \forall \text{ фикс. } x \in D \text{ по } n \\
    &b_n(x)\overset{D}{\rightrightarrows} 0
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)b_n(x)\overset{D}{\rightrightarrows}$$
```

```{prf:proof}
Докажем по критерию Коши. Пусть

$$A_k(x)=\sum_{n=1}^k a_n(x),\qquad a_n(x)=A_n(x)-A_{n-1}(x)$$

Рассмотрим

$$
\begin{aligned}
        \left|\sum_{n=m+1}^{k}a_n(x)b_n(x)\right|&=\left|\sum_{n=m+1}^{k}\left(A_n(x)-A_{n-1}(x)\right)b_n(x)\right|\\
        &=\left|A_k(x)b_k(x)-A_m(x)b_{m+1}(x)+\sum_{n=m+1}^{k-1}A_n(x)\left(b_n(x)-b_{n+1}(x)\right)\right|\\
        &\leqslant\underbrace{|A_k(x)|}_{\leqslant c}\cdot|b_k(x)|+\underbrace{|A_m(x)|}_{\leqslant c}\cdot|b_{m+1}(x)|+\sum^{k-1}_{n=m+1}|A_n(x)|\cdot|b_n(x)-b_{n-1}(x)|\\
        &\boxed{\sum^{k-1}_{n=m+1}|A_n(x)|\cdot|b_n(x)-b_{n-1}(x)|\leq c\sum^{k-1}_{n=m+1}|b_n(x)-b_{n+1}(x)|=c\left|\sum_{n=m+1}^{k-1}(b_n(x)-b_{n+1}(x))\right|=c|b_{m+1}(x)-b_k(x)\leq 2c(|b_x(x)|+|b_{m+1}(x)|)}\\
        &\leqslant c\cdot\left(|b_k(x)|+|b_{m+1}(x)|+|b_{m+1}(x)-b_{k}(x)|\right)\\
        &\leqslant 4c\cdot \max\{|b_k(x)|,|b_{m+1}(x)|\}\ldots
    \end{aligned}
$$

Знаем, что $b_n\overset{D}{\rightrightarrows} 0$, то есть $\forall \ve>0, \exists N\in\NN:\forall n>N, \forall x\in D\hookrightarrow|b_n(x)|<\frac{\ve}{4c}$, тогда в итоге получим $\ldots < 4c\cdot\displaystyle\frac{\ve}{4c}=\ve$

Значит, выполняется критерий Коши равномерной сходимости функциональных рядов, то есть $\forall \ve > 0, \exists \tilde N > N\colon \forall k > m > \tilde N, \forall x \in D,$ верно

$$
\left|\sum_{n=m+1}^{k}a_n(x)b_n(x)\right|<\ve\Longrightarrow\text{ ряд }\sum_{n=m+1}^{\infty}a_n(x)b_n(x)\overset{D}{\rightrightarrows}
$$

```

### Признак Абля

```{prf:theorem} Признак Абля
$$\left.\begin{aligned}
    &a_n,b_n:D\to\mathbb{R}\\
    &\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\\
    &\{b_n(x)\}_{n=1}^{\infty}\text{ монотонна } \forall \text{ фикс. } x \in D \text{ по } n \\
    &\exists c>0\colon \forall n>\mathbb{N},\forall x\in D, |b_n(x)|\leqslant c
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)b_n(x)\overset{D}{\rightrightarrows}$$
```

```{prf:proof}
:nonumber:
Обозначим 

$$\alpha_k^m(x)=A_k(x)-A_m(x)=\sum_{n=m+1}^{k}a_n(x)$$

Обратим внимание, что $\alpha_m^m=0$. В любом случае получаем, что 

$$\begin{align*}
a_n(x)&=\alpha_n^m(x)-\alpha_{n-1}^{m}(x)\\&=A_n(x)-A_m(x)-A_{n-1}(x)+A_m(x)=A_n(x)-A_{n-1}(x)
\end{align*}$$

Рассмотрим $\left|\sum_{n=m+1}^{k} a_n(x)b_n(x)\right|$:

$$
\begin{aligned}
        \left|\sum_{n=m+1}^{k} a_n(x)b_n(x)\right|&=\left|\sum_{n=m+1}^{k}(\alpha_n^m(x)-\alpha_{n-1}^{m}(x))b_n(x)\right|\\
        &\leqslant |\alpha_{k}^m(x)b_k(x)|+|\alpha_{m}^m(x)b_{m+1}(x)|+\left|\sum_{n=m+1}^{k-1}\alpha_{n}^m(x)(b_n(x)-b_{n+1}(x))\right|\\
        &\leqslant |\alpha_{k}^m(x)|\cdot|b_k(x)|+\left|\sum_{n=m+1}^{k-1}\alpha_{n}^m(x)(b_n(x)-b_{n+1}(x))\right|\\
        &<\frac{\ve}{3c}\cdot c+\frac{\ve}{3c}\cdot|b_{m+1}(x)-b_k(x)|\\
        &<3c\cdot\frac{\ve}{3c}
    \end{aligned}
$$

*   $\{b_n(x)\}_{n=1}^{\infty}$ — монотонна на $D\Longrightarrow b_n(x)-b_{n+1}(x)` одного знака $\forall n$

*   $|b_n(x)|\leqslant c\ \forall x\in D\ \forall n\in\mathbb{N}$

*   $\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\quad \forall\ve>0\ \exists N:\ \forall k>m>N:\ |\alpha_k^m(x)|<\frac{\ve}{3}$

Значит, $\forall\ve>0\ \exists N:\ \forall k>m>N\ \forall x\in D\hookrightarrow\left|\sum_{n=m+1}^{k}a_m(x)b_n(x)\right|<\ve$, следовательно ряд сходится равномерно на $D$ по критерию Коши
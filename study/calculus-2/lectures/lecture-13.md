---

title: Лекция 14. Степенные ряды-2
date: 2025-10-29
description: Теорема о равномерной сходимости степенного ряда. Теорема о непрерывности суммы степенного ряда. Теорема о почленном интегрировании степенного ряда. Теорема о почленном дифференцировании степенного ряда. Разложение функции в степенной ряд.
numbering:
  enumerator: 14.%s

---

### Теорема о равномерной сходимости степенного ряда

```{prf:theorem} Теорема о равномерной сходимости степенного ряда
:label: expseries-uniform-convergence
Пусть $\ds \sum_{n=0}^{\infty}a_n(x-x_0)^n$, $R$ --- [радиус сходимости степенного ряда](#radius-interval-exponential-series), тогда $\forall r>0\colon 0<r<R$ степенной ряд 

$$\sum_{n=1}^{\infty}a_n(x-x_0)^n\uniconverges\quad \forall |x-x_0|\leq r$$
```

```{prf:proof}
:nonumber:

Используем [признак Вейерштрасса](#fseries-major-weier). 

$$|a_n(x-x_0)^n|=|a_n|\cdot|x-x_0|^n\leq |a_n|\cdot r^n$$

По [радикальному признаку Коши](#root-test):
1. $\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|r^n}=\dfrac{r}{R}<1$.
2. Ряд $\displaystyle\sum_{n=1}^{\infty}|a_n|r^n$ сходится.
3. Значит, по [мажорантному признаку Вейерштрасса](#fseries-major-weier) 
  $$\forall |x-x_0|\leq r,\quad  \displaystyle \sum_{n=1}^{\infty}a_n(x-x_0)^n\uniconverges$$
```

### Теорема о непрерывности суммы степенного ряда

```{prf:theorem} Теорема о непрерывности суммы степенного ряда
:label: expseries-smooth-sum

$D=\{x\in\RR\colon |x-x_0|<R\}$, где $R$ --- радиус сходимости.

$$S(x)=\sum_{n=1}^{\infty}a_n(x-x_0)^n\implies S(x) \in \contclass(D)$$
```

```{prf:proof}
:nonumber:
$$\forall n\in\mathbb{N}, a_n(x-x_0)^n\in C(|x-x_0|<R)$$

Пусть $\tilde{x}$ --- произвольная точка $D$.

1. Обозначим $\ds|\tilde{x}-x_0|=r\implies \sum^\infty_{n>0}a_n(x-x_0)^n\overset{|x-x_0|\leq r}{\uniconverges}$
2. $\forall n\in\NN, a_n(x-x_0)^n\in\contclass([x_0-r,x_0+r])$

Получаем, что по [теореме о непрерывности суммы функционального ряда](#fseries-smooth-uniform),

$$S(x)=\sum^\infty_{n=0}a_n(x-x_0)^n\in\contclass([x_0-r,x_0+r])$$

Следовательно, $S(x)$ --- непрерывная в точке $\tilde x \in \{x_0-r, x_0+r\}$ и так как $\tilde{x}$ --- произвольная, то $S(x)\in C(D)$
```

### Теорема о почленном интегрировании степенного ряда

```{prf:theorem} Теорема о почленном интегрировании степенного ряда
:label: expseries-itemwise-integration
$D=(-R, R)$, $R$ --- радиус сходимости степенного ряда  $\displaystyle\sum_{n=0}^{\infty}a_nx^n=S(x)$, тогда

1. $$
\int\limits_{0}^{x}S(x)\d{x}=\sum_{n=0}^{\infty}\frac{a_n}{n+1}t^{n+1},\quad \forall t\in D
$$
2. Радиус сходимости $R$ этого ряда останется таким же.
```

```{aside}
:::{card}
Для удобства сделаем сдвиг
$$x-x_0\mapsto y$$

$$\sum^\infty_{n=0}a_n(x-x_0)^n\mapsto \sum^\infty_{n=0}a_n y^n$$
:::
```

```{prf:proof}
:nonumber:
1. $\forall 0 < r < R$, $S_n(x) \overset{|x-x_0|\leq r}\uniconverges S(x)\implies S_n(x)\overset{[0, t]}{\uniconverges}S(x)$
2. $\forall n \leq \NN\colon a_nx^n\in\riemann[x_0-r,x_0+r]\implies a_nx^n\in\riemann[0,t]$

Тогда применима [теорема о почленном интегрировании функционального ряда](#fseries-itemwise-integration):

$$
\int\limits_0^tS(x)\d{x}=\int\limits_{0}^t\sum_{n=0}^{\infty}a_nx^n\d{x}=\sum_{n=0}^{\infty}a_n\int\limits_{0}^tx^n\d{x}=\sum_{n=0}^{\infty}\frac{a_n}{n+1}t^{n+1}, \quad t \in D
$$

Найдем его радиус сходимости с помощью [формулы Коши-Адамара](#cauchy-adamar-theorem), но сначала

$$\sum_{n=0}^{\infty}\frac{a_n}{n+1}t^{n+1}=t\sum^\infty_{n=0}\frac{a_n}{n+1}t^n$$

так как $t$ перед суммой не влияет на сходимость.

$$
\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|\frac{a_n}{n+1}t^{n}\right|}=\varlimsup\limits_{n\to\infty}\frac{\sqrt[n]{|a_n|}}{\sqrt[n]{n}}|t|=\frac{|t|}{R}<1
$$

при $t\in D \implies R$ --- радиус сходимости полученного степенного ряда.

```

### Теорема о почленном дифференцировании степенного ряда

```{prf:theorem} Теорема о почленном дифференцировании степенного ряда
:label: expseries-itemwise-differentiation
$D=(-R, R)$, $R$ --- радиус сходимости степенного ряда  $\displaystyle\sum_{n=0}^{\infty}a_nx^n=S(x)$, тогда

1. $$
S'(x)=\sum_{n=1}^{\infty}na_nx^{n-1}\ \forall x\in (-R;R)
$$
2. Радиус сходимости $R$ этого ряда останется таким же.

```

```{prf:proof}
:nonumber:
Возьмём произвольную точку $\tilde x\in D$. $r = |\tilde x| < R$.

1.  $a_nx^n\in D[-r;r], \forall n\in\NN$

2.  $\exists 0 \in [-r, r], \displaystyle\sum^\infty_{n=0}a_n\cdot 0^n=0$ сходится

3.  $$\tilde S(x)=\sum^\infty_{n=1} n a_n x^{n-1}\overset{x\neq 0} = \frac{1}{x}\sum^\infty_{n=1} n a_n x^n$$

    $$\varlimsup\limits_{n\to\infty}\sqrt[n]{n\cdot|a_n|\cdot|x^{n}|}=\varlimsup\limits_{n\to\infty}\sqrt[n]{n}\cdot|x|\cdot\sqrt[n]{|a_n|}=\frac{|x|}{R}<1\Longleftrightarrow |x|<R$$

    то есть получили, что $R$ --- радиус сходимости. $\tilde S_n(x)\overset{|x|\leq r}{\uniconverges} \tilde S(x)\implies$ по [теореме о дифференцировании функционального ряда](#fseries-itemwise-differentiation), 

    $$S'(x)=\tilde S(x)=\sum^\infty_{n=1}na_nx^{n-1},\quad \forall x\in[-r, r]$$

    $\displaystyle S'(x)=\sum^\infty_{n=1} n a_n x^{n-1}\uniconverges$ в точке $\tilde x$, а в силу произвольности $\tilde x$, $\uniconverges$ и на всём $D$.
```

### Разложение функции в степенной ряд

```{prf:proposition} Разложение функции в степенной ряд
:label: expseries-prop1
Если $f(x)$ раскладывается в степенной ряд на $(-R;R)$, $R>0$, то $f(x)\in D^\infty(-R;R)$.
```

```{prf:proposition} Единственность разложения функции в степенной ряд
:label: expseries-single
Если $f(x)$ раскладывается в степенной ряд на $(-R;R)$, $R>0$, то это разложение единственно.
```

```{prf:proof}
:nonumber:

Предположим, что разложение не единственно. 

$$f(x)=\sum^\infty_{n=0}a_n x^n=a_0+a_1x+\ldots,\quad \sum^\infty_{n=0}b_n x^n=b_0+b_1x+\ldots$$

$$f(0)=a_0=b_0\\
f(0)=a_1=b_1\\
\quad \vdots$$

$$\forall k\in\NN, f^{(k)}(0)=k!a_n=k!b_n\implies a_n=b_n=\frac{f^{(k)}(0)}{k!}$$
```

```{prf:proposition} Разложение функции --- ряд Тейлора
:label: expseries-taylor
Если $f(x)$ разложима в степенной ряд, то этот ряд --- {bluehighlight}`ряд Тейлора`.

$$f(x)=\sum^\infty_{n=0}\frac{f^{(n)}(0)}{n!}x^n, \quad x_0=0$$
```

```{prf:example} Функция, для которой её ряд Тейлора сходится к ней лишь в одной точке

$$f(x)=\begin{cases}
0, &x=0\\
e^{-\frac{1}{x^2}}, & x \neq 0
\end{cases}$$

$$f'(x)=(e^{-x^{-2}})'=e^{-\frac{1}{x^2}}\cdot \frac{2}{x^3}$$

$$\lim_{x\to 0} \frac{\frac{2}{x^3}}{e^{\frac{1}{x^2}}}=\lim_{y\infty}\frac{2y^3}{e^{y^2}}=0$$

$$f''(x)=e^{-\frac{1}{x^2}}\cdot\left(\frac{4}{x^6}-\frac{6}{x^3}\right)=e^{-\frac{1}{x^2}}p_{\text{ст}}\left(\frac{1}{x}\right)=0$$

$$\sum^\infty_{n=0}0\cdot x^n=0$$

Получили, что ряд Тейлора сходится в функции только в одной точке.

```
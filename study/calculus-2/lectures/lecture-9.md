---

title: Лекция 9. Функциональные последовательности-2
date: 2025-09-16
description: Критерий Коши равномерной сходимости функциональной последовательности. Теорема о почленном переходе к пределу. Теорема о непрерывности предельной функции. Условие №1 о неравномерной сходимости --- разрыв точки
numbering:
  enumerator: 9.%s

---

```{prf:theorem} Критерий Коши равномерной сходимости функциональной последовательности
:name: Cauchy-convergence

$$f_n\overset{D}\rightrightarrows f\iff\forall\ve>0,\exists N\colon\forall n,m>N,\forall x\in D\hookrightarrow|f_n(x)-f_m(x)|<\ve$$
```

```{prf:proof}
:nonumber:

$(\Rightarrow)$ **Необходимость**

$$f_n\overset{D}\rightrightarrows f,\forall\ve>0,\exists N\colon\forall n>N,\forall x\in D,\hookrightarrow |f_n(x)-f(x)|<\frac{\ve}{2}$$

тогда рассмотрим $|f_n(x)-f_m(x)|\leq|f_n(x)-f(x)|+|f_m-f(x)|<\ve$.

$(\Leftarrow)$ **Достаточность**

Пусть верно, что $\forall\ve>0,\exists N,\forall n,m>N,\forall x\in D\hookrightarrow |f_n(x)-f_m(x)|<\frac{\ve}{2}$

При фиксированных $x_0\in D$ это значит, что $\exists\lim_{n\to\infty}f_n(x_0)=f(x_0)$, то есть $\forall$ фиксированного $x_0\in D, |f_n(x_0)-f_m(x_0)|<\frac{\ve}{2}\implies$ в худшем случае $|f_n(x_0)-f(x_0)\leq\frac{\ve}{2}$

сделаем этот предельный переход в исходном при $m\to\infty,\forall x\in D$, получаем $\forall\ve>0,\exists N,\forall n >N,\forall x\in D\hookrightarrow |f_n(x)-f(x)|\leq\frac{\ve}{2}<\ve$.
```

:::{seealso} Отрицание
$$\exists\ve_0>0,\forall N,\exists n,m>N,\exists x_0\in D\colon |f_n(x_0)-f_m(x_0)\geq \ve_0$$
:::

:::{prf:example}
$f_n(x)=\frac{x}{n}$ на $\mathbb{R}$
$$\exists\ve_0>0,\forall N\colon\exists n=2N,m=4N,\exists x_0=2N, \left|\frac{2N}{2N}-\frac{2N}{4N}\right|=\left|1-\frac{1}{2}\right|=\frac{1}{2}$$
:::

```{prf:theorem} О почленном переходе к пределу
:name: itemwise-transition-to-limit
$$\left.\begin{align*}
    &f_n,f\colon D\to\RR\\
    &x_0 \text{ — предел } D\\
    &f_n\overset{D}\rightrightarrows f\\
    &\forall n\in N,\exists\lim_{x\to x_0}f_n(x)=c_n
\end{align*}\right\}\implies\begin{align*}
    &\exists\lim_{n\to\infty}c_n=\lim_{x\to x_0} f(x)\\
    &\left(\lim_{n\to\infty}\left(\lim_{x\to x_0} f_n(x)\right)=\lim_{x\to x_0}\left(\lim_{n\to\infty} f_n(x)\right)\right)
\end{align*}$$
```

```{prf:proof}
I. Покажем, что $\exists c=\lim_{n\to\infty} c_n$. Рассмотрим 

$$|c_n-c_m|\leq\underset{(1)}{|c_n-f_n(x)}|+\underset{(2)}{|f_n(x)-f_m(x)|}+\underset{(3)}{|f_m(x)-c_m|}\leq\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve$$

* $(1)$ и $(3)$: из условия $\forall n\in\NN,\exists\lim_{x\to x_0}f_n(x)=c_n$ получаем

$$\forall\ve>0,\exists\delta>0,\forall x\in\overset{\circ}B_\delta(x_0)\cap D\hookrightarrow |f_n(x)-c_n|<\frac{\ve}{3}$$

* $(2)$ из условия $f_n\overset{D}\rightrightarrows f$ по [Критерию Коши](#Cauchy-convergence) верно, что 

$$\forall\ve>0,\exists N\colon\forall n,m>N,\forall x\in D\hookrightarrow |f_n(x)-f_m(x)|<\frac{\ve}{3}$$

а значит и $\forall x\in \overset{\circ}B_\delta(x_0)\cap D$

Получаем, что по Критерию Коши для числовых последовательностей

$$\forall\ve>0,\exists N,\forall n,m>N\hookrightarrow |c_n-c_m|<\ve\implies\exists\lim_{n\to\infty}c_n=c$$

II. Покажем теперь, что $\exists\lim_{x\to x_0}f(x)=c$

Рассмотрим

$$|f(x)-c|\leq\underbrace{|f(x)-f_n(x)|}_{(1)}+\underbrace{|f_n(x)-c_n|}_{(2)}+\underbrace{|c_n-c|}_{(3)}<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve$$

1. $(1)$: условие $f_n\overset{D}\rightrightarrows\implies\forall\ve>0,\exists N_1\colon\forall n>N,\forall x\in D\hookrightarrow |f(x)-f_n(x)|<\frac{\ve}{3}$ тем более верно для $\forall x\in \overset{\circ}B_\delta(x_0)\cap D$
2. $(2)$: из условия $\forall n\in\NN,\exists\lim_{x\to x_0}f_n(x)=c_n\implies\forall\ve >0,\exists\delta>0,\forall x\in \circ{B_\delta}(x_0)\cap D\hookrightarrow |f_n(x)-c_n|<\frac{\ve}{3}$
3. $(3)$: из пункта I $\implies\forall\ve>0,\exists N_2\colon\forall n> N_2\hookrightarrow |c_n-c|<\frac{\ve}{3}$

Получаем, что $\forall\ve>0,\exists N=\max\{N_1,N_2\},\exists\delta>0,\forall x\in\overset{\circ}B_\delta(x_0)\cap D\hookrightarrow|f(x)-c|<\ve\implies\exists\lim_{x\to x_0}f(x)=c$
```

```{prf:theorem} О непрерывности предельной функции
:name: continuity-of-limit-function
$$\left.\begin{align*}
f_n,f\colon D\to\RR\\
f_n\overset{D}\rightrightarrows f\\
\forall n\in\NN,f_n\in C(D)
\end{align*}\right\}\implies f\in C(D)$$
```

```{prf:proof}
Что значит, что $f\in C(D)$?

Нужно доказать, что $\forall x_0\in D,\forall \ve>0,\exists\delta>0,\forall x\in B_\delta(x_0)\cap D\hookrightarrow|f(x)-f(x_0)<\ve$

Тогда рассмотрим

$$\begin{align*}|f(x)-f(x_0)|&\leq\underbrace{|f(x)-f_n(x)|}_{(1)}+\underbrace{|f_n(x)-f_n(x_0)|}_{(2)}+\underbrace{|f_n(x_0)-f(x_0)|}_{(3)}\\&<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve\end{align*}$$

* $(1)$: из условия $f_n\overset{D}\rightrightarrows f\implies\forall\ve>0,\exists N\colon \forall n>N,\forall \underbrace{x\in D}_{(\forall x\in B_\delta(x_0)\cap D)}\hookrightarrow |f(x)-f_n(x)|<\frac{\ve}{3}$

* $(2)$: из условия $\forall n\in\NN, f_n\in C(D)\implies\forall x_0\in D,\forall\ve>0,\exists\delta>0, \forall x\in B_\delta(x_0)\cap D\hookrightarrow |f_n(x)-f_n(x_0)|<\frac{\ve}{3}$

* $(3)$: из условия $f_n\overset{D}\rightrightarrows f\implies\underbrace{\forall\ve>0,\exists N,\forall n>N,\forall x_0\in D}_{\text{поточечная сходимость}}\hookrightarrow|f_n(x_0)-f(x_0)|\leq\frac{\ve}{3}$

Получаем, что 

$$\forall x\in D,\forall\ve>0,(\exists N,\forall n>N),\exists\delta>0,\forall x\in B_\delta(x_0)\cap D\hookrightarrow\\ |f(x)-f(x_0)|<\ve\implies f(x)\in C(D)$$
```

```{prf:theorem} Условие о неравномерной сходимости — разрыв в точке
:name: non-uniform-convergence-break
$$\left.\begin{align*}
    &f_n\in C([a, b))\\
    &f_n\in C((a, b))+\text{ разрыв в т. } a\\
    &f_n\xrightarrow{[a,b)} f
\end{align*}\right\}\implies \begin{align*}
    &f_n\overset{(a,b)}{\not\rightrightarrows} f\\
    &(\text{т. е. } f_n\xrightarrow{(a,b)}f, \text{ но не } f_n\overset{(a,b)}\rightrightarrows f)
\end{align*}$$
```

```{prf:proof}
**От противного:**

1. Пусть $f_n\overset{(a,b)}\rightrightarrows f$, тогда 

$$\forall\ve>0,\exists N_1\colon\forall n>N,\forall x\in(a,b)\hookrightarrow |f_n(x)-f(x)|<\ve$$

2. Знаем, что $f_n\xrightarrow{[a,b)}f$, т. е. для $a\in[a, b)$ верно $f_n(a)\xrightarrow[n\to\infty]{} f(a)$:

$$\forall\ve>0,\exists N_2,\forall n>N_2\hookrightarrow|f_n(a)-f(a)|<\ve$$

3. Из п. 1 и 2 получаем 

$$\forall\ve>0,\exists N=\max\{N_1,N_2\},\forall n>N,\forall x\in[a, b)\hookrightarrow |f_n(x)-f(x)|<\ve$$

т. е. $$\boxed{f_n(x)\overset{[a, b)}\rightrightarrows f(x)}$$

4. В итоге имеем:

$$\begin{align*}
    f_n\in C([a, b))\\
    f_n\overset{[a, b)}\rightrightarrows f
\end{align*}\implies$$

но [по Теореме о непрерывности предельной фукнции](#continuity-of-limit-function): $f(x)\in c([a, b))$, но известно, что $f(x)$ имеет разрыв в точке $a\implies X$ и предположительно неверно, т. е. $f_n\overset{(a, b)}{\not\rightrightarrows} f$.
```

```{prf:example}
Вспомним пример.

$f_n(x)=x^k$ на

$$\begin{align*}
    D_1=[0, q],\quad 0<q<1\\
    D_2=[0, 1)\\
    D_3=[0, 1]
\end{align*}$$

Исследуем на равномерную сходимость

1. $D_1$: Знаем, что $f_n(x)\xrightarrow{D_1}0$

$$\sup_{D_1}|f_n(x)-0|=\sup_{D_1}|x^k|=q^n\xrightarrow{n\to\infty}0\implies f_n\overset{D_1}\rightrightarrows f$$

2. $D_2$: $f_n(x)\xrightarrow{D_2} 0$

$$\sup_{D_2}|x^n|=1\xrightarrow[n\to\infty]{}1\neq 0\implies f_n\overset{D_2}{\not\rightrightarrows} f$$

3. $D_3$: $$f_n(x)\xrightarrow{D_3}\left[\begin{align*}
    &0, \quad 0 < x < 1\\
    &1, \quad x = 1
\end{align*}\right.$$

$$\sup_{D_3}|x^m-f(x)|=1\implies f_n\overset{D_3}{\not\rightrightarrows}f$$

Поэтому понятно, почему нельзя было гарантировать, что из $f_n\in C[0, 1]\implies f\in C[0, 1]$
```
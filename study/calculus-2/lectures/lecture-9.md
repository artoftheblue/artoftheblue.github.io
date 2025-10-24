---

title: Лекция 9. Функциональные последовательности-2
date: 2025-10-09
description: Функциональные последовательности. Супремальный критерий. Критерий Коши равномерной сходимости функциональной последовательности. Теорема о почленном переходе к пределу. Теорема о непрерывности предельной функции. Условие №1 о неравномерной сходимости --- разрыв точки
numbering:
  enumerator: 9.%s

---

## Супремальный критерий

```{prf:theorem} Супремальный $[\lim-\sup]$ критерий
:name: supremal-criterion
$$f_n\overset{\dop}{\uniconverges} f\iff \lim_{n\to\infty}\sup_D|f_n(x)-f(x)|=0$$
```

```{prf:proof}
:nonumber:

$(\Rightarrow)$ **Необходимость.**

$f_n\overset{\dop}{\uniconverges}f$, т. е. $\forall\ve>0,\exists N(\ve),\forall n>N,\forall x\in \dop \hookrightarrow |f_n(x)-f(x)|<\dfrac{\ve}{2}$ <br>
так как выполняется $\forall x\in \dop$, то верно, что в худшем случае

$$\sup_D|f_n(x)-f(x)|\leq\frac{\ve}{2}<\ve$$

т. е. $\forall\ve>0,\exists N(\ve), \forall n>N, \forall x\in \dop \hookrightarrow \displaystyle\sup_D|f_n(x)-f(x)|<\ve$ <br>
Получили, что $\displaystyle\lim_{n\to \infty}\sup_D|f_n(x)-f(x)|=0$.

$(\Leftarrow)$ **Достаточность.**

$\displaystyle \lim_{n\to\infty}\sup_D|f_n(x)-f(x)|=0\implies$ по определению $\lim\colon$ 

$$\forall\ve>0,\exists N(\ve),\forall n>N\hookrightarrow\displaystyle\sup_D|f_n(x)-f(x)|<\ve$$ 
Однако мы знаем, что <br>
$$|f_n(x)-f(x)|\leq\sup_D|f_n(x)-f(x)|\implies$$ 
выполнено $\forall \ve>0,\exists N(\ve),\forall n>N,\forall x\in \dop\hookrightarrow|f_n(x)-f(x)|<\ve\implies$ определение [равномерной сходимости выполняется](#fs_uniform_convergence): $f_n(x)\overset{\dop}\uniconverges f(x)$.
```

## Критерий Коши равномерной сходимости функциональной последовательности

```{prf:theorem} Критерий Коши равномерной сходимости функциональной последовательности
:name: Cauchy-convergence

$$f_n(x)\overset{\dop}\uniconverges f(x)\iff\forall\ve>0,\exists N(\ve)\colon\forall n,m>N,\forall x\in \dop\hookrightarrow|f_n(x)-f_m(x)|<\ve$$
```

```{prf:proof}
:nonumber:

$(\Rightarrow)$ **Необходимость**

$$f_n\overset{\dop}\uniconverges f,\forall\ve>0,\exists N(\ve)\colon\forall n>N,\forall x\in \dop,\hookrightarrow |f_n(x)-f(x)|<\frac{\ve}{2}$$

тогда для $\forall n, m > N$, используя неравенство треугольника, рассмотрим

$$\begin{align*}
|f_n(x)-f_m(x)|&=|f_n(x)-f_m(x)+f(x)-f(x)|\\
&\leq\underbrace{|f_n(x)-f(x)|}_{<\ve}+\underbrace{|f_m(x)-f(x)|}_{<\ve}<\ve
\end{align*}$$

Имеем буквально $\forall \ve > 0, \exists N(\ve)\colon \forall n, m > N, \forall x \in \dop \hookrightarrow |f_n(x)-f_m(x)|<\ve$.

$(\Leftarrow)$ **Достаточность**

Пусть верно, что $\forall\ve>0,\exists N\colon \forall n,m>N(\ve),\forall x\in \dop \hookrightarrow |f_n(x)-f_m(x)|<\dfrac{\ve}{2}$.

Пусть $x_0\in \dop$, тогда $\forall \ve >0, \exists N(\ve)\colon \forall n,m > N \hookrightarrow |f_n(x_0)-f_m(x_0)|<\dfrac{\ve}{2}\implies$ выполнен критерий Коши для числовых последовательностей. Соответственно  $\displaystyle\exists\lim_{n\to\infty}f_n(x_0)=f(x_0)$, то есть $\forall$ фиксированного $x_0\in \dop, |f_n(x_0)-f_m(x_0)|<\dfrac{\ve}{2}$ в худшем случае имеем $|f_n(x_0)-f(x_0)|\leq\dfrac{\ve}{2}$.

Cделаем этот предельный переход в исходном при $m\to\infty$, получаем 

$$\forall\ve>0,\exists N(\ve),\forall n >N,\forall x\in \dop\hookrightarrow |f_n(x)-f(x)|\leq\dfrac{\ve}{2}<\ve$$
```

::::{aside}
:::{seealso} Отрицание критерия Коши
$$f_n(x)\overset{\dop}{\not\uniconverges}f(x)\iff\exists\ve_0>0,\forall N,\exists n,m>N,\exists x_0\in \dop\colon |f_n(x_0)-f_m(x_0)|\geq \ve_0$$
:::
::::

:::{prf:example}
$f_n(x)=\dfrac{x}{n}$ на $\mathbb{R}$

Подберём такие значения, что: $\exists\ve_0>\boxed{\dfrac{1}{2}},\forall N\colon\exists n=2N,m=4N,\exists x_0=2N,$

$$ |f_n(x_0)-f_m(x_0)|=\left|\frac{2N}{2N}-\frac{2N}{4N}\right|=\left|1-\frac{1}{2}\right|=\boxed{\frac{1}{2}}$$
:::

```{prf:theorem} О почленном переходе к пределу
:name: itemwise-transition-to-limit
$$\left.\begin{align*}
    &f_n,f\colon \dop\mapsto\RR\\
    &x_0 \text{ — предельная точка } \dop\\
    &f_n\overset{\dop}\uniconverges f\\
    &\forall n\in N,\exists\lim_{x\to x_0}f_n(x)=c_n
\end{align*}\right\}\implies\begin{align*}
    &\exists\lim_{n\to\infty}c_n=\lim_{x\to x_0} f(x)\\
    &\left(\lim_{n\to\infty}\left(\lim_{x\to x_0} f_n(x)\right)=\lim_{x\to x_0}\left(\lim_{n\to\infty} f_n(x)\right)\right)
\end{align*}$$
```

```{prf:proof}
:::{div}
:label: lecture-9-hash1
1. Покажем, что $\exists c\displaystyle\lim_{n\to\infty} c_n$. Рассмотрим 

   $$\begin{align*}
   |c_n-c_m&|=|c_n-c_m+f_n(x)-f_n(x)+f_m(x)-f_m(x)|\leq\\
   &\underset{(1)}{|c_n-f_n(x)}|+\underset{(2)}{|f_n(x)-f_m(x)|}+\underset{(3)}{|f_m(x)-c_m|}\leq\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve
   \end{align*}$$

   * $(1)$ и $(3)$: из условия $\displaystyle\forall n\in\NN,\exists\lim_{x\to x_0}f_n(x)=c_n$ получаем

   $$\forall n \in \NN, \forall\ve>0,\exists\delta>0,\forall x\in\overset{\circ}\ball_\delta(x_0)\cap \dop\hookrightarrow |f_n(x)-c_n|<\frac{\ve}{3}$$

   * $(2)$ из условия $f_n(x)\overset{\dop}\uniconverges f(x)$ по [Критерию Коши](#Cauchy-convergence) верно, что 

   $$\forall\ve>0,\exists N(\ve)\colon\forall n,m>N,\forall x\in \dop\hookrightarrow |f_n(x)-f_m(x)|<\frac{\ve}{3}$$

   а значит и $\forall x\in \overset{\circ}\ball_\delta(x_0)\cap \dop$

   Получаем, что по Критерию Коши для числовых последовательностей

   $$\forall\ve>0,\exists N(\ve),\forall n,m>N\hookrightarrow |c_n-c_m|<\ve\implies\exists\lim_{n\to\infty}c_n=c$$
:::

2. Покажем теперь, что $\displaystyle\exists\lim_{x\to x_0}f(x)=c$. Рассмотрим

   $$\begin{align*}
    |f(x)-c|&=|f(x)-c+f_n(x)-f_n(x)+c_n-c_n|\\
    &\leq\underbrace{|f(x)-f_n(x)|}_{(1)}+\underbrace{|f_n(x)-c_n|}_{(2)}+\underbrace{|c_n-c|}_{(3)}<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve
   \end{align*}$$

   * $(1)$: условие $f_n(x)\overset{\dop}\uniconverges f(x)\implies$ 
   $$\forall\ve>0,\exists N_1(\ve)\colon\forall n>N,\forall x\in \dop\hookrightarrow |f(x)-f_n(x)|<\frac{\ve}{3}$$ 
        Это тем более верно для $\forall x\in \overset{\circ}\ball_\delta(x_0)\cap \dop$
   * $(2)$: из условия $\displaystyle\forall n\in\NN,\exists\lim_{x\to x_0}f_n(x)=c_n\implies$ 
   
        $$\forall n, \forall\ve >0,\exists\delta(\ve, n)>0,\forall x\in \circ{\ball_\delta}(x_0)\cap \dop\hookrightarrow |f_n(x)-c_n|<\frac{\ve}{3}$$
   * $(3)$: из [пункта 1](#lecture-9-hash1) $\implies\forall\ve>0,\exists N_2\colon\forall n> N_2\hookrightarrow |c_n-c|<\frac{\ve}{3}\implies$ получаем, что 
    
        $$\forall\ve>0,\exists N=\max\{N_1,N_2\},\exists\delta>0,\forall x\in\overset{\circ}\ball_\delta(x_0)\cap \dop\hookrightarrow|f(x)-c|<\ve$$ 
    
   В конце концов получили, что $\exists\lim_{x\to x_0}f(x)=c$
```

```{prf:theorem} О непрерывности предельной функции
:name: continuity-of-limit-function
$$\left.\begin{align*}
f_n,f\colon \dop\to\RR\\
f_n\overset{\dop}\uniconverges f\\
\forall n\in\NN,f_n\in \contclass(\dop)
\end{align*}\right\}\implies f\in \contclass(\dop)$$
```

```{prf:proof}
Что значит, что $f\in \contclass(\dop)$?

Нужно доказать, что $\forall x_0\in \dop,\forall \ve>0,\exists\delta>0,\forall x\in \ball_\delta(x_0)\cap \dop\hookrightarrow|f(x)-f(x_0)<\ve$

Тогда рассмотрим

$$\begin{align*}|f(x)-f(x_0)|&\leq\underbrace{|f(x)-f_n(x)|}_{(1)}+\underbrace{|f_n(x)-f_n(x_0)|}_{(2)}+\underbrace{|f_n(x_0)-f(x_0)|}_{(3)}\\&<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve\end{align*}$$

* $(1)$: из условия $f_n\overset{\dop}\uniconverges f\implies\forall\ve>0,\exists N\colon \forall n>N,\forall \underbrace{x\in \dop}_{(\forall x\in \ball_\delta(x_0)\cap \dop)}\hookrightarrow |f(x)-f_n(x)|<\frac{\ve}{3}$

* $(2)$: из условия $\forall n\in\NN, f_n\in \contclass(\dop)\implies\forall x_0\in \dop,\forall\ve>0,\exists\delta>0, \forall x\in\ball_\delta(x_0)\cap \dop\hookrightarrow |f_n(x)-f_n(x_0)|<\frac{\ve}{3}$

* $(3)$: из условия $f_n\overset{\dop}\uniconverges f\implies\underbrace{\forall\ve>0,\exists N,\forall n>N,\forall x_0\in \dop}_{\text{поточечная сходимость}}\hookrightarrow|f_n(x_0)-f(x_0)|\leq\frac{\ve}{3}$

Получаем, что 

$$\forall x\in \dop,\forall\ve>0,(\exists N,\forall n>N),\exists\delta>0,\forall x\in \ball_\delta(x_0)\cap \dop\hookrightarrow\\ |f(x)-f(x_0)|<\ve\implies f(x)\in \contclass(\dop)$$
```

```{prf:theorem} Условие о неравномерной сходимости — разрыв в точке
:name: non-uniform-convergence-break
$$\left.\begin{align*}
    &f_n\in \contclass[a, b)\\
    &f_n\in \contclass(a, b)+\text{ разрыв в т. } a\\
    &f_n\xrightarrow{[a,b)} f
\end{align*}\right\}\implies \begin{align*}
    &f_n\overset{(a,b)}{\not\uniconverges} f\\
    &(\text{т. е. } f_n\xrightarrow{(a,b)}f, \text{ но не } f_n\overset{(a,b)}\uniconverges f)
\end{align*}$$
```

```{prf:proof}
**От противного:**

1. Пусть $f_n\overset{(a,b)}\uniconverges f$, тогда 

$$\forall\ve>0,\exists N_1(\ve)\colon\forall n>N,\forall x\in(a,b)\hookrightarrow |f_n(x)-f(x)|<\ve$$

2. Знаем, что $f_n\xrightarrow{[a,b)}f$, то есть для $a\in[a, b)$ верно $f_n(a)\xrightarrow[n\to\infty]{} f(a)$, то есть

$$\begin{align*}
\forall &v\in \dop, \forall \ve>0 \exists N(x, \ve)\colon n > N\hookrightarrow |f_n(x)-f(x)| < \ve\implies\\
&a\in \dop, \forall\ve>0,\exists N_2(v_e),\forall n>N\hookrightarrow|f_n(a)-f(a)|<\ve
\end{align*}$$

3. Из п. 1 и 2 получаем 

$$\forall\ve>0,\exists N=\max\{N_1,N_2\},\forall n>N,\forall x\in[a, b)\hookrightarrow |f_n(x)-f(x)|<\ve$$

т. е. $$\boxed{f_n(x)\overset{[a, b)}\uniconverges f(x)}$$

4. В итоге имеем:

$$\begin{align*}
    f_n\in \contclass([a, b))\\
    f_n\overset{[a, b)}\uniconverges f
\end{align*}\implies$$

но [по Теореме о непрерывности предельной функции](#continuity-of-limit-function): $f(x)\in \contclass[a, b)$, но известно, что $f(x)$ имеет разрыв в точке $a\implies X$ и предположительно неверно, т. е. $f_n\overset{(a, b)}{\not\uniconverges} f$ так как это противоречит наличию разрыва $f$ в точке $a$.
```

```{prf:example}
Вспомним пример.

$f_n(x)=x^k$ на

$$\begin{align*}
    &D_1=[0, q],\quad 0<q<1\\
    &D_2=[0, 1)\\
    &D_3=[0, 1]
\end{align*}$$

Исследуем на равномерную сходимость

1. $D_1$: Знаем, что $f_n(x)\xrightarrow{D_1}0$

$$\limsup_{D_1}|f_n(x)-0|=\limsup_{D_1}|x^k|\leq\limsup_{n\to\infty}q^n=0\implies f_n\overset{D_1}\uniconverges f$$

2. $D_2$: $f_n(x)\xrightarrow{D_2} 0, f_n\in\contclass(D_2)$

$$\limsup_{D_2}|x^n|=1\xrightarrow[n\to\infty]{}1\neq 0\implies f_n\overset{D_2}{\not\uniconverges} 0$$

3. $D_3$: $f_n(x)\xrightarrow{D_3}f, f_n\in\contclass(D_3), f(x)=\left[\begin{gathered}
    0, & 0 < x < 1\\
    1, & x = 1
\end{gathered}\right.$

$$\sup_{D_3}|x^m-f(x)|=1\implies f_n\overset{D_3}{\not\uniconverges}f$$

Поэтому понятно, почему нельзя было гарантировать, что 

$$f_n\in \contclass[0, 1]\implies f\in \contclass[0, 1]$$
```
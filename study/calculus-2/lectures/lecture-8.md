---

title: Лекция 8. Функциональные последовательности-1
date: 2025-10-08
description: Функциональные последовательности. Поточечная сходиость. Равномерная сходимость. Примеры функциональных последовательностей. 
numbering:
  enumerator: 8.%s

---

## Поточечная сходимость

```{prf:example} Пример функциональной последовательности
$$\{f_n(x)\}^\infty_{n=1}=\frac{x}{n},\quad x\in\RR,\quad n\in\NN$$
```

```{prf:definition} Сходимость в точке
:name: fs-convergence-at-point
$f_n\colon X\subset\RR\mapsto\RR$ <br>
Будем говорить, что последовательность функций $\{f_n(x)\}^\infty_{n=1}$ {bluehighlight}`сходится в точке` $x_0\in X$, если сходится числовая последовательность $\{f_n(x_0)\}^\infty_{n=1}$, т. е. 

$$\exists a_{x_0}\in\RR,\forall\ve>0,\exists N(\ve, x_0),\forall n>N,\quad |f_n(x_0)-a_{x_0}|<\ve$$
```

```{prf:definition} Множество сходимости
:name: fs-convergence-set
$f_n\colon X\mapsto\RR$ <br>
Множество $\fset\subset X\subset\RR$ точек, в которых последовательность функций $\{f_n(x)\}^\infty_{n=1}$ [сходится](#fs_convergence_at_point), будем называть {bluehighlight}`множеством сходимости` последовательностей функций.
```

```{prf:definition} Предельная функция
:name: fs-limit-function
$f_n\colon X\subset \RR\mapsto\RR$ <br>
$\fset\subset X$ --- [множество сходимости](#fs_convergence_set) $\{f_n(x)\}$ и пусть $\forall x\in \fset,f_n(x)\to f(x)$ при $n\to\infty$, тогда $\ds f(x)=\lim_{n\to\infty}f_n(x)$ называется {bluehighlight}`предельной функцией` последовательности функций $\{f_n(x)\}^\infty_{n=1}$.
```

```{prf:definition} Поточечная сходимость
:name: fs-pointwise-convergence
$\fset\subset\RR$ --- множество <br>
$f,f_n\colon \fset\mapsto\RR$ <br>
Будем говорить, что $\{f_n(x)\}^\infty_{n=1}$ {bluehighlight}`сходится поточечно` к своей [предельной функции](#fs_limit_function) $f(x)$ на [множестве сходимости](#fs_convergence_set) $\fset$, если 

$$\forall x\in \fset,\forall\ve>0,\exists N,\forall n>N, \quad |f_n(x)-f(x)|<\ve$$

т. е. $\forall x\in \fset$, $f_n(x)\to f(x)$ при $n\to\infty$.
```

::::{aside} 
:::{seealso} Обозначение
$f_n(x)\xrightarrow{\fset} f(x)$
:::
::::

### Примеры

```{prf:example}
$f_n(x)=\dfrac{x}{n}, \fset=\RR$ <br>
$\forall x_0\colon f_n(x_0)=\dfrac{x_0}{n}\to 0$ при $n\to\infty\implies f_n(x)\xrightarrow{\RR}0$.
```

```{prf:example}
$f_n(x)=x^n, x\in X=[0,+\infty)$ <br>
$\fset=[0, 1]$ --- [множество сходимости](#fs_convergence_set) $f_n(x)$.

$$\begin{align*}
&f_n(x)\xrightarrow{[0,1)} 0 \text{ при}\ n\to\infty\\
&f_n(x)\xrightarrow{\{1\}} 1
\end{align*}\implies f(x)=\begin{cases}
    0, & x\in[0,1)\\
    1, & x=1
\end{cases}$$

:::{seealso} Замечание
$f_n(x)$ --- непрерывная функция на $\fset$, но $f(x)$ не является непрерывной на $\fset$.
:::

```

```{prf:example}
$f_n(x)=\dfrac{\sin(n^2 x)}{n}$ на $\RR$. <br>
$\forall x_0\in\RR, \fset=\RR, f_n(x_0)\to 0$ при $n\to\infty$, $f_n(x)\xrightarrow{\RR}0\implies f(x)=0$. <br>
$f_n'(x)=n\cos(n^2x)\not\to$ на $\RR$, когда $\cos(n^2 x)\neq 0$.

:::{seealso} Замечание
Производные допредельных функций не сходятся, но $f'(x)=0$.
:::

```

```{prf:example}
$f_n(x)=2(n+1)x(\underbrace{1-x^2}_{\leq 1})^n$ на $[0,1]$ <br>
$f_n(0)=0$, $f_n(1)=0$ <br>
$f_n(x)=2\cdot\text{const}\cdot\boxed{(n+1)\cdot q^n}\to 0$ при $n\to\infty$, т. е. $f_n(x)\xrightarrow{[0,1]}0$

Рассмотрим

$$\begin{align*}
  &\int\limits^1_0f(x)\d x=0\\
  &\int\limits^1_0f_n(x)\d x=-\frac{2(n+1)}{2}\int\limits^1_0(1-x^2)^n\d (x^2+1)=-(1-x^2)^{n+1}\biggm|^1_0=1
\end{align*}$$

:::{seealso} Замечание
Интеграл предельных функций $\neq$ интеграл допредельных.
:::
```

## Равномерная сходимость

:::{seealso} Вопрос
Если ли какие-то условия, в которых можно было бы пользоваться предельными переходами не только для функций, но их производных и интегралов?

Для этого понадобится понятие равномерной сходимости.
:::

```{prf:definition} Равномерная сходимость
:name: fs-uniform-convergence
$\fset\subset\RR$, $f_n,f\colon \fset\to\RR$
Будем говорить, что последовательность функций $\{f_1(x)\}$ {bluehighlight}`сходится равномерно` к функции $f(x)$ на $\fset$, если 

$$\forall\ve>0,\exist N, \forall n>N,\forall x\in \fset\hookrightarrow |f_n(x)-f(x)|<\ve$$

```

::::{aside}
:::{seealso} Обозначение
$f_n(x)\overset{\fset}{\uniconverges} f(x)$ 
::::

### Пример

```{prf:example}
1. $f_n(x)=\dfrac{x}{n}$ сходится равномерно на любом конечном отрезке в $\RR$.
2. $f_n(x)=x^n$ сходится равномерно на $\forall [0, a]$, где $0<a<1$.
3. $f_n(x)=\dfrac{\sin(n^2-x)}{n}$ на $\RR$ сходится равномерно.
  $$\forall\ve>0,\exists N,\forall n>N,\forall x\in\RR\hookrightarrow|f_n(x)-f(x)|\leq\frac{1}{n}<\ve$$
```

```{seealso} Замечание
$f_n\overset{\fset}{\uniconverges}f\implies f_n\xrightarrow{\fset}f$
```
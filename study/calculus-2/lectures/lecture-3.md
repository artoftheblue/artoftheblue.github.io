---

title: Лекция 3. Топология в ℝⁿ
date: 2025-09-11
description: Внутренняя, внешняя, граничная, изолированная, предельная, точки. Точка прикосновения. Замыкание. Открытость и замкнутость множеств. Компакт. Ограниченность. Критерий замкнутость множества. 
numbering:
  enumerator: 3.%s

---

## Характеристики точек

```{prf:definition} Внутренняя точка
:label: inner-point
Точка $x_0\in M$ называется {bluehighlight}`внутренней точкой` $M$, если $\exists\varepsilon>0, \ball_\varepsilon(x_0)\subset M$.
```

```{prf:definition} Внешняя точка
:label: outer-point
Точка $x_0\not\in M$, $x_0\in\R^n\setminus M$ называется {bluehighlight}`внешней точкой` $M$, если $\exists\varepsilon >0, \ball_{\varepsilon}(x_0)\subset\R^n\setminus M$.
```

```{prf:definition} Граничная точка
:label: border-point
$x_0\in\R^n$ называется {bluehighlight}`граничной точкой` $M$, если $\forall\varepsilon >0$.

$$\begin{cases}
    \ball_\varepsilon(x_0)\cap M\neq\varnothing\\
    \ball_\varepsilon(x_0)\cap (R^n\setminus M)\neq\varnothing
\end{cases}$$
```

:::{aside}
```{seealso} Обозначение 
$\partial M$ --- {bluehighlight}`множество всех граничных точек`
```
:::

```{prf:example}
$M=[0, 1)\cup\{3\}$

* $(0, 1)$ --- [внутренние точки](#inner-point);
* $(-\infty, 0) \cup (1, 3) \cup (3, +\infty)$ --- [внешние точки](#outer-point);
* $0, 1, 3$ --- [граничные точки](#border-point).
```

```{prf:definition} Изолированная точка
:label: isolated-point
Точка $x_0\in M$ называется {bluehighlight}`изолированной точкой` $M$, если $\exists\ve >0,\overset{\circ}\ball_\ve(x_0)\cap M=\varnothing$.
```

```{prf:definition} Предельная точка 
:label: limit-point
Точка $x_0 \in \R^n$ называется {bluehighlight}`предельной точкой` $M$, если $\forall\varepsilon >0, \overset{\circ}\ball_\varepsilon(x_0)\cap M\neq\varnothing$.
```

:::{note} Наблюдения 
1. [Изолированные точки](#isolated-point) не являются [предельными точками](#limit-point).
2. [Внутренние точки](#inner-point) являются [предельными точками](#limit-point).
3. [Изолированные точки](#isolated-point) всегда являются [граничными точками](#border-point).
:::

```{prf:definition} Точка прикосновения
:label: tangent-point
Точка $x_0\in\R^n$ называется {bluehighlight}`точкой прикосновения` для $M$, если $\forall\varepsilon>0,\ball_\varepsilon(x_0)\cap M\neq\varnothing$.

:::{note} Наблюдение
{bluehighlight}`Точки прикосновения` = {subject}`предельные точки` $\sqcup$ {object}`изолированные точки`.
:::
```

## Характеристики множеств

```{prf:definition} Замыкание
:label: closure
Множество всех [точек прикосновения](#tangent-point) $M$ называется {bluehighlight}`замыканием` $M$.
```

```{aside}
:::{seealso} Обозначение
$\overline {M}$ --- [замыкание](#closure) множества $M$.
:::
```

```{prf:definition} Открытость
:label: open-set
Множество $M\subset\R^n$ называется {bluehighlight}`открытым`, если все его точки [внутренние](#inner-point).
```

```{prf:definition} Замкнутость
:label: closed-set
Множество $M\subset R^n$ называется {bluehighlight}`замкнутым`, если $\R^n\setminus M$ [открыто](#open-set).
```

:::{aside}
```{note} Наблюдение
$\varnothing$ --- [открыто](#open-set) и [замкнуто](#closed-set).
```
:::

```{prf:example}
* $M = \QQ \cup [0, 1], \quad \overline{M} = [0,1]$;
* $M=[0, 1)\cup (1, 2), \quad \overline{M} = [0,2]$;
* $(0, 1)$ --- [открыто](#open-set);
* $[0, 1]$ --- [замкнуто](#closed-set);
* $(0, 1]$ --- не [открыто](#open-set) и не [замкнуто](#closed-set).
```

## Компакты

```{prf:definition} Компакт
:label: compact
Множество $M\subset\R^n$ называется {bluehighlight}`компактом`, если из любого его покрытия [открытыми множествами](#open-set) можно выделить конечное подпокрытие.
```

:::{aside}
```{note} Наблюдение
Если хоть для какого-то покрытия не выполнено $\implies$ не компакт.
```
:::

```{prf:example}
Докажем, что $M=(0,1)\subset\RR$ не является компактом.

$$\bigcup^\infty_{k=1}A_k\colon A_k=(0, 1-\tfrac{1}{k}), \quad M\subset \bigcup_{k=1}^\infty A_k$$

Если выбираем конечное $N$, то $\displaystyle M\not\subseteq A_N=\bigcup_{k=1}^NA_k\implies$ нельзя выделить конечное подпокрытие $\implies M$ --- не компакт.
```

```{prf:definition} Ограниченность
:label: bounded-set
Множество $M\subset\RR^n$ называется {bluehighlight}`ограниченным`, если $\exists x_0\in\R^n$ и $\exists r>0$, что $M\subseteq \ball_r(x_0).$
```

```{aside}
*то есть всё множество влезает в шар*
```

## Критерий замкнутости множества

:::{prf:theorem} {bluehighlight}`Критерий замкнутости` множества в $\R^n$
:label: closure_criterion
$M$ --- [замкнуто](#closure) $\iff M$ содержит **ВСЕ** свои [предельные точки](#limit-point).
:::

```{prf:proof} От противного
1. **Необходимость** (замкнутое $\implies$ содержит)
    * По условию $M$ замкнуто $\implies$ $\R^n\setminus M$ [открыто](#open-set) $\implies$ все его точки [внутренние](#inner-point) $\implies$ для 
    $$x_0\in \RR^n\setminus M, \exists \ve>0, \ball_\ve(x_0)\subset \RR^n \setminus M$$
    * Пусть $x_0$ --- предельная для $M$, но $x_0\not\in M\implies $ 
    $$\forall \ve, \overset{\circ} \ball_\ve(x_0)\cap M\neq\varnothing$$
    * Однако $\ball_\ve(x_0)\cap M\neq\varnothing \implies \overset{\circ}\ball_\ve(x_0)\cap M=\varnothing$, из чего получаем противоречие $\implies M$ содержит все предельные точки.
2. **Достаточность** (содержит $\implies$ замкнутое)
    * Пусть $y_0 \in \RR^n\setminus M \implies y_0$ не является предельной $\implies \exists r > 0$: 
    $$\begin{cases}
        \overset{\circ}\ball_r(y_0)\cup M = \varnothing\\
        y_0\in\RR^n\setminus M 
    \end{cases}\implies \exists r, \ball_r(y_0)\subset \RR^n \setminus M$$
    * $\ball_r(y_0)\subset \RR^n \setminus M \implies y_0$ --- внутренняя для $\RR^n\setminus M$.
    * Раз $y_0$ --- произвольное, то $(\RR^n \setminus M)$ --- открытое $\implies M$ --- замкнутое.
```
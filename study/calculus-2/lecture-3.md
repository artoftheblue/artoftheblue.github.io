# Лекция 3, 01.10.2024

2. $M$ — множество меры нуль по лебегу, $L\subset M$ — подмножество $M\implies$ $L$ — множество меры нуль по Лебегу.

```{prf:proof}
$M$ — множество меры нуль

$\forall\varepsilon >0,\exists$ не более чем счётное $\{I_i\}$: $L\subset M\subset \bigcup I_i, \quad |\sum|I_i|<\varepsilon|$
```

3. Не более чем счётное объединение множеств меры нуль по Лебегу является множеством меры нуль.

```{prf:proof}
$\{M_i\}$ — не более чем счётный набор, где $\forall i, M_i$ — множество меры нуль. $\implies \forall i, \forall \varepsilon_i,\exists $ не более чем счётное $\{I_j^i\}$ брусов (замкнутых или открытых).

$M_i\subset U_jI^i_j$ и $\sum_j|I_j^i|<\varepsilon_i, \varepsilon_i=\frac{\varepsilon}{2^i}$

тогда $M=\bigcup M_i$ и $M\bigcup_{i,j}I^0_j$. Мы хотим, чтобы $\forall \varepsilon>0$

$$\sum_{i, j}|I^i_j|=\sum_i\left(\sum_о|I_j^i|\right)<\sum_i\varepsilon_i=\sum_i\frac{\varepsilon}{2^i}=\varepsilon\frac{1}{2}\frac{1}{1-\frac{1}{2}}=\varepsilon$

случай $\{M_i\}^N_{i=1}$ — конечный набор

$$\varepsilon_1+\dots+\varepsilon_N=\frac{N}{N+1}\varepsilon<\varepsilon$$

$$\varepsilon_i=\frac{\varepsilon}{N+1}$$
```

## Топология в $\R$^n

$M\subset \R^n$

```{prf:definition}
$x_0\in M$ называется **внутренней точкой** $M$, если $\exists\varepsilon>0, B_\varepsilon(x_0)\subset M$.
```

```{prf:definition}
$x_0\not\in M$, $x_0\in\R^n\setminus M$ называется внешней точкой $M$, если $\exists\varepsilon >0, B_{\varepsilon}(x_0)\subset\R^n\setminus M$.
```

```{prf:definition}
$x_0\in\R^n$ называется граничной точкой $M$, если $\forall\varepsilon >0$

$$\begin{cases}
    B_\varepsilon(x_0)\cap M\neq\varnothing\\
    B_\varepsilon(x_0)\cap (R^n\setminus M)\neq\varnothing
\end{cases}$$
```

```{prf:example}
$M=[0, 1)\cup\{3\}$

* $(0, 1)$ — внутренние точки
* $(-\infty, 0) \cup (1, 3) \cup (3, +\infty)$ — внешние точки
* $0, 1, 3$ — граничные точки
```

```{prf:definition}
$x_0\in M$ называется изолированной точкой $M$, если $\exists\epsilon >0,\overset{\circ}B_\varepsilon(x_0)\cap M=\varnothing$.
```

```{prf:definition}
$x_0 \in \R^n$ называется предельной точкой $M$, если $\forall\varepsilon >0, \overset{\circ}B_\varepsilon(x_0)\cap M\neq\varnothing$.
```

```{prf:example}
$M=[0, 1)\cup\{3\}$
* внутренние точки — предельные
* $0, 1$ — предельные
* $3$ не предельная, но граничная
    * изолированные точки не являются предельными точками
```

```{note}
$\partial M$ — граница, множество граничных точек $M$.
``` 

```{prf:definition}
$x_0\in\R^n$ называется точкой прикосновения для $M$, если $\forall\varepsilon>0,B_\varepsilon(x_0)\cap M\neq\varnothing$.

точки прикосновения = предельные точки $\oplus$ изолированные точки
```

```{prf:definition}
Множество всех точек прикосновения M называется замыканием $M$.

Обозначение: $\overline {M}$
```

```{prf:definition}
Множество $M\subset\R^n$ называется открытым, если все его точки внутренние.
```

```{prf:definition}
$M\subset R^n$ азывается замкнутым, если $\R^n\setminus M$ — открыто
```

```{note} Замечание
$\varnothing$ — открыто и замкнуто
```

```{prf:example}
* $(0, 1)$ — открыто
* $[0, 1]$ — замкнуто
* $(0, 1]$ — не открыто и не замкнуто
```

```{prf:definition}
$М$ — называется ограниченным, если $\exists x_0\in\R^n$ и $\exists r>0$, что $M\subseteq B_r(x_0)$
```

```{prf:definition}
Множество $K$ в $\R^n$ называется компактом, если из $\forall$ его покрытия открытыми множествами можно выделить конечное подпокрытие.
```

```{note} Замечание
Если хоть для какого-то покрытия не выполнено $\implies$ не компакт.
```

```{prf:example}
$M=(0,1)$

$\{A_k\}_{k=1}^\infty\colon A_k=(0, 1-\tfrac{1}{k})$

$M\subseteq \bigcup_{k=1}^\infty A_k$

Если выбираем конечное $N$, то $M\not\subseteq\bigcup_{k=1}^NA_k\implies M$ — не компакт
```

```{prf:theorem} Критерий замкнутости множества в $\R^n$
$M$ — замкнуто $\iff M$ содержит **ВСЕ** свои предельные точки.
```

```{prf:proof}
:nonumber:
A. Необходимость (от противного)

1. Пусть $x_0$ — предел точки $M$, но $x_0\not\in M$, тогда $x_0\in \R^n$
2. По условию $M$ замкнуто, т. е. $\R^n\setminus M$ открыто, т. е. все его точки внутренние $\implies$ для $x_0$ из п. 1 $\exists r >0, B_r(x_0)\subset \R^n\setminus M\implies \overset{\circ} B_\varepsilon(x_0)\cap M=\varnothing$, но т. к. $x_0$ предельная $\forall \varepsilon >0, \overset{\circ}B_\varepsilon(x_0)\cap M\neq\varnothing$
3. Получили противорение $\implies M$ содержит все предельные точки
```
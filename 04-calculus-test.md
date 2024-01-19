---
math:
  # Note the 'single quotes'
  '\m': '\mathbf'
---

# Многомерные пространства

:::{prf:definition}
    
Множество, обозначаемое через $\mathbb{R}^n$, определятся следующим образом
$$
 \mathbb{R}^n: = \underbrace{\mathbb{R} \times \cdots \times  \mathbb{R}}_n.
$$

При этом, для любых $\alpha,\beta \in \mathbb{R}$, и $\mathbf{x}=(x_1,\ldots, x_n), \mathbf{y} = (y_1,\ldots, y_n) \in \mathbb{R}^n$;
$$
 \alpha \mathbf{x} + \beta \mathbf{y}: = (\alpha x_1 + \beta y_1, \ldots, \alpha x_n + \beta y_n). 
$$
:::


Таким образом, $\mathbb{R}^n$ -- это линейное пространство или векторное пространство над $\mathbb{R}$.

Когда мы будем говорить об $\mathbb{R}^n$ как о векторном пространстве, то каждый набор будем записывать как вектор, т. е. в виде $\mathbf{x} = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = (x_1,\ldots, x_n)^\top.$

Возьмём $\mathbf{x} = (x_1,\ldots, x_n)^\top \in \mathbb{R}^n$, тогда ясно, что 

$$\begin{pmatrix}
    x_1 \\ \vdots \\x_n 
\end{pmatrix} = x_1 \begin{pmatrix}
    1 \\ \vdots \\ 0
\end{pmatrix} + \cdots + x_n \begin{pmatrix}
    0 \\ \vdots \\1
\end{pmatrix}
$$

Множество $\mathbb{e} = \{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$, где $\mathbf{e}_1 = (1,0, \ldots, 0)^\top, \ldots, \mathbf{e}_n = (0,0,\ldots, 1)^\top$, называется *базисом* пространства $\mathbb{R}^n.$

## Отображения в $\mathbb{R}^n$

*Линейное отображение* $f:\mathbb{R}^n \to \mathbb{R}^m$ -- это такое отображение, что $f(\alpha \m{x} +\beta \m{y]} ) = \alpha f(\m{x}) +\beta f(\m{y})$, где $\m{x,y} \in \mathbb{R}^n$, $\alpha, \beta \in \mathbb{R}.$ 

:::{warning}
    Геометрически это означает, что образ прямой -- это опять прямая.
:::

В таком случае, линейное отображение $f:\mathbb{R}^n \to \mathbb{R}^m$ достаточно задать на базисных векторах и мы получаем что-то вроде

$$
 \begin{pmatrix}
     1 \\ \vdots \\ 0
 \end{pmatrix} \mapsto \begin{pmatrix}
     a_{11} \\ \vdots \\ a_{m1}
 \end{pmatrix}, \ldots, \begin{pmatrix}
     0 \\ \vdots \\ 1
 \end{pmatrix} \mapsto \begin{pmatrix}
     a_{1n} \\ \vdots \\ a_{mn}
 \end{pmatrix},
$$
что и кодируется матрицей 
$A = \begin{pmatrix}
    a_{11} & \ldots & a_{1n} \\
    \vdots & \ddots & \vdots \\
    a_{m1} & \ldots & a_{mn}
\end{pmatrix}$

```{figure} ./images/linear_map.jpg
:name: linear_map
:align: center

Линейное отображение $f:\mathbb{R}^2 \to \mathbb{R}^2$, которое задаётся матрицей $A = \begin{pmatrix}a & c \\b & d\end{pmatrix}.$
```

Скажем также, что если у нас есть два линейных отображения $f:\mathbb{R}^n \to \mathbb{R}^k$, $g:\mathbb{R}^k \to \mathbb{R}^m$, закодированные матрицами $A$ и $B$ соответственно, то отображение $g \circ f: \mathbb{R}^n \to \mathbb{R}^k$ будет задаваться {del}`этим странным умножением матриц строка на столбец!!!` умножением матриц $BA$.

Но понятно, что одними только линейными всё не ограничивается. Ведь вовсе не обязательно, что образ прямой будет всегда прямая при любом её отображении.

```{figure} ./images/deff2.jpg
:name: deff2
:align: center

Пример нелинейного отображения.
```

Можно рассмотреть, например, и что-то более экзотическое, как показано на [рисунке ниже](#deff1).

```{figure} ./images/deff1.jpg
:name: deff1
:align: center

Пример нелинейного отображения: из жирафа получается бегемот.
```

Однако же, это не означает, что линейную алгебру не надо изучать. Как раз наоборот, в сущности, анализ изучает любые подобное отображения с помощью линейной алгебры; локально они устроены как раз таки линейно (см. {ref}`deff+linear`).

```{figure} ./images/deff+linear.jpg
:name: deff+linear
:align: center

Вблизи это отображение очень похоже на линейное.
```

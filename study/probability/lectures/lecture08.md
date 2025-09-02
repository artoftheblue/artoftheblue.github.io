# Лекция 8, 11.11.2024

## Многомерное распределение

$\xi_1,\ldots,\xi_n$ определено на $(\Omega,\FF,\PP)$

```{prf:definition}
**Случайным вектором** называется
$$\xi=\begin{pmatrix}
    \xi_1\\
    \vdots\\
    \xi_n
\end{pmatrix}$$

Распределение $P(\xi\in B)$ случайного вектора $\forall B\in\BB(\RR_n)$.
```

```{prf:definition}
**Многомерная (совместная) функция распределения** $F_\xi(x_1,\ldots, x_n)$

$$F_\xi(x_1,\ldots,x_n)=P(\xi_1\leq x_1,\ldots,\xi_n\leq x_n)$$
```

```{prf:proposition} Свойства многомерной функции распределения
1. $0\leq F_\xi(x)\leq 1,\quad x=(x_1,\ldots,x_n)$
2. $F_\xi(x_1,x_2)\xrightarrow[x_1\to-\infty]{}0,\forall x_2\in\RR,\xi=(\xi_1,\xi_2)'$

    $F_\xi(x_1,x_2)\xrightarrow[\overset{\scriptstyle x_1\to+\infty}{x_2\to+\infty}]{}1$
3. $F_\xi(x_1,x_2)$ не убывает по каждому из аргументов
4. $F_\xi(x_1,x_2)$ непрерывна справа по каждому из аргументов
```

```{seealso} Бонусная задача
Показать, что функция
 
$$F(x_1,x_2)=\begin{cases}
    0, & x_1\leq 0, x_1\neq x_2\leq 1\\
    1, & x_1>0, x_2>0, x_1\neq x_2>1
\end{cases}$$

удовлетворяет свойствам $(1)-(4)$, но не может быть функцией распределения.
```

```{prf:definition}
Случайные векторы $\xi_1$ и $\xi_2$ имеют совместное дискретное распределение, если $\exists\{a_i,b_j\}$ не более чем счётный набор чисел

$$\sum_i\sum_j P(\xi_1=a_i,\xi_2=b_j)=$$
```

| $\xi_2 \setminus \xi_1$ | $-1$ | $0$ | $1$ | $\PP_{\xi_2}$ |
| :-: | :-: | :-: | :-: | :-: |
| $-2$ | $0.1$ | $0.1$ | $0.1$ | $0.3$ |
| $0$ | $0.1$ | $0.1$ | $0.1$ | $0.3$ |
| $2$ | $0.1$ | $0.1$ | $0.2$ | $0.4$ |
| $\PP_{\xi_1}$ | $0.3$ | $0.3$ | $0.4$ | $\boxed{1}$ |

$$\PP(\xi_1=a|\xi_2=-2)=\ ?$$

| $\xi_1 \| \xi_2=-2$| $-1$ | $0$ | $1$ |
| :-: | :-: | :-: | :-: |
| $\PP_{\xi_1\| \xi_2=-2}$ | $\frac{1}{3}$ | $\frac{1}{3}$ | $\frac{1}{3}$ |

```{prf:definition}
$\xi_1$ и $\xi_2$ имеют **совместное абсолютное непрерывное распределение**, если $\exists f_\xi(x_1,x_2)\geq 0$, что $\forall B\in\RR^2$

$$\PP(\xi\in B)=\iint\limits_B f_\xi(x_1,x_2)\d x_1 \d x_2$$
```

```{prf:example}
$\begin{pmatrix}
\xi \\ \xi
\end{pmatrix}$ — не имеет совместной плотности.
```

```{seealso}
Функция распределения $F_\xi(x_1,\ldots x_n)$:
$$F_\xi(x_1,x_2)=\iint\limits_{D\colon\{ t_1\leq x_1\cap t_2\leq x_2\}}f_\xi(t_1,t_2)\d t_1\d t_2$$
```

```{seealso} Замечание
Если $f_\xi(x_1,x_2)$ непрерывна, то 

$$\frac{\partial^2 F_\xi(x_1,x_2)}{\partial x_1\partial x_2}=f_\xi(x_1,x_2),\quad\forall x_1,x_2\in\RR,\xi=(\xi_1,\xi_2)'$$
```

```{prf:proposition} Свойства $f_\xi(x_1,x_2)$
1. $f_\xi(x_1,x_2)\geq 0,\forall x_1,x_2\in\RR$
2. $$\iint\limits_{\RR^2} f_\xi(x_1,x_2)\d x_1\d x_2=1$$
3. $$f_{\xi_1}(x_1)=\int\limits^{\infty}_{-\infty}f_\xi(x_1,x_2)\d x_2$$
    $$\PP(\xi\leq x_1\cap \{\xi_2\in\RR\})=F_{\xi_1}(x_1)=\int\limits^{x_1}_{-\infty}\left[\int\limits^{+\infty}_{-\infty}f_\xi(t_1,x_2)\d x_2\right]\d t_1$$
```

```{prf:example} Равномерное распределение в области $S\in\RR^n$
1. Единичный куб
    $$f_\xi(x_1,x_2,x_3)=\begin{cases}
        \frac{1}{V_{\text{куба}}}=1, & x_1,x_2,x_3\in\text{куб}\\
        0, & \text{иначе}
    \end{cases}$$
2. Единичный круг
    $$f_\xi{x_1,x_2}=\begin{cases}
        \frac{1}{\pi}, & x_1^2+x_2^2\leq 1\\
        0 & \text{иначе}
    \end{cases}$$
```

### Независимость случайного вектора

```{prf:definition}
$\xi_1,\ldots,\xi_n$ **независимы**, если 

$$\begin{align*}\forall B_1,\ldots, B_n\in\BB(\RR),\ &\PP(\xi\in B_1,\xi_2\in B_2,\ldots,\xi_n\in B_n)=\\&\PP(\xi_1\in B_1)\cdot\PP(\xi_2\in B_2)\cdot\ldots\cdot \PP(\xi_n\in B_n)\end{align*}$$
```

```{prf:definition}
$\xi_1,\ldots,\xi_n$ — **независимы**, если 

$$F_\xi(x_1,\ldots, x_n)=F_{\xi_1}(x_1)\cdot\ldots\cdot F_{\xi}(x_n)$$
```

```{prf:definition}
Дискретные случайные векторы $\xi_1,\xi_2$ **независимы**, если 

$$\forall a_i, b_j, \PP(\xi_1=a_i,\xi_2=b_j)=\PP(\xi_1=a_i)\cdot\PP(x_2=b_j)$$
```

```{prf:definition}
Для абсолютной непрерывности:

$$f_\xi(x_1,\ldots,x_n)=f_{\xi_1}(x_1)\cdot\ldots\cdot f_{\xi_n}(x_n)$$
```

```{prf:definition}
**Копула** — $C(x,y)$ такая, что определена на единичном квадрате $0\leq x\leq 1$, $0\leq y\leq 1$ и частные её распределения являются равномерными.

$$C(x,1)=\begin{cases}
    x, & x\in[0,1]\\
    0, & x\not\in[0,1]
\end{cases},\quad C(1,y)=\ldots$$
```

```{prf:theorem} Теорема Склара
Для произвольной двумерной функции распределения $F(x,y)$ с маржинальными распределениями $F_1(x)$ и $F_2(y)$ $\exists$ копула такая, что 

$$F(x,y)=C(F_1(x),F_2(y))$$
```
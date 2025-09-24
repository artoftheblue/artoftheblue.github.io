---

title: Лекция 1. Кратные интегралы Римана
date: 2025-09-03
description: Брус. Мера бруса и её свойства. Разбиение координатных отрезков. Диаметр. Ограниченность. Масштаб разбиения. Отмеченные точки и разбиение. Интегральная сумма Римана. Кратные интегралы Римана. Интегрируемость по Риману.
numbering:
  enumerator: 1.%s

---

```{prf:definition}
:label: bounded-blocks
{bluehighlight}`Замкнутым брусом` (промежутком, координатным промежутком) в $\mathbb{R^n}$ будем называть множество $I=\{x\in \mathbb{R}^n|a_i\leq x\leq a_i,i=1,\dots, n\}=[a_1, b_1]\times\dots\times[a_n,b_n]$

```

```{prf:definition} Замечание
:label: block
Просто {bluehighlight}`брусом` будем называть
$$I=\{a_1, b_1\}\times\dots\times\{a_n,b_n\}$$

* $\{\dots\}$ — отрезок, интервал, полуинтервал
```

```{prf:definition}
:label: block_measure
{bluehighlight}`Мерой бруса` будем называть его объём: 
$$\mu(I)=|I|=\prod^n_{i=1}(b_i-a_i)$$
```

:::{div}
:label: block_measure_properties
## Свойства меры бруса в $\mathbb{R}^n$

1. {bluehighlight}`Однородность` 

$$\mu(I_{\lambda a,\lambda b})=\lambda^n\mu(I_{a,b}),\lambda\geq0$$

$$a=\{a_1,\dots,a_n\}, b=\{b_1,\dots,b_n\}$$
2. {bluehighlight}`Аддитивность`

Пусть $I, I_1,\dots,I_k\colon I=\bigcup^k_{i=1}I_i$. $I_1,\dots,I_k$ не имеют общих {bluehighlight}`внутренних точек` $\implies |I|=\sum^k_{i=1}|I_i|$

3. {bluehighlight}`Монотонность`

$I\subset\bigcup^k_{i=1}I_i$ — покрыт конечной системой брусов $\implies |I|\leq\sum^k_{i=1}|I_i|$
:::

## Разбиения

```{prf:definition}
:label: block_decomposition
Пусть задан брус $I=[a', b']\times\ldots\times[a^n,b^n]$ — замкнутый невырожденный брус и $I=\bigcup_{i=1}^kI_i$, где $I_i$ попарно не имеет общих внутренних точек, тогда набор таких более мелких брусов $\mathbb{T}=\{I_i\}^k_{i=1}$ будем называть {bluehighlight}`разбиением бруса` $I$.
```

```{figure} ./../../../images/calculus-2/image.png
:label: image
:height: 300
:align: center

Любое произвольное разбиение можно свести к сеточному
```

```{prf:definition}
:label: diameter
{bluehighlight}`Диаметром` произвольного ограниченного множества $M\subset \mathbb{R}^n$ будем называть число

$$d(M)=\sup_{x,y\in M}\|x-y\|$$

где

$$\|x-y\|=\sqrt{\sum^n_{i=1}(x_i-y_i)^2}$$

евклидово расстояние.
```

```{figure} ./../../../images/calculus-2/image-1.png
:label: image-1
:width: 600 
:align: center

У всех примеров диаметр одинаковый, т. к. это всё точки на круге.
```

```{embed} #bounded_set
```

```{aside}
:::{card}
оно впихивается полностью в шар конечного радиуса
:::
```


```{prf:definition}
:label: scale
{bluehighlight}`Масштабом` разбиения $\mathbb{T}=\{I_i\}^k_{i=1}$ будем называть число 

$$\lambda(\mathbb{T})=\triangle_{\mathbb{T}}=\underset{1\leq i\leq k}{\max}\,d(I_i)$$
```

```{prf:definition}
:label: marked_points
Пусть $\forall I_i$ выбраны точки $\xi_i\in I_i$, тогда набор $\bxi=\{\xi_i\}^k_{i=1}$ будем называть {bluehighlight}`отмеченными точками`.
```

```{prf:definition}
:label: marked_decomposition
$(\mathbb{T},\bxi)$ будем называть {bluehighlight}`отмеченным разбиением`.
```

## Интегральные суммы

$I$ — невырожденный замкнутый брус. $f\colon \underset{\in\RR^n}{I}\mapsto\mathbb{R}$ определённая на $I$.

```{prf:definition}
:label: riemann_integral_sum
{bluehighlight}`Интегральной суммой Римана` функции $f$ на $(\mathbb{T},\bxi)$ будем называть величину 

$$\sigma(f,\mathbb{T},\bxi)=\sum^{k}_{i=1}f(\xi_i)|I_i|$$
```

```{prf:definition}
:label: integratable_function
Будем говорить, что функция $f\colon I\mapsto\RR$ {bluehighlight}`интегрируема (по Риману)` на замкнутом брусе $I\ (f\colon I\mapsto\mathbb{R})$, если $\exists A\in\mathbb{R},\forall\varepsilon>0,\exists\delta>0,\forall(\mathbb{T},\bxi)\colon \triangle_{\mathbb{T}}<\delta$ верно, что $|\sigma(f,\mathbb{T},\xi)-A|<\varepsilon$. Тогда

$$A=\int\limits_I f(\vec x)\d \vec x=\underset{I\ }{\dotsint} f(x_1,\ldots,x_n)\d x_1\dots \d x_n$$

Обозначение: $f\in \intclass(I)$
```

```{aside}
:::{card}
$A\in\RR$ не может быть $\plusmn\infty$, ведь бесконечности не являются частью $\RR$
:::
```

## Примеры

```{prf:example} $f=\const=\text{const}$
$$\forall(\mathbb{T},\bxi):\sigma(f,\mathbb{T},\bxi)=\sum^k_{i=1}f(\xi_i)|I_i|=\const|I|$$

$$\int\limits_I f(x)\d x=\const|I|$$
```

```{prf:example} Неинтегрируемая функция по Риману, функция Дирихле
$$I=[0,1]^n$$

$$f=\begin{cases}
1, & \forall i=\overline{1,\dots,n}, & x_i\in\mathbb{Q}\\
0, & \text{иначе}
\end{cases}$$

$\forall\mathbb{T}$ можно выбрать такое $\xi_i\in\mathbb{Q}$, тогда для такого размеченного разбиения $(\mathbb{T},\bxi)$ можно выбрать такие точки, которые полностью рациональные

$$\sigma(f,\mathbb{T},\bxi)=\sum^k_{i=1}1\cdot|I_i|=|I|=1$$

это такой набор точек, чтобы $f(\hat\bxi_i)=1$

---

$\forall\mathbb{T}$ можно выбрать такое $\hat\xi_i\not\in\mathbb{Q}$, что можно выбрать полностью иррациональные точки 

$$\sigma(f,\mathbb{T},\hat{\bxi})=\sum^k_{i=1}0\cdot|I_i|=0\implies f\not\in \intclass(I)$$

это такой набор точек, чтобы $f(\hat\bxi_i)=0$

```

```{prf:example} Простая (сложная) задачка с КР
Вычислите интеграл, рассматривая его как представление интегральной суммы при сеточном разбиении квадрата $I=[0,1]\times[0,1]$ на ячейки — квадраты со сторонами, длины которых равны $|I_i|=\frac{1}{n}$, выбирая в качестве точек $\xi_i$ верхние правые вершины ячеек.

$$\iint\limits_{\overset{\scriptstyle 0\leq x\leq 1}{0\leq y\leq 1}}xy\d x\d y$$



---

Наша функция $f=xy, |I_i|=\frac{1}{n^2}, \xi_{ij}=\underset{\overset{\scriptstyle 0\leq x\leq 1}{0\leq y\leq 1}}{(\frac{i}{n},\frac{j}{n})}$

$$\begin{align*}
  \sigma(f,\mathbb{T},\bxi)
  &=\sum_{i=1}^n\sum_{j=1}^n\frac{i}{n}\frac{j}{n}\frac{1}{n^2}\\
  &=\frac{1}{n^4}\sum_{i=1}^n i\sum_{j=1}^n j\\
  &=\frac{(n+1)n}{2n^4}\sum^n_{i=1}i\\
  &=\frac{(n+1)^2n^2}{4n^4}\xrightarrow{n\to\infty}\frac{1}{4}
\end{align*}$$

**Проверка:**

$$\int\limits_0^1xdx\int\limits^{1}_0ydy=\frac{1}{2}\int\limits^1_0xdx=\frac{1}{4}$$

```
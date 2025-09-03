---
numbering:
  enumerator: 5.%s
  equation: false
---

# Лекция 5, 15.10.2024

## Теорема Вейерштрасса о непрерывности на компакте функции

```{prf:theorem} Вейерштрасса, о непрерывности на компакте функции
$K\subset \RR^n$, $f\colon K\mapsto\RR$

$f\in C(K)\implies$ $f$ ограничена на $K$ и достигает своего наибольшего и наименьшего значения.
```

```{prf:proof}
$f$ — ограничена? Докажем от противного, т. е. предположим, что $f$ неограничена.

$K$ — компакт, $\exists\{x_m\}_{m=1}^\infty\subset K$, что $|f(x_m)|>m$. $\implies K$ ограничена $\implies\exists c,||x||\leq c,\implies\{x_m\}^\infty_{m=1}$ — ограничена $\implies\{x^i_m\}^\infty_{m=1}$ ограничена $\forall i=\overline{1,\ldots n}$.

$$|x^i|\leq||x||=\sqrt{(x')^1+\ldots+(x^n)^2}\leq c$$

Получаем, что по теореме Больцано-Вейерштрасса (из $\forall$ ограниченной последовательности можно выделить сходящуюся подпоследовательность)

$\{x_m\}=\{(x_m^1,x_m^2,\ldots,x_m^n)\}\implies y\{x'_m\}_{m=1}^\infty\exists$ сходящаяся последовательность $\{x_{m_{j_1}}^1\}, x'_{m_{j_1}}\to a_1$, $j_1\to\infty$, $\{x_{m_{j_1}}\}=\{(\underset{\to a_1}{x^1_{m_{j_1}}},x^2_{m_{j_1}},...,x^n_{m_{j_1}})\}$. 

Выберем в ограниченной $\{x^1_{m_{j_1}}\}$ сходящуюся подпоследовательность $\{x_{m_{j_2}}^2\}$. $x^2_{m_{j_2}}\to a_2$. $\{x_{m_{j_2}}\}=\{(x_{m_{j_2}}^1,x_{m_{j_2}}^2,\ldots,x_{m_{j_2}}^n)\}$

$\{x_{m_{j_n}}\}^\infty_{j_n=1},x_{m_{j_n}}\to(a_1,\ldots, a_n)=a\implies x_{m_{j_n}}\to a$, т. е. $a$ предел $K$, но $K$ — компакт $\implies a\in K$

$\exists\lim_{j_n\to\infty}f(x_{m_{j_n}})=f(a)$, по условию непрерывности функции $f$ на $K$. С другой стороны, $f(x_{m_{j_n}})\to\infty$ при $j_n\to\infty$.

$|f(x_{m_{j_n}})|>m_{j_n}\implies$ противоречие.

Теперь докажем достижимость $\sup$.

Есть последовательность $\{y_m\}^\infty_{m=1}$. $\sup_K f-\frac{1}{m}\leq f(y_m)\leq\sup_K f$. По первому пункту можно выделить $y_{m_{j_n}}\to a$.

$$\underset{j_n\to\infty}{\sup_K f-\frac{1}{m_{j_n}}}\leq f(y_{m_{j_n}})\leq\sup_K f$$

по непрерывности получаем

$$\sup_K f\leq f(a)\leq\sup_K f\implies f(a)=\sup_K f$$

Для $\inf$ доказывается аналогично.
```

## Колебания функции

$M\subset\RR^n$ — множество.

```{prf:definition}
**Колебанием** $f$ на множестве $M$ будем называть число $\omega(f, M)$:

$$\omega(f, M):=\sup_{x,y\in M}|f(x)-f(y)|=\sup_{x\in M} f(x)-\inf_{y\in M} f(y)$$
```

```{prf:definition}
**Колебанием** $f$ в точке $x_0\in M$ будем называть число $\omega(f, x_0)$:

$$\omega(f, x_0):=\lim_{r\to 0^+}\omega(f,B^M_r(x_0))$$

$$B^M_r(x_0)=B_r(x_0)\cap M$$
```

```{seealso} Замечание
$f\colon M\mapsto\RR$ непрерывна в $x_0$, если $\forall\ve>0,\exists\delta>0,\forall x\in B^M_\delta(x_0)\hookrightarrow|f(x)-f(x_0)|<\ve$.
```

```{prf:theorem} О непрерывности колебаний в точке функции
$x_0\in M\subset\RR^n$, $f\colon V\mapsto\RR$.

$f$ — непрерывна в точке $x_0\iff\omega(f, x_0)=0$.
```

```{prf:proof}
**Необходимость.**

$f$ непрерывна, т. е. $\forall\ve>0,\exists\delta>0,\forall x\in B^M_\delta(x_0)\hookrightarrow|f(x)-f(x_0)|<\ve$

$$\omega(f,x_0)=\lim_{\delta\to0^+}\omega(f, B_\delta^M(x_0))$$

$$\begin{align*}
\omega(f,B^M_\delta(x_0))&=\sup_{x,y\in B^M_\delta(x_0)}|f(x)-f(y)|
\\&=\sup_{x,y\in B^M_\delta(x_0)}|f(x)-f(x_0)+f(x_0)-f(y)|
\\&\leq 2\sup_{x\in B^M_\delta(x_0)}|f(x)-f(x_0)|\leq 2\ve<\ve
\end{align*}$$

т. е. при $\ve\to0\implies\delta\to 0$

$$\omega(f, B^M_\delta(x_0))\to0\implies\omega(f, x_0)=0$$

**Достаточность.**

$$0=\omega(f,x_0):=\lim_{\delta\to0^+}(f,B^M_\delta(x_0))$$

$\forall\ve>0,\exists\delta>0,\forall x,y\in B^M_\delta(x_0),$

$$\omega(f,B_\delta^M(x_0))=\sup_{x,y\in B^M_\delta(x_0)}|f(x)-f(y)|<\ve$$

тогда возьмём $y=x_0$

$$\begin{align*}|f(x)-f(x_0)|&\leq\sup_{x\in B^M_\delta(x_0)}|f(x)-f(x_0)|\\&\leq\sup_{x,y\in B^M_\delta(x_0)}|f(x)-f(y)|<\ve\end{align*}$$

т. е. $f(x)$ непрерывна в точке $x_0$.
```

```{prf:definition}
Если какое-то свойство не выполняется только на множестве меры нуль по Лебегу, то будем говорить, что оно выполняется **почти всюду**.
```

```{prf:example}
$f(x)=\begin{cases}
1, & x\in\RR\setminus\ZZ\\
0, & x\in\ZZ
\end{cases}$

$\ZZ$ — счётное $\implies f$ имеет разрывы в не более, чем счётном множестве точек $\implies f$ непрерывна почти всюду на $\RR$.
```

```{prf:theorem} Критерий Лебега
$I\subset\RR^n$ — замкнутый невырожденный брус, $f\colon I\mapsto\RR$.

$f\in\mathcal{R}(I)\iff f$ — ограничена на $I$ и $f$ непрерывна почти всюду на $I$.
```

```{aside}
Теорема без доква.
```

```{prf:definition}
$\TT_1=\{I^1_k\}$ — разбиение $I$, $\TT_2=\{I^2_m\}$ — разбиение $I\implies$ пересечением $\TT_1\cap\TT_2$ будем называть множество $\{I_{ij}\}$: $\forall I_{ij}$

1. $\exists k\colon I_{ij}$ входит в разбиение $I^1_k$
2. $\exists m\colon I_{ij}$ входит в разбиение $I^2_k$
3. $I_{ij}$ входит в разбиение $I$.
```
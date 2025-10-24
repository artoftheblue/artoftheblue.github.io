---

title: Лекция 7. Интеграл Римана на допустимых множествах.
date: 2025-10-01
description: Допустимое множество. Интегрирование по допустимым множествам и корректность такого определения. Теорема Фубини. Теорема о замене переменных в кратном интеграле. 
numbering:
  enumerator: 7.%s

---

## Допустимое множество

```{prf:definition} Допустимое множество
:name: feasible_set
Множество $\dop\subset\RR^n$ называется {bluehighlight}`допустимым`, если 

1. $\dop$ --- ограниченное.
2. Граница $\partial \dop$ --- множество меры нуль по Лебегу.
```

```{prf:example}
$D_1=(0, 1)$ --- допустимое множество ✅
* $D_1$ --- ограниченное ✅
* $\partial D_1$ = $\{0\}\cup \{1\}$ ✅
```

```{prf:example}
$D_2=[0, 1]\cap\QQ$ --- недопустимое множество ❌
* $D_2$ --- ограниченное ✅
* $\partial D_2$ = $[0, 1]$ --- множество не меры нуль по Лебегу в $\RR$ ❌
```

## Интеграл Римана

```{prf:definition}
:name: riemann_integral_on_feasible_set
$\dop\subset\RR^n$ допустимое множество, $f\colon \dop\mapsto\RR$. Тогда {bluehighlight}`интегралом Римана` $f$ по $\dop$ будем называть число $\mathcal{I}$.

$$\mathcal{I}=\int\limits_Df(\vec x)\d \vec x=\int\limits_{I\supset \dop}f\cdot \chi_D(\vec x)\d \vec x$$

где $I$ --- произвольный брус в $\RR^n\colon \dop\subset I$.

{bluehighlight}`Характеристическая функция`:
$$\chi_D=\begin{cases}
    1, & \vec x \in \dop\\
    0, & \vec x \not\in \dop
\end{cases}$$

Если $\exists$ такое $\mathcal{I}<\infty$, то $f\in\mathcal{R}(\dop)$.
```

:::{prf:proposition}
Обоснуем корректность такого определения.
* Изначально $f$ не определена вне $\dop$.
* Вне $\dop$ можно доопределить $f$ как угодно, так как $f\cdot\xi_D=0$ при $x\not\in \dop$.
* Определение не зависит от выбора бруса $I$.
:::

:::{prf:proof} Корректность определения
:nonumber:
$\dop\subset \RR^n$ --- допустимое множество.

$I_1, I_2$ --- замкнутые брусы: $\dop\subset I_1$, $\dop\subset I_2$, тогда интегралы $\displaystyle\int\limits_{I_1\supset \dop}f\cdot \chi_D\d \vec x$ и $\displaystyle\int\limits_{I_2\supset \dop}f\cdot \chi_D\d \vec x$ либо одновременно $\exists$ и равны; либо оба $\cancel\exists$.

---

$I=I_1\cap I_2\colon \dop\subset I$

> Вот эту вот стену ниже хочется получше разбить

$f\cdot\chi_D\in\mathcal{R}(I_1)\implies$ по критерию Лебега $f\cdot\chi_D$ --- ограничена на $I_1\implies f\cdot\chi_D$ ограничена на $\dop\implies f$ ограничена на $\dop\implies f\cdot\chi_D$ ограничена на $I_2\implies$ по [критерию Лебега](#Lebegue-criterion) $f\cdot\chi_D$ --- непрерывна [почти всюду](#almost_everywhere) на $I_1\implies f\cdot\chi_D$ --- непрерывна почти всюду на $\dop\implies f$ --- непрерывна почти всюду на $\dop \implies$ в худшем случае для $f\cdot\chi_D$ на $I_2$ добавятся разрывы на $\partial \dop\implies f\cdot\chi_D$ непрерывна почти всюду на $I_2$.

**Покажем, что равны**:

$\TT_i$ --- разбиение на $I_i\colon \TT_1$ и $\TT_2$ совпадают на общей части $I_1\cap I_2$.

$\xi^i$ --- отмеченные точки $I_i\colon$ совпадают на общей части.

$\sigma(f\cdot\chi_D,\TT_1,\xi^1)=\sum_jf\chi_D(\xi^1_j)|I^1_j|=\sum_j f\cdot\chi_D(\xi_i)|I_j|=\sum_jf\cdot\chi_D(\xi_j^2)|I^2_j|=\sigma(f\cdot\chi_D,\TT_2,\xi^2)$
:::

```{prf:theorem} Фубини
:name: foubini
$I_x\subset\RR^n,I_y\subset\RR^m, I_x\times I_y\subset \RR^n \times \RR^m = \RR^{n+m}$ --- [замкнутые брусы](#bounded-blocks). <br>
$f\colon I_x\times I_y\to\RR$ <br>
$f\in\intclass(I_x\times I_y)$ и $\forall$ фиксированного $x\in I_x$ верно, что $f(x,y)\in\intclass(I_y)\implies$ <br>
$$\int\limits_{I_x\times I_y}f(\vec x, \vec y)\d \vec x,\d\vec y=\int\limits_{I_x}\left(\int\limits_{I_y}f(\vec x, \vec y)\d\vec y\right)\d \vec x=\int\limits_{I_x}\d \vec x\int\limits_{I_y}f(\vec x,\vec y)\d \vec y$$
```

```{prf:example} Функция, к которой теорема Фубини не применима

$\displaystyle f(x, y)=\frac{x^2-y^2}{(x^2+y^2)^2}$ на $\dop=[-1, 1]^2$ <br>
$\displaystyle \lim_{y\to 0} f(0, y)=\lim_{y \to 0}\frac{-y^2}{y^4}=-\infty$ ---  функция неограниченная $\implies f(x, y)\notin\intclass(\dop)$

> Здесь нужно примерчик дописать

---

Попробуем перейти к повторному интегралу.

$$\begin{align*}\int\limits_{-1}^1\int\limits_{-1}^1\frac{x^2-y^2}{(x^2+y^2)^2}\d x\d y
  &=\int\limits_{-1}^1\int\limits_{-1}^1\left(\frac{1}{x^2+y^2}-\frac{2y^2}{(x^2+y^2)^2}\right)\d x\d y\\
  &=\int\limits_{-1}^1\left(\frac{1}{y}\arctg\frac{x}{y}\Biggm|_{-1}^1\right)\d x\d y\\
\end{align*}$$

$$
\begin{align*}
\int\limits_{-1}^1\int\limits_{-1}^1\frac{x^2-y^2}{(x^2+y^2)^2}\d x\d y
  &=\int\limits_{-1}^1\int\limits_{-1}^1\left(\frac{1}{x^2+y^2}-\frac{2y^2}{(x^2+y^2)^2}\right)\d x\d y\\
  &=\int\limits_{-1}^1\left(-\frac{x}{x^2+y^2}\Biggm|_{-1}^1\right)\d y\\
  &=\int\limits_{-1}^1\left(-\frac{1}{1^2+y^2} - \left(-\frac{-1}{(-1)^2+y^2}\right)\right)\d y\\
  &=\int\limits_{-1}^1\left(-\frac{1}{1+y^2} - \frac{1}{1+y^2}\right)\d y\\
  &=\int\limits_{-1}^1-\frac{2}{1+y^2}\d y\\
  &=-2\left[\arctg y\right]_{-1}^1\\
  &=-2\left(\arctg 1 - \arctg (-1)\right)\\
  &=-2\left(\frac{\pi}{4} - \left(-\frac{\pi}{4}\right)\right)\\
  &=-2\left(\frac{\pi}{4} + \frac{\pi}{4}\right)\\
  &=-2\left(\frac{2\pi}{4}\right)\\
  &=-2\left(\frac{\pi}{2}\right)\\
  &=-\pi
\end{align*}
$$

```

```{prf:proof}
:::{div}
:label: hash-lect8-1
1. $\TT_x=\{I_i^x\}, \TT_y=\{I_j^y\}$ --- разбиения на $I_x, I_y\implies$ <br>
$\TT_{x,y}$ --- разбиение на $I_x\times I_y$. $\TT_{x, y}=\{I_i^x\times I_j^y\}=\{I_{ij}\}\implies$ <br>
$|I_{ij}|=|I^x_i|\cdot|I^y_j|$
:::

2. Будем пользоваться $f\in\mathcal{R}(I_x\times I_y)\implies \exists$ [(1)]( #hash-lect8-1) + [по критерию Дарбу](#darbu-riemann-integration-criterion) <br>
$\implies \Il=\Iu=\II$.

  $$\begin{align*}
    \underset{\xrightarrow[\Delta_{\TT}\to 0]{}\II}{\Sl(f,\TT_{x,y})}
    &=\sum_{i,j}\inf_{(\vec x,\vec y)\in (I^x_i\times I_j^y)} f(\vec x,\vec y)\cdot|I_{ij}|\\
    &\leq\sum_{i,j}\inf_{\overset{\scriptstyle x\in I_i^x}{y\in I^y_j}} f(x,y)\cdot|I_i^x|\cdot|I_j^y|\\
    &\leq\sum_{i,j}\inf_{x\in I_i^x}\left(\inf_{y\in I^y_j} f(x,y)\cdot|I_j^y|\right)\cdot|I_i^x|\\
    &=\sum_i\inf_{x\in I_i^x}\underbrace{\left(\sum_j\inf_{y\in I_j^y}f(x,y)\cdot|I^y_j|\right)}_{\Sl(\tilde f(y),\TT_y)}\cdot|I^x_i|\\
    &\leq\sum_i\inf_{x\in I^x_i}\underbrace{\left(\int\limits_{I_y}f(x,y)\d y\right)}_{g(x)}|I_i^x|=\sum_i\inf_{x\in I^x_i}g(x)\cdot |I_i^x|\\
    &=\Sl(g(x),\TT_x)\leq\Su(g(x),\TT_x)\leq\underbrace{\ldots}_{\text{так же} \\ \text{для }\sup}\leq\sum_i\sup_{x\in I_i^x} g(x) \cdot |I^x_i| \leq \ldots \leq \Su(f,\TT_{x,y})\\
  \end{align*}$$

$$\begin{align*}
  &\Sl(f,\TT_{x,y})
  \underset{\xrightarrow[\Delta_{\TT}\to 0]{}\II}{\leq\Sl(g(x),\TT_x)}
  \leq\underset{\xrightarrow[\Delta_{\TT}\to 0]{}\II}{\Su(g,\TT_x)}
  \leq\Su(f,\TT_{x,y})\\
  \implies&\exists \Il=\lim_{\Delta_\TT\to0}\Sl(g(x),\TT_x)=\II=\lim_{\Delta_\TT\to0}\Su(g(x),\TT_x)=\Iu
\end{align*}$$

Аналогично доказываем для $y \implies$ теорема доказана.
```

```{prf:theorem} Замена переменных в критерии интегрирования
:name: variable-replacement

$M_1,M_2\subset\RR^n$ --- открытые множества <br>
$\varphi\colon M_1\to M_2$ --- биективное отображение <br>
$\varphi,\varphi^{-1}\in \diffclass$ --- непрерывно дифференцируемы <br>
$\dop\colon\overline{\dop}\subset M_1$ --- [допустимое множество](#feasible_set) <br>
$f\colon\varphi(\dop)\mapsto\RR$ <br>

$f(x)\in\mathcal{R}(\varphi(\dop))\iff f(\varphi(t))\cdot|\det\mathcal{J}_\varphi(t)|\in\mathcal{R}(\dop)$, причём 

$$\int\limits_{\varphi(\dop)}f(x)\d x=\int\limits_{\dop}f(\varphi(t))\cdot|\det\mathcal{J}_\varphi(t)|\d t$$

$$\mathcal{J}_\varphi(t)=\begin{pmatrix}
  \frac{\partial\varphi_1}{\partial t_1} & \cdots & \frac{\partial\varphi_1}{\partial t_n} \\
  \vdots & & \vdots \\
  \frac{\partial\varphi_n}{\partial t_1} & \cdots & \frac{\partial\varphi_n}{\partial t_n}
\end{pmatrix}$$

:::{seealso} Пояснение
$(x_1,\ldots,x_n)\xleftarrow{\varphi}(t_1,\ldots,t_n)$, т. е. $x_i=\varphi_i(t_1,\ldots, t_n)$
:::
```

```{prf:example}
$(x,y)\mapsto(r,\varphi)$

$$\begin{cases}
  x=r\cos\varphi\\
  y=r\sin\varphi
\end{cases},\qquad\mathcal{J}_\varphi=\begin{pmatrix}
  \cos\varphi & -r\sin\varphi\\
  \sin\varphi & r\cos\varphi
\end{pmatrix}$$

$r\geq0,\varphi\in[0,2\pi)$

> здесь переделать этот пример в показыватель ошибки где мы берём прямой якобиан вместо обратного
```
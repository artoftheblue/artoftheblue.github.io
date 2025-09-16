---

title: Лекция 7. Критерий Дарбу. Теорема Фубини
date: 2025-10-01
description: Критерий Дарбу интегрируемости функции по Риману. Интегрирование по допустимым множествам. Теорема Фубини. 
numbering:
  enumerator: 7.%s

---


```{prf:definition}
:name: feasible_set
Множество $D\subset\RR^n$ называется **допустимым**, если 

1. $D$ ограничено.
2. $\partial D$ должна быть множеством меры нуль по Лебегу.
```

```{prf:definition}
:name: riemann_integral_on_feasible_set
$D\subset\RR^n$ допустимое множество, $f\colon D\to\mathcal{R}$. Тогда **интегралом Римана** $f$ по $D$ будем называть число $\mathcal{I}$.

$$\mathcal{I}=\int\limits_Df(\bar x)\d \bar x=\int\limits_{I\supset D}f\cdot \chi_D(\bar x)\d \bar x,$$

где $I$ — произвольный брус в $\RR^n\colon D\subset I$.

**Характеристическая функция**:
$$\chi_D=\begin{cases}
    1, & \bar x \in D\\
    0, & \bar x \not\in D
\end{cases}$$

Если $\exists$ такое $\mathcal{I}<\infty$, то $f\in\mathcal{R}(D)$.

Обоснуем корректность такого определения.
* Изначально $f$ не определена вне $D$.
* Вне $D$ можно доопределить $f$ как угодно, так как $f\cdot\xi_D=0$ при $x\not\in D$.
* Определение не зависит от выбора бруса $I$.

:::{warning} Корректность определения
$D$ — допустимое множество в $\RR^n$.

$I_1\supset D$, $I_2\supset D$, тогда интегралы $\displaystyle\int\limits_{I_1\supset D}f\cdot \chi_D\d x$ и $\displaystyle\int\limits_{I_2\supset D}f\cdot \chi_D\d x$ либо $\exists$ одновременно и равны, либо оба $\cancel\exists$.

---

$f\cdot\chi_D\in\mathcal{R}(I_1)\implies$ по критерию Лебега $f\cdot\chi_D$ — ограничена на $I_1\implies f\cdot\chi_D$ ограничена на $D\implies f$ ограничена на $D\implies f\cdot\chi_D$ ограничена на $I_2\implies$ по критерию Лебега $f\cdot\chi_D$ — непрерывна почти всюду на $I_1\implies f\cdot\chi_D$ — непрерывна почти всюду на $D\implies f$ — непрерывна почти всюду на $D \implies$ в худшем случае для $f\cdot\chi_D$ на $I_2$ добавятся разрывы на $\partial D\implies f\cdot\chi_D$ непрерывна почти всюду на $I_2$.

**Покажем, что равны**:

$\TT_i$ — разбиение на $I_i\colon \TT_1$ и $\TT_2$ совпадают на общей части $I_1\cap I_2$.

$\xi^i$ — отмеченные точки $I_i\colon$ совпадают на общей части.

$\sigma(f\cdot\chi_D,\TT_1,\xi^1)=\sum_jf\chi_D(\xi^1_j)|I^1_j|=\sum_j f\cdot\chi_D(\xi_i)|I_j|=\sum_jf\cdot\chi_D(\xi_j^2)|I^2_j|=\sigma(f\cdot\chi_D,\TT_2,\xi^2)$
:::
```

```{prf:theorem} Фубини
:name: foubini
$I_x\subset\RR^n,I_y\subset\RR^n, I_x\times I_y\subset \RR^{m+n}$ — замкнутые брусы.

$f\colon I_x\times I_y\to\RR$

$f\in\mathcal{R}(I_x\times I_y)$ и $\forall$ фиксированного $x\in I_x\colon f(x,y)\in\mathcal{R}(I_y)\implies$

$$\int\limits_{I_x\times I_y}f(\bar x, \bar y)\d \bar x,\d\bar y=\int\limits_{I_x}\left(\int\limits_{I_y}f(\bar x, \bar y)\d\bar y\right)\d \bar x=\int\limits_{I_x}\d \bar x\int\limits_{I_y}f(\bar x,\bar y)\d \bar y$$

```

```{prf:proof}
Будем пользоваться $f\in\mathcal{R}(I_x\times I_y)$ + критерием Дарбу.

* $\TT_x=\{I_i^x\}, \TT_y=\{I_j^y\}$ — разбиения на $I_x, I_y\implies\TT_{x,y}$ — разбиение на $I_x\times I_y$. $\TT_{x, y}=\{I_i^x\times I_j^y\}=\{I_{ij}\}\implies |I_{ij}|=|I^x_i|\cdot|I^y_j|$

* $$\begin{align*}\Sl(f,\TT_{x,y})&=\sum_{i,j}\inf_{(\bar x,\bar y)\in I_{ij}} f(\bar x,\bar y)\cdot|I_{ij}|\\&\leq\sum_{i,j}\inf_{x\in I_i^x} (\inf y\in I^y_j f(x,y))\cdot|I_i^x|\cdot|I_j^y|\\&=\sum_i\inf_{I_i^x}\underbrace{\left(\sum_j\inf_{I_j}(f(x,y))|I^y_j|\right)}_{\Sl(\tilde f(y),\TT_y)}|I^x_i|\\&\leq\sum_i\inf_{I^x_i}\underbrace{\left(\int\limits_{I_y}f(x,y)\d y\right)}_{g(x)}|I_i^x|\\&=\Sl(g(x),\TT^x)\leq\Su(g(x),\TT^x)\leq\ldots\leq\Su(f,\TT_{x,y})\end{align*}$$

$$\Sl(f,\TT_{x,y})\leq\Sl(g(x),\TT^x)\leq\Su(g,\TT^x)\leq\Su(f,\TT_{xy})\\\implies\exists \mathcal{L}=\lim_{\Delta\to0}\Sl(g(x),\TT^x)=\mathcal{L}$$
```

```{prf:theorem} (замена переменных в критерии интегрирования)
:name: variable-replacement

$M_1,M_2\subset\RR^n$ — открытые множества

$\varphi\colon M_1\to M_2$ — биективное отображение

$\varphi,\varphi^{-1}$ — непрерывно дифференцируемы

$D\colon\overline{D}\subset M_1$ — допустимое множество

$f\colon\varphi(D)\mapsto\RR$

$f(x)\in\mathcal{R}(\varphi(D))\iff f(\varphi(t))\cdot|\det\mathcal{J}_\varphi(t)|\in\mathcal{R}(D)$, причём 

$$\int\limits_{\varphi(D)}f(x)\d x=\int\limits_{D}f(\varphi(t))\cdot|\det\mathcal{J}_\varphi(t)|\d t$$

$$\mathcal{J}_\varphi(t)=\begin{pmatrix}
  \frac{\partial\varphi_1}{\partial t_1} & \cdots & \frac{\partial\varphi_1}{\partial t_n} \\
  \vdots & & \vdots \\
  \frac{\partial\varphi_n}{\partial t_1} & \cdots & \frac{\partial\varphi_n}{\partial t_n}
\end{pmatrix}$$
```


```{seealso} Пояснение
$(x_1,\ldots,x_n)\xrightarrow{\varphi}(t_1,\ldots,t_n)$, т. е. $x_i=\varphi_i(t_1,\ldots, t_n)$
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
```
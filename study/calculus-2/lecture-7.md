# Лекция 7, 05.11.2024

```{prf:theorem} Критерий Дарбу интегрируемой функции по Риману
$I\subset\RR^k,\quad f\colon I\to\mathcal{R}$

$f\in\mathcal{R}(I)\iff f$ — ограничена на $I$ и $\underline{\mathcal{L}}=\overline{\mathcal{L}}$
```

```{prf:proof}

**Необходимость.**

* $f\in\mathcal{R}(I)\implies$ по необходимому условию интергируемости по Риману $f$ ограничена на $I$.
* Идея: показать, что $\boxed{\underline{\mathcal{L}}=\mathcal{L}}$ и $\overline{\mathcal{L}}\implies \underline{\mathcal{L}}=\mathcal{L}$.
    1. $f\in\mathcal{R}(I)\implies\exists \mathcal{L},\forall\varepsilon>0,\exists\delta >0\colon\forall(\TT,\xi)\colon\Delta_\TT<\delta$.

    $$|\underbrace{\sigma(f,\TT,\xi)}_\sigma-\mathcal{L}|<\varepsilon$$
    $$\begin{align*}|\underline{\mathcal{L}}-\mathcal{L}|&=|\mathcal{L}-\underline{\mathcal{L}}-\sigma+\sigma+\Sl-\Sl\\&\leq\underbrace{|\mathcal{L}-\sigma|}_{<\varepsilon}+\underbrace{|\underline{\mathcal{L}}-\Sl|}_{<\varepsilon}+\underbrace{|\sigma-\Sl|}_{<\varepsilon}<3\varepsilon\end{align*}$$
    
    2. $$\underline{\mathcal{L}}=\lim_{\Delta\to0}\Sl(f,\TT)\implies|\underline{\mathcal{L}}-\underline{}s|<\varepsilon$$
    $$\forall\varepsilon>0,\exists\delta,\exists\TT\colon\Delta_\TT<\delta$$

    3. $\Sl(f,\TT)=\inf_\xi\sigma(f,\TT,\xi)$. $|\Sl-\sigma|<3$.

```

```{prf:definition}
Множество $D\subset\RR^n$ называется **допустимым**, если 

1. $D$ ограничено.
2. $\partial D$ должна быть множеством меры нуль по Лебегу.
```

```{prf:definition}
$D\subset\RR^n$ допустимое множество, $f\colon D\to\mathcal{R}$. Тогда интегралом Римана $f$ по $D$ будем называть число $\mathcal{L}$.

$$\mathcal{L}=\int\limits_Df(\bar x)\d \bar x=\int\limits_{I\supset D}f\cdot \chi_D(\bar x)\d \bar x$$

Характеристическая функция:
$$\chi_D=\begin{cases}
    1, & \bar x \in D\\
    0, & \bar x \not\in D
\end{cases}$$

:::{warning} Корректность определения
$I_1\supset D$, $I_2\supset D$, тогда интегралы $\displaystyle\int\limits_{I_1}f\cdot \chi_D\d x$ и $\displaystyle\int\limits_{I_2}f\cdot \chi_D\d x$ либо $\exists$ одновременно и равны, либо оба $\cancel\exists$.

---

$f\cdot\chi_D\in\mathcal{R}(I_1)\implies$ по критерию Лебега $f\cdot\chi_D$ — ограничена на $I_1\implies f\cdot\chi_D$ ограничена на $D\implies f$ ограничена на $D\implies f\cdot\chi_D$ ограничена на $I_2\implies$ по критерию Лебега $f\cdot\chi_D$ — непрерывна почти всюду на $I_1\implies f\cdot\chi_D$ — непрерывна почти всюду на $D\implies f$ — непрерывна почти всюду на $D \implies$ в худшем случае для $f\cdot\chi_D$ на $I_2$ добавятся разрывы на $\partial D\implies f\cdot\chi_D$ непрерывна почти всюду на $I_2$.

**Покажем, что равны**:

$\TT_i$ — разбиение на $I_i\colon \TT_1$ и $\TT_2$ совпадают на общей части $I_1\cap I_2$.

$\xi^i$ — отмеченные точки $I_i\colon$ совпадают на общей части.

$\sigma(f\cdot\chi_D,\TT_1,\xi^1)=\sum_jf\chi_D(\xi^1_j)|I^1_j|=\sum_j f\cdot\chi_D(\xi_i)|I_j|=\sum_jf\cdot\chi_D(\xi_j^2)|I^2_j|=\sigma(f\cdot\chi_D,\TT_2,\xi^2)$
:::
```

```{prf:theorem} Фубини
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

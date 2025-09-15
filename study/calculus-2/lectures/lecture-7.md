---

title: Лекция 7. Критерий Дарбу. Теорема Фубини
date: 2025-09-10
author: Artemis Feidenheimer
description: Критерий Дарбу интегрируемости функции по Риману. Интегрирование по допустимым множествам. Теорема Фубини. 
thumbnail: ./../images/calculus-2/image.png
numbering:
  enumerator: 7.%s

---


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


## Критерий Дарбу. Теорема Фубини

### Критерий Дарбу интегрируемости функции по Риману

{math}`I\in\mathbb{R}^n\text{ — замкнутый брус, } f:I\mapsto \mathbb{R}, f\in \mathcal{R}(I)\Longleftrightarrow f` — ограничена на {math}`I` и {math}`\ui=\oi`

Необходимость

*   {math}`f\in\riman{I}\Longrightarrow` по необходимому условию интегрируемости функции по Риману на замкнутом брусе, {math}`f` — ограничена на {math}`I`

*   Покажем, что {math}`\underline{\mathcal{I}}=\mathcal{I},\overline{\mathcal{I}}=\mathcal{I}\Longrightarrow\underline{\mathcal{I}}=\overline{\mathcal{I}}`

    1.  {math}`f\in\riman{I}\Longrightarrow\forall \ve >0\ \exists \delta >0\ \forall(\mathbb{T},\xi):\Delta_{\mathbb{T}}<\delta\hookrightarrow|\sigma(f,\mathbb{T},\xi)-\mathcal{I}|<\ve`

    2.  {math}`\ui=\sup\limits_{\mathbb{T}}=\lim\limits_{\Delta\rightarrow 0}=\us(f,\mathbb{T})\Longrightarrow |\ui-\us|<\ve`

        {math}`\forall \ve>0\ \exists\delta\ \exists\mathbb{T}:\Delta_{\mathbb{T}}<\delta: |\ui-\us|<\ve`

    3.  {math}`\us(\mathbb{T},\xi)=\inf\limits_{\xi}\sigma(f,\mathbb{T},\xi)`

        {math}`\forall\mathbb{T},\ \forall \ve>0\ \exists \xi:|\us-\sigma|<\ve`

{math}`|\mathcal{I}-\ui|\leqslant|\mathcal{I}-{\ui}-\sigma+\sigma+{\us}-\us|\leqslant|\mathcal{I}-\sigma|+|\ui-\us|+|\sigma-\us|<3\ve`

Достаточность

{math}`f` — ограничена и {math}`\ui=\oi`. Имеем

```{math}
\us(f,\mathcal{T})=\inf\limits_{\xi}\leqslant\sigma(f,\mathbb{T},\xi)\leqslant \sup\limits_{\xi}(f,\mathbb{T},\xi)=\os(f,\mathbb{T})
```

Тогда, при {math}`\lim\limits_{\Delta\rightarrow 0} \us=\ui,\ \lim\limits_{\Delta\rightarrow0}\os=\oi` получаем {math}`\ui=\oi`

### Интегрирование по допустимым множествам

Множество {math}`D\subset\mathbb{R}^n` называется *допустимым*, если

*   {math}`D` — ограниченно

*   {math}`\partial D` — множество меры нуль по Лебегу

Пусть {math}`D\subset\mathbb{R}^n, f:D\rightarrow\mathbb{R}`. Тогда, интегралом Римана {math}`f` по {math}`D` называется число {math}`\mathcal{I}`:

```{math}
\mathcal{I}=\int\limits_{D}f(\overline{x})\d{\overline{x}}=\int\limits_{I\supset D}f\cdot \chi_{D}(\overline{x})\d{\overline{x}}\text{, где }\chi_{D}=\begin{cases}
        1,\overline{x}\in D\\
        0,\overline{x}\in D
    \end{cases}
```

%  \begin{equation*}

%      \chi_{D}=\begin{cases}

%          1,\overline{x}\in D\\

%          0,\overline{x}\in D

%      \end{cases}

%  \end{equation*}

**Корректность определения.** Пусть {math}`I_1\supset D, I_2\supset D`, тогда

```{math}
\int\limits_{I_1} f\cdot\chi_D\d{x}\text{ и }\int\limits_{I_2}f\cdot\chi_{D}\d{x}
```

либо существуют и равны, либо оба не существуют вообще

Покажем существование

*   {math}`f\cdot\chi_D\in\riman{I_1}\Longrightarrow` по критерию Лебега {math}`f\cdot\chi_D` ограничена на {math}`I_1\Longrightarrow` {math}`f\cdot\chi_D` ограничена на {math}`D\Longrightarrow f` ограничена на {math}`D\Longrightarrow f\cdot\chi_D` ограничена на {math}`I_2`

*   {math}`f\cdot\chi_D\in\riman{I_1}\Longrightarrow` по критерию Лебега {math}`f\cdot\chi_D` непрерывна почти всюду на {math}`I_1\Longrightarrow f\cdot\chi_D` непрерынва почти всюду на {math}`D\Longrightarrow` в худшем случае для {math}`f\cdot\chi_D` на {math}`I_2` добавятся разрывы на {math}`\partial D\Longrightarrow f\cdot\chi_D` непрерынва почти всюду на {math}`I_2`

*   Тогда, {math}`f\cdot\chi_D\in\riman{I_1}\Longleftrightarrow f\cdot\chi_D\in\riman{I_2}`

Покажем равенство

*   Пусть {math}`\mathbb{T}_i` — разбиение на {math}`I_i:\mathbb{T}_1` и {math}`\mathbb{T}_2` совпадают на общей части {math}`I_1\cap I_2`

*   Пусть {math}`\xi^i` — отмеченные точки {math}`I_i:` совпадают на общей части

*   {math}`\sigma(f\chi_D,\mathbb{T}_1,\xi^1)=\sum_{j}f\chi_D(\xi^1_j)|I_j^1|=\sum_j f(\xi^1_j)|I^1_j|=\sum_j f(\xi^2_j)|I^2_j|=\sum_j f\chi_D(\xi_j^2)|I_j^2|=\sigma(f\chi_D, \mathbb{T}_2, \xi^2)`

Все свойства интеграла Римана и критерия Лебега для бруса справедливы и для других допустимых множеств

### Теорема Фубини

Пусть имеются {math}`I_x\subset\mathbb{R}^n, I_y\subset\mathbb{R}^n, I_x\times I_y\subset \mathbb{R}^{m+n}` — замкнутые брусы, {math}`f:I_x\times I_y\rightarrow \mathbb{R}`, {math}`f\in\riman{I_x\times I_y}` и {math}`\forall` фиксированной {math}`x\in I_x:f(x,y)\in\riman{I_y}\Longrightarrow`

```{math}
\int\limits_{I_x\times I_y} f(\overline{x}, \overline{y})\d{\overline{x}}\d{\overline{y}}=\int\limits_{I_x}\left(\int\limits_{I_y}f(\overline{x},\overline{y})\d{\overline{y}}\right)\d{\overline{x}}=\int\limits_{I_x}\d{\overline{x}}\int\limits_{I_y}f(\overline{x}, \overline{y})\d{\overline{y}}
```

Воспользуемся тем, что {math}`f\in\riman{I_x\times I_y},f\in\riman{I_y}`, а также Критерием Дарбу

*   {math}`\mathbb{T}_x=\{I_i^x\}` — разбиение на {math}`I_x`, {math}`\mathbb{T}_y=\{I_j^y\}` — разбиение на {math}`I_y`, {math}`\mathbb{T}_{x,y}=\{I_i^x\times I^y_j\}=\{I_{ij}\}` — разбиение на {math}`I_x\times I_y`

*   ```{math}
    \begin{aligned}
                \us(f,\mathbb{T}_{x,y})=\sum_{i,j} \inf\limits_{(x,y)\in I_{ij}} f(x,y)|I_{ij}|&\leqslant \sum_{i,j} \inf\limits_{x\in I_i^x} \left(\inf\limits_{y\in I_j^y} f(x,y)\right)|I_i^x||I_j^y|=\sum_i \inf\limits_{I^x_i} \underbrace{\left(\sum_j \inf\limits_{I^y_j} f(x,y)|I_j^y|\right)}_{\us(f(y), \mathbb{T}_y)}|I_i^x|\\
                &\leqslant \sum_i \inf\limits_{I^x_i}\underbrace{\left(\int\limits_{I_y} f(x,y)\d{y}\right)}_{g(x)}|I_i^x|=\us(g(x),\mathbb{T}_x)\\
                % &\leqslant \os(g(x),\mathbb{T}_x)\leqslant\ldots\leqslant \os(f,\mathbb{T}_{x,y})
                &\leqslant \os(g(x),\mathbb{T}_x)
            \end{aligned}
    ```

    {math}`\us(f,\mathbb{T}_{x,y})\leqslant \us(g(x),\mathbb{T}_x)\leqslant\os(g(x), \mathbb{T}_x)\leqslant\os(f,\mathbb{T}_{x,y})\Longrightarrow\exists \oi=\lim\limits_{\delta\rightarrow0} \us(g(x),\mathbb{T}_x)=I`

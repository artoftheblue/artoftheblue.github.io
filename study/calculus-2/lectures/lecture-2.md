---

title: Лекция 2. Cвойства интеграла Римана. Мера нуль по Лебегу.
date: 2025-09-10
description: Необходимое условие интегрируемости. Свойства кратных интегралов Римана. Мера нуль по Лебегу. Свойства множеств меры нуль по Лебегу.
numbering:
  enumerator: 2.%s

---

## Необходимое условие интегрируемости

:::{prf:theorem} {bluehighlight}`Необходимое условие интегрируемости`
:label: required_condition_integral
$I$ --- замкнутый брус

```{card}
$f\in\intclass(I)\implies f$ ограничена на $I$.
```
:::

:::{prf:proof}
:nonumber:
(от противного)

(hashRCI-1)=
1. Пусть $f$ неограничена на $I\implies\forall$ разбиения $\T=\{I_i\}^k_{i=1}$ бруса $I$, $\exists i_0\colon f$ неограничена на $I_{i_0}$.

---

(hashRCI-2)=
2. $f\in\intclass(I)\implies\forall\ve>0$, а значит и для $\ve=1,\exists\delta>0\colon\forall(\T,\bxi)\colon\Delta_\T<\delta$ верно 

$${\Large|}\sigma(f,\T,\bxi)-\overbrace{\int\limits_If(x)\d \vec x}^A{\Large|}< 1$$

где  $\exists A=\int\limits_If(x)\d \vec x$ --- конечный $\implies$

$$\overbrace{\int\limits_If(x)\d \vec x-1}^A-1<\sigma(f,\T,\bxi)<\overbrace{\int\limits_If(x)\d \vec x}^A + 1\implies$$

$\sigma(f,\T,\bxi)$ ограничена

---

Однако с другой стороны по [пункту 1](#hashRCI-1) $\implies$ 

$$\sigma(f,\T,\bxi)=\sum_{i\neq i_0}f(\xi_i)|I_i|+f(\xi_{i_0})|I_{i_0}|$$

т. к. на $I_{i_0} f(x)$ --- неограниченная $\implies$ выбором подходящего $\xi_{i_0}$ можно сделать $f(\xi_{i_0})|I_{i_0}|$ вместе с $\sigma(f, \T, \bxi)$ сколь угодно большим по модулю $\implies$ $\sigma$ неограниченно возрастает $\implies$ [(1)](#hashRCI-1) и [(2)](#hashRCI-2) противоречат $\implies f$ --- ограничена на $I$. 
:::

## Свойства кратного интеграла

### Линейность

:::{prf:proposition} Линейность
:label: linearity

$$f,g\in\intclass(I)\implies\forall\alpha,\beta\in\mathbb{R}, (\alpha f+\beta g)\in\intclass(I)$$

$$\int\limits_I(\alpha f+\beta g)\d \vec x=\alpha\int\limits_I f\d \vec x+\beta\int\limits_I g\d \vec x$$
:::

:::{prf:proof}
:nonumber:

```{div}
:label: l2-embed
$$\begin{align*}
    f\in\intclass(I)\implies\exists A_f\colon \forall\varepsilon>0,\exists\delta_1>0,\forall(\mathbb{T},\bxi)\colon\Delta_{\T}<\delta_1,&\\
    |\sigma_f-A_f|={\Large|}\sigma(f,\mathbb{T},\bxi)-\int\limits_If\d \vec x{\Large|}<\ve&
\end{align*}$$

$$\begin{align*}
    g\in\intclass(I)\implies\exists A_g\colon \forall\varepsilon>0,\exists\delta_2>0,\forall(\mathbb{T},\bxi)\colon\Delta_{\T}<\delta_2,&\\
    |\sigma_g-A_g|={\Large|}\sigma(g,\mathbb{T},\bxi)-\int\limits_If\d \vec x{\Large|}<\ve&
\end{align*}$$
```

Рассмотрим $\delta=\min\{\delta_1,\delta_2\}$ и разбиение $\forall\ve>0,\exist\delta,\forall(\T,\bxi)\colon\Delta_\T<\delta$, тогда при $\ve = \frac{\bar\ve}{1+|\alpha|+|\beta|}$

$$|\sigma_f-A_f|<\frac{\bar\ve}{1+|\alpha|+|\beta|},\qquad |\sigma_g-A_g|<\frac{\bar\ve}{1+|\alpha|+|\beta|}$$

тогда рассмотрим

$$\begin{align*}
    |\sigma(\alpha f+\beta g,\TT,\bxi)-(\alpha A_f+\beta A_g)|&=\\
    \left|\sum^k_{i=1}(\alpha f(\xi_i)+\beta g(\xi_i))\cdot |I_i|-(\alpha A_f+\beta A_g)\right|&=\\
    |\sigma_{\alpha f+\beta g}-A_{\alpha f+\beta g}|&\leq\\
    |\alpha|\cdot|\sigma_f-A_f|+|\beta|\cdot|\sigma_g-A_g|&<\\
    (|\alpha|+|\beta|)\cdot\frac{\bar\ve}{1+|\alpha|+|\beta|}<\bar\ve
\end{align*}$$

В итоге, 

$$(\alpha f+\beta g)\in\intclass(I)$$

а интегральная сумма стремится к левой части выражения, то есть к сумме интегралов, что и доказывает линейность интеграла.
:::

### Монотонность

:::{prf:proposition}
:label: monotonicity
$$\begin{align*}
f, g\in\intclass(I)\\
f \leq g \text{ на } I
\end{align*}\implies\int\limits_If\d \vec x\leq\int\limits_Ig\d \vec x$$
:::

::::{prf:proof}

:::{embed} #l2-embed
:::

$$\forall\ve>0,\exists\delta>0\colon\forall(\T,\bxi)\colon\Delta_\T<\delta\colon
\begin{cases}
    \left|\int\limits_If\d \vec x-\sigma_f\right|<\ve\\
    \left|\int\limits_Ig\d \vec x-\sigma_g\,\right|<\ve\\
    \sigma_f\leq\sigma_g
\end{cases}$$

$$\int\limits_I f\d \vec x-\ve<\sigma_f\leq\sigma_g<\int\limits_Ig\d \vec x+\ve$$

$$\int\limits_If\d \vec x<\int\limits_I g\d \vec x+2\ve$$

$$\int\limits_If\d \vec x+\ve<\int\limits_I g\d \vec x+\ve$$

т. к. неравенство должно быть верно $\forall\ve>0$ даже для $\ve\ll 1$, то 

$$\int\limits_If\d \vec x\leq\int\limits_Ig\d \vec x$$
::::

### Оценка интеграла (сверху)

:::{prf:proposition}
:label: integral_upper_bound
$$f\in\intclass(I)\implies\left|\int\limits_If\d \vec x\right|\leq\sup_I|f|\cdot|I|$$
:::

:::{prf:proof}
$f\in\intclass(I)\implies f$ --- ограничена на $I$ $\implies$ [по необходимому условию](#required_condition_integral) следующее верно

$$-\sup_I|f|\leq f\leq\sup_I|f|$$

по [монотонности](#monotonicity)

$$-\int\limits_I\sup_I|f|\leq\int\limits_If\d \vec x\leq\int\limits_I\sup_I|f|$$

$$-\sup_I|f|\int\limits_I 1\d \vec x\leq\int\limits_If\d \vec x\leq\sup_I|f|\int\limits_I 1\d \vec x$$

$$\int\limits_I 1\d \vec x=\sum^k_{i=1}|I_i|\implies$$

$$-\sup_I|f|\cdot|I|\leq\int\limits_If\d \vec x\leq\sup_I|f|\cdot|I|$$
:::

## Мера по Лебегу

```{aside}
н. б. ч. с. --- не более, чем счётное
```

:::{prf:definition} Множество меры нуль по Лебегу
:label: null_measure
Множество $M\subset \R^n$ будем называть множеством {bluehighlight}`меры нуль по Лебегу`, если 

$\forall \ve >0, \exists \nmtc$ набор замкнутых бруcов $\{I_i\}$

* $M\subset \displaystyle\bigcup_i I_i$
* $\displaystyle\sum_i|I_i|<\ve$
:::

:::{prf:example}
${\bf a}\in\RR^2$ является многомерным множеством меры нуль по Лебегу, где $\bf a$ -- точка

$$d^2<\ve\quad d=\frac{\sqrt{\ve}}{2}$$

:::

## Свойства множества меры нуль по Лебегу

:::{prf:proposition} {bluehighlight}`Корректность определения` для открытых брусов
:label: null-measure-property-1
Если $\{I_i\}$ в определении являются открытыми брусами, то определение остаётся корректным.
:::    

:::{prf:proof}
:nonumber:
1. **Открытость** $\implies$ **замкнутость**

Пусть $\{I_i\}$ в определении --- открытые брусы, т. е. $\forall \ve > 0,\exists\nmtc$ набор $\{I_i\}$: $M\subset \displaystyle\bigcup_iI_i$ и $\displaystyle\sum_i|I_i|<\ve$, то есть $M\subset\R^n$ — множество меры нуль по Лебегу
    
Замкнём $\{I_i\}$ (присоединим грани) и получим набор $\{\tilde I_i\}$ --- замкнутые брусы. Таким образом, $\forall\ve, \tilde \ve, \exists\{I_i\}$

$$
M\subset\bigcup_iI_i \subset\bigcup_i\tilde I_i,  \quad |\tilde I_i| = |I_i|\implies \sum_i|\tilde I_i|<\ve
$$

тут всё окей.

2. **Замкнутость** $\implies$ **открытость**
Пусть $\{I_i\}$ — набор [замкнутых брусов](#bounded-blocks) из определения

$$
I_i = [a^1_i, b^1_i]\times\ldots\times[a^n_i, b^n_i]
$$

$$\begin{align*}
    \hat I_i&=\left(\frac{a_i^1+b_i^1}{2} - (b_i^1-a_i^1) ; \frac{a_i^1 + b_i^1}{2} + (b_i^1 - a_i^1)\right) \times \ldots\\
    &\times \left(\frac{a_i^n+b_i^n}{2} - (b_i^n-a_i^n) ; \frac{a_i^n + b_i^n}{2} + (b_i^n - a_i^n)\right)
\end{align*}$$

$$V_1 = \sum_i|I_i|<\frac{\ve}{2^n}$$

$$V_2 = \sum_i|\hat I_i| = 2^nV_1 < \ve$$

Получаем, что

* если $\forall \ve>0$ было $V_1<\frac{\ve}{2^n}$,
* то $\forall \{\hat I_i\}$ было $V_2<\ve$, и это множество меры нуль по Лебегу.
:::

:::{prf:proposition} {bluehighlight}`Транзитивность` меры нуль по Лебегу
:label: null-measure-property-2
$M$ --- множество меры нуль по Лебегу, $L\subset M\Longrightarrow L$ — множество меры нуль по Лебегу
:::

:::{prf:proof}
$M$ --- множество меры нуль по Лебегу $\implies\forall\ve>0\exists\nmtc\{I_i\}$:
1. $M\subset\displaystyle\bigcup_i I_i$
2. $\displaystyle\sum_i |I_i| < \ve$

---

1. $L\subset M\subset \displaystyle\bigcup_i I_i$ выполнено
2. выполнено автоматически по транзитивности $\implies L$ --- множество меры нуль по Лебегу. 
:::

:::{prf:proposition} {bluehighlight}`Объединение множеств` меры нуль по Лебегу
:label: null-measure-property-3
Не более чем счетное объединение множеств меры нуль по Лебегу --- множество меры нуль по Лебегу.
:::

:::{prf:proof}
Пусть $M=\bigcup^\infty_{k=1} M_k$, $M_k$ --- множество меры нуль $\forall k \implies \forall \ve_k, \exists \nmtc \{I_i^k\}_i$:

1. $M_k \subset \displaystyle\bigcup_i I^k_i$
2. $\displaystyle\sum_i|I_i^k|$

Следовательно, получаем

$$M \subset \bigcup_{i,k}^\infty I_i^k \implies \sum_{i,k}^\infty|I_i^k|<\sum_k^\infty \ve_k<\sum^\infty_{k=1}\frac{\ve}{2^k}=\ve\sum^\infty_{k=1}\frac{1}{2^k}=\ve>0$$
:::


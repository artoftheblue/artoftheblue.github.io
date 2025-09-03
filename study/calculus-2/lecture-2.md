# Лекция 2, 17.09.2024

## Кратные интегралы

### Необходимое условие интегрируемости

```{prf:theorem}
:label: required_condition_integral
$I$ — замкнутый брус

$f\in\mathcal{R}(I)\implies f$ — ограничена на $I$.
```

```{prf:proof}
:nonumber:
(от противного)

(hashRCI-1)=
1. Пусть $f$ неограничена на $I\implies\forall$ разбиения $\T=\{I_i\}^k_{i=1}$ бруса $I$, $\exists i_0\colon f$ неограничена на $I_{i_0}$.

---

(hashRCI-2)=
2. $f\in\mathcal{R}(I)\implies\forall\ve>0$, а значит и для $\ve=1,\exists\delta>0\colon\forall(\T,\xi)\colon\Delta_\T<\delta$ верно 

$$\left|\sigma(f,\T,\xi)-\overbrace{\int\limits_Tf(x)\d x}^A\right|< 1$$

где  $\exists A=\int\limits_If(x)\d x$ — конечный $\implies$

$$\overbrace{\int\limits_If(x)\d x-1}^A-1<\sigma(f,\T,\xi)<\overbrace{\int\limits_If(x)\d x}^A + 1\implies$$

$\sigma(f,\T,\xi)$ — ограничена

Однако с другой стороны по [пункту 1](#hashRCI-1) $\implies$ 

$$\sigma(f,\T,\xi)=\sum_{i\neq i_0}f(\xi_i)|I_i|+f(\xi_{i_0})|I_{i_0}|$$

т. к. на $I_{i_0} f(x)$ — неограниченная $\implies$ выбором подходящего $\xi_{i_0}$ можно сделать $f(\xi_{i_0})|I_{i_0}$ вместе с $\sigma(f, \T, \xi)$ сколь угодно большой $\implies$ [(1)](#hashRCI-1) и [(2)](#hashRCI-2) противоречат $\implies f$ — ограничена на $I$. 
```

### Свойства кратного интеграла

#### Линейность

```{prf:proposition} Линейность

$$f,g\in\mathcal{R}(I)\implies\forall\alpha,\beta\in\mathbb{R}, (\alpha f+\beta g)\in\mathcal{R}(I)$$

$$\int\limits_I(\alpha f+\beta g)dx=\alpha\int\limits_I fdx+\beta\int\limits_I gdx$$
```

```{prf:proof}
:nonumber:
$$\begin{align*}f\in\mathcal{R}(I)\implies\forall\varepsilon>0,\exists\delta_1>0,\forall(\mathbb{T},\xi)\colon\Delta_{\T}<\delta_1,&\\\left|\sigma(f,\mathbb{T},\xi)-\int\limits_Ifdx\right|<\frac{\varepsilon}{{1+|\alpha|+|\beta|}}&\end{align*}$$
$$\begin{align*}g\in\mathcal{R}(I)\implies\forall\varepsilon>0,\exists\delta_2>0,\forall(\mathbb{T},\xi)\colon\Delta_{\T}<\delta_2,&\\\left|\sigma(g,\mathbb{T},\xi)-\int\limits_Ifdx\right|<\frac{\varepsilon}{1+|\alpha|+|\beta|}&\end{align*}$$

Пусть тогда $\delta=\min\{\delta_1,\delta_2\} \implies$

$$\forall\ve>0,\exist\delta,\forall(\T,\xi)\colon\Delta_\T<\delta$$

$$|\sigma_f-A_f|<\frac{\ve}{1+|\alpha|+|\beta|},\qquad |\sigma_g-A_g|<\frac{\ve}{1+|\alpha|+|\beta|}$$

тогда рассмотрим

$$|\sigma_{\alpha f+\beta g}-A_{\alpha f+\beta g}\leq|\alpha|\cdot|\sigma_f-A_f|+|\beta|\cdot|\sigma_g-A_g|<(|\alpha|+|\beta|)\cdot\frac{\ve}{1+|\alpha|+|\beta|}<\ve$$
```

#### Монотонность

```{prf:proposition}
:label: monotonicity
$$\begin{align*}
f, g\in\mathcal{R}(I)\\
f \leq g \text{ на } I
\end{align*}\implies\int\limits_If\d x\leq\int\limits_Ig\d x$$
```

```{prf:proof}
$$\forall\ve>0,\exists\delta>0\colon\forall(\T,\xi)\colon\Delta_\T<\delta\colon\begin{align*}&\left|\int\limits_If\d x-\sigma_f\right|<\ve\\&\left|\int\limits_Ig\d x-\sigma_g\,\right|<\ve\end{align*}$$

$$\begin{align*}&\int\limits_I f\d x-\ve<\sigma_f\leq\sigma_g<\int\limits_Ig\d x+\ve\\&\implies\int\limits_If\d x<\int\limits_I g\d x+2\ve\end{align*}$$

т. к. неравенство должно быть верно $\forall\ve>0$ даже для $\ve\ll 1$, то 

$$\int\limits_If\d x\leq\int\limits_Ig\d x$$
```

#### Оценка интеграла (сверху)

```{prf:proposition}
$$f\in\mathcal{R}(I)\implies\left|\int\limits_If\d x\right|\leq\sup_I|f|\cdot|I|$$
```

```{prf:proof}
$f\in\mathcal{R}(I)\implies f$ — ограничена на $I$ [по необходимому условию](#required_condition_integral) $\implies$

$$-\sup_I|f|\leq f\leq\sup_I|f|$$

по [монотонности](#monotonicity)

$$-\sup_I|f|\cdot|I|\leq\int\limits_If\d x\leq\sup_I|f|\cdot|I|$$
```

## Мера по Лебегу

```{prf:definition}
Множество $M\subset \R^n$ будет называть множеством **меры нуль по Лебегу**
```
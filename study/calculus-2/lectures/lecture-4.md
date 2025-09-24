---

title: Лекция 4. Компакты в ℝⁿ
date: 2025-09-17
author: Artemis Feidenheimer
description: Компактность замкнутого бруса. Критерий компактности. Теорема Вейерштрасса о непрерывной на компакте функции. Непрерывность функции в точке.
numbering:
  enumerator: 4.%s

---

## Компакты в {math}`\mathbb{R}^n`

:::{prf:theorem} Компактность замкнутого бруса
:name: closed_block_compactness
{bluehighlight}`Замкнутый брус` $I\subset\RR^n$ --- {bluehighlight}`компакт`.
:::

:::{prf:proof}
**(От противного)** Рассмотрим замкнутый брус $I=[a_1,b_1]\times\ldots\times[a_n, b_n]$.

1. Предположим, что $I$ не компакт, тогда $\exists$ какое-то покрытие открытыми множествами $\{A_\alpha\}_{\alpha\in Z}$, где $Z$ --- какое-то множество, где $I\subset\{A_\alpha\}$, не позволяющее выделить конечное подпокрытие.
2. Поделим каждую сторону бруса $I$ пополам. Хотя бы один из полученных брусов не допускает выделения конечного подпокрытия (иначе $I$ --- компакт). Обозначим его $I_1$.
3. Повторим процесс деления ещё и ещё и получим систему вложенных брусков. $$I \supset I_1 \supset I_2 \supset \ldots$$ Таким образом, по теореме о вложенных отрезках $\exists !$ предельная точка $\displaystyle \vec a=(a_1,\ldots,a_n)\in\bigcap^\infty_{i=1} I_i, \exists! \vec a=\in\RR^n\colon a\in I_n$ при $n\to\infty$

4. Таким образом, $\exists \alpha_0, \vec a \in I\implies A_{\alpha_0}\colon \vec a \subset A_{\alpha_0}\oplus A_{\alpha_0}$ --- открытое $\implies\exists r>0\colon \ball_r(a)\subset A_{\alpha_0}$.

5. Знаем, что $d(I_n)\to 0$ при $n\to\infty$, т. е. $\exists N\colon\forall n>N,$ $$\vec a \subset \cdots \subset [I_{N+1} \subset I_{N+2} \cdots \to\infty] \subset \ball_r(\vec a) \subset A_{\alpha_0}$$ получаем, что бесконечное количество брусов покрыто только $A_{\alpha_0}$ из системы $\{A_\alpha\}\implies$ весь брус $I$ можно покрыть конечным числом множеств из $\{A_{\alpha_0}\}\implies$ получили противоречие $\implies$ получили компакт в $\RR^n$. 
:::

## Критерий компактности

:::{prf:theorem} Критерий компактности в $\RR^n$
:name: compactness-in-R-n-criterion
$\KK$ --- {bluehighlight}`компакт` в $\RR^n\iff \KK$ --- {bluehighlight}`замкнуто и ограничено`.
:::

:::{prf:proof}
$(\Rightarrow)$ **Необходимость**.

1. **Ограниченность**

    Пусть $\KK$ --- компакт, покроем его $\KK \subset \{\ball_r(0)\}^\infty_{r\in\NN}$ --- покрытие открытыми шарами $\implies\exists N, \KK \subset \ball_N(0)$, где $\{\ball_r(0)\}^N_{r=1}$ --- конечное подпокрытие $\implies \KK$ --- ограничено по определению.
2. **Замкнутость** (От противного)

    $\KK$ --- компакт, но не замкнуто, т. е. он не содержит **ВСЕ** предельные точки:
    1. Пусть $\exists x_0\not\in \KK\colon x_0$ --- [предельная](#limit-point) точка для $\KK\colon\forall\varepsilon>0,\overset{\circ}\ball_\varepsilon(x_0)\cap \KK\neq\varnothing$.
   
    2. Рассмотрим покрытие $\{\ball_{\frac{\delta(x)}{2}}(x)\}_{x\in \KK}$, где $\delta(x)=||x-x_0||$.
   
    3. Так как $\KK$ --- компакт $\implies\exists x_1,\ldots,x_k\colon \KK\subset \displaystyle\bigcup_{i=1}^k \ball_{\frac{\delta(x_i)}{2}}(x_i)$.
   
    4. Возьмём $\displaystyle \delta=\min_{1\leq i\leq k}\{\delta(x_i)\}$, тогда $\displaystyle \ball_{\frac{\delta}{2}}(x_0)\cap\left(\bigcup^k_{i=1}\ball_{\frac{\delta(x_i)}{2}}(x_i)\right)=\varnothing\implies \ball_{\frac{\delta}{2}}(x_0)\cap \KK=\varnothing$ и тем более, $\overset{\circ}\ball_{\frac{\delta}{2}}(x_0)\cap \KK=\varnothing\implies x_0$ не является предельной точкой $\KK\implies$ получили противоречие $\implies\KK$ замкнуто.

$(\Leftarrow)$ **Достаточность**. $\KK$ замкнуто и ограничено $\xRightarrow{?} \KK$ --- компакт.

1. $\KK$ ограничено $\exists r>0, \KK \subset \ball_r(0)$ Пусть $\exists$ замкнутый брус $I=[-r,r]^n\supset \KK$.

2. Пусть $\{A_\alpha\}$ --- покрытие открытыми множествами $\KK$, тогда $\{A_\alpha\}\cup\{\RR^n\setminus \KK\}$ --- покрытие открытыми множествами $I$, так как $\KK$ замкнуто, но $I$ --- брус в $\RR^n \implies I$ --- компакт $\implies$ из покрытия $\{A_{\alpha_i}\}^s_{i=1}\cup\{\RR^n\setminus \KK\}\supset I$ всегда можно выделить конечное подпокрытие. Тогда удаляя $\RR^n\setminus \KK$, получим конечное подпокрытие из $\{A_\alpha\}$ для $\KK$. (т. к. $\{A_\alpha\}$ --- произвольное покрытие открытого множества $\KK$).
:::

## Теорема Вейерштрасса о непрерывной на компакте функции

```{prf:theorem} Вейерштрасса о непрерывности на компакте функции
:label: weierstrass-continuous-function-on-compact
$\KK\subset \RR^n$ --- компакт. $f\colon \KK\mapsto\RR$. $f\in \contclass(\KK)$.

$f$ ограничена на $K$ и достигает своего наибольшего и наименьшего значения.
```

:::{prf:definition}
:label: continuity_at_point
$M, x_0\in M$

$f$ --- {bluehighlight}`непрерывная` в $x_0$, если $\forall \ve>0,\exists \delta_\ve>0\colon \forall x\in\ball^M_{\delta_ve}(x_0)\implies |f(x)-f(x_0)|<\ve$.
:::

```{prf:proof}
:::{div}
:label: lecture4-1
1. **Ограниченность** (От противного)

Предположим, что $f$ --- не ограниченная на $\KK$. $\implies\exists\{\vec x^k\}_{k=1}^\infty\subset \KK$, что $|f(\vec x^k)|>k$. 

$$\vec x^k=(x_1^k,\ldots,x^k_n)$$

$\KK$ --- компакт $\implies K$ замкнуто и ограничено $\implies\{\vec x^k\}$ ограничено $\implies \exists c,||\vec x^k||\leq c,\implies\{x^k\}^\infty_{k=1}$ ограничена

$$\forall i, |x_i^k|=\sqrt{|x^k_i|^2}\leq||\vec x^k||=\sqrt{(x')^1+\ldots+(x^n)^2}\leq c$$

$\implies\{x_i^k\}^\infty_{k=1}$ ограничена, тогда получаем, что по теореме Больцано-Вейерштрасса (из $\forall$ ограниченной последовательности можно выделить сходящуюся подпоследовательность)

$\{x^k\}=\{(x^k_1,x^k_2,\ldots,x^k_n)\}\implies\{x^k_1\}_{k=1}^\infty$ --- ограниченная $\implies \exists$ сходящаяся последовательность $\{x^{k_{j_1}}_1\}, \to a_1$, $\{x^{k_{j_1}}\}=\{(\underset{\to a_1}{x_1^{k_{j_1}}},\underset{\to a_2}{x_2^{k_{j_1}}},...,\underset{\to a_n}{x_n^{k_{j_1}}})\}$ для всех координат поочерёдно. 

Выберем в ограниченной $\{x_1^{k_{j_1}}\}$ сходящуюся подпоследовательность $\{x^{k_{j_2}}_2\}$. $x_2^{k_{j_2}}\to a_2$. $\{x_{k_{j_2}}\}=\{(x^{k_{j_2}}_1,x^{k_{j_2}}_2,\ldots,x^{k_{j_2}}_n)\}$. Получили точку $\vec a = (a_1,\ldots, a_n)$, к которой сходится последовательность.

---

$\{x^{k_{j_n}}\}^\infty_{j_n=1},x^{k_{j_n}}\to(a_1,\ldots, a_n)=\vec a \implies x^{k_{j_n}}\xrightarrow{j_n\to\infty} a$, т. е. $a$ предел $\KK$.

Так как $\KK$ --- компакт $\implies \KK$ замкнуто $\implies \KK$ содержит все свои предельные точки $\implies a \in \KK + f\in \contclass(\KK)\implies f$ --- непрерывная в т. $\vec a \implies$

$\exists\displaystyle\lim_{x\to x_0}f(x)=f(a)$, по условию непрерывности функции $f$ на $\KK$. С другой стороны, $|f(x^{k_{j_n}})| \to \infty$ при $j_n \to \infty$.

$|f(x^k)|>k\implies$ противоречие $\implies f$ ограничена на $\KK$.
:::

---

2. Теперь докажем **достижимость** $\sup$ (т.е., что $\displaystyle\exists x_0 \in \KK\colon f(x_0)=\sup_{x\in\KK}f(x)$).

Есть последовательность $\{x^s\}^\infty_{s=1}\in\KK$. 

$$\sup_{x\in\KK} f(x)-\frac{1}{s}\leq f(y_s)\leq\sup_{x\in\KK} f(x)$$

$\{x^s\}$ ограничена $\implies$ [как и в первом пункте](#lecture4-1) можно выделить сходящуюся подпоследовательность $\{x^{s_{j_n}}\}\xrightarrow[j_n\to\infty]{} x_0$.

$$\sup_{x_0\in\KK} f(x)-\frac{1}{s^{j_n}}\leq f(x^{s_{j_n}})\leq\sup_{x_0\in\KK} f(x)$$

по непрерывности и при $j_n\to\infty$ получаем

$$\sup_{x_0\in\KK} f(x)\leq f(x_0)\leq\sup_{x_0\in\KK} f(x)\implies f(x_0)=\sup_{x_0\in\KK} f(x)$$

Для $\inf$ доказывается аналогично.
```

:::{seealso} Замечание
Из критерия компактности $\implies$ если $K$ --- компакт, $L\subset K$ --- замкнуто, то $L$ --- компакт.
:::

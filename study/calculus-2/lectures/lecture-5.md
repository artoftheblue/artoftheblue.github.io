---

title: Лекция 5. Расстояния. Колебания функции
date: 2025-09-24
description: Расстояние между двумя множествами. Расстояние между непересекающимися компактами. Колебание функции на множестве. Колебание функции в точке. Колебание функции, непрерывной в точке. Пересечение разбиений бруса. Критерий Лебега об интегрируемости функции по Риману. Пересечение разбиения. Измельчение разбиения. 
numbering:
  enumerator: 5.%s

---

## Расстояние

### Расстояние между двумя множествами

:::{prf:definition} Расстояние между двумя множествами
{bluehighlight}`Расстоянием` между двумя множествами $X$ и $Y$, где $X, Y \subset \R^n$ будем называть число $\rho(X, Y)$:

$$\rho(X, Y) = \inf_{\substack{x\in X\\y\in{Y}}} ||x-y||$$
:::

:::{prf:example}
1. $X\cap Y \ne \varnothing \implies \rho(X, Y) = 0$

2. $\rho(X, Y) =0 \implies X \cap Y \ne \varnothing?$ --- нет, пример: $X = (0, 1); (Y = (1; 2)$ --- не компакты
:::

### Расстояние между компактами

:::{prf:proposition} Расстояние между двумя непересекающимися компактами
$\KK_1,\KK_2\subset \RR^n$ --- компакты,
$\KK_1\cap \KK_2=\varnothing$
$\implies$ $\rho(\KK_1,\KK_2)>0$
:::

:::{prf:proof}
$\KK_1\cap \KK_2=\varnothing \implies$ можно отобразить $\rho(\KK_1,\KK_2)>0$ в неотрицательную часть действительной прямой.

$f\colon \KK_1 \times \KK_2 \mapsto \RR^{+}$. Все пары точек $k_1\in \KK_1, k_2\in \KK_2$, то есть $(k_1, k_2)$ отобразим в $\rho(k_1, k_2)$, что в свою очередь можно отобразить в $\RR^+$.

$\KK_1\cap \KK_2=\varnothing \implies \nexists (k_i, k_j) \mapsto 0$, потому что это возможно только когда $k_i=k_j$, что в данном случае невозможно потому что множества не пересекаются.

Так как отображение компакта в метрическом пространстве --- компакт, то его $\operatorname{Im}(f)$ будет являться закрытым множеством $\implies$ так как $0\notin \operatorname{Im}(f) \implies \inf(\operatorname{Im}(f)) \neq 0$. $\inf(\operatorname{Im}(f)) > 0 \implies \rho(\KK_1,\KK_2)>0$.
:::


## Колебания функции

$M\subset\RR^n$ --- множество.

```{prf:definition}
:label: function_fluctuations_on_set
{bluehighlight}`Колебанием` $f$ {bluehighlight}`на множестве` $M$ будем называть число $\omega(f, M)$:

$$\omega(f, M):=\sup_{x,y\in M}|f(x)-f(y)|=\sup_{x\in M} f(x)-\inf_{y\in M} f(y)$$
```

```{prf:definition}
:label: function_fluctuations_at_point
{bluehighlight}`Колебанием` $f$ {bluehighlight}`в точке` $x_0\in M$ будем называть число $\omega(f, x_0)$:

$$\omega(f, x_0):=\lim_{r\to 0^+}\omega(f,\ball^M_r(x_0))$$

$$\ball^M_r(x_0)=\ball_r(x_0)\cap M$$
```

### Теорема о колебания непрерывной в точке функции

```{prf:theorem} О колебаниях непрерывной в точке функции
:label: fluctuation-continuity-at-point
$x_0\in M\subset\RR^n$, $f\colon V\mapsto\RR$.

$f$ --- непрерывна в точке $x_0\iff\omega(f, x_0)=0$.
```

```{prf:proof}
1. ($\Rightarrow$) **Необходимость.**

$f$ непрерывна в $x-0$, т. е. 

$$\forall\ve>0,\exists\delta>0,\forall x\in \ball^M_\delta(x_0)\hookrightarrow|f(x)-f(x_0)|<\frac{\ve}{3}$$

---

$$\omega(f,x_0)=\lim_{\delta\to0^+}\omega(f, \ball_\delta^M(x_0))$$

$$\begin{align*}
\omega(f,\ball^M_\delta(x_0))&=\sup_{x,y\in \ball^M_\delta(x_0)}|f(x)-f(y)|
\\&=\sup_{x,y\in \ball^M_\delta(x_0)}|f(x)-f(x_0)+f(x_0)-f(y)|
\\&\leq\sup_{x\in \ball^M_\delta(x_0)}|f(x)-f(x_0)|+\sup_{y\in\ball^M_\delta(x_0)}|f(y)-f(x_0)|
\\&\leq 2\sup_{x\in \ball^M_\delta(x_0)}|f(x)-f(x_0)|\leq \frac{2}{3}\ve<\ve
\end{align*}$$

т. е. при $\ve\to 0 \implies \delta \to 0$

$$\omega(f, \ball^M_\delta(x_0))<\ve\implies\boxed{\lim_{\delta\to 0}\omega(f, \ball_\delta^M(x_0))=0}$$

---

2. $(\Leftarrow)$ **Достаточность.**

$$\omega(f,x_0)=0:=\lim_{\delta\to0^+}(f,\ball^M_\delta(x_0))$$

$\forall\ve>0,\exists\delta>0,\forall x,y\in \ball^M_\delta(x_0),$

$$\omega(f,\ball_\delta^M(x_0))=\sup_{x,y\in \ball^M_\delta(x_0)}|f(x)-f(y)|<\ve$$

тогда возьмём $y=x_0$

$$\begin{align*}
  |f(x)-f(x_0)|&\leq\sup_{x\in \ball^M_\delta(x_0)}|f(x)-f(x_0)|\\&\leq\sup_{x,y\in \ball^M_\delta(x_0)}|f(x)-f(y)|<\ve
\end{align*}$$

т. е. $f(x)$ непрерывна в точке $x_0$.
```

### Почти всюду

```{prf:definition} Почти всюду
:label: almost_everywhere
Если какое-то свойство не выполняется только на множестве меры нуль по Лебегу, то будем говорить, что оно выполняется {bluehighlight}`почти всюду`.
```

```{prf:example}
$f(x)=\begin{cases}
1, & x\in\RR\setminus\ZZ\\
0, & x\in\ZZ
\end{cases}$

$\ZZ$ --- счётное $\implies f$ имеет разрывы в не более, чем счётном множестве точек $\implies f$ непрерывна почти всюду на $\RR$.
```

## Критерий Лебега

```{prf:theorem} Критерий Лебега
:label: Lebegue-criterion
$I\subset\RR^n$ --- замкнутый невырожденный брус, $f\colon I\mapsto\RR$.

$f\in\mathcal{R}(I)\iff f$ --- ограничена на $I$ и $f$ непрерывна почти всюду на $I$.
```

```{prf:proof} Идёт без доказательства, но оно есть
:nonumber:
:class: dropdown

1. **Необходимость**

Если $f$ интегрируема, то она ограничена по необходимому условию интегрируемости. Осталось показать, что множества разрыва меры нуль. От противного: пусть это не так.

Обозначим множество всех точек разрыва ф-ии $f$ на $I$ за $T$ и заметим, что $T = \displaystyle\bigcup_{k\in\mathbb{N}}T_k$, где\\
$T_k = \{x\in I | \omega(f, x) \ge \frac{1}{k}\}$. Если $T$ не меры нуль, то существует $T_{k_0}$ не меры нуль (если они все меры нуль, то по свойству множеств меры нуль счетное объединение таких множеств тоже было бы меры нуль).

Для произвольного разбиения $\T = \{I_i\}_{i=1}^m$ бруска $I$ разобъем эти бруски на две кучи: первая $A = \{I_i | I_i\cap T_{k_0} \ne \varnothing, \omega(f, I_i) \ge \frac{1}{2k_0}\}$ и вторая $B = \T\setminus A$. Покажем, что $A$ является покрытием множества $T_{k_0}$, т.е. $T_{k_0} \subset \displaystyle\bigcup_{i: I_i\in A} I_i$ любая точка $x\in T_{k_0}$ является либо

* внутренней для некоторого бруска $I_i$. В этом случае $\omega(f, I_i) \ge \omega(f, x) \ge \frac{1}{k_0} > \frac{1}{2k_0}$, т.е. $I_i \in A$, либо
* точка $x$ лежит на границе некоторого количества брусков (не более чем $2^n$ штук). Тогда хотя бы на одном из них колебание $\omega(f, I_i) \ge \frac{1}{2k_0}$ (т.е. $I_i \in A$): если бы такого не нашлось, то в любой малой окрестности $B_{\ve}(x)$ выполняется следующее:
\begin{equation*}
\omega(f, x) \le \sup_{x', x''\in B_{\ve}(x)} |f(x')-f(x'')| \le \sup_{x'\in B_{\ve}(x)}|f(x')-f(x)| + \sup_{x''\in B_{\ve}(x)}|f(x)-f(x'')| < \frac{1}{2k_0} + \frac{1}{2k_0} = \frac{1}{k_0}
\end{equation*}
т.е. $x\not\in T_{k_0}$ --- **противоречие**.

Таким образом, каждая точка $x\in T_{k_0}$ покрывается некоторым бруском $I_i \in A$, т.е. $A$ - покрытие $T_{k_0}$. Тогда существует $c: \displaystyle\sum_{i:I_i\in A}|I_i| \ge c > 0$ для всех разбиений $\T$ (если бы меняя разбиения мы могли получить сумму объемов этих брусков сколь угодно маленькую, то получилось бы, что $T_{k_0}$ меры нуль)

Возьмем два набора отмеченных точек $\xi^1$ и $\xi^2$. На брусках из кучки $B$ будем их брать одинаковыми, т.е. для $I_i\in B \,\, \xi_i^1 = \xi_i^2$. А на брусках из кучки $A$ будем брать такие, чтобы 
\begin{equation*}
f(\xi_i^1) - f(\xi_i)^2 \ge \frac{1}{3k_0} \text{ (у нас там колебания} \ge 1/2k_0, \text{ так что такие найдутся)}
\end{equation*}

Получаем:
\begin{equation*}
\begin{aligned}
|\sigma(f, \T, \xi^1) - \sigma(f, \T, \xi^2) 
= \left|\sum_i(f(\xi_i^1) - f(\xi_i^2))|I_i|\right|\\
= \left|\sum_{i: I_i\in A}(f(\xi_i^1) - f(\xi_i^2))|I_i| + \sum_{i:I_i\in B}(f(\xi_i^1) - f(\xi_i^2))|I_i|\right|\\
= \left|\sum_{i: I_i\in A} (f(\xi_i^1) - f(\xi_i^2))|I_i|\right| \ge \frac{1}{3k_0} \sum_{i:I_i\in A}|I_i| \ge \frac{c}{3k_0} > 0
\end{aligned}
\end{equation*}
т.е. интегральные суммы не могут стремиться к одному и тому же числу, значит $f$ не интегрируема ---- **противоречие**.

2. **Достаточность**

Для любого $\ve > 0$ рассмотрим $T_{\ve} = \{x\in I| \omega(f, x) \ge \ve\}$. Покажем, что это множество - компакт. Ограниченность очевидна (подмножества бруска), а замкнутость проверим от противного. Пусть $a$ - предельная точка $T_{\ve}: \,\, a\not\in T_{\ve}$. Т.к. она предельная, то существует $\{x^k\}: x^k \in B_{\frac{1}{k}}(a)$. Т.к. $B_{\frac{1}{k}}$ - открытые шары, то наши точки лежат в них с окрестностями, т.е. сущесвтуют $\delta_k : B_{\delta_k}(x_K) \subset B_{\frac{1}{k}}(a)$. Тогда
\begin{equation*}
\omega(f, B_{\frac{1}{k}}(a)) \ge \omega(f, B_{\delta_k}(x_K)) \ge \omega(f, x_k) \ge \ve
\end{equation*}
Переходя к пределу $k\to\infty : \omega(f, a) \ge \ve$, т.е. $a\in T_{\ve}$ - противоречие. Значит $T_{\ve}$ - замкнуто, и, следовательно, компактно.

Множество $T_{\ve}$ - множество меры нуль (как подмножество множества меры нуль). Значит, его можно покрыть не более чем счетным объединением открытых брусков $I_i: \displaystyle\sum_i|I_i| < \ve$. Т.к. это открытое покрытие, а $T_{\ve}$ - компакт, то существует конечное подпокрытие: $T_{\ve} \subset \displaystyle\bigcup_{i=1}^m I_i$, при этом $\displaystyle\sum_{i=1}^m |I_i| < \ve$.

Обозначим три множества: $C_1 = \displaystyle\bigcup_{i=1}^mI_i, \quad C_2 = \displaystyle\bigcup_{i=1}^mI_i', C_3 = \displaystyle\bigcup_{i=1}^mI_i''$, где $I_i', I_i''$ - бруски, полученные гомотетией с центром в центре $I_i$ с коэффициентом 2 и 3 соответственно.

Заметим, что

* $|C_3| \le \displaystyle\sum_{i=1}^m|I_i''|| = 3^n \displaystyle\sum_{i=1}^m|I_i| < 3^n \ve$
* расстояние $\rho(\partial C_2, \partial C_3) = \delta_1 > 0$ (теорема про расстояние между компактами)
* Множество $K = I\backslash(C_2\backslash \partial C_2)$ - компакт. Кстати, любое множество с диаметром меньше $\delta_1$ либо польностью лежит в $C_3$, либо полностью в $K$.
* $T_{\ve} \cap K = \varnothing$, т.к. $T_{\ve} \subset C_1 \subset C_2$. Следовательно, $\forall x\in K \,\, \omega(f, x) < \ve$. Тогда по теореме Кантора-Гейне $\exists \delta_2 > 0: \,\, \forall x\in K \,\, \omega(f, B_{\delta_2}(x)) < \ve + \ve = 2\ve$
\end{itemize}

Выберем $\delta = \min\{\delta_1, \delta_2\}$. Тогда для любых разбиений $\T_1 = \{I_k^1\}, \T_2 = \{I_i^2\}: \lambda{\T_1} < \delta, \lambda(\T_2) < \delta$

Рассмотрим пересечение этих разбиений $\T = \T_1 \cap \T_2$, т.е. такое разбиение $\T = \{I_{ik}\}$, что $I_k^1 = I_{i_1k} \bigsqcup\ldots\bigsqcup I_{i_mk}$ и $I_i^2 = I_{ik_1} \bigsqcup \ldots\bigsqcup I_{ik_l}$. Очевидно $\lambda(\T) < \delta$.

Для произвольных наборов отмеченных точек:
\begin{equation*}
|\sigma(f, \T_1, \xi^1) - \sigma(f, \T_2, \xi^2)| \le |\sigma(f, \T_1, \xi^1) - \sigma(f, \T, \xi)| + |\sigma(f, \T_2, \xi^2) - \sigma(f, \T, \xi)|
\end{equation*}

Рассмотрим отдельное слагаемое:
\begin{equation*}
\begin{aligned}
|\sigma(f, \T_1, \xi^1) - \sigma(f, \T, \xi)| = \left|\sum_{i, j}(f(\xi_i^1) - f(\xi_{ij}))|I_{ij}\right|\
\le \sum_{I_{ij}\in C_3}|f(\xi_i^1) - f(\xi_{ij})||I_{ij}| + \sum_{I_{ij\in K}}|f(\xi_i^1)-f(\xi_{ij})||I_{ij}|\le 2M\cdot e^n\ve + 2\ve |I| = \epsilon(2M\cdot 3^n + 2|I|)
\end{aligned}
\end{equation*}
т.к. $f$ ограничена некоторой константой $M$ и см пункты $a), d)$, то

Т.к. для $(\T_2, \xi^2)$ все выкладки аналогичные, то получаем:

\begin{equation*}
|\sigma(f, \T_1, \xi^1) - \sigma(f, \T, \xi)| \le \epsilon(2M\cdot 3^n + 2|I|)
\end{equation*}

Следовательно, существует предел $\displaystyle\lim_{\lambda(\T)\to0}\sigma(f, \T, \xi)$ (Критерий коши для функций)

```

## Разбиения

### Пересечение разбиений

```{prf:definition} Пересечение разбиений
:label: intersection_of_two_decompositions
$I\subset \RR^n$ --- невырожденный замкнутый брус

$\TT_1=\{I^1_i\}_{i=1}^k$ --- первое разбиение бруса $I$, <br>
$\TT_2=\{I^2_j\}_{j=1}^m$ --- второе разбиение бруса $I$ 

{bluehighlight}`Пересечением` $\TT_1\cap\TT_2$ будем называть множество $\{I_{ij}\}$: $\forall I_{ij}$

1. $\exists k\colon I_{ij}$ входит в разбиение $I^1_k$
2. $\exists m\colon I_{ij}$ входит в разбиение $I^2_k$
3. $I_{ij}$ входит в разбиение $I$.
```

### Измельчение разбиений

:::{prf:definition} Измельчение разбиения
:name: decomposition_shredding
Разбиение $\TT_1=\{I^1_k\}$ будем называть {bluehighlight}`измельчением разбиения` $\TT_2=\{I^2_m\}$, если $\forall k,\exists m\colon I^1_k$ входит в разбиение $I^2_m\implies\TT_1\cap\TT_2$ является измельчением $\TT_1$ и $\TT_2$.
:::
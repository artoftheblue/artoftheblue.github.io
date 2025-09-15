---

title: Лекция 5. Теорема Вейерштрасса о непрерывной на компакте функции. Колебания функции
date: 2025-09-10
author: Artemis Feidenheimer
description: Теорема Вейерштрасса о непрерывной функции на компакте. Расстояние между двумя множествами. Расстояние между непересекающимися компактами. Колебание функции на множестве. Колебание функции в точке. Колебание функции, непрерывной в точке. Пересечение разбиений бруса. Критерий Лебега об интегрируемости функции по Риману. Измельчение разбиения. 
numbering:
  enumerator: 5.%s

---

## Теорема Вейерштрасса о непрерывной на компакте функции

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

## Теорема Вейерштрасса о непрерывной функции на компакте. Колебания функции

### Теорема Вейерштрасса о непрерывной функции на компакте

Пусть {math}`K\in \R^n` — компакт и функция {math}`f: K\mapsto \R` - непрерывная. Тогда {math}`f` на {math}`K` достигает наибольшее и наименьшее значения.

*   *Ограниченность.* От противного: пусть существует последовательность {math}`\{x^k\} \subset K \,:\, |f(x^k)| > k`. Из ограниченности {math}`K` следует ограниченность последовательности {math}`\{x^k\}`, и как следствие ограничены последовательности отдельных коордиант:

    ```{math}
    |x_i^k| = \sqrt{\sum_{i=1}^n|x_i^k|} = ||x^k|| \le C \quad \text{для некоторого }C
    ```

    По теореме Больцано-Вейерштрасса у {math}`\{x_1^k\}` существует сходящаяся подпоследовательность {math}`x_1^{k_{j_1}} \to a_1, j_1 \to \infty`. Для последовательности {math}`\{x_2^{k_{j_1}}\}` существует сходящаяся последовательность {math}`x_2^{k_{j_2}} \to a_2, j_2 \to \infty`. И т.д. Получаем сходящуюся подпоследовательность:

    ```{math}
    x^{k_j} = (x_1^{k_j}, x_2^{k_J}, \ldots, x_n^{k_j})\to(a_1, a_2, \ldots, a_n) = a
    ```

    Точка {math}`a` — предельная для {math}`K`. В силу замкнутости {math}`K` т. {math}`a\in K`. А из непрерывности функции {math}`f` получаем {math}`f(x^{k_j}) \to f(a)`. А с другой стороны, {math}`f(x^{k_j})\to\infty` из выбора исходной последовательности. **противоречие**

*   *Достижение наибольшего (наименьшего) значения.* Итак, мы доказали, что {math}`f` — ограничена на {math}`K`. Выберем последовательность {math}`\{x^k\}`:

    ```{math}
    \sup_K f - \frac{1}{k_j} \le f(x^{k_j}) \le \sup_K f
    ```

    в силу непрерывности {math}`f`:

    ```{math}
    \sup_K f \le f(a) \le \sup_K f
    ```

    Получаем {math}`f(a) = \displaystyle\sup_K f`, т.е. максимальное значение достиигается в точке {math}`x = a`. Для {math}`\displaystyle\inf_K f` доказательство аналогично

### Расстояние между двумя множествами

Расстоянием между двумя множествами {math}`X` и {math}`Y`, где {math}`X, Y \subset \R^n` будем называть число {math}`\rho(X, Y)`:

```{math}
\rho(X, Y) = \inf_{\substack{x\in X\\y\in{Y}}} ||x-y||
```

**Примеры:**\


1.  {math}`X\cap Y \ne \varnothing \implies \rho(X, Y) = 0`

2.  {math}`\rho(X, Y) =0 \implies X \cap Y \ne \varnothing?` — нет, пример: {math}`X = (0, 1); (Y = (1; 2)` - не компакты

### Расстояние между непересекающимися компактами

Если {math}`K_1, K_2 \subset \R^n` — компакты и {math}`K_1 \cap K_2 = \varnothing`, то {math}`\rho(K_1, K_2)` > 0

Функция {math}`f(x,y)=||x-y||` определена на {math}`K_1\times K_2 \subset \R^n\times\R^n = \R^{2n}`, причем {math}`f`–непрерывная функция.

По теореме Вейерштрасса эта функция достигает своего максимального и минимального значений. Т.е. существуют {math}`x_0 \in K_1, y_0 \in K_1: f(x_0, y_0) = \rho(K_1, K_2)`. А {math}`f(x_0,y_0) = 0` тогда и только тогда, когда {math}`x_0 = y_0`.

### Колебание функции на множестве

Колебанием функции {math}`f` на множестве {math}`M\subset \R^n` будем называть число {math}`\omega(f, M)`:

```{math}
\omega(f, M) = \sup_{x, y\in M}|f(x) - f(y)| = \sup_{x\in M} - \inf_{y\in M} f(y)
```

### Колебание функции в точке

Колебанием функции {math}`f` в точке {math}`x_0 \in M \subset\R^n` будем называть число

```{math}
\omega(f, x_0):= \lim_{r \to 0+} \omega(f, B_r^M(x_0)), \quad \text{где } B_r^M = B_r(x_0)\cap M
```

**Напоминание:** По определению, функция {math}`f: M\to \R` непрерывна в точке {math}`x_o\in M`, если {math}`\forall \ve > 0\,\, \exists\delta > 0: \forall x\in M \quad |x-x_0| < \delta\,\, \iff x\in B_{\delta}(x_0) \cap M` верно {math}`|f(x) - f(x_0)| < \ve`

### Колебание функции, непрерывной в точке

Пусть {math}`x_0 \in M \subset \R^n; \,\, f: M\mapsto\R`. {math}`f` — непрерывна в точке {math}`x_0 \iff \omega(f, x_0) = 0`

*   *Необходимость*\


    {math}`f` — непрерывна в т. {math}`x_0 \in M \implies \forall \ve > 0 \,\, \exists\delta > 0:\,\, \forall x \in B_{\delta}(x_0)\cap M = B_{\delta}^M(x_0) \implies |f(x) - f(x_0)| < \frac{\ve}{3}`\
    &#x20;Рассмотрим {math}`\omega(f, x_0) := \displaystyle\lim_{\delta\to0+} \omega(f, B_{\delta}^M(x_0))`:

    ```{math}
    \begin{aligned}
                    \omega(f, B_{\delta}^M(x_0)) = \sup_{x, y \in B_{\delta}(x_0)}|f(x) - f(y)| \le \sup_{x\in B_{\delta}(x_0)} |f(x) - f(x_0)| + \sup_{y\in B_{\delta}(x_0)} |f(y) - f(x_0)| \le \frac{2\ve}{3} < \ve
                \end{aligned}
    ```

    При {math}`\ve\to0 \implies \delta\to0` и {math}`\omega(f, B_{\delta}^M(x_0))\to0`, т.е. {math}`\omega(f, x_0) = 0`

*   *Достаточность*

    Пусть {math}`0 = \omega(f, x_0) := \displaystyle\lim_{\delta\to0+} \omega(f, B_{\delta}^M(x_0))`, т.е.

    ```{math}
    \forall \ve > 0 \,\, \exists\delta > 0: \quad \forall x, y \in B_{\delta}^M(x_0) \quad \sup_{x, y\in B_{\delta}^M(x_0)} |f(x)-f(y)| < \ve
    ```

    Получаем, что

    ```{math}
    \forall \ve > 0 \,\, \exists \delta > 0: \forall x \in B_{\delta}^M(x_0) \implies |f(x)-f(x_0)| < \ve \implies
    ```

Если какое-то свойство не выполняется лишь на множестве меры нуль, то говорят, что это свойство выполняется почти всюду.

**Пример:** {math}`f(x) = \begin{cases}
        1, x \in \R\backslash \mathbb{Z}\\
        0, x \in \mathbb{Z}
    \end{cases}` — непрерывна почти всюду на {math}`\R`

### Пересечение разбиений бруса

Пусть {math}`\T_1 = \{I^1_k\}` и {math}`\T_2 = \{I^2_m\}` — два разбиения бруса {math}`I \subset \R^n`.

Пересечением разбиений {math}`(\T_1 \cap \T_2)` будем называть мн-во всех брусов {math}`\{I_{ij}\}: \forall I_{ij}` {math}`\begin{cases}     1) \exists k: I_{ij} \in \{I^1_k\}\\     2) \exists m: I_{ij} \in \{I^2_m\}\\     3) \{I_{ij}\} - \text{ разбиение бруса } I   
\end{cases}`

### Критерий Лебега об интегрируемости функции по Риману

Если {math}`I\subset \R^n` — замкнутый невырожденный брус, {math}`f: I\to\R`, то {math}`f\in R(I) \iff f` ограничена и непрерывна почти всюду на {math}`I`

*   *Необходимость*

    Если {math}`f` интегрируема, то она ограничена по необходимому условию интегрируемости. Осталось показать, что множества разрыва меры нуль. От противного: пусть это не так.

    Обозначим множество всех точек разрыва ф-ии {math}`f` на {math}`I` за {math}`T` и заметим, что {math}`T = \displaystyle\bigcup_{k\in\mathbb{N}}T_k`, где\
    &#x20;{math}`T_k = \{x\in I | \omega(f, x) \ge \frac{1}{k}\}`. Если {math}`T` не меры нуль, то существует {math}`T_{k_0}` не меры нуль (если они все меры нуль, то по свойству множеств меры нуль счетное объединение таких множеств тоже было бы меры нуль).

    Для произвольного разбиения {math}`\T = \{I_i\}_{i=1}^m` бруска {math}`I` разобъем эти бруски на две кучи: первая {math}`A = \{I_i | I_i\cap T_{k_0} \ne \varnothing, \omega(f, I_i) \ge \frac{1}{2k_0}\}` и вторая {math}`B = \T\backslash A`. Покажем что {math}`A` является покрытием множества {math}`T_{k_0}`, т.е. {math}`T_{k_0} \subset \displaystyle\bigcup_{i: I_i\in A} I_i` любая точка {math}`x\in T_{k_0}` является либо

    *   внутренней для некоторого бруска {math}`I_i`. В этом случае {math}`\omega(f, I_i) \ge \omega(f, x) \ge \frac{1}{k_0} > \frac{1}{2k_0}`, т.е. {math}`I_i \in A`, либо

    *   точка {math}`x` лежит на границе некоторого количества брусков (не более чем {math}`2^n` штук). Тогда хотя бы на одном из них колебание {math}`\omega(f, I_i) \ge \frac{1}{2k_0}` (т.е. {math}`I_i \in A`): если бы такого не нашлось, то в любой малой окрестности {math}`B_{\ve}(x)` выполняется следующее:

        ```{math}
        \omega(f, x) \le \sup_{x', x''\in B_{\ve}(x)} |f(x')-f(x'')| \le \sup_{x'\in B_{\ve}(x)}|f(x')-f(x)| + \sup_{x''\in B_{\ve}(x)}|f(x)-f(x'')| < \frac{1}{2k_0} + \frac{1}{2k_0} = \frac{1}{k_0}
        ```

        т.е. {math}`x\not\in T_{k_0}` — **противоречие**.

    Таким образом, каждая точка {math}`x\in T_{k_0}` покрывается некоторым бруском {math}`I_i \in A`, т.е. {math}`A` - покрытие {math}`T_{k_0}`. Тогда существует {math}`c: \displaystyle\sum_{i:I_i\in A}|I_i| \ge c > 0` для всех разбиений {math}`\T` (если бы меняя разбиения мы могли получить сумму объемов этих брусков сколь угодно маленькую, то получилось бы, что {math}`T_{k_0}` меры нуль)

    Возьмем два набора отмеченных точек {math}`\xi^1` и {math}`\xi^2`. На брусках из кучки {math}`B` будем их брать одинаковыми, т.е. для {math}`I_i\in B \,\, \xi_i^1 = \xi_i^2`. А на брусках из кучки {math}`A` будем брать такие, чтобы

    ```{math}
    f(\xi_i^1) - f(\xi_i)^2 \ge \frac{1}{3k_0} \text{ (у нас там колебания} \ge 1/2k_0, \text{ так что такие найдутся)}
    ```

    Получаем:

    ```{math}
    \begin{aligned}
                |\sigma(f, \T, \xi^1) - \sigma(f, \T, \xi^2) 
                = \left|\sum_i(f(\xi_i^1) - f(\xi_i^2))|I_i|\right|\\
                = \left|\sum_{i: I_i\in A}(f(\xi_i^1) - f(\xi_i^2))|I_i| + \sum_{i:I_i\in B}(f(\xi_i^1) - f(\xi_i^2))|I_i|\right|\\
                = \left|\sum_{i: I_i\in A} (f(\xi_i^1) - f(\xi_i^2))|I_i|\right| \ge \frac{1}{3k_0} \sum_{i:I_i\in A}|I_i| \ge \frac{c}{3k_0} > 0
            \end{aligned}
    ```

    т.е. интегральные суммы не могут стремиться к одному и тому же числу, значит {math}`f` не интегрируема — **противоречие**.

*   *Достаточность*

    Для любого {math}`\ve > 0` рассмотрим {math}`T_{\ve} = \{x\in I| \omega(f, x) \ge \ve\}`. Покажем, что это множество - компакт. Ограниченность очевидна (подмножества бруска), а замкнутость проверим от противного. Пусть {math}`a` - предельная точка {math}`T_{\ve}: \,\, a\not\in T_{\ve}`. Т.к. она предельная, то существует {math}`\{x^k\}: x^k \in B_{\frac{1}{k}}(a)`. Т.к. {math}`B_{\frac{1}{k}}` - открытые шары, то наши точки лежат в них с окрестностями, т.е. сущесвтуют {math}`\delta_k : B_{\delta_k}(x_K) \subset B_{\frac{1}{k}}(a)`. Тогда

    ```{math}
    \omega(f, B_{\frac{1}{k}}(a)) \ge \omega(f, B_{\delta_k}(x_K)) \ge \omega(f, x_k) \ge \ve
    ```

    Переходя к пределу {math}`k\to\infty : \omega(f, a) \ge \ve`, т.е. {math}`a\in T_{\ve}` - противоречие. Значит {math}`T_{\ve}` - замкнуто, и, следовательно, компактно.

    Множество {math}`T_{\ve}` - множество меры нуль (как подмножество множества меры нуль). Значит, его можно покрыть не более чем счетным объединением открытых брусков {math}`I_i: \displaystyle\sum_i|I_i| < \ve`. Т.к. это открытое покрытие, а {math}`T_{\ve}` - компакт, то существует конечное подпокрытие: {math}`T_{\ve} \subset \displaystyle\bigcup_{i=1}^m I_i`, при этом {math}`\displaystyle\sum_{i=1}^m |I_i| < \ve`.

    Обозначим три множества: {math}`C_1 = \displaystyle\bigcup_{i=1}^mI_i, \quad C_2 = \displaystyle\bigcup_{i=1}^mI_i', C_3 = \displaystyle\bigcup_{i=1}^mI_i''`, где {math}`I_i', I_i''` - бруски, полученные гомотетией с центром в центре {math}`I_i` с коэффициентом 2 и 3 соответственно.

    Заметим, что

    *   {math}`|C_3| \le \displaystyle\sum_{i=1}^m|I_i''|| = 3^n \displaystyle\sum_{i=1}^m|I_i| < 3^n \ve`

    *   расстояние {math}`\rho(\partial C_2, \partial C_3) = \delta_1 > 0` (теорема про расстояние между компактами)

    *   Множество {math}`K = I\backslash(C_2\backslash \partial C_2)` - компакт. Кстати, любое множество с диаметром меньше {math}`\delta_1` либо польностью лежит в {math}`C_3`, либо полностью в {math}`K`.

    *   {math}`T_{\ve} \cap K = \varnothing`, т.к. {math}`T_{\ve} \subset C_1 \subset C_2`. Следовательно, {math}`\forall x\in K \,\, \omega(f, x) < \ve`. Тогда по теореме Кантора-Гейне {math}`\exists \delta_2 > 0: \,\, \forall x\in K \,\, \omega(f, B_{\delta_2}(x)) < \ve + \ve = 2\ve`

    Выберем {math}`\delta = \min\{\delta_1, \delta_2\}`. Тогда для любых разбиений {math}`\T_1 = \{I_k^1\}, \T_2 = \{I_i^2\}: \lambda{\T_1} < \delta, \lambda(\T_2) < \delta`

    Рассмотрим пересечение этих разбиений {math}`\T = \T_1 \cap \T_2`, т.е. такое разбиение {math}`\T = \{I_{ik}\}`, что {math}`I_k^1 = I_{i_1k} \bigsqcup\ldots\bigsqcup I_{i_mk}` и {math}`I_i^2 = I_{ik_1} \bigsqcup \ldots\bigsqcup I_{ik_l}`. Очевидно {math}`\lambda(\T) < \delta`.

    Для произвольных наборов отмеченных точек:

    ```{math}
    |\sigma(f, \T_1, \xi^1) - \sigma(f, \T_2, \xi^2)| \le |\sigma(f, \T_1, \xi^1) - \sigma(f, \T, \xi)| + |\sigma(f, \T_2, \xi^2) - \sigma(f, \T, \xi)|
    ```

    Рассмотрим отдельное слагаемое:

    ```{math}
    \begin{aligned}
                |\sigma(f, \T_1, \xi^1) - \sigma(f, \T, \xi)| = \left|\sum_{i, j}(f(\xi_i^1) - f(\xi_{ij}))|I_{ij}\right|\
                \le \sum_{I_{ij}\in C_3}|f(\xi_i^1) - f(\xi_{ij})||I_{ij}| + \sum_{I_{ij\in K}}|f(\xi_i^1)-f(\xi_{ij})||I_{ij}|\le 2M\cdot e^n\ve + 2\ve |I| = \epsilon(2M\cdot 3^n + 2|I|)
            \end{aligned}
    ```

    т.к. {math}`f` ограничена некоторой константой {math}`M` и см пункты {math}`a), d)`, то

    Т.к. для {math}`(\T_2, \xi^2)` все выкладки аналогичные, то получаем:

    ```{math}
    |\sigma(f, \T_1, \xi^1) - \sigma(f, \T, \xi)| \le \epsilon(2M\cdot 3^n + 2|I|)
    ```

    Следовательно, существует предел {math}`\displaystyle\lim_{\lambda(\T)\to0}\sigma(f, \T, \xi)` (Критерий коши для функций)

### Измельчение разбиения

Разбиение {math}`\T_1 = \{I^1_k\}` будем называть измельчением разбиения {math}`\T_2 = \{I^2_m\}`, если {math}`\forall k \,\, \exists m: I_k^1 \in I_m^2 \implies \T = \T_1\cap \T_2` является измельчением {math}`\T_1` и {math}`\T_2`

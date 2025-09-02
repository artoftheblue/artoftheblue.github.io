# Лекция 5, 30.09.2024

## Аксиоматика Колмогорова

```{note}
**Аксиоматика Колмогорова** гласит, что всякий непротиворечивый вероятностный эксперимент может быть описан на языке теории меры.
```

```{prf:definition}
Пусть задано непустое множество $\Omega$. Система подмножеств $\FF$ множества $\Omega$ называется **$\sigma$-алгеброй**, если выполнены следующие три аксиомы.

1. ($\sigma$1) $\Omega \in \FF$ 
2. ($\sigma$2) если $A\in\FF$, то $A^c\in\FF\ (A^c=\Omega\setminus A)$
3. ($\sigma$3) если $A_1,A_2,A_3,\dots\in\FF$, то $\bigcup^\infty_{i=1}A_i\in\FF$

При этом $\Omega$ называется **единицей** $\sigma$-алгебры $\FF$.
```

```{prf:example}
$\Omega = \{a,b,c,d\}$

Является ли $\FF=\{\emptyset,\Omega\}$ $\sigma$-алгеброй?

0. ($\sigma$0) $\emptyset\subseteq\Omega,\ \Omega\subseteq\Omega\ \checkmark$
1. ($\sigma$1) $\Omega\in\FF\ \checkmark$
2. ($\sigma$2) $\emptyset^c=\Omega\in\FF,\Omega^c=\emptyset\in\FF\ \checkmark$
3. ($\sigma$3) Пусть $A_1,\dots,A_{n-1}\in\FF$

$$\bigcup^\infty_{i=1}A_i=\left[\begin{align*}
    \emptyset\in\FF, & \text{ если все } A_i=\emptyset\\
    \Omega\in\FF, & \text{ если хотя бы одно из } A_i=\Omega
\end{align*}\right.$$
```

```{prf:example}
$\Omega=\{a, b, c, d\}$

$\FF=2^\Omega$ — все подмножества множества $\Omega$.

$$\begin{align*}\FF=\{&\emptyset,\{a\},\{b\},\{c\},\{d\},\{a, b\}, \{a, c\}, \{a, d\}, \{b, c\},\\& \{b, d\}, \{c, d\}, \{a, b, c\},\{a, b, d\}, \{a, c, d\},\{b, c, d\},\Omega\}\end{align*}$$

Является ли $\FF$ — $\sigma$-алгеброй?

0. ($\sigma$0) любой элемент из $\FF$ является подмножеством $\Omega$
1. ($\sigma$1) $\Omega\in\FF\ \checkmark$
2. ($\sigma$2) $\checkmark$
3. ($\sigma$3) $\bigcup^\infty_{i=1}\underset{\in\FF}{A_i}\subseteq\Omega\implies\bigcup^{\infty}_{i=1}A_i\in\FF$
```

```{prf:example}
$\Omega=\{a, b, c, d\}$

$\FF=\{\emptyset,\Omega,\{a, b\}\}$ — $\sigma$-алгебра

Нет, т. к. $\{a, b\}\in\FF$, то $\{a, b\}=\{c, d\}\not\in\FF$
```

```{prf:proposition}
Пусть $\FF$ — это $\sigma$-алгебра

Тогда если $B, C\in\FF$, то 

1. $B\cup C\in\FF$

:::{prf:proof}
$$B\cup C=\underset{\in \FF}B\cup \underset{\in \FF}C\cup\underset{\in \FF}\emptyset\cup\underset{\in \FF}\emptyset\cup\underset{\in \FF}\emptyset\cup\underset{\in \FF}\emptyset\dots\overset{(\sigma 3)}{\in}\FF$$
:::

2. $B\cap C\in\FF$

:::{prf:proof}
$$B\cap C=(\underset{\in\FF}B^c\cap \underset{\in\FF}C^c)^c$$
:::

3. $B\setminus C\in\FF$

:::{prf:proof}
$$B\setminus C=\underset{\in\FF}B\cap \underset{\in\FF}C^c\overset{2}\in\FF$$
:::
```

```{prf:proposition}
Пусть $\FF$ — $\sigma$-алгебра.

Тогда если $A_1,\dots,A_n\ldots\in\FF$, то $\bigcap^a_{i=1}A_i\in\FF$
```

```{prf:proof}
:nonumber:

$$\bigcap^\infty_{i=1}A_i=\left(\bigcup_{i=1}^\infty \underset{\in\FF}{A_i}^c\right)^c\in\FF$$

$$\omega\in\bigcup^\infty_{i=1}A_i\iff(\forall i\in \NN, w\in A_i)\iff(\forall i\in\NN,\omega\not\in A_i^c)\iff\\\iff\left(\omega\not\in\bigcup^\infty_{i=1}A_i^c\right)\iff\omega\in\left(\bigcup^\infty_{i=1}A_i^c\right)^c$$
```

## Барелевские $\sigma$-алгебры

```{prf:definition}
Пусть $\Omega=\RR$. Определим $\sigma$-алгебру $\BB(\RR)$ подмножеств множества $\Omega=\RR$ как минимальную $\sigma$-алгебру, содержащую все полуинтервалы вида $(a, b]\subseteq\RR$, где $-\infty<a<b<+\infty$, т. е.

$$\BB(\RR):=\bigcup\FF$$

где пересечение берётся по всем $\sigma$-алгебрам $\FF$, которые содержат все полуинтервалы вида $(a, b]$.

$\sigma$-алгебра $\BB(\RR)$ называется **барелевской $\sigma$-алгеброй** подмножеств в $\RR$.

Элементы барелевской $\sigma$-алгебры называются **барелевскими множествами.**
```

```{prf:example}
Докажите, что следующие подмножества числовой прямой являются барелевскими:

1. $\displaystyle\{b\}=\bigcap^\infty_{i=1}\underbrace{(b-\tfrac{1}{n},b]}_{\in\BB(\RR)}\in\BB(\RR)$

2. $(a,b)=\underbrace{(a, b]}_{\in\BB(\RR)}\setminus\underbrace{\{b\}}_{\in\BB(\RR)}\in\BB(\RR)$

3. $[a, b)=\underbrace{\{a\}}_{\in\BB(\RR)}\cup\underbrace{(a, b)}_{\in\BB(\RR)}\in\BB(\RR)$

4. $[a, b]=\underbrace{\{a\}}_{\in\BB(\RR)}\cup\underbrace{(a,b]}_{\in\BB(\RR)}\in\BB(\RR)$

5. $\displaystyle\QQ=\bigcup^\infty_{i=1}\underbrace{\{r_k\}}_{\in\BB(\RR)}\in\BB(\RR)$

6. $\RR\setminus\QQ=\QQ^c\in\BB(\RR)$
```

```{prf:definition}
Пусть задано непустое множество $\Omega$. Пусть $\FF$ — некоторая $\sigma$-алгебра подмножеств множества $\Omega$.

Тогда упорядоченная пара $(\Omega,\FF)$ называется **измеримым пространством** (measurable space). Множества из $\sigma$-алгебры $\FF$ называются **$\FF$-измеримыми множествами**.
```

```{prf:definition}
Пусть задано измеримое пространство $(\Omega,\FF)$. 

Функция $\xi\colon\Omega\mapsto\RR$, где $\xi=\xi(\omega)$, $\omega\in\Omega$, называется **измеряемой относительно $\sigma$-алгебры $\FF$ функцией**, если 

$$\forall c\in\RR\colon\{\omega\in\Omega\colon\xi(\omega)>c\}\in\FF$$

Функцию, измеряемую относительно $\sigma$-алгебры $\FF$, также называют **$\FF$-измеримой функцией.**
```

```{seealso}
В теории вероятностей $\FF$-измеримые функции также называются **случайными величинами** или **$\FF$-измеримыми случайными величинами**, если хотят подчеркнуть тот факт, что они измеримы относительно $\sigma$-алгебры $\FF$.
```

```{prf:example}
$\Omega=\{a, b, c, d\}$, $\FF=\{\emptyset,\Omega,\{a, b\},\{c, d\}\}$

$\xi\colon\Omega\mapsto\RR,\quad\eta\colon\Omega\mapsto\RR$

| $\omega$ | a | b | c | d |
| :-: | :-: | :-: | :-: | :-: |
| $\xi(\omega)$ | -1 | -1 | 1 | 1 |
| $\eta(\omega)$ | 1 | 2 | 3 | 4 |

1. $\xi$ — $\FF$-измерима

$$c=10^6\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\emptyset\in\FF$$

$$1<c\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\emptyset\in\FF$$

$$c=1\colon\{\omega\in\Omega\colon\xi(\omega)>1\}=\emptyset\in\FF$$

$$-1<c<1\colon\{\omega\in\Omega\colon\xi(\omega)>\underset{0.77}c\}=\{c, d\}\in\FF$$

$$c=-1\colon\{w\in\Omega\colon\xi(\omega)>-1\}=\{c, d\}\in\FF$$

$$c<-1\colon\{w\in\Omega\colon\xi(\omega)>\underset{-2.37}c\}=\Omega\in\FF$$

$\implies \xi$ является $\FF$-измеримой

2. $\eta$ — не является $\FF$-измеримой, что доказывается следующим:

$$c=3.5\colon\{\omega\in\Omega\colon\eta(\omega)>3.5\}=\{d\}\not\in\FF$$

```

```{prf:theorem}
Пусть $\xi\colon\Omega\mapsto\RR$ — $\FF$-измеримая величина. 

Тогда $\forall a, b, c\in\RR$

1. $\{\omega\in\Omega\colon\xi(\omega)\leq c\}\in\FF$

:::{prf:proof}
:nonumber:
$$\{\omega\in\Omega\colon\xi(\omega)\leq c\}=\Omega\setminus\underbrace{\{\omega\in\Omega\colon\xi(\omega)>c\}}_{\in\FF}\in\FF$$
:::

2. $$\begin{align*}\{\omega\in\Omega\colon\xi(\omega)\leq c\}=\bigcup^\infty_{n=1}\{w\in\Omega\colon&\xi(\omega)>c-\tfrac{1}{n}\\&\xi(\omega)=c-\tfrac{1}{n}\\&\xi(\omega)\leq c\}\end{align*}$$
```

```{prf:definition}
Пусть задано измеримое пространство $(\Omega,\FF)$.

Функция $\PP:\FF\mapsto[0,1]$ называется вероятностной мерой, если выполнены два условия:

1. (p1) $\PP(\Omega)=1$
2. (p2) если $A_1,\dots,A_n,\dots\in\FF$ таких, что $A_i\cap A_j=\emptyset$ при $i\neq j$, то 

$$\PP\left(\bigcup^\infty_{i=1}A_i\right)=\sum^\infty_{i=1}\PP(A_i)$$
```

```{prf:definition}
Пусть $\xi\colon\Omega\mapsto\RR$ — $\FF$-измеримая функция

Функция $F_y(x):=\PP(\{\omega\in\Omega\colon\xi(\omega)\leq x\}),\  x\in\RR$ называется **функцией распределения случайной величины $\xi$.**
```
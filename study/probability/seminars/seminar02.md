# Семинар 2, 13.09.2024

Если вероятностное событие $\Omega$ с вероятностными точками. События — это подмножества нашего множества всех событий. 

Нужно определить функцию $\mathbb{P}\mathcal{F}\colon \to[0,1]$. Ищем область определения.

$\mathcal{F}$ — $\sigma$-алгебра. Системы подмножеств множества $\Omega$. Это область определения из меры, которую мы определим позже.

```{prf:definition}
Пусть $\Omega\neq\varnothing$. Система подмножеств $\mathcal{A}$ в $\Omega$ называется **алгеброй**, если выполнены три аксиомы:

1. $\Omega \in \mathcal{A}$;
2. если $A\in\mathcal{A}$, то $A^c\in\mathcal{A}\ (A^c:=\Omega\setminus A)$;
3. если $A_1,A_2\in\mathcal{A}$, то $A_1\cup A_2\in\mathcal{A}$

$\Omega$ называется единицей алгебры $\mathcal{A}$.

$(\forall A\in\mathcal{A}, \underbrace{A\cap\Omega=A}_{A\subseteq\Omega})$

```

```{prf:example}
$\Omega=\{\heartsuit,\diamondsuit,\spadesuit,\clubsuit \}$
1. $\mathcal{K}_1=\{\varnothing,\Omega,\{\heartsuit,\diamondsuit\},\{\spadesuit,\clubsuit\}\}$ — алгебра
2. $\mathcal{K}_2=\{\varnothing,\Omega,\{\heartsuit,\diamondsuit\}\}$ — не алгебра, т. к. $\{\heartsuit,\diamondsuit\}\in\mathcal{K}$, но $\{\heartsuit,\diamondsuit\}^c=\{\spadesuit,\clubsuit\}\not\in\mathcal{K}$.

```

```{prf:definition}
Пусть $\Omega\neq\varnothing$. Система подмножеств $\mathcal{A}$ в $\Omega$ называется **$\sigma$-алгеброй**, если выполнены три аксиомы:

1. $\Omega \in \mathcal{F}$;
2. если $A\in\mathcal{F}$, то $A^c\in\mathcal{F}\ (A^c:=\Omega\setminus A)$;
3. если $A_1,\dots,A_n,\dots\in\mathcal{F}$, то $\bigcup^\infty_{n=1}A_n\in\mathcal{F}$.

$\Omega$ называется единицей $\sigma$-алгебры $\mathcal{F}$.

```

## Задание 1

$\mathcal{A}$ — алгебра. Докажите, что $\varnothing\in\mathcal{A}$.

---

$\Omega\in\mathcal{A},\varnothing=\Omega^c\in\mathcal{A}$

```{note}
Если $\mathcal{F}$ — $\sigma$-алгебра, то $\varnothing\in\mathcal{F}$.
```

## Задание 2

$\mathcal{A}$ — алгебра, $A_1,A_2\in\mathcal{A}$

### Подзадание A

$A_1\cap A_2\in\mathcal{A}$

$A_1\cap A_2=(\underset{\in A}{\boxed{A_1^c}}\cup \underset{\in A}{\boxed{A_2^c}})^c\in\mathcal{A}$

### Подзадание B

$$A_1\setminus A_2 \in \mathcal{A}$$

$$A_1\setminus A_2=\underbrace{A_1\cap \underbrace{A_2^c}_{\in A}}_{\in A}\in\mathcal{A}$$

## Задание 3

Докажите, что всякая $\sigma$-алгебра является алгеброй

---

$\mathcal{F}$ — $\sigma$-алгебра $\implies$ все три аксиомы выполнены
$(a_1)=(\sigma_1), (a_2)=(\sigma_2)$ выполнены

Проверим, что для $\mathcal{F}$ выполнена $(a_3)$.

Пусть $A_1, A_2\in\mathcal{F}$. Положим $A_n=\varnothing\in\mathcal{F}$ при $n\geq 3$. 

$$\bigcup^\infty_{n=1}A_n\in\mathcal{F}\overset{(a3)}{=}A_1\cap A_2$$

Из задач 2 и 3 следует, что если $\mathcal{F}$ — $\sigma$-алгебра и $A_1, A_2\in\mathcal{F}$, то 

$$A_1\cup A_2\in\mathcal{F},\ A_1\cap A_2\in\mathcal{F},\ A_1\setminus A_2\in\mathcal{F}$$

## Задача 4

Пусть $\mathcal{F}$ — $\sigma$-алгбера и $A_1,\dots, A_n,\dots\in\mathcal{F}$. Докажите, что $\bigcap^\infty_{n=1}A_n\in\mathcal{F}$.

$$\bigcap^\infty_{n=1}A_n=\left(\underbrace{\bigcup_{n=1}^\infty \underbrace{A_n^c}_{\in\mathcal{F} (\sigma 2)}}_{_{\in\mathcal{F} (\sigma 2)}}\right)^c$$

```{note}
Пусть $\mathcal{A}$ — алгебра. Тогда в общем случае из условия, что $A_1,\dots,A_n,\dots\in\mathcal{A}$ **не следует** ни одно из условий, что $\bigcap^\infty_{n=1}A_n\in\mathcal{A}$ и $\bigcup^\infty_{n=1}A_n\in\mathcal{A}$
```

## Задача 5

$\Omega=\{a, b, c, d\}$. Какие из множеств являются $\sigma$-алгебрами?

1. $\mathcal{S}_1=\{\varnothing,\Omega\}$ — сигма алгебра (тривиальная, "самая бедная")

$$\bigcup^\infty_{n=1}A_n\in\mathcal{S}_1$$

2. $\mathcal{S}_2=2^{\Omega}$ — множество всех подмножеств в множестве $\Omega$.

$$A\in 2^\Omega\iff A\subseteq\Omega\implies\Omega\setminus A\subseteq\Omega\iff\underbrace{\Omega\setminus A}_{=A}\in 2^\Omega$$

$$\bigcup_{n=1}^\infty A_n\subseteq\Omega\implies\bigcup^\infty_{n=1}A_n\in 2^\Omega$$

3. $\mathcal{S}_3=\{\{a, b\},\{c, d\}\}$

$\Omega\in\mathcal{S}_3\implies\mathcal{S}_3$ — не $\sigma$-алгебра

4. $\mathcal{S}_4=\{\varnothing,\Omega,\{a, b\}\}$

$\{a, b\}\in\mathcal{S}_4$, но $\{a, b\}^c\not\in\mathcal{S}_4$

## Задача 6

$$\Omega=(0, 1]$$

$$\mathcal{A}=\{A=\bigcup^n_{k=1}(a_k;b_k]\colon n\in\mathbb{N}, (a_k;b_k] \subseteq\Omega, (a_k;b_k]\cap(a_l;b_l]=\varnothing, l\neq k\}$$

### Подзадача А

Докажите, что $\mathcal{A}$ — алгебра

---

$A\cup B=A\sqcup B$ для $A\cap B=\varnothing$

$$\bigcup_{n=1}^\infty A_n=\bigsqcup_{n=1}^\infty A_n$$

$$A=(0.1,0.25]\cup(0.33,0.47]\cup(0.9, 1]\in\mathcal{A}$$

---

$$A=[0.1,0.5]={0.1}\cup(0.1, 0.5]\not\in\mathcal{A}$$

$$(0.1,0.1]=\{x\colon 0.1<x\leq 0.1\}=\varnothing$$

$$(a;b]=\{x\colon a<x\leq b\}$$

$$\Omega=(0, 1]\in\mathcal{A}$$

---

$$A^c=(0, 0.1]\sqcup(0.25,0.33]\sqcup(0.47,0.9]\in\mathcal{A}$$

Очевидно, что объединение таких множеств сохраняет их структуру и что перед нами алгебра.

### Подзадача B

Приведите пример: $A_1,\dots,A_n,\dots\in\mathcal{A}$, но $\bigcup^\infty_{n=1}A_n\not\in\mathcal{A}$


$$A_1=\varnothing\in\mathcal{A}, A_n=\underbrace{(0,1-\frac{1}{n}]}_{\in A},n\leq 2$$

$$\bigcup^\infty_{n=1}A_n=(0,1)\not\in A$$

$\implies\mathcal{A}$ — не $\sigma$-алгебра

## Задача 7

$$\Omega=\{a,b,c,d\}$$

$$\mathcal{F}_1=\{\varnothing,\Omega,\{a\},\{b, c, d\}\},\mathcal{F}_2=\{\varnothing,\Omega,\{a,b,c\},\{d\}\}$$

1. $\mathcal{F}, \mathcal{F}$ — $\sigma$-алгебры
2. $\mathcal{F}\cap\mathcal{F}=\{A\colon A\in\mathcal{F}_1 \land A\in\mathcal{F}_2\}=\{\varnothing,\Omega\}$ — $\sigma$-алгебра
3. $\mathcal{F}_1\cup\mathcal{F}_2=\{A\colon A\in\mathcal{F}_1\lor A\in\mathcal{F}_2\}=\{\varnothing,\Omega,\{a\},\{b, c, d\},\{a,b,c\},\{d\}\}$

$$\{a\},\{d\}\in\mathcal{F}_1\cup\mathcal{F}_2$$

$$\{a\}\cup\{d\}=\{a, d\}\not\in\mathcal{F}_1\cup\mathcal{F}_2$$

$\implies$ это не $\sigma$-алгебра

## Задача 9

Доказать, что пересечение любого семейста $\sigma$-алгебр с одной и той же единицей является $\sigma$-алгеброй

$\mathcal{F}_j,j\in J$ ($J$ — произвольное множество индексов) $\forall j\in J,\ \Omega\in\mathcal{F}_j$

$\hat{\mathcal{F}}:=\bigcap_{j\in J}\mathcal{F}_j$ — $\sigma$-алгебра

1. $\Omega\in\hat{\mathcal{F}}$. В самом деле, $\forall j\in J,\Omega\in\mathcal{F}_j\implies\Omega\in\bigcap_{j\in J}\mathcal{F}_j=\hat{\mathcal{F}}$

2. $A\in\hat{\mathcal{F}}\implies\forall j\in J, A\in\mathcal{F}_j\implies\forall j\in J, A^c\in\mathcal{F}_j\implies A^c\in\bigcup_{j\in J}\mathcal{F}_j=\hat F$

3. $A_1,\dots,A_n,\dots\in\hat{\mathcal{F}}\implies\forall b\in\mathbb{N}\forall j\in J A_n\in\mathcal{F}_j\implies\forall j\in J (\forall n\in\mathbb{N}, A_n\in\mathcal{F}_j)\implies\forall j\in J \bigcup^\infty_{n=1}A_n\in\mathcal{F}_j\implies\bigcup_{j\in J}A_j\in\bigcap_{j\in J}\mathcal{F}_j=\hat{\mathcal{F}}_j$

```{prf:definition}
Пусть $\Omega\neq\varnothing$ и $\mathcal{S}$ — это непустая система подмножеств множества $\Omega$.

Минимальной $\sigma$-алгеброй, содержащей систему $\mathcal{S}$ называется такая $\sigma$-алгебра $\sigma(\mathcal{S})$, что

1. $\mathcal{S}\in\sigma(\mathcal{S})$
2. для любой $\sigma$-алгебры $\mathcal{G}$, которая содержит систему $\mathcal{S} (\mathcal{S}\subseteq\mathcal{G})$, справедливо, что $\sigma(\mathcal{S})\subseteq\mathcal{G}$
```

```{prf:definition}
:label: borel-sigma-algebra
Минимальная $\sigma$-алгебра, содержащая все полуинтервалы вида $(a, b)$ на числовой прямой, где $-\infty<a, b<+\infty$, называется **борелевской $\sigma$-алгеброй** на числовой прямой $\mathbb{R}$ и обозначается $\mathcal{B}(\mathbb{R})$.

Элементы борелевской $\sigma$-алгебры называются **борелевскими множествами.**

$$\Omega=\mathbb{R},\quad\mathcal{S}=\{(a,b]:-\infty<a<b<+\infty\}, \mathcal{B}(\mathbb{R})=\sigma(\mathcal{S})$$
```

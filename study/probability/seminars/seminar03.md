# Семинар 3, 20.09.2024

## Листок 2, Задача 10

$\Omega\neq\varnothing$, $\mathcal{S}$ — непустая система подмножеств в множестве $\Omega$.

Покажите, что $\exists\sigma(\mathcal(S))$

---

Рассмотрим совокупность всех $\sigma$-алгебр, которые содержат систему $\mathcal{S}$, $\{\mathcal{F}_j\}_{j\in J}$ $(\forall j \in J, \mathcal{S}\in\mathcal{F}_j)$

Отметим, что эта совокупность не пустая. $2^\Omega$ — $\sigma$-алгебра, $\mathcal{S}\subseteq 2^\Omega\implies 2^\Omega\in\{\mathcal{F}_j\}\neq\varnothing$.

Положим 

$$\hat{\mathcal{F}}:=\bigcap_{j\in J}\mathcal{F}_j=\{A\colon \forall j\in J, A\in\mathcal{F}_j\}$$

По задаче 9, $\hat{\mathcal{F}}$ является $\sigma$-алгеброй. $\mathcal{S}\subseteq\bigcap_{j\in J}\mathcal{F}_j=\hat{\mathcal{F}}$

Пусть $\mathcal{G}$ — это некоторая $\sigma$-алгебра с единицей $\Omega$, содержащая систему $\mathcal{S}$.

$$\exists j_0\in J,\mathcal{G}=\mathcal{F}_{j_0},\quad\hat{\mathcal{F}}=\bigcap_{j\in J}\mathcal{F}_j\subseteq \mathcal{F}_{j_0}$$

> Повторим определение [борелевской алгебры](#borel-sigma-algebra).

## Листок 2, Задача 11

Доказать, что следующие подмножества являются борелевскими.

1. $\{b\}=\bigcap^\infty_{n=1}\underbrace{(b-\frac{1}{b}, b]}_{\in\mathcal{B}(\mathbb{R}) \text{ по опр.}}\in\mathcal{B}(\mathbb{R})$
2. $(a, b)=\underbrace{(a, b]}_{\underset{\text{по опр.}}{\in\mathcal{B}(\mathbb{R})}}\setminus\underbrace{\{b\}}_{\underset{\text{по 1.}}{\in\mathcal{B}(\mathbb{R})}}\in\mathcal{B}(\mathbb{R})$
3. $[a, b)=\underbrace{\{a\}}_{\underset{\text{по 1.}}{\in\mathcal{B}(\mathbb{R})}}\cup\underbrace{(a, b)}_{\underset{\text{по 2.}}{\in\mathcal{B}(\mathbb{R})}}\in\mathcal{B}(\mathbb{R})$
4. $[a, b]=\underbrace{\{a\}}_{\underset{\text{по 1.}}{\in\mathcal{B}(\mathbb{R})}}\cup\underbrace{(a, b]}_{\underset{\text{по опр.}}{\in\mathcal{B}(\mathbb{R})}}\in\mathcal{B}(\mathbb{R})$

```{seealso}
$\mathcal{F}$ — $\sigma$-алгебра, 

$$F_1, A_2\in\underset{=\mathcal{B}(\mathcal{R})}{\mathcal{F}}\implies
\begin{align*}
    A_1\cup A_2\in\mathcal{F}\\
    A_1\setminus A_2\in\mathcal{F}\\
    A_1\cup A_2\in\mathcal{F}
\end{align*}$$
```

5. $Q=\bigcup^\infty_{k=1}\underbrace{\{r_k\}}_{\in\mathcal{B}(\mathbb{R})}\in\mathcal{B}(\mathbb{R})$

6. $\underbrace{\mathbb{R}}_{=\Omega}\setminus \underbrace{Q}_{\in\mathcal{B}(\mathbb{R})} \in Q^c\in B(R)$

---

$A, B, C$ — не пересекаются $\iff A\cap B\cap C=\varnothing$

$A, B, C$ — попарно не пересекаются $\iff \begin{cases} A\cap B=\varnothing\\ B\cap C=\varnothing\\ A\cap C=\varnothing
\end{cases}$

$$\begin{cases} A\cap B=\varnothing\\ B\cap C=\varnothing\\ A\cap C=\varnothing
\end{cases}\implies A\cap B\cap C=\varnothing$$

```{prf:definition}
Пусть задано непустое множество $\Omega$ и некоторая $\sigma$-алгебра $\mathcal{F}$ подмножества в множестве $\Omega$. Тогда упорядоченная пара $(\Omega, \mathcal{F})$ называется **измеримым пространством**.
```

```{prf:definition}
Пусть задано измеримое пространство $\Omega, \mathcal{F}$. Функция $\mathbb{P}\colon\mathcal{F}\to[0,1]$ называется вероятностной мерой, если выполнены следующие условия:

1. **(условие счётной аддитивности, $\sigma$-аддитивность)** Для любой последовательности попарно непересекающихся множеств $A_1,\dots,A_n,\dots\subset\mathcal{F}$ верно

$$\mathbb{P}\left(\bigcup^\infty_{i=1}A_i\right)=\sum^\infty_{i=1}\mathbb{P}(A_i)$$
2. **(условие нормировки)** $P(\Omega)=1$
```

```{prf:definition}
Пусть задано измеримое пространство $(\Omega,\mathcal{F})$ и некоторая вероятностная мера $\mathbb{P}\colon\mathcal{F}\to[0,1]$. Тогда упорядоченная тройка $(\Omega, \mathcal{F},\mathbb{P})$ называется **вероятностным пространством**.
```

$$\mathbb{P}(A)=\frac{\mes(A)}{\mes(\Omega)}$$

## Задача 1

Доказать, что

$$\PP(\varnothing)=0$$

$$\varnothing=\varnothing\sqcup\varnothing\sqcup\dots\sqcup\varnothing\sqcup\dots$$

$$\PP(\varnothing)=\PP(\varnothing\sqcup\varnothing\sqcup\dots\sqcup\varnothing\sqcup\dots)=\underset{x}{\PP(\emptyset)}+\underset{x}{\PP(\emptyset)}+\dots+\underset{x}{\PP(\emptyset)}+\dots=\text{RHS}$$

Если $x>0$, то $\LHS$ это конечное число, а $\RHS=+\infty$.
Остаётся только $x=0$.

## Задача 2

Доказать, что для попарно непересекающихся множеств в $A_1,\dots,A_n\in\mathcal{F}$ верно $\PP(A_1\sqcup\dots\sqcup A_n)=\PP(A_1)+\dots+\PP(A_n)$

---

$$\LHS=\PP(\underbrace{A_1}_{\in\FF}\sqcup\dots\sqcup \underbrace{A_n}_{\in\FF}\sqcup\emptyset\sqcup\emptyset\dots)=\\\PP(A_1)+\dots+\PP(A_n)+\underbrace{\PP(\emptyset)}_{=0}+\underbrace{\PP(\emptyset)}_{=0}+\dots=\RHS$$

## Задача 3

Доказать, что для любых множеств $A_1,A_2\in\mathcal{F}$ таких, что $A_1\subseteq A_2$, справедливо $\PP(A_2\setminus A_1=\PP(A_2)-\PP(A_1))$

---

$$\PP(A_2)=\PP(\underbrace{A_1}_{\in \FF}\sqcup\underbrace{(A_2\setminus A_1)}_{\in \FF})$$

## Задача 4

Докажите, что для любых множеств $A_1, A_2\in\FF$ таких, что $A_1\subseteq A_2$ справедливо $\PP(A_n)\subseteq\PP(A_2)$.

---

Вытекает из предыдущей задачи.

## Задача 5

Докажите, что $\forall A\in\FF,\PP(A^c)=1-\PP(A)$.

$$1=\PP(\Omega)=\PP(\underset{\in\FF}{A}\sqcup(\underset{\in\FF}{A^c}))$$

## Задача 6

$$\forall A_1, A_2\in\FF,\quad\PP(A_1\cup A_2)=\PP(A_1)+\PP(A_2)-\PP(A_1\cap A_2)$$

---

$$\begin{align*}\PP(A_1\cup A_2)&=\PP(\underset{\in\FF}{[A_1\setminus A_2]}\sqcup \underset{\in\FF}{[A_1\cup A_2]}\sqcup\underset{\in\FF}{[A_2\setminus A_1]})\\
&=\underbrace{\PP(A_1\setminus A_2)+\PP(A_1\cap A_2)}_{A_1}+\underbrace{\PP(A_2\setminus A_1)+\PP(A_1\cap A_2)}_{A_2}-\PP(A_1\cap A_2)
\end{align*}$$

## Задача 7

$\forall A_1, \dots A_2\in\mathcal{F}$

$$\PP\left(\bigcup^\infty_{i=1}A_i\right)\leq\sum^n_{i=1}\PP(A_1)$$

---

$$B_1=A_1,\quad B_i:=A_1\setminus(A_1\cup\dots\cup A_{i-1}),\quad 2\leq i\leq n$$

$$\PP\left(\bigcup^\infty_{i=1}A_i\right)=\PP\left(\bigsqcup^n_{i=1}B_1\right)=\sum^n_{i=1}\PP(B_1)\leq\sum^n_{i=1}\PP(A_i)$$

## Задача 8

$\forall A_1, \dots A_2\in\mathcal{F}$

$$\PP\left(\bigcup^\infty_{i=1}A_i\right)\leq\sum^\infty_{i=1}\PP(A_1)$$

---

$$B_1=A_1,\quad B_i:=A_1\setminus(A_1\cup\dots\cup A_{i-1}),\quad 2\leq i\leq n$$

$$\PP\left(\bigcup^\infty_{i=1}A_i\right)=\PP\left(\bigsqcup^\infty_{i=1}B_1\right)=\sum^\infty_{i=1}\PP(B_1)\leq\sum^\infty_{i=1}\PP(A_i)$$

## Задача 9

```{prf:proposition} Свойства непрерывности вероятностной меры
1. Для любой последовательности множеств $A_1,\dots,A_n,\dots\in\FF$ такой, что $A_1\subseteq A_2\subseteq\dots\subseteq A_n\subseteq\dots$ выполнено равенство 

$$\lim_{n\to\infty}\PP(A_n)=\PP\left(\bigcup^\infty_{i=1}A_i\right)$$
```

$$\begin{align*}
    &B_1:=A_1,\\
    &B_i:=A_i\setminus A_{i=1} & i\geq 2
\end{align*}$$

$$\begin{align*}\PP\left(\bigcup^\infty_{i=1}A_i\right)&=\PP\left(\bigsqcup^\infty_{i=1} B_1\right)\\&=\lim_{n\to\infty}[\PP(B_1)+\PP(B_2)+\dots+\PP(B_{n-1})+\PP(B_{n})]\\&=\lim_{n\to\infty}[\cancel{\PP(A_1)}+(\cancel{\PP(A_2)}-\cancel{\PP(A_1)})+\dots+(\cancel{\PP(A_{n-1})}-\cancel{\PP(A_{n-2})})+(\PP(A_n)-\cancel{\PP(A_{n-1})} )]\\&=\lim_{n\to\infty}\PP(A_n)\end{align*}$$

```{prf:proposition}
1. Для любой последовательности множеств $A_1,\dots,A_n,\dots\in\FF$ такой, что $A_1\supseteq A_2\supseteq\dots\supseteq A_n\supseteq\dots$ выполнено равенство 

$$\lim_{n\to\infty}\PP(A_n)=\PP\left(\bigcap^\infty_{i=1}A_i\right)$$
```
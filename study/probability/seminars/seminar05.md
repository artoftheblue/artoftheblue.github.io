# Семинар 5, 04.10.2024

```{prf:definition}
Пусть задано измеримое пространство $(\Omega,\FF)$.

Функция $\xi\colon\Omega\mapsto\RR$, $\xi=\xi(x),\omega\in\Omega$, называется **измеримой относительно $\sigma$-алгебры $\FF$ функцией,** если 

$$\forall c\in\RR, \quad \{\omega\in\Omega\colon\xi(\omega)>c\}\in\FF$$

Это условие называют **условием измеримости.**

Функцию, измеримую относительно $\sigma$-алгебры $\FF$ также называют **$\FF$-измеримой функцией**, согласованной с $\sigma$-алгеброй $\FF$.

В теории вероятностей $\FF$-измеримые функции называются **случайными величинами** (или $\FF$-измеримыми случайными величинами)
```

## Задача 1

$$\Omega=\{\underset{+}\heartsuit,\diamondsuit,\spadesuit,\clubsuit\}$$

$$\FF=\{\underset{-}\emptyset, \{\underset{+}\heartsuit,\diamondsuit\}, \{\underset{-}\spadesuit\}, \{\underset{-}\clubsuit\}, \{\underset{+}\heartsuit,\diamondsuit,\spadesuit\}, \{\underset{+}\heartsuit,\diamondsuit,\clubsuit\},\{\underset{-}\clubsuit,\spadesuit\},\underset{+}\Omega\}$$

$$\xi\colon\Omega\mapsto\RR,\quad\eta\colon\Omega\mapsto\RR$$

| $\omega$ | $\heartsuit$ | $\diamondsuit$ | $\spadesuit$ | $\clubsuit$ |
| :-: | :-: | :-: | :-: | :-: |
| $\xi(\omega)$ | 1 | 1 | 2 | 3 |
| $\eta(\omega)$ | 3 | 2 | 1 | 1 |

Является ли $\xi$ $\FF$-измеримой?

1. $c>3\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\emptyset\in\FF$
2. $c=3\colon\{\omega\in\Omega\colon\xi(\omega)>3\}=\emptyset\in\FF$
3. $2<c<3\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\{\clubsuit\}\in\FF$
4. $c=2\colon\{\omega\in\Omega\colon\xi(\omega)>2\}=\{\clubsuit\}\in\FF$
5. $1<c<2\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\{\spadesuit,\clubsuit\}\in\FF$
6. $c=1\colon\{\omega\in\Omega\colon\xi(\omega)>1\}=\{\spadesuit,\clubsuit\}\in\FF$
7. $c<1\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\Omega\in\FF$

$\implies$ $\xi$ — $\FF$-измеримая. 

Является ли $\eta$ $\FF$-измеримой?

1. $c=2.5\colon\{\omega\in\Omega\colon\eta(\omega)>2.5\}=\{\heartsuit\}\not\in\FF$

$\implies$ $\eta$ не $\FF$-измеримая.

## Задача 2

$$\Omega=\RR,\FF=\BB(\RR),\xi(\omega)=\omega^2$$

$\xi$ — $\FF$-измерима?

1. $c<0\colon\{\omega\in\Omega\colon\xi(\omega)>c\}=\{\omega\in\RR\colon\omega^2>c\}=\RR\in\BB(\RR)=\FF$
2. $$\begin{align*}c\geq0\colon&\{\omega\in\Omega\colon\xi(\omega)>c\}=\{\omega\in\RR\colon\omega^2>c^2\}\\=\ &\{\omega\in\RR\colon\omega<-\sqrt{c}\}\cup\{\omega\in\RR\colon\omega>\sqrt{c}\}\\
=\ &(-\infty,-\sqrt{c})\cup(\sqrt{c},+\infty)=\underbrace{\RR}_{\in\BB(\RR)}\setminus\underbrace{[-\sqrt{c},\sqrt{c}]}_{\in\BB(\RR)}\in\BB(\RR)=\FF\end{align*}$$

## Задача 3

$(\Omega,\FF)$ — измеримое пространство, $\xi\colon\Omega\mapsto\RR$ — $\FF$-измеримая функция. 

$\forall c\in\RR$

### Подзадача А

$$\{\omega\in\Omega\colon\xi(\omega)\leq c\}=\bigcap^\infty_{n=1}\underbrace{\{\omega\in\Omega\colon\xi(\omega)>c-\frac{1}{n}\}\in\FF}_{\in\FF}$$

$$(\LHS\subseteq\RHS)\quad\omega_0\in\LHS\implies\xi(\omega_0)\geq c\implies\forall b\in\NN,\xi(\omega_0)>c-\frac{1}{n}\implies \omega_0\in\RHS$$

$$(\RHS\subseteq\LHS)\quad\omega_0\in\RHS\implies\forall n\in\NN\xi(\omega_0)>c-\frac{1}{n}\xRightarrow[n\to\infty]{}\xi(\omega_0)\geq\lim_{n\to\infty}(c-\frac{1}{n})=c\implies\omega_0\in\LHS$$

### Подзадача B

$$\{\omega\in\Omega\colon\xi(\omega)=c\}=\underbrace{\{\omega\in\Omega\colon\xi(\omega)\geq c\}}_{\in\FF}\setminus\underbrace{\{\omega\in\Omega\colon\xi(\omega)>c\}}_{\in\FF}\in\FF$$

### Подзадача C

$$\{\omega\in\Omega\colon\xi(\omega)\leq c\}=\underbrace{\Omega}_{\in\FF}\setminus\underbrace{\{\omega\in\Omega\colon\xi(\omega)>c\}}_{\in\FF}\in\FF$$

### Подзадача D

$$\{\omega\in\Omega\colon\xi(\omega)<c\}=\underbrace{\{\omega\in\Omega\colon\xi(\omega)\leq c\}}_{\in\FF}\setminus\underbrace{\{\omega\in\Omega\colon\xi(\omega)=c\}}_{\in\FF}$$

## Задача 4

$(\Omega,\FF)$ — измеримое пространство, $\xi\colon\Omega\mapsto\RR$ — $\FF$-измеримая функция 

Докажите, что $\xi^2(\omega)$ — $\FF$-измеримая

1. $c<0\colon\{\omega\in\Omega\colon\xi^2(\omega)>c\}=\Omega\in\FF$ 
2. $c\geq 0\colon\{\omega\in\Omega\colon\xi^2(\omega)>c\}=\underbrace{\{\omega\in\Omega\colon\xi(\omega)<-\sqrt{c}\}}_{\in\FF}\cup\underbrace{\{\omega\in\Omega\colon\xi(\omega)>\sqrt{c}\}}_{\in\FF}\in\FF$
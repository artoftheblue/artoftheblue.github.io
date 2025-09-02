# Лекция 1, 02.09.2024

## Дискретное вероятностное пространство

$$\Omega =\{w_1,w_2,\dots,w_k,\dots\}$$ 

* $w_i$ — **элементарные исходы** или **элементарные события**
* $\Omega$ — **пространство элементарных исходов**

```{prf:definition}
$А$ — **случайное событие**, $\forall$ подмножество $\Omega$ 
```

```{aside}
:::{warning} 
Только в дискретном случае!
:::
```

```{prf:definition}
* $A\cup B$ — **объединение**
* $A\cap B$ — **пересечение**
* $A\setminus B$ — **вычитание**
* $A_c=\overline A = \Omega \setminus A$ — **дополнение**
```

```{prf:definition}
* $A = \Omega$ — **достоверное**
* $\varnothing$ — **невозможное событие**
```

```{prf:definition}
$A$ и $B$ **несовместны**, если $A\cap B=\varnothing$
```

```{prf:definition}
**Полная группа несовместных событий**

$$\forall i\neq j\colon A_i\cup A_j=\varnothing\qquad \bigcup_i A_i=\Omega$$
```

```{prf:axiom}
$$\forall w_i\exists p_i \geq 0\colon \qquad \sum_i p_i=1$$
```

```{prf:corollary}
$$0\leq p_i\leq 1$$
```

```{prf:definition}
$$P(A)=\sum_{w_i\in A}P(w_i),\quad p(w_i)=p_i$$
```

```{prf:definition}
$(\Omega, P)$ — **вероятностное пространство**
```

Подходы к определению вероятностей:
* априорный (предварительное знание)
* частотный (предел ряда частот)
* модельный (матмодель)

```{prf:definition} Классическая формула вероятности (для равновероятных исходов)
$$P(A)=\frac{\text{число благоприятных исходов}}{\text{общее число исходов}}=\frac{|A|}{|\Omega|}$$
```

```{prf:theorem} Формула включений/исключений
$$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$
$$P(A_1\cup\dots\cup A_n)=\\\sum^n_{i=1}P(A_i)-\sum_{i<j}P(A_i\cap A_j)+\dots+(-1)^{n-1} P(A_i\cap\dots\cap A_n)$$
```

```{prf:definition} 
$$\forall B\colon P(B)>0\qquad P(A|B)=\frac{P(A\cap B)}{P(B)}$$
```

```{prf:theorem} Теорема умножения
$$P(A\cap B)=P(A|B)P(B)$$
$$P(A_1\cap\dots\cap A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1\cdot A_2)\cdot\ldots\cdot P(A_n|A_1\cdot\ldots\cdot A_{n-1})$$
```
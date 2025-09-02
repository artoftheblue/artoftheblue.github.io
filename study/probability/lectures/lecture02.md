---
abbreviations:
  ЗБЧ: Закон Больших Чисел 
  ФПВ: Формула Полной Вероятности
---

# Лекция 2, 09.09.2024

$$P(A)=\sum_{w_i\in A}P(w_i)$$

```{note} Замечание
$$P(\overline A)=1-P(A), P(\Omega)=1, P(\varnothing)=0$$
```

```{prf:example} Задача об авариях
Известно, что 40% автомобильных аварий совершаются людьми в состоянии алкогольного опьянения.
$$P(\Pi|\Alpha)=0.4\implies P(T|\Alpha)=0.6$$

$$P(\Pi)=0.05$$

$$\frac{P(\Alpha|\Pi)}{P(\Alpha|\Tau)}=\frac{P(\Alpha\cap \Pi)/P(\Pi)}{P(\Alpha \cap \Tau)/P(\Tau)}=\frac{P(\Pi|\Alpha)\cancel{P(\Alpha)}}{P(\Tau|\Alpha)\cancel{P(\Alpha)}}\cdot\frac{P(\Tau)}{P(\Pi)}=\frac{0.4}{0.6}\frac{0.95}{0.05}=12.7$$
```

## Независимость событий

Для независимых событий:

$$P(A|B)=P(A)$$

```{prf:definition}
$A$ и $B$ называются **попарно независимыми**, если 

$$\frac{P(A\cap B)=P(A)P(B)}{P(A|B)\cancel{P(B)}=P(A)\cancel{P(B)}}$$
```

```{prf:definition}
$A_1,\dots, A_n$ **независимы в совокупности**, если 

$$\forall i_1<i_2<\dots<i_k,\forall k=1,\dots,n$$

$$P(A_{i1}\cap A_{i2}\cap\ldots\cap A_{ik})=P(A_{i1})\cdot P(A_{i2})\cdot\ldots\cdot P(A_{ik})$$
```

```{seealso} Замечание
Для $A_1,A_2,A_3$:
$$P(A_1\cap A_2)=P(A_2\cap A_3)=P(A_1\cap A_3)\\ P(A_1\cap A_2\cap A_3)=P(A_1)P(A_2)P(A_3)$$

Контрпример, где все попарные события независимы.

3 стороны тетраэдра покрашены в красный, жёлтый и зелёный. Четвёртая покрашена во все три цвета. 

* $A$ — есть красный
* $B$ — есть зелёный
* $C$ — есть жёлтый

$$\frac{1}{4}=P(A\cap B\cap C)$$

$$P(A)=P(B)=P(C)=\frac{1}{2}$$

$$\frac{1}{8}=P(A)P(B)P(C)\neq P(A\cap B\cap C)$$
```

```{note} Замечание
Если $A_1,\ldots,A_n$ независимы в совокупности, то над любым из событий можно поставить отрицание и система останется неизменной.
```

```{prf:example}
$A_1,A_2,A_3$ — независимы в совокупности, то $\overline A_1,A_2,A_3$ — независимы в совокупности.

$$P(\overline A_1\cap A_2)\overset{?}{=}P(\overline A_1)P(A_2)$$

$$P(\overline A_1\cap A_2)=P(A_2\setminus A_1)=P(A_2)-P(A_2\cap A_1)=P(A_2)P(A_1)$$

$$P(A_2)-P(A_2\cap A_1)=P(A_2)(1-P(A_1))=P(A_2)P(\overline A_1)\implies \\P(A_2)P(\overline A_1)=P(A_2)P(A_1)$$

$$P(\overline A_1\cap A_2\cap A_3)=P((A_2\cap A_3)\setminus A_1)=P(A_2)P(A_3)-P(A_1\cap A_2\cap A_3)\\=P(A_1)P(A_2)P(A_3)=P(\overline A_1)P(A_2)P(A_3)$$
```

```{prf:example} Простейший вариант ЗБЧ / Неизбежность технологических катастроф 

* Есть $n$ узлов, события $A_1,\dots,A_n$ — независимы в совокупности
* $A_i$ — $i$-й узел вышел из строя

$$\forall i \Bigm| 0<\varepsilon\leq P(A_i)\ll 1$$

$$P(\text{хотя бы один узел выйдет из строя})=P(A_1\cup\ldots\cup A_n)=\\1-P(\overline A_1\cap\ldots\cap \overline A_n)=1-\prod^n_{i=1}P(\overline A_i)=1-\prod^n_{i=1}\underbrace{(1-P(A_i))}_{\leq 1-\varepsilon}\geq 1-(1-\varepsilon)^n\xrightarrow{n\to\infty} 1$$

Это означает, что при количестве узлов, стремящихся в бесконечность, технологические катастрофы неизбежны (их вероятность равна $1$).
```

## Формула полной вероятности (ФПВ) 

```{prf:theorem}
$\{H_i\}$ — полная группа  несовместных событий (разбиение $\Omega$)

**Несовместность**: $H_i\cap H_j=\varnothing,\forall i\neq j$

**Полнота**: $\displaystyle\bigcup^n_{i=1} H_i=\Omega$

$$\boxed{P(A)=\sum^n_{i=1}P(A|H_i)P(H_i)}$$
```

```{prf:proof}
$$P(A)=P\left(\bigcup^n_{i=1}(A\cap H_i)\right)=\sum^n_{i=1}P(A\cap H_i)=\sum^n_{i=1}P(A|H_i)P(H_i)$$
```

## Формула Байеса. Апостериорные вероятности

$$P(H_k|A)=\frac{P(A|H_k)P(H_k)}{P(A)}=\frac{P(A|H_k)P(H_k)}{\sum^n_{i=1}P(A|H_i)P(H_i)}$$

```{prf:example}

> У меня СПИД, конкретно.

Классическая задачка на false negatives и false positives. Мы хотим посчитать true positive в итоге:

* $P(\text{AIDS})=0.03$ — у человека есть СПИД
* $P(+|\text{AIDS})=0.98$ — чувствительность теста, aka шанс того, что тест поймает СПИД у носителя
* $P(+|\overline{\text{AIDS}})=0.01=(1-\text{специфичность теста})$ — шанс того, что тест даст false positive
* $P(\text{AIDS}|+)=\displaystyle\frac{P(+|\text{AIDS})P(\text{AIDS})}{P(+|\text{AIDS})P(\text{AIDS})+P(+|\overline{\text{AIDS}})P(\overline{\text{AIDS}})}=\frac{0.98\cdot0.03}{0.98\cdot0.03+0.01\cdot0.97}=0.75$

Из этого следует, что $25\%$ положительных кейсов будут false positives. 
```
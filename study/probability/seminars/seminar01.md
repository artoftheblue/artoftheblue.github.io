# Семинар 1, 06.09.2024

## Задание 1

$$A=\{\heartsuit, \diamondsuit\},\ B=\{\{\heartsuit\},\{\diamondsuit\}\},\ C=\{\heartsuit,\diamondsuit,\{\heartsuit\},\{\diamondsuit\}\}, D=\{\heartsuit,\diamondsuit,\{\heartsuit\},\{\diamondsuit\},\{\heartsuit,\diamondsuit\}\}$$

Найти мощности множеств.

* $|A|=2$
* $|B|=2$
* $|C|=4$
* $|D|=5$

## Задание 2. ($\in$ vs $\subseteq$)

$$A=\{\heartsuit, \diamondsuit\},\ B=\{\{\heartsuit\},\{\diamondsuit\}\},\ C=\{\heartsuit,\diamondsuit,\{\heartsuit\},\{\diamondsuit\}\}, D=\{\heartsuit,\diamondsuit,\{\heartsuit\},\{\diamondsuit\},\{\heartsuit,\diamondsuit\}\}$$

Верно ли, что 

1. $A\subseteq B$?
Нет, т. к. $\heartsuit\in A$, но $\heartsuit\not\in B$.

2. $\{\heartsuit\}\in A$? Нет, т. к. "мешка с червями" нет внутри этого множества.

3. $\{\heartsuit\}\subseteq A$? Да, черви во множестве.

4. $\heartsuit\in A$? Да.

5. $\heartsuit\subseteq A$? Нет, т. к. \heartsuit не является множеством. 

6. $\{\heartsuit\}\in B$? Да. Мешок принадлежит множеству.

7. $\{\heartsuit\}\subseteq B$? Нет. Червей нет во множестве.

8. $\{\heartsuit\}\in C$? Да

9. $\{\heartsuit\}\subseteq C$? Да.

10. $\heartsuit \in C$. Да.

11. $A\in C$? Нет, т. к. мешок с червями и бубями не является элементом $C$.

12. $A\subseteq C$? Да, т. к. каждый элемент $А$ является элементом $C$.

13. $A\in D$? Да.

14. $A\subseteq D$? Да.

15. $B\in D$? Нет.

16. $B\subseteq D$? Да.

## Задание 3.

1. $|\varnothing|=0$
2. $|\{\varnothing\}|=1$
3. $|\{\varnothing,\varnothing\}|=1 \implies \{\varnothing,\varnothing\}=\{\varnothing\}$
4. $\{\varnothing,\{\varnothing\}\}=2$
5. $|\{\varnothing, \{\varnothing\}, \{\varnothing, \{\varnothing\}\}\}| = 3$

## Задание 4. Формулы двойственности де Моргана

### Подзадание А.

$$A^c=\Omega\setminus A$$

$$\underbrace{A\cup B}_{\text{LHS}} = \underbrace{(A^c\cap B^c)^c}_{\text{RHS}}$$

$$\omega\in\text{LHS}\iff (\omega\in A\lor\omega\in B)\iff(\omega\not\in A^c \lor \omega\not\in B^c)\iff(\omega\not\in A^c\cap B^c)$$

### Подзадание B.

$$\underbrace{A\cap B}_{\text{LHS}} = \underbrace{(A^c\cup B^c)^c}_{\text{RHS}}$$

$$\omega\in\text{LHS}\iff(\omega\in A \land\omega\in B)\iff (\omega\not\in A^c \land \omega\not\in B^c)\iff(\omega\not\in A^c\cup B^c)$$

### Подзадание С.

$$\bigcup_{i\in I}A_i=\left(\bigcap_{i\in I}A_i^c\right)^c$$

$$\bigcup_{i\in I}A_i:=\{w\in\Omega\colon\exists i\in I,\omega\in A_i\}$$

$$\bigcap_{i\in I}A_i:=\{w\in\Omega\colon\forall i\in I,\omega\in A_i\}$$

* $I$ — произвольное множество индексов

$$\omega\in\text{LHS}\iff(\exists i\in I, w\in A_i)\iff(\exists i \in I, w\not\in A_i^c)\iff\left(\omega\not\in\bigcap_{i\in I}A_i^c\right)\iff w\in\left(\bigcap_{i\in I}A_i^c\right)^c=\text{RHS}$$

### Подзадание D.

$$\bigcap_{i\in I}A_i=\left(\bigcup_{i\in I}A_i^c\right)^c$$

> Домашнее задание

## Задание 5.

$$A\triangle B\subseteq (A\triangle C)\cup(C\triangle B)$$

$$A\triangle B :=(A\setminus B)\cup(B\setminus A)=(A\cup B)\setminus (A\cap B)$$

$$\omega\in\text{LHS}\implies\left[\begin{gathered}
w\in A\setminus B\\
w\in B\setminus A
\end{gathered}\right.\implies\left[\begin{gathered}
w\in A\cap B^c\\
w\in B\cap A^c
\end{gathered}\right.\implies\left[\begin{gathered}
\left[\begin{gathered}
    \omega \in A\cap \underline{B^c\cap C}\implies \omega\in\text{RHS}\\
    \omega\in \underline{A} \cap B^c\cap \underline{C^c}\implies \omega\in\text{RHS}
\end{gathered}\right.\\
\left[\begin{gathered}
    \omega \in B\cap \underline{A^c\cap C}\implies \omega\in\text{RHS}\\
    \omega\in \underline{B} \cap A^c\cap \underline{C^c}\implies \omega\in\text{RHS}
\end{gathered}\right.
\end{gathered}\right.$$

## Задание 6.

### Подзадание А

$$[1,2]=\bigcap_{n=1}^\infty\left(1-\frac{1}{n},2+\frac{1}{n}\right)$$

$$[1,2]\subseteq\bigcap_{n=1}^\infty\left(1-\frac{1}{n},2+\frac{1}{n}\right)$$

$$x\in\bigcap_{n=1}^\infty\left(1-\frac{1}{n}, 2+\frac{1}{n}\right)\forall n\in N, 1-\frac{1}{n}<x<2+\frac{1}{n}\xRightarrow{n\to\infty}$$

$$1=\lim_{n\to\infty}\left(1-\frac{1}{n}\right)\leq x\leq \lim_{n\to\infty}\left(2+\frac{1}{n}\right)=2\implies x\in[1, 2]$$

### Подзадание В

$$(1, 2)=\bigcup^{\infty}_{n=2}\left[1+\frac{1}{n}, 2-\frac{1}{n}\right]$$

1. ${\supseteq}$ очевидно.

2. $\subseteq$

$$x\in\text{RHS}\implies 1<x<2$$

$$\varepsilon:=\min(x-1, 2-x)>0$$

$$1+\frac{1}{n}\to 1, 2-\frac{1}{n}\to 2, n\to\infty$$

$$\begin{align*}\exists N\in\mathbb{B}\colon& -\varepsilon<\underline{1+\tfrac{1}{N}-1<\varepsilon}\implies 1+\tfrac{1}{N}<1+\varepsilon\leq 1+(x-1)=x\\
&-\underline{\varepsilon<2-\tfrac{1}{N}-2}<\varepsilon\implies 2-\tfrac{1}{N}>2-\varepsilon>2-\varepsilon\geq2-(2-x)=x
\end{align*}$$

$$x\in[1+\tfrac{1}{N},2-\tfrac{1}{N}]\subseteq\text{RHS}$$

## Задание 7. Почему интервал $(0, 1)$ не является счётным?

Пойдём от противного. Пусть $(0, 1)$ является счётным.

$$x_1=0.\bar x_{11}x_{12}x_{13}x_{14}x_{15}\dots$$

$$x_2=0.x_{21}\bar x_{22}x_{23}x_{24}x_{25}\dots$$

$$x_3=0.x_{31}x_{32}\bar x_{33}x_{34}x_{35}\dots$$

$$x_4=0.x_{41}x_{42}x_{43}\bar x_{44}x_{45}\dots$$

$$x_5=0.x_{51}x_{52}x_{53}x_{54}\bar x_{55}\dots$$

$$\bar x=0.\bar x_{11}\bar x_{22}\bar x_{33}\bar x_{44}\bar x_{55}\dots$$

$$0.49999\ldots=0.50000\dots$$

$$\frac{4}{10}+\frac{9}{100}+\frac{9}{1000}+\dots=\frac{1}{2}$$
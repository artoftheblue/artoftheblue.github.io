# Семинар 4, 27.09.2024

## Задача 1

$A$ и $B$ — независимые $(\PP(A\cap B)=\PP(A)\PP(B))$

### Подзадание А

Доказать, что $A$ и $B^c$ — независимые $(\PP(A\cap B^c)=\PP(A)\PP(B^c))$

---

$$\PP(A\cap B^c)=\PP(A\setminus B)=\PP(A\setminus (A\cap B))\overset{\boxed{A\cap B\subseteq A}}{=}\\=\PP(A)-\PP(A\cap B)=\PP(A)-\PP(A)\PP(B)\PP(A)\underbrace{[1-\PP(B)]}_{\PP(B^c)}$$

### Подзадание Б

Доказать, что $A^c$ и $B^c$ независимые. 

---

Автоматически следует из пункта А.

## Задача 2

$A$ и $B$ — независимые, $B$ и $C$ — независимые. Следует ли отсюда, что $A$ и $C$ — независимые?

$$\Omega=\{a, b, c, d\},\quad\FF=2^\Omega,\quad\PP(\{a\})=\dots=\PP(\{b\})=\frac{1}{4}$$

$$A=\{a, b\},\quad B=\{b, c\},\quad C=\{c, d\}$$

$$\PP(A\cap B)=\PP(\{b\})=\frac{1}{4}=\PP(A)\PP(B)=\frac{1}{2}\cdot\frac{1}{2}=\frac{1}{4}\implies$$

$A$ и $B$ независимые.

$$\PP(B\cap C)=\PP(\{c\})=\frac{1}{4}=\PP(B)\PP(C)=\frac{1}{2}\cdot\frac{1}{2}=\frac{1}{4}\implies$$

$B$ и $C$ независимые.

$$\PP(A\cap C)=\PP(\emptyset)=0\neq\PP(A)\PP(C)=\frac{1}{2}\cdot\frac{1}{2}=\frac{1}{4}\implies$$

$A$ и $C$ зависимые.


## Задача 3

Решаем задачу для $30$ студентов.

```{prf:example}
**Парадокс дней рождения** — утверждение, состоящее в том, что в группе, состоящей из 23 или более человек, вероятность совпадения дней рождения (число и месяц) хотя бы у двух людей превышает 50 %.
```

---

$D:=\{1,2,3,\dots,365\}$ — номера дней в году

$\Omega=\{w=(d_1,\dots,d_{30}): d_1\in D,\dots,d_30\in D\}$

$\FF=2^\Omega$

$\PP(A)=\frac{\#A}{\#\Omega}$

$$A:=\left\{\begin{align*}
    &\text{в группе из 30 человек найдётся хотя бы 2 человека,}\\
    &\text{дни рождения которых совпадают}\end{align*}\right\}$$

$$B:=\{\text{в группе из 30 человек все дни рождения различны}\}$$

$B=A^c$

$B=\{w=(d_1,\dots,d_30):d_1\in D,d_2\in D\setminus\{d_1\},\dots,d_{30}\in D\setminus\{d_1,\dots,d_{29}\}\}$

$$\#\Omega=\underbrace{365\times\dots\times365}_{30}=365^{30}$$

$$\#B=365\times364\times\dots\times(365-29)$$

$$\PP(B)=\frac{\# B}{\#\Omega}\approx 0.294$$

$$\PP(A)\approx 0.706$$

---

> Другой способ решения задания

$$\begin{align*}
&B_1=\{\text{в группе из 1-го человека нет повторяющихся дней рождения}\}\\
& B_2=\{\text{в группе из 2-х человек нет повторяющихся дней рождения}\}\\
&\ \vdots\\
& B_{30}=\{\text{в группе из 30-ти человек нет повторяющихся дней рождения}\}\end{align*}$$

$$B_1\supseteq B_2\supseteq\dots\supseteq B_{30},\quad B_{30}=B, B=B_1\cap B_2\cap \dots \cap B_{30}$$

$$\PP(B)=\underbrace{\PP(B_1)}_{=1}\underbrace{\PP(B_2|B_1)}_{\frac{364}{365}}\underbrace{\PP(B_3|\underbrace{B_1\cap B_2}_{=B_2})}_{\frac{363}{365}}\cdot\ldots\cdot\underbrace{\PP(B_{30}|\underbrace{B_1\cap\ldots\cap B_{29}}_{=B_{29}})}_{=\frac{(365-29)}{365}}=0.294$$

## Задача 5

$$V:=\{\text{Вася пришёл на лекцию}\}$$

$$M:=\{\text{Маша пришла на лекцию}\}$$

$$A:=\{\text{Алёна пришла на лекцию}\}$$

### Подзадача А

Построим разбиение $\Omega$:

$$D_1:=M\cap A,\quad D_2:=M\cap A^c,\quad D_3:=M^c\cap A, D_4:=M^c\cap A^c$$

$M$ и $A$ независимые.

$$\PP(M)=0.4,\quad \PP(A)=0.6$$

$$\PP(V|D_1)=0.9,\quad\PP(V|D_2)=0.54,\quad\PP(V|D_3)=0.36,\quad \PP(V|D_4)=0.18$$

$$\PP(D_1)=\PP(M\cap A)\overset{\text{по нез.}}=\PP(M)\PP(A)=0.4\times0.6=0.24$$

$$\PP(D_2)=\PP(M\cap A^c)\overset{\textcircled{1}}{=}\PP(M)\PP(A^c)=0.4\times0.4=0.16$$

$$\PP(D_3)=\PP(M^c\cap A)\overset{\textcircled{1}}{=}\PP(M^c)\PP(A)=0.6\times0.6=0.36$$

$$\PP(D_4)=\PP(M^c\cap A^c)\overset{\textcircled{1}}{=}\PP(M^c)\PP(A^c)=0.6\times0.4=0.24$$

Теперь ищем вероятность, что Вася пришёл на лекцию.

$$\begin{align*}\PP(V)&=\PP(V|D_1)\PP(D_1)+\PP(V|D_2)\PP(D_2)+\PP(V|D_3)\PP(D_3)+\PP(V|D_4)P(D_4)\\&=0.9\times0.24+0.54\times0.16+0.36\times0.36+0.18\times0.24=0.4752\end{align*}$$

### Подзадача Б

Кого чаще можно застать на тех лекциях, на которых присутствует Вася, Машу или Алёну?

$$\PP(M|V)\sim\PP(A|V)$$

$$\begin{align*}\PP(M|V)&=\PP(\underbrace{M\cap A}_{D_1}|V)+\PP(\underbrace{M\cap A^c}_{D_2}|V)\\&=\frac{\PP(V|D_1)\PP(D_1)}{\PP(V)}+\frac{\PP(V|D_2)\PP(D_2)}{P(V)}=0.64\end{align*}$$

```{note} Д/з
$$\PP(A|V)=\ldots=0.73$$
```

## Задача 6

Трое игроков по очереди подбрасывают монету бесконечное количество раз. Выигрывает тот, у кого раньше выпадет орёл. Найдите вероятности выигрыша для каждого игрока.

### Способ 1. (рабоче-крестьянский)

$$\Omega=\{O, PO, PPO, PPPO, PPPPO, \dots\}\cup\{PPP\dots P\dots\}$$

$$\FF=2^\Omega$$

$$\PP(\{O\})=\frac{1}{2},\quad\PP(\{PO\})=\frac{1}{2^2},\quad\PP(\{PPO\})=\frac{1}{2^3},\dots$$

$$\PP(\{PPP\dots P\dots\})=0$$

$$\begin{align*}&A_1:=\{\text{победил первый игрок}\}=\{O,PPPO,PPPPPPO,\dots\}\\&A_2:=\{\text{победил второй игрок}\}=\{PO,PPPPO,PPPPPPPO,\dots\}\\&A_3:=\{\text{победил третий игрок}\}=\{PPO,PPPPPO,PPPPPPPPO,\dots\}\end{align*}$$

$$\PP(A_1)=\frac{1}{2}+\frac{1}{2^4}+\frac{1}{2^7}+\frac{1}{2^{10}}+\dots=\frac{\frac{1}{2}}{1-\frac{1}{2^3}}=\frac{\frac{1}{2}}{\frac{7}{8}}=\frac{4}{7}$$

$$\PP(A_2)=\frac{1}{2^2}+\frac{1}{2^5}+\frac{1}{2^8}+\dots=\frac{1}{2}\PP(A_1)=\frac{2}{7}$$

$$\PP(A_3)=\frac{1}{2^3}+\frac{1}{2^6}+\frac{1}{2^9}+\dots=\frac{1}{2}\PP(A_2)=\frac{1}{7}$$

### Способ 2. 

$$D_1:=\{\text{при первом подбрасывании выпал орёл}\}$$

$$p_i:=\PP(A_i),\quad i=1,2,3$$

$$\begin{align*}p_1&=\PP(A_1|D_1)\PP(D_1)+\PP(A_1|D_1^c)\PP(D_1^c)\\&=1\times\frac{1}{2}+p_3\times\frac{1}{2}\end{align*}$$

$$\begin{align*}p_2&=\PP(A_2|D_1)\PP(D_1)+\PP(A_2|D_1^c)\PP(D_1^c)\\&=0\times\frac{1}{2}+p_1\times\frac{1}{2}\end{align*}$$

$$\begin{align*}P(A_1|D_1^c)&=\frac{\PP(A_1\cap D_1^c)}{\PP(D_1^c)}=\frac{\PP(\{PPPO,PPPPPPO,\dots\})}{\frac{1}{2}}\\&=\frac{\frac{1}{2^4}+\frac{1}{2^7}+\frac{1}{2^{10}}+\dots}{\frac{1}{2}}=\frac{1}{2^3}+\frac{1}{2^6}+\frac{1}{2^9}+\dots=p_3\end{align*}$$
---
layout: page
title: Discrete Mathematics, Homework 1
permalink: /dm/1
---

## Problem 1.1

### Subproblem A

Check whether $ (A \rightarrow B) \lor (B \rightarrow C) $ is a tautology.

#### Solution

$$ (A \rightarrow B) \lor (B \rightarrow C) = \lnot A \lor B \lor \lnot B \lor C$$

$B \lor \lnot B = 1 \Rightarrow \lnot A \lor 1 \lor C = 1 \Rightarrow $ the expression is a tautology, q. e. d.

#### Answer: True

### Subproblem B

Check whether $ A \rightarrow B \equiv A \rightarrow (A \land B) $ is a tautology.

#### Solution

$$ A \rightarrow B \equiv A \rightarrow (A \land B)$$

Truth tables for each of the halves of the equivalence are as follows:

|$A$|$B$|$A \rightarrow B^{\{1\}}$|$A \rightarrow (A \land B)^{\{2\}}$| 
|:-:|:-:|:-:|:-:|
|0|0|1|1|
|0|1|1|1|
|1|0|0|0|
|1|1|1|1|

In reality, expression ${\{2\}}$ could be simplified to just the first one through logical thinking. If $A = 0$, the implication is true regardless of $B$. If $A = B = 1$, then the expression is true. One option remains: if $(A, B) = (1, 0)$, then $(A \land B) = (1 \land B) = B$. Therefore, $\{2\}= A \rightarrow B$, and the expressions on the both parts of the equivalence are, in fact, equivalent, $\Rightarrow$ the expression is a tautology, q. e. d.

#### Answer: True

### Subproblem C

Check whether $ A \rightarrow (B \rightarrow C) \equiv (A \rightarrow B) \rightarrow C $ is a tautology.

#### Solution

Simplifying:

$$ A \rightarrow (B \rightarrow C) \equiv (A \rightarrow B) \rightarrow C $$ 
$$ \lnot A \lor \lnot B \lor C \equiv \lnot (\lnot A \lor B) \lor C $$
$$ \lnot A \lor \lnot B \lor C \equiv A \land B \lor C $$
Variable $C$ could be omitted, and then only the following expression remains:
$$ \lnot (A \land B) \equiv A \land B $$
$\lnot x \equiv x = 0 \Rightarrow$ the given expression is not a tautology, q. e. d.

#### Answer: False

### Subproblem D

Check whether $ A \land (B \rightarrow C) \equiv (A \land B) \rightarrow (A \land C)$ is a tautology.

#### Solution

$$ A \land (B \rightarrow C) \equiv (A \land B) \rightarrow (A \land C)$$
$$ A \land (\lnot B \lor C) \equiv \lnot (A \land B) \lor (A \land C)$$
As per the distribution principle:
$$ (A \land \lnot B) \lor (A \land C)  \equiv \lnot (A \land B) \lor (A \land C)$$
$$ (A \land \lnot B) \lor (A \land C)  \equiv \lnot (A \land B) \lor (A \land C)$$
Expression $(A \land C)$ could be omitted, and then only the following expression remains:
$$ (A \land \lnot B) \equiv \lnot (A \land B)$$
$$ A \land \lnot B \equiv \lnot A \lor \lnot B$$
Therefore, the expression is not a tautology.

#### Answer: False

## Problem 1.2

Consider whole numbers $x, y, z, t, w$, and two statements: $A =$ "$x + y + z + t + w$ is even", $B =$ "$xyztw$ is even". Prove that $A \rightarrow B$ is true.

### Solution

$A$ is true only if $0, 2$, or $4$ values are odd (sum of two odd numbers is even), otherwise it's odd. In other words, $A$ is true only if there are precisely $5, 3$, or $1$ even numbers.

$B$ is true if at least one value is even. 

Consider the following expression:

"exactly $1$ value is even" $\lor$ "exactly $3$ values are even" $\lor$ "exactly $5$ values are even" $\rightarrow$ "at least $1$ value is even"

If either $1, 3$, or $5$ values are even, then the statement "at least $1$ value is even" is always true, therefore $A \rightarrow B$ is always true, q. e. d.

## Problem 1.3

Is it true that for any sets $A, B$, and $C$:

---

### Subproblem A

$$((A \cup B) \setminus (A \cap B)) \setminus (A \setminus B) = B \setminus A $$

#### Solution

$((A \cup B) \setminus (A \cap B)) = A \ \triangle \ B$. When we remove $(A \setminus B)$ from the symmetric difference set, we are left only with values that fall in $B$ and nowhere else, which is precisely $B \setminus A$, which is equal to the righthand side of the equation $\Rightarrow$ the equivalence is true, q. e. d.

#### Answer: True

### Subproblem B

$$(A \cap B) \setminus C = (A \setminus C) \cap (B \setminus C)$$

#### Solution

I will consider that $A \setminus B = A \cap \overline{B}$, where $\overline{X}$ are all values that do not fall in set $X$.

$$(A \cap B) \cap \overline{C} = (A \cap \overline{C}) \cap (B \cap \overline{C})$$

This is the **distribution principle**, thus, the equivalence is true, q. e. d. 

*This also works just with the set subtraction operation as well without the necessity to permute the sides of the equation. This way it's just even more clear to the inexperienced eye.*

#### Answer: True

### Subproblem C

$$(A \cup B) \setminus (A \setminus B) \subseteq B$$

#### Solution

Using formal language, "what remains in the set if we subtract values that fall into a single set from a union of values that fall into both sets?" The answer is "values that are in a single set". In this case, $B$: $(A \cup B) \setminus (A \setminus B) = B \Rightarrow B \subseteq B = 1$, q. e. d.

#### Answer: True

### Subproblem D

$$((A \setminus B) \cup (A \setminus C)) \cap (A \setminus (B \cap C)) = A \setminus (B \cup C)$$

#### Solution

In the model of this task we are only working with values $x$ that fall in set $A$ (we are subtracting only from this set). There are four key subsets:

| number | $x \in B$ | $x \in C$ | expression |
|-:|:-:|:-:|:-|
|$(1)$|$0$|$0$|$A \setminus B \setminus C$|
|$(2)$|$1$|$0$|$A \cap B \setminus C$|
|$(3)$|$0$|$1$|$A \cap C \setminus B$|
|$(4)$|$1$|$1$|$A \cap B \cap C$|

Union of the sets in the table is equal to $A$, $(1)$ is a set, where $\forall x \in A$ and $\forall x \notin B$ and $\forall x \notin C$. 

Consider: 

* $((A \setminus B) \cup (A \setminus C)) = (a)$ 
* $(A \setminus (B \cap C)) = (b)$
* $A \setminus (B \cup C) = (c )$

Expression $(a)$ consists of $(1)$ and all values that are either in $B$ ($A \setminus C$) or in $C$ ($A \setminus B$) but not in both: $(a) = (1)\cup(2) \cup (3)$.

Expression $(b)$ consists of all values that are either just in $A$ or in $B$ or in $C$ but not in both: $(b) = (1) \cup (2) \cup (3)$.

Turns out, $(a) = (b) \Rightarrow (a) \cup (b) = (a) = (b)$

Actually, there is a better solution: these expressions are the same, which is further proven by the **distribution principle** $(A \cap \overline{B}) \cup (A \cap \overline{C}) = A \cap (\overline{B} \cup \overline{C}) = (A \cap \overline{(B \cap C)})$. Thus, $(a) = (b)$

Expression $(c)$ consists of all values that are in $A$ but are not in $B$ or $C$, therefore it only contains set $(1)$.

$(c) = (1) \neq (1) \cup (2) \cup (3) = (a) \cup (b) \Rightarrow$ the equivalence is false, q. e. d.

#### Answer: False

## Problem 1.4

For sets $A, B, C$, it is known that $A \cap B \subseteq C \setminus (A \cup B)$. Is it true that $A \subseteq A \ \triangle \ B$?

### Solution

The second statement should derive from the first one, therefore the following should be true:

$$A \cap B \subseteq C \setminus (A \cup B) \rightarrow A \subseteq A \ \triangle \ B$$

If the intersection of sets $A, B$ is a subset of $C \setminus (A \cup B) = C \cap \overline{(A \cup B)}$, then we suppose that all values that are in both $A$ and $B$ are also neither in sets $A$ or $B$. This is only possible if the number of such values is equal to $0 \Rightarrow$ sets $A$ and $B$ do not intersect (as the given statement is true).

A symmetric difference of two non-intersecting sets is equal to a union of two sets: $A \ \triangle \ B = A \cup B \Rightarrow A \subseteq A \cup B$ is true, q. e. d.

#### Answer: True
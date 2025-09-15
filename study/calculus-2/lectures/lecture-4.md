---

title: Лекция 4. Компакты в ℝⁿ
date: 2025-09-10
author: Artemis Feidenheimer
description: Замкнутый брус --- компакт. Критерий компактности
numbering:
  enumerator: 4.%s

---

## Компакты в {math}`\mathbb{R}^n`

```{prf:theorem} Компактность замкнутого бруса
:name: closed_block_compactness
Замкнутый брус — компакт.
```

```{prf:proof}
(От противного) Рассмотрим замкнутый брус $I=[a_1,b_1]\times\ldots\times[a_n, b_n]$.

1. Предположим, что $I$ не компакт, тогда $\exists$ его покрытие открытыми множествами $I\subset\{A_\alpha\}$, не позволяющее выделить конечное подпокрытие.
2. Поделим каждую сторону бруса пополам. Хотя бы один из полученных брусов не допускает выделения конечного подпокрытия (иначе $I$ компакт). Обозначим его $I_1$.
3. Повторим процесс деления ещё и ещё и получим систему вложенных брусков: 
$$I_1\supset I_2\supset \ldots$$
Таким образом, по теореме о вложенных отрезках $\exists! \m{a}=(a_1,\ldots,a_n)\in\RR^n\colon a\in I_k$ при $k\to\infty$ (или $a\in\bigcap^\infty_{k=1} I_k$)
4. Таким образом, $\m{a} \in I\implies A_{\alpha_0}\colon \m{a}\subset A_{\alpha_0}\oplus A_{\alpha_0}$ — открытое $\implies\exists r>0\colon B_r(a)\subset A_{\alpha_0}$.
5. Знаем, что $d(I_k)\to 0$ при $k\to\infty$, т. е. $\exists N\colon\forall k>N,$ $$A_{\alpha_0} \supset B_r(\m{a})\supset I_{N+1}\supset I_{N+2}\supset\ldots$$ т. е. $\forall k>N, I_k$ покрываются одним лишь $A_{\alpha_0}$ из системы $\{A_\alpha\}$, что предполагалось невозможным.
```

```{prf:theorem} Критерий компактности в $\RR^n$
:name: compactness-in-R-n-criterion
$K$ — компакт в $\RR^n\iff K$ — замкнуто и ограничено.
```

```{prf:proof}
$(\Rightarrow)$ **Необходимость**.

1. **Ограниченность**

    Пусть $\{B_n(0)\}^\infty_{n=1}\supset K$ — покрытие открытыми шарами. $K$ — компакт $\implies\exists N, B_N(0)\supset K$, где $\{B_n(0)\}^N_{n=1}$ — конечное подпокрытие $\implies K$ — ограничено (по определению).
2. **Замкнутость**

    От противного: Пусть $K$ — компакт, но не замкнуто, т. е. он не содержит **ВСЕ** предельные точки:
    * $\exists x_0\not\in K\colon x_0$ — предельная для $K\colon\forall\varepsilon>0,\overset{\circ}B_\varepsilon(x_0)\cap K\neq\varnothing$.
    * Рассмотрим покрытие $\{B_{\frac{\delta(x)}{2}}(x)\}_{x\in K}$, где $\delta(x)=||x-x_0||$
    * Так как $K$ — компакт $\implies\exists x_i\in B, i\in\{1, m\}, K\subset \bigcup_{i=1}^m B_{\frac{\delta(x_i)}{2}}(x_i)$
    * Пусть $\delta=\min_{i\in\{\overline{1, m}\}}\{\delta(x_i)\}$, тогда $B_{\frac{\delta}{2}}(x_0)\cap\left(\bigcup^m_{i=1}B_{\frac{\delta(x_i)}{2}}(x_i)\right)=\varnothing\implies B_{\frac{\delta}{2}}(x_0)\cap K=\varnothing$ и тем более, $\overset{\circ}B_{\frac{\delta}{2}}(x_0)\cap K=\varnothing\implies x_0$ не является предельной точкой $K$.

$(\Leftarrow)$ **Достаточность**.
* $K$ — замкнуто и ограничено $\implies \exists r>0, B_r(0)\supset K\implies\exists$ замкнутый брус $I=[-r,r]^n\supset K$.
* Пусть $\{A_\alpha\}$ — покрытие открытыми множествами $K$, тогда $\{A_\alpha\}\cup\underbrace{\{\RR^n\setminus K\}}_{\text{откр. т. к. K замкнуто}}$ — покрытие открытыми множествами $I$, но $I$ — компакт $\implies \{A_{\alpha_i}\}^s_{i=1}\cup\{\RR^n\setminus K\}\supset I\supset K$, т. к. $\{A_\alpha\}$ — произвольная $\implies K$ — компакт.
```

```{seealso} Замечание
Из критерия компактности $\implies$ если $K$ — компакт, $L\subset K$ — замкнуто, то $L$ — компакт.
```
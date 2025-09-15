---

title: Лекция 6. Суммы Дарбу
date: 2025-09-10
author: Artemis Feidenheimer
description: Нижняя и верзняя суммы Дарбу. Нижняя сумма Дарбу не больше верхней. Монотонность сумм относительно измельчений разбиения. Никакая нижняя сумма Дарбу не больше какой-либо верхней суммы на том же брусе. Верхние и нижние интегралы Дарбу. Интеграл Дарбу как предел сумм Дарбу.
numbering:
  enumerator: 6.%s

---


## Верхняя и нижняя суммы Дарбу

Пусть $I$ — замкнутый брус. $f\colon I\mapsto\RR$. $\TT=\{I_i\}^k_{i=1}$ — разбиение бруса $I$.

$$m_i=\inf_{I_i}(f),\quad M_i=\sup_{I_i}(f)$$

```{prf:definition}
:name: darbu_sums
Числа $\Sl(f,\TT)=\sum^k_{i=1}m_i|I_i|$ и $\Su(f,\TT)=\sum^k_{i=1}M_i|I_i|$ будем называть **нижней и верхней суммой Дарбу**, соответственно.
```

```{prf:theorem}
:name: darbu-properties
1. $\Sl(f,\TT)=\inf_{\xi}\sigma(f,\TT,\xi)\leq\sup_{\xi}\sigma(f,\TT,\xi)=\Su(f,\TT)$
2. Пусть $\tilde\TT$ — измельчение разбиения $\TT$ тогда 

$$\Sl(f,\TT)\leq\Sl(f,\tilde\TT)\leq\Su(f,\tilde\TT)\leq\Su(f,\TT)$$
3. $\forall\TT_1,\TT_2\colon\Sl(f,\TT_1)\leq\Su(f,\TT_2)$
```

```{prf:proof}
:nonumber:
(darbu1)=
1. $\Sl(f,\TT)=\sum_im_i|I_i|=\sum_i\inf_{\xi_i}(f(\xi_i))\cdot|I_i|=\inf_\xi\sum_if(\xi_i)\cdot|I_i|=\inf_\xi\sigma(f,\TT,\xi)\leq\sup_\xi\sigma(f,\TT,\xi)=\sum_i\sup_{\xi_i}(f(\xi_i))\cdot|I_i|=\sum_iM_i|I_i|=\Su(f,\TT)$
(darbu2)=
2. Если $L\subset M$, то $\inf L\leq \inf M$ и $\sup L\leq \sup M$, тогда по [первому пункту](#darbu1)

$$\Sl(f,\TT)\leq\underline(f,\tilde\TT)\leq\Su(f,\tilde\TT)\leq\Su(f,\TT)$$
3. $\forall\TT_1\TT_2$, рассмотрим $\tilde\TT=\TT_1\cap\TT_2$ тогда по [второму пункту](#darbu2)

$$\Sl(f,\TT_1)\leq\Sl(f,\tilde\TT)\leq\Su(f,\tilde\TT)\leq\Su(f,\TT_2)$$
```

```{prf:definition}
:name: darbu_integrals
Числа $\overline{I}=\inf_{\TT}\Su(f,\TT)$ и $\underline{I}=\sup_{\TT}\Sl(f,\TT)$ будем называть верхним и нижним интегралами Дарбу, соответственно.
```

```{prf:theorem} (интеграл Дарбу как предел суммы Дарбу)
:name: limit-of-darbu-sums-as-integral
$I\subset \RR^n$ — замкнутый брус, $f\colon I\mapsto\RR^n$ — ограничена.

Тогда $\overline{I}=\lim_{\Delta_\TT\to0}\Su(f,\TT)$ и $\underline{I}=\lim_{\Delta_\TT\to 0}\Sl(f,\TT)$
```

```{prf:proof}
Докажем, что $\underline{I}=\lim_{\Delta_\TT\to0}(\Sl(f,\TT))=\sup_\TT\Sl(f,\TT)$

1. $f$ — ограничена на $I$, то $\exists c>0,\forall x\in I,|f(x)|<c$.

(darbu22)=
2. Так как по определению $I=\sup_\TT\Sl(f,\TT)$, то $\forall\ve>0,\exists\TT_1=\{I_i^1\}^{m_1}_{i=1}\colon$

$$\boxed{\underline{I}-\ve<\Sl(f,\TT_1)\leq\underline{I}<\underline{I}+\ve}$$
3. Пусть $G=\bigcup_{i=1}^{m_1}\partial I_i^1$ — объединение границ брусов (без повторов). $\implies G$ — множество меры нуль по Лебегу (т. к. границы — множества меры нуль)
4. Пусть $\TT_2$ — произвольное разбиение $I\colon\TT_2=\{I^2_i\}^{m_2}_{i=1}$. Рассмотрим две кучки брусов:

$$\boxed{A=\{I_i^2\in\TT_2\colon I_i^2\cap G\neq\varnothing\}, B=\TT_2\setminus A}$$

$$\implies\forall\ve>0,\exists \delta(\ve)>0\colon\forall\TT_2\colon\Delta_{\TT_2}<\delta\hookrightarrow\boxed{\sum_{I_i^2\in A}|I_i^2|<\ve}$$

по определению множества меры нуль, так как $A$ — покрытие замкнутыми брусами, $G$ — множество меры нуль по Лебегу.

5. С другой стороны $\forall I_i^2\in B\hookrightarrow I_i^2\in\TT_1\cap\TT_2$

Хотим рассмотреть 

$$\begin{align*}|\underline{I}-\Sl(f,\TT_2)|&=|\underline{I}-\Sl(f,\TT_1\cap\TT_2)+\Sl(f,\TT_1\cap\TT_2)-\Sl(f,\TT_2)|\\&\leq|\underline{I}-\Sl(f,\TT_1\cap\TT_2)|+|\Sl(f,\TT_1\cap\TT_2)-\Sl(f,\TT_2)|\\&<\ve+2M\ve=\ve(1+2M)\end{align*}$$

* Из [пункта 2](#darbu22) $\underline{I}-\ve<\Sl(f,\TT_1)\leq\Sl(f,\TT_1\cap\TT_2)\leq\underline{I}<\underline{I}+\ve\implies|\underline{I}-\Sl(f,\TT_1\cap\TT_2)|<\ve$
* $$\begin{align*}|\Sl(f,\TT_1\cap\TT_2)-\Sl(f,\TT_2)|&=\left|\sum_{I_i^2\in B}m_i|I_i^2|+\sum_{I^2_i\in\TT_1\cap A}m_i|I_i^2|-\sum_{I_i^2\in B}m_i|I_i^2|-\sum_{I_i^2\in A}m_i|I_i^2|\right|\\&=\left|\sum_{I_i^2\in\TT_i\cap A}m_i|I_i^2|\right|+\left|\sum_{I_i^2\in A}m_i|I_i^2|\right|\leq 2\left|\sum_{I_i^2\in A}m_i|I_i^2|\right|<2M\left|\sum_{I_i^2\in A}|I_i^2|\right|\leq 2M\ve\end{align*}$$
```

```{prf:theorem} Критерий Дарбу интегрируемой функции по Риману
:name: darbu-riemann-integration-criterion
$I\subset\RR^k$ — замкнутый брус, $f\colon I\to\mathcal{R}$

$f\in\mathcal{R}(I)\iff f$ — ограничена на $I$ и $\underline{\mathcal{I}}=\overline{\mathcal{I}}$
```

```{prf:proof}

$(\Rightarrow)$ **Необходимость.**

* $f\in\mathcal{R}(I)\implies$ по необходимому условию интергируемости по Риману $f$ ограничена на $I$.
* Идея: показать, что $\boxed{\Il=\mathcal{L}}$ и $\Iu\implies \Il=\mathcal{L}$.
    1. $f\in\mathcal{R}(I)\implies\exists \mathcal{L},\forall\varepsilon>0,\exists\delta >0\colon\forall(\TT,\xi)\colon\Delta_\TT<\delta$.

    $$|\underbrace{\sigma(f,\TT,\xi)}_\sigma-\mathcal{L}|<\varepsilon$$
    $$\begin{align*}|\Il-\mathcal{L}|&=|\mathcal{L}-\Il-\sigma+\sigma+\Sl-\Sl\\&\leq\underbrace{|\mathcal{L}-\sigma|}_{<\varepsilon}+\underbrace{|\Il-\Sl|}_{<\varepsilon}+\underbrace{|\sigma-\Sl|}_{<\varepsilon}<3\varepsilon\end{align*}$$
    
    2. $$\Il=\lim_{\Delta\to0}\Sl(f,\TT)\implies|\Il-\Sl|<\varepsilon$$
    $$\forall\varepsilon>0,\exists\delta,\exists\TT\colon\Delta_\TT<\delta$$

    3. $\Sl(f,\TT)=\inf_\xi\sigma(f,\TT,\xi)$. $|\Sl-\sigma|<3\ve$.

$(\Leftarrow)$ **Достаточность.**

$f$ — ограничена и $\Il=\Iu$. Имеем 

$$\Sl(f,\TT)=\inf_\xi\leq\sigma(f,\TT,\xi)\leq\sup_\xi(f,\TT,\xi)=\Su(f,\TT)$$

Тогда при $\lim_{\Delta\to0}\Sl=\Il,\lim_{\Delta\to0}\Su=\Iu$ получаем $\Il=\Iu$.
```
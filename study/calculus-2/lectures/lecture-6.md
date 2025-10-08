---

title: Лекция 6. Суммы Дарбу
date: 2025-09-25
description: Нижняя и верхняя суммы Дарбу. Нижняя сумма Дарбу не больше верхней. Монотонность сумм относительно измельчений разбиения. Никакая нижняя сумма Дарбу не больше какой-либо верхней суммы на том же брусе. Верхние и нижние интегралы Дарбу. Интеграл Дарбу как предел сумм Дарбу.
numbering:
  enumerator: 6.%s

---


## Суммы Дарбу

```{prf:definition} Верхняя и нижняя суммы Дарбу
:name: darbu_sums

Пусть $I$ --- замкнутый брус. $f\colon I\mapsto\RR$. $\TT=\{I_i\}^k_{i=1}$ --- разбиение бруса $I$.

$$m_i=\inf_{I_i}(f),\quad M_i=\sup_{I_i}(f)$$

Числа 

$$\Sl(f,\TT)=\sum^k_{i=1}m_i|I_i| \quad \Su(f,\TT)=\sum^k_{i=1}M_i|I_i|$$ 

будем называть {bluehighlight}`нижней и верхней суммой Дарбу`, соответственно.
```

```{prf:theorem} Свойства сумм Дарбу
:name: darbu-properties
1. $\Sl(f,\TT)=\inf_{\bxi}\sigma(f,\TT,\bxi)\leq\sup_{\bxi}\sigma(f,\TT,\bxi)=\Su(f,\TT)$
2. Пусть $\tilde\TT$ --- измельчение разбиения $\TT$, тогда 

$$\Sl(f,\TT)\leq\Sl(f,\tilde\TT)\leq\Su(f,\tilde\TT)\leq\Su(f,\TT)$$
3. $\forall\TT_1,\TT_2\colon\Sl(f,\TT_1)\leq\Su(f,\TT_2)$
```

```{prf:proof}
:nonumber:

:::{div}
:label: darbu1
1. $\T=\{I_i\}^k_{i=1}$ <br>
  $\displaystyle\Sl(f,\TT)=\sum_{i=1}^k m_i|I_i|=\sum_{i=1}^k\inf_{\xi_i}(f(\xi_i))\cdot|I_i|=\inf_\bxi\sum_{i=1}^k f(\xi_i)\cdot|I_i|=\inf_\bxi\sigma(f,\TT,\xi)\leq\sup_\bxi\sigma(f,\TT,\xi)=\sum_i\sup_{\xi_i}(f(\xi_i))\cdot|I_i|=\sum_{i=1}M_i|I_i|=\Su(f,\TT)$
:::

:::{div}
:label: darbu2
2. $\tilde \TT$ --- измельчение $\TT$, тогда $\tilde\TT=\{I_j\}_{j=1}^{m\geq k}$.

Если $L\subset M$, то $\inf L\geq \inf M$ и $\sup L\leq \sup M$, тогда по [первому пункту](#darbu1)

$$\begin{align*}
\Sl(f,\TT)&=\sum_{i=1}^k\inf_{\xi_i\in I_i} f(\xi_i)\cdot |I_i|\leq \sum^m_{j=1} \inf_{\tilde\xi_j\in \tilde I_j} f(\tilde \xi_j)\cdot|\tilde I_j|\\
&\leq \sum^m_{j=1}\sup_{\tilde \xi_j\in \tilde I_j} f(\tilde \xi_j)\cdot |\tilde I_j|\leq \sum^k_{i=1} \sup_{\xi_i\in I_i}f(\xi_i)\cdot |I_i|=\Su(f,\TT)
\end{align*}$$

то есть в итоге получили

$$\Sl(f,\TT)\leq\Sl(f,\tilde\TT)\leq\Su(f,\tilde\TT)\leq\Su(f,\TT)$$
:::

3. $\forall\TT_1,\TT_2$, тогда по [второму пункту](#darbu2) и [первому пункту](#darbu1)

$$\Sl(f,\TT_1)\overset{2}{\leq}\Sl(f,\TT_1\cap\TT_2)\overset{1}{\leq}\Su(f,\TT_1\cap\TT_2)\overset{2}{\leq}\Su(f,\TT_2)$$
```

```{prf:definition} Интегралы Дарбу
:name: darbu_integrals 
Числа $\displaystyle\Iu=\inf_{\TT}\Su(f,\TT)$ и $\displaystyle\Il=\sup_{\TT}\Sl(f,\TT)$ будем называть {bluehighlight}`верхним и нижним интегралами Дарбу`, соответственно.
```

```{prf:theorem} Интеграл Дарбу как предел сумм Дарбу
:name: limit-of-darbu-sums-as-integral
$I\subset \RR^n$ --- замкнутый брус, $f\colon I\mapsto\RR^n$ --- ограничена. <br>
Тогда $\displaystyle\Iu=\lim_{\Delta_\TT\to0}\Su(f,\TT)$ и $\displaystyle\Il=\lim_{\Delta_\TT\to 0}\Sl(f,\TT)$
```

```{prf:proof}
Докажем, что $\displaystyle\Il=\lim_{\Delta_\TT\to0}(\Sl(f,\TT))=\sup_\TT\Sl(f,\TT)$

1. $f$ --- ограничена на $I$, то $\exists c>0,\forall x\in I,|f(x)|<c$.

:::{div}
:label: darbu22
2. По определению $\displaystyle \Il=\sup_\TT\Sl(f,\TT)$, то $\forall\ve>0,\exists\TT=\{I_i\}^k_{i=1}\colon$

  $$\boxed{\Il-\ve<\Sl(f,\TT)\leq\Il<\Il+\ve}$$
:::

3. Пусть $\displaystyle G=\bigsqcup_{i=1}^{k_1}\partial I_i$ --- объединение границ брусов (оно дизъюнктное, то есть без повторов). $\implies G$ --- множество меры нуль по Лебегу (т. к. границы --- множества меры нуль).

4. Пусть $\tilde \TT$ --- произвольное разбиение $I\colon\tilde\TT=\{\tilde I_j\}^m_{j=1}$. Рассмотрим две кучки брусов: $$\boxed{A=\{\tilde I_j\in \tilde\TT \colon \tilde I_j\cap G\neq\varnothing\},\quad B=\tilde\TT\setminus A}$$ $$\implies\forall\ve>0,\exists \delta>0\colon\forall\tilde\TT\colon\Delta_{\tilde\TT}<\delta\hookrightarrow\boxed{\sum_{\tilde I_j\in A}|\tilde I_j|<\ve}$$ по определению множества меры нуль, так как $A$ --- покрытие  $G$ замкнутыми брусами, $G$ --- множество меры нуль по Лебегу.

5. С другой стороны $\forall \tilde I_j\in B\implies \tilde I_j \in \TT \cap \tilde \TT$.
   Хотим рассмотреть 

   $$\begin{align*}
    |\Il - \Sl(f, \tilde\TT)|&=|\Il-\Sl(f, \TT \cap \tilde \TT) + \Sl(f, \TT \cap \tilde \TT) - \Sl(f, \tilde \TT)|\\
    &\leq |\Il - \Sl(f, \TT \cap \tilde\TT)| + |\Sl(f, \TT \cap \tilde\TT)-\Sl(f, \tilde\TT)|\\
    &<\ve+2\const\ve=\ve(1+2\const)
   \end{align*}$$

   1. Из [пункта 2](#darbu22) получаем, что $\Il - \ve < \Sl(f, \TT)\leq \Sl(f, \TT \cap \tilde\TT) \leq \Il < \Il + \ve \implies |\Il - \Sl(f, \TT \cap \tilde\TT)| < \ve$

   2. $$\begin{align*}
    |\Sl (f, \TT \cap \tilde\TT) - \Sl(f, \tilde\TT)|&
    =\left|\cancel{\sum_{\tilde I_j \in B}f(\xi_i)|\tilde I_j|}+\sum_{I_i\in(\TT\cap \tilde\TT)\setminus B}f(\xi_i)|I_j|\right.\\
    &\ \ \ \left.-\cancel{\sum_{\tilde I_j\in B}f(\xi_i)|\tilde I_j|}-\sum_{I_j\in A}f(\xi_i)|\tilde I_j|\right|\\
    &=\left|\sum_{I_i\in(\TT\cap \tilde\TT)\setminus B}f(\xi_i)|I_j|-\sum_{\tilde I_j\in A}f(\xi_i)|\tilde I_j|\right|\\
    &\leq\left|\sum_{I_i\in(\TT\cap \tilde\TT)\setminus B}f(\xi_i)|I_j|\right|+\left|\sum_{\tilde I_j\in A}f(\xi_i)|\tilde I_j|\right|\\
    &\leq 2\left|\sum_{\tilde I_j\in A}f(\xi_i)|\tilde I_j|\right|<2\const\left|\sum_{\tilde I_j\in A}|\tilde I_j|\right|\leq 2\const\cdot\ve
   \end{align*}$$
```

```{prf:theorem} Критерий Дарбу интегрируемой функции по Риману
:name: darbu-riemann-integration-criterion
$I\subset\RR^k$ --- замкнутый брус, $f\colon I\to\mathcal{R}$

$f\in\mathcal{R}(I)\iff f$ --- ограничена на $I$ и $\underline{\mathcal{I}}=\overline{\mathcal{I}}$
```

```{prf:proof}

$(\Rightarrow)$ **Необходимость.**

* $f\in\mathcal{R}(I)\implies$ по необходимому условию интергируемости по Риману $f$ ограничена на $I$.
* Идея: показать, что $\Il=\II$ и $\Iu=\II \implies \boxed{\Il=\Iu}$.
    1. $f\in\mathcal{R}(I)\implies\exists \II,\forall\varepsilon>0,\exists\delta >0\colon\forall(\TT,\xi)\colon\Delta_\TT<\delta$.

    :::{div}
    :label: darbu-point-2
    2. $$|\underbrace{\sigma(f,\TT,\xi)}_\sigma-\II|<\frac{\varepsilon}{3}$$

    $$\begin{align*}|\Il-\II|&=|\II-\Il-\sigma+\sigma+\Sl-\Sl|\\&\leq\underbrace{|\II-\sigma|}_{<\frac{\varepsilon}{3}}+\underbrace{|\Il-\Sl|}_{<\frac{\varepsilon}{3}}+\underbrace{|\sigma-\Sl|}_{<\frac{\varepsilon}{3}}<\varepsilon\end{align*}$$
    :::
    
    3. $$\Il=\sup_{\TT}\Sl(f,\TT)=\lim_{\Delta\to0}\Sl(f,\TT)\implies|\Il-\Sl|<\frac{\varepsilon}{3}$$

    4. $$\Sl(f,\TT)=\inf_\bxi\sigma(f,\TT,\bxi)\implies \forall \ve>0,\exists \xi\colon |\Sl-\sigma|<\frac{\ve}{3}$$

    5. Симметричное доказательство для $|\Iu-\II|$ как в [пункте 2].(#darbu-point-2). Доказали равество с $\II$ для каждой суммы Дарбу.

    6. Получаем, что $\Il=\II \ \land \ \Iu=\II \implies \boxed{\Il=\Iu}$.

$(\Leftarrow)$ **Достаточность.**

$f$ --- ограничена и $\Il=\Iu$. Имеем 

$$\Sl(f,\TT)=\inf_\xi\leq\sigma(f,\TT,\xi)\leq\sup_\xi(f,\TT,\xi)=\Su(f,\TT)$$

Тогда при $\displaystyle \lim_{\Delta\to0}\Sl=\Il,\lim_{\Delta\to0}\Su=\Iu$ получаем $\Il=\Iu$.
```
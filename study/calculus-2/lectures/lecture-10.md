---

title: Лекция 10. Неравномерная сходимость, интегрирование, дифференцирование функциональных последовательностей
date: 2025-10-15
description: Утверждение о неравномерной сходимости функциональной последовательности при наличнии расходимости в точке. Теоремы о почленном интегрировании и дифференцировании функциональной последовательности
numbering:
  enumerator: 10.%s

---

```{prf:theorem} О неравномерной сходимости / расходимости в точке
:name: divergence-at-point
$$\left.\begin{align*}
    &f_n\in \contclass[a, b)\\
    &f_n\xrightarrow{(a, b)} f\\
    &\cancel{\exists}\lim_{n\to\infty}f_n(a)
\end{align*}\right\}\implies f_n\overset{(a,b)}{\not\uniconverges}f$$

сходится неравномерно.
```

```{prf:proof}
От противного.

1. $f_n\xrightarrow{(a, b)} f$ следует из условия.

2. Пусть $f_n\overset{(a,b)}{\uniconverges} f$, тогда по [Критерию Коши](#Cauchy-convergence) 

$$\forall\ve>0,\exists N(\ve)\colon\forall n,m>N,\forall x\in(a,b)\hookrightarrow|f_n(x)-f_m(x)|<\frac{\ve}{3}$$

3. $f_n\in \contclass[a, b)$, тогда 
    $$\begin{align*}\forall n \in \NN, \forall x_0\in[a, b)&\hookrightarrow\forall\ve>0,\exists\delta(x_0,\ve)>0,\forall x\in \ball_\delta(x_0)\cap[a, b)\\&\hookrightarrow |f_n(x)-f_n(x)|<\frac{\ve}{3}
    \end{align*}$$

    В частности верно для $x_0=a$

    $$\forall\ve>0,\exists\delta>0,\forall x\in\overset{\circ}\ball_\delta(a)\cap(a, b)\hookrightarrow |f_n(x)-f_n(a)|<\frac{\ve}{3}$$

    Рассмотрим теперь:

    $$\begin{align*}
        |f_n(a)-f_m(a)|&\leq\underset{\text{по п. 3}}{\overset{(1)}{|f_n(a)-f_n(x)|}}+\underset{\text{по п. 2}}{\overset{(2)}{|f_n(x)-f_m(x)|}}+\underset{\text{по п. 3}}{\overset{(3)}{|f_m(x)-f_m(a)|}}\\
        &<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve
    \end{align*}$$

    Получаем: 
    
    $$\forall\ve>0,\exists N(\ve) \colon\forall n,m>N \hookrightarrow|f_n(a)-f_m(a)|<\ve$$

    т. е. $\exists\lim_{n\to\infty}f_n(a)$ по Критерию Коши для числовых последовательностей, что противоречит условию $\implies$ предположение было неверным и $\nexists \lim_{n\to\infty}f_n(a)$. <br>
    $$\boxed{f_n\not\overset{(a,b)}{\uniconverges}f}$$
```

```{prf:theorem} О почленном интегрировании функциональных последовательностей
:name: itemwise-integration-functional-sequences
$$\left.\begin{align*}
    &f_n, f\colon [a, b]\mapsto\mathbb{R}\\
    &f_n\overset{[a, b]}\uniconverges f\\
    &f_n\in\mathcal{R}[a, b],\forall n\in \mathbb{N}
\end{align*}\right\}\implies\begin{align*}
    &1. f\in\mathcal{R}[a,b]\\
    &2.\boxed{\lim_{n\to\infty}\int\limits_a^bf_n(x)\d x=\int\limits_a^bf(x)\d x}
\end{align*}$$
```

```{prf:proof}
По [Критерию Дарбу](#darbu-riemann-integration-criterion): $f\in\mathcal{R}[a, b]\iff f$ --- ограниченная на $[a, b]$ и $\Il=\Iu$

1. **(Ограниченность)**
    1. $\forall n\in\NN\colon f_n\in\mathcal{R}[a, b]\implies f_n$ --- ограниченная на $[a, b]$, то есть

    $$\forall n\in\NN,\exists M_n\geq 0,\forall x\in[a, b]\hookrightarrow |f_n(x)|\leq M_n$$
    2. $f_n\overset{[a,b]}\uniconverges f$, то
    
        $$\forall\ve>0,\exists N(\ve)\colon\forall n > N,\forall x\in[a, b]\hookrightarrow |f_n(x)-f(x)|<\ve$$

        Так как верно $\forall \ve$, то рассмотрим случаи $\ve\lll 1$, в частности $\ve=1$, тогда
        

        Тогда для $f(x)$ верно:

        $$\forall x\in[a, b], |f(x)|\leq|f(x)-f_{N+1}(x)|+|f_{N+1}(x)|<1+M_{N+1}$$

        т. е. $\forall x\in[a, b], f(x)$ --- ограниченная
2. **(Интегрируемость)**

    $$\Il=\lim_{\Delta_\TT\to0}\Sl(f,\TT),\quad\Iu=\lim_{\Delta_\TT\to0}\Su(f,\TT)$$

    $f\in\mathcal{R}[a, b]$, если $\forall\ve>0,\exists\delta>0,\forall\TT\colon\delta_\TT<\delta\hookrightarrow|\Sl(f,\TT)-\Su(f,\TT)|<\ve$

    Рассмотрим $\TT$ --- разбиение $[a, b]$

    $$|\Sl(f,\TT)-\Su(f,\TT)|\leq\underbrace{|\Sl(f,\TT)-\Sl(f_n,\TT)|}_{(1)}+\underbrace{|\Sl(f_n,\TT)-\Su(f_n,\TT)|}_{(2)}+\underbrace{|\Su(f_n,\TT)-\Su(f,\TT)|}_{(3)}$$

    $$(1)\colon|\Sl(f,\TT)-\Sl(f_n,\TT)|\leq\sum_i|\inf_{I_i}(f)-\inf_{I_i}(f_n)||I_i|\leq\sum_i\sup_{I_i}|f-f_n||I_i|\leq\sup_{[a,b]}|f-f_n|=|b-a|\leq\frac{\ve}{3}$$

    Но знаем, что $f_n\overset{[a,b]}\uniconverges f\implies$ по lim-sup критерию $\forall\ve>0,\exists N,\forall n> N\hookrightarrow\sup_{[a,b]}|f-f_n|<\frac{\ve}{3|b-a|}$

    для $(3)$ аналогично: $|\Su(f_n,\TT)-\Su(f,\TT)|\leq\sup_{[a,b]}|f-f_n|\cdot|b-a|\leq\frac{\ve}{3}$

    $(2)\colon f_n\in\mathcal{R}[a,b]\implies\forall\ve>0,\exists\delta>0,\forall\TT,\Delta_\TT<\delta,|\Sl(f_n,\TT)-\Su(f_n,\TT)|<\frac{\ve}{3}$

    Собираем воедино:

    $\forall\ve>0,\exists\delta>0(\exists N),\forall\TT\colon\Delta_\TT<\delta(\forall n>N)\hookrightarrow|\Sl(f,\TT)-\Su(f,\TT)|<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve\implies f(x)\in\mathcal{R}[a,b]$
3. Покажем теперь, что 
    
    $$\lim_{n\to\infty}\int\limits_a^bf_n(x)\d x=\int\limits_a^bf(x)\d x\implies \left|\int\limits_a^bf_n(x)\d x-\int\limits_a^bf(x)\d x\right|<\ve$$

    Рассмотрим:

    $$\begin{align*}
        \left|\int\limits_a^bf_n(x)\d x-\int\limits_a^bf(x)\d x\right|&=\left|\int\limits_a^b\left(f_n(x)-f(x)\right)\d x\right|\\
        &\leq\int\limits_a^b|f_n(x)-f(x)|\d x\\
        &\leq\int\limits_a^b\sup_{[a,b]}|f_n(x)-f(x)|\\
        &\leq\sup_{[a,b]}|f_n(x)-f(x)|\int\limits_a^b\d x\\
        &=\sup_{[a,b]}|f_n(x)-f(x)|\cdot|b-a|<\frac{\ve}{3}<\ve
    \end{align*}$$

    Вспомним, что значит равномерная сходимость:

    $$f_n(x)\overset{[a, b]}\uniconverges f(x)\implies\forall\ve>0,\exists N,\forall n>N, |f_n(x)-f(x)|<\frac{\ve}{|b-a|}$$

    получаем, что 
    
    $$\forall \ve>0,\exists N,\forall n>N\hookrightarrow\left|\int\limits_a^bf_n(x)\d x-\int\limits_a^bf(x)\d x\right|<\ve$$
```

```{prf:theorem} О почленном дифференцировании функциональных последовательностей
:name: itemwise-differentiation-functional-sequences

$$\left.\begin{align*}
    &f_n,f_g\colon[a,b]\mapsto\RR\\
    &f_n\in\dop[a,b]\\
    &\exists c\in[a,b]\colon\exists\lim_{n\to\infty}f_n(c)\\
    &\exists g(x)\colon f_n'(x)\overset{[a,b]}\uniconverges g(x)
\end{align*}\right\}\implies\begin{align*}
    &\exists f\colon f_n\overset{[a,b]}\uniconverges f\\
    &f'(x)=g(x)
\end{align*}$$
```

```{prf:proof}
1. Существование $f\colon f_n\overset{[a,b]}\uniconverges f$
    
    1. Введём $\varphi(x)=f_n(x)-f_m(x)$ для компактности доказательства, чтобы было легче потом доказывать по критерию Коши.
       ::::{seealso} Воспоминания из первого курса

       % оформить как Коши
       Если $f(x)$ определена в окрестности точки $a$ и дифференцируема в точке $a$, то $f(x)$ непрерывна в точке $a$. 

       Следовательно, $\boxed{f_n\in\dop[a,b]\implies f_n\in\contclass[a,b]}$.

       :::{prf:theorem} Лагранжа
       $$f\in \mathcal{C}[a,b], f\in\dop(a, b)\implies\exists c\in(a,b), f(b)-f(a)=f'(c)(b-a)$$
       :::

       $\forall n\in\NN, f_n\in\dop[a,b]\implies f_n\in \contclass[a,b]$  $\implies \varphi(x)\in\dop[a,b]$ и $\varphi(x)\in \contclass[a, b]$
       ::::
       
       Тогда рассмотрим для $c$ из условия теоремы Лагранжа:

       $$\boxed{\varphi(x)-\varphi(c)=\varphi'(\xi)\cdot(x-c)}, \quad \xi\in[c, x] (\xi\in[x, c])$$

       Откуда получаем $\varphi(x)=\varphi'(\xi)(c-x)+\varphi(c)$

       1. $\displaystyle\exists\lim_{n\to\infty}f_n(c)\implies$ выполняется критерий Коши для числовых последовательностей $\implies \forall\ve>0,\exists N_1,\forall n,m>N_1\hookrightarrow|f_n(c)-f_m(c)|<\frac{\ve}{2}$

       2. $f_n'(x)\overset{[a,b]}{\uniconverges} g(x)\implies$ тоже выполняется критерий Коши для числовых последовательностей $\implies\forall\ve>0,\exists N_2,\forall n, m> N_2\forall \xi\in[a, b]\hookrightarrow|f_n'(\xi)-f'_m(\xi)|<\frac{\ve}{2|b-a|}$
       
       % посмотреть нужно ли
       Оценим $|\varphi(x)|\leq|\varphi'(\xi)|\cdot|c-x|+|\varphi(c)|=|f_n'(\xi)-f_m'(\xi)|\cdot|c-x|+|f_n(c)-f_m(c)|<\frac{\ve}{2|b-a|}\cdot|c-x|+\frac{\ve}{2}<\ve$

       Таким образом, 
       
       $$\begin{align*}
          \forall\ve >0,\exists N&=\max\{N_1,N_2\}\colon\\
          &\forall n,m>N,\forall x\in[a, b]\hookrightarrow |\varphi(x)|=|f_n(x)-f_m(x)|<\ve\\
          &\implies\exists f\colon f_n\overset{[a,b]}\uniconverges f
       \end{align*}$$

2. Докажем, что $f'(x)=g(x)$.

    Пусть есть фиксированный $x_0\in[a,b]$, но он произвольный

    1. Рассмотрим $\boxed{\displaystyle\psi_n(x)=\frac{f_n(x)-f_n(x_0)}{x-x_0}}$
    
        Покажем по Критерию Коши, что $\psi_n(x)\overset{[a,b]}{\uniconverges} |\psi_n(x)-\psi_m(x)|$
        
        $$\begin{align*}
        |\psi_n(x)-\psi_m(x)|&=\left|\frac{f_n(x)-f_n(x_0)}{x-x_0}-\frac{f_m(x)-f_m(x_0)}{x-x_0}\right|\\
        &=\left|\frac{f_n(x)-f_m(x)}{x-x_0}-\frac{f_n(x_0)-f_m(x_0)}{x-x_0}\right|\\
        &=\left|\frac{\varphi(x)-\varphi(x_0)}{x-x_0}\right|\xRightarrow{\text{по Лагранжу}}\\
        &\implies \frac{|\varphi'(\xi)||x-x_0|}{|x-x_0|}=|\varphi'(\xi)|=|f_n'(\xi)-f'_m(\xi)|<\ve
        \end{align*}$$

        по Лагранжу $\exists\xi\in[x_0, x]$ и так как $f_n'(x)\overset{[a,b]}\uniconverges$, то 
        
        $$\forall\ve>0,\exists N,\forall n,m>N,\forall x\in[a,b]\hookrightarrow|f_n'(x)-f'_m(x)|<\ve$$
        
        Таким образом, $\psi_n(x)\overset{[a,b]}\uniconverges$ к какой-то функции.

    2. $$\forall n\in\NN,f_n\in\dop[a,b],\exists\lim_{x\to x_0}\psi_n(x)=\lim_{x\to x_0}\frac{f_n(x)-f_n(x_0)}{x-x_0}=f_n'(x_0)$$

        Следовательно получаем, что все условия последующей теоремы выполняются: $\displaystyle\psi_n(x)\overset{[a, b]}\uniconverges$ и $\forall n\in\mathbb{N},\exists\lim_{x\to x_0}\psi_n(x)=f'_n(x_0)\implies$ по теореме о почленном переходе к пределу:

        $$\begin{align*}g(x_0)&=\lim_{n\to\infty}f'_n(x_0)=\lim_{n\to\infty}\lim_{x\to x_0}\psi_n(x)=\lim_{n\to\infty}\lim_{x\to x_0}\left(\frac{f_n(x)-f_n(x_0)}{x-x_0}\right)\\&=\lim_{x\to x_0}\lim_{n\to\infty}\left(\frac{f_n(x)-f_n(x_0)}{x-x_0}\right)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=f'(x_0)\end{align*}$$
```
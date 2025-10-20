---

title: Лекция 10. Неравномерная сходимость, интегрирование, диффернцирование функциональных последовательностей
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
\end{align*}\right\}\implies f_n\overset{(a,b)}{\not\rightrightarrows}f$$

сходится неравномерно.
```

```{prf:proof}
От противного.

1. $f_n\xrightarrow{(a, b)} f$ следует из условия.

2. Пусть $f_n\overset{(a,b)}{\rightrightarrows} f$, тогда по [Критерию Коши](#Cauchy-convergence) 

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
    $$\boxed{f_n\not\overset{(a,b)}{\rightrightarrows}f}$$
```

```{prf:theorem} О почленном интегрировании функциональных последовательностей
:name: itemwise-integration-functional-sequences
$$\left.\begin{align*}
    &f_n, f\colon [a, b]\mapsto\mathbb{R}\\
    &f_n\overset{[a, b]}\rightrightarrows f\\
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
    2. $f_n\overset{[a,b]}\rightrightarrows f$, то
    
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

    Но знаем, что $f_n\overset{[a,b]}\rightrightarrows f\implies$ по lim-sup критерию $\forall\ve>0,\exists N,\forall n> N\hookrightarrow\sup_{[a,b]}|f-f_n|<\frac{\ve}{3|b-a|}$

    для $(3)$ аналогично: $|\Su(f_n,\TT)-\Su(f,\TT)|\leq\sup_{[a,b]}|f-f_n|\cdot|b-a|\leq\frac{\ve}{3}$

    $(2)\colon f_n\in\mathcal{R}[a,b]\implies\forall\ve>0,\exists\delta>0,\forall\TT,\Delta_\TT<\delta,|\Sl(f_n,\TT)-\Su(f_n,\TT)|<\frac{\ve}{3}$

    Собираем воедино:

    $\forall\ve>0,\exists\delta>0(\exists N),\forall\TT\colon\Delta_\TT<\delta(\forall n>N)\hookrightarrow|\Sl(f,\TT)-\Su(f,\TT)|<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve\implies f(x)\in\mathcal{R}[a,b]$
3. Покажем теперь, что 
    
    $$\lim_{n\to\infty}\int\limits_a^af_n(x)\d x=\int\limits_a^bf(x)\d x$$

    Рассмотрим:

    $$\left|\int\limits_a^bf_n(x)\d x-\int\limits_a^bf(x)\d x\right|\leq\int\limits_a^b|f_n(x)-f(x)|\d x\leq\sup_{[a,b]}|f_n(x)-f(x)|\cdot|b-a|<\ve$$

    $f_n(x)\overset{[a, b]}\rightrightarrows f(x)\implies\forall\ve>0,\exists N,\forall n>N, |f_n(x)-f(x)|<\frac{\ve}{|b-a|}$

    получаем, что $\forall \ve>0,\exists N,\forall n>N\hookrightarrow\left|\int\limits_a^bf_n(x)\d x-\int\limits_a^bf(x)\d x\right|<\ve$
```

```{prf:theorem} О почленном дифференцировании функциональных последовательностей
:name: itemwise-differentiation-functional-sequences

$$\left.\begin{align*}
    &f_n,f,g\colon[a,b]\mapsto\RR\\
    &f_n\in\mathcal{D}[a,b]\\
    &\exists c\in[a,b]\colon\exists\lim_{n\to\infty}f_n(c)\\
    &\exists g(x)\colon f_n'(x)\overset{[a,b]}\rightrightarrows g(x)
\end{align*}\right\}\implies\begin{align*}
    &\exists f\colon f_n\overset{[a,b]}\rightrightarrows f\\
    &\oplus f'(x)=g(x)
\end{align*}$$
```

```{prf:proof}
1. Существование $f\colon f_n\overset{[a,b]}\rightrightarrows f$
    
    * Рассмотрим $\varphi(x)=f_n(x)-f_m(x)$
    * $\forall n\in\NN, f_n\in\mathcal{D}[a,b]\implies f_n\in \contclass[a,b]$ (если $f$ определена в окрестности $a$ и дифференцируема в $a$, то $f$ непрерывна в $a$) $\implies \varphi(x)\in\mathcal{D}[a,b]$ и $\varphi(x)\in \contclass[a, b]$
    * Рассмотрим для $c$ из условия теоремы Лагранжа

    :::{prf:theorem} Лагранжа
    $$f\in \mathcal{C}[a,b], f\in\mathcal{D}(a, b)\implies\exists c\in(a,b), f(b)-f(a)=f'(c)(b-a)$$
    :::

    $$\boxed{\varphi(x)-\varphi(c)=\varphi'(\xi)\cdot(x-c)}$$

    где $\xi\in[c, x] \ ([x, c])$

    Откуда $\varphi(x)=\varphi'(\xi)(c-x)+\varphi(c)$
    * Учитывая 
    
        $(*)\ f_n'(x)\overset{[a,b]}{\rightrightarrows} g(x)\implies\forall\ve>0,\exists N_1,\forall n, m> N_1\forall x\in[a, b]\hookrightarrow|f_n'(\xi)-f'_m(\xi)|<\frac{\ve}{2|b-a|}$

        $(**) \ \exists\lim_{n\to\infty}f_n(c)\implies\forall\ve>0,\exists N_2,\forall n,m>N_2\hookrightarrow|f_n(c)-f_m(c)|<\frac{ve}{2}$

        Оценим $|\varphi(x)|\leq|\varphi'(\xi)|\cdot|c-x|+|\varphi(c)|=|f_n'(\xi)-f_m'(\xi)|\cdot|c-x|+|f_n(c)-f_m(c)|<\frac{\ve}{2|b-a|}\cdot|c-x|+\frac{\ve}{2}<\ve$
        
        т. е. $\forall\ve >0,\exists N=\max\{N_1,N_2\}\colon\forall n,m>N,\forall x\in[a, b]\hookrightarrow |\varphi(x)|=|f_n(x)-f_m(x)|<\ve\implies\exists f\colon f_n\overset{[a,b]}\rightrightarrows f$

2. Докажем, что $f'(x)=g(x)$.

    Пусть есть фиксированный $x_0\in[a,b]$, но он произвольный

    * Рассмотрим $\psi_n(x)=\frac{f_n(x)-f_n(x_0)}{x-x_0}$
    
        Покажем по Критерию Коши, что $\psi_n(x)\overset{[a,b]}{\rightrightarrows} |\psi_n(x)-\psi_m(x)|=\left|\frac{f_n(x)-f_n(x_0)-f_m(x)+f_m(x_0)}{x-x_0}\right|=\left|\frac{(f_n(x)-f_m(x))-(f_n(x_0)-f_m(x_0))}{x-x_0}\right|=\left|\frac{\varphi(x)-\varphi(x_0)}{x-x_0}\right|=$ по Лагранжу $\exists\xi\in[x_0, x]=\frac{|\varphi'(\xi)||x-x_0|}{|x-x_0|}=|\varphi'(\xi)|=|f_n'(\xi)-f'_m(\xi)|<\ve$

        так как $f_n'\overset{[a,b]}\rightrightarrows$, т. е. $\forall\ve>0,\exists N,\forall n,m>N,\forall x\in[a,b]\hookrightarrow|f_n'(x)-f'_m(x)|<\ve$. Таким образом, $\psi_n(x)\overset{[a,b]}\rightrightarrows$

    * $\forall n\in\NN,\exists\lim_{x\to x_0}\psi_n(x)=\lim_{x\to x_0}\frac{f_n(x)-f_n(x_0)}{x-x_0}=f_n'(x_0)$, так как $f_n\in\mathcal{D}[a,b]$

        Получаем $\psi_n(x)\overset{[a, b]}\rightrightarrows$ и $\forall n\in\mathbb{N},\exists\lim_{x\to x_0}\psi_n(x)=f'_n(x_0)\implies$ по теореме о почленном переходе к пределу 

        $$\begin{align*}g(x_0)&=\lim_{n\to\infty}f'_n(x_0)=\lim_{n\to\infty}\lim_{x\to x_0}\psi_n(x)=\lim_{n\to\infty}\lim_{x\to x_0}\left(\frac{f_n(x)-f_n(x_0)}{x-x_0}\right)\\&=\lim_{x\to x_0}\lim_{n\to\infty}\left(\frac{f_n(x)-f_n(x_0)}{x-x_0}\right)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=f'(x_0)\end{align*}$$
```
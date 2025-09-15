---

title: Лекция 10. Неравномерная сходимость, интегрирование, диффернцирование функциональных последовательностей
date: 2025-09-10
author: Artemis Feidenheimer
description: Утверждение о неравномерной сходимости функциональной последовательности при наличнии расходимости в точке. Теоремы о почленном интегрировании и дифференцировании функциональной последовательности
thumbnail: ./../images/calculus-2/image.png
numbering:
  enumerator: 10.%s

---

## Неравномерная сходимость, интегрирование, дифференцирование функциональных последовательностей

### Утверждение о неравномерной сходимости фун. послед. при наличии расходимости в точке

Пусть имеется {math}`\left.\begin{aligned}
    &f_n\in C\left([a;b)\right)\\
    &f_n\overset{(a;b)}{\longrightarrow} f\\
    &\not\exists \lim\limits_{n\to\infty}f_n(a)
\end{aligned}\right\}\Longrightarrow f_n\overset{(a;b)}{\not\rightrightarrows} f`

От противного

1.  Пусть {math}`f_n\overset{(a;b)}{\rightrightarrows} f\Longrightarrow \forall\ve>0\ \exists N:\forall n,m>N\ \forall x\in (a;b)\hookrightarrow|f_n(x)-f_m(x)|<\frac{\ve}{3}`

2.  {math}`f_n\in C([a;b))`, тогда

    ```{math}
    \forall x_0\in[a;b):\ \forall\ve>0\ \exists\delta>0:\ \forall x\in B_{\delta}(x_0)\cap[a;b)\hookrightarrow|f_n(x)-f_n(x_0)|<\frac{\ve}{3}
    ```

    В частности, это верно для {math}`x_0=a`:

    ```{math}
    \forall\ve>0\ \exists \delta>0:\forall x\in \overset{\circ}{B_{\delta}}(a)\cap(a;b)\footnote[2]{верно $\forall x\in B_{\delta}(a)\cap[a;b)$, а потому $a$ выколота}\hookrightarrow|f_n(x)-f_n(a)|<\frac{\ve}{3}
    ```

3.  Рассмотрим

    ```{math}
    |f_n(a)-f_m(a)|\leqslant \underbrace{|f_n(a)-f_n(x)|}_{\text{по п.2}}+\underbrace{|f_n(x)-f_m(x)|}_{\text{по п.1}}+\underbrace{|f_m(x)-f_m(a)|}_{\text{по п.2}}<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}
    ```

    получаем, что

    ```{math}
    \forall\ve>0\ \exists N(\exists\delta>0):\ \forall n,m>N(\forall x\in \overset{\circ}{B_{\delta}}(a)\cap(a;b))\hookrightarrow|f_n(a)-f_m(a)|<\ve
    ```

    то есть, по Критерию Коши для числовой последовательности {math}`\exists\lim\limits_{n\to\infty}f_n(a)`, что противоречит условию, а значит {math}`f_n\overset{(a;b)}{\not\rightrightarrows} f`

### Теорема о почленном интегрировании функциональной последовательности

Пусть имеется {math}`\left.\begin{aligned}
    &f_n,f:[a;b]\to\mathbb{R}\\
    &f_n\overset{[a;b]}{\rightrightarrows}f\\
    &f_n\in\riman{[a;b]}\forall n\in\mathbb{N}
\end{aligned}\right\}\Longrightarrow f\in\riman{[a;b]}\text{ и }\lim\limits_{n\to\infty}\int\limits_{a}^b f_n(x)\d{x}=\int\limits_{a}^b f(x)\d{x}`

По Критерию Дарбу {math}`f\in\riman{[a;b]}\Longleftrightarrow f` — ограничена на {math}`[a;b]` и {math}`\ui=\oi`

*   Покажем *ограниченность*

    1.  {math}`\forall n\in\mathbb{N}:\ f_n\in\riman{[a;b]}\Longrightarrow f_n` ограничена на {math}`[a;b]` и

        ```{math}
        \forall n\in\mathbb{N}\ \exists M_n\geqslant 0\ \forall x\in[a;b]\hookrightarrow|f_n(x)|\leqslant M_n
        ```

    2.  {math}`f_n\overset{[a;b]}{\rightrightarrows}f`, тогда {math}`\forall\ve>0\ \exists N:\ \forall n>N\ \forall x\in[a;b]\hookrightarrow|f_n(x)-f(x)|<\ve`

        Рассмотрим {math}`\ve=1`, тогда {math}`\exists N_1=N:\ \forall x\in[a;b]\hookrightarrow|f_{N_1+1}(x)-f(x)|<1`

        Тогда, для {math}`f(x)` верно {math}`\forall x\in[a;b]`

        ```{math}
        |f(x)|\leqslant|f(x)-f_{N_1+1}(x)|+|f_{N_1+1}(x)|<1+M_{N_1+1},
        ```

        то есть {math}`f(x)` — ограничена

*   Покажем *интегрируемость*

    Напомним, что {math}`\oi = \lim\limits_{\Delta_{\T}\to0}\os(f, \T) \text{ и } \ui = \lim\limits_{\Delta_{\T} \to 0} \us(f, \T)`

    Рассмотрим {math}`\T` — разбиение {math}`[a;b]`

    ```{math}
    |\us(f,\T)-\os(f,\T)|\leqslant\underbrace{|\us(f,\T)-\us(f_n,\T)|}_{(1)}+\underbrace{|\us(f_n,\T)-\os(f_n,\T)|}_{(2)}+\underbrace{|\os(f_n,\T)-\os(f,\T)|}_{(3)}
    ```

    1.  Распишем в виде неравенств

        ```{math}
        |\us(f,\T)-\us(f_n,\T)|\leqslant\sum_{i}|\inf\limits_{I_i}(f)-\inf\limits_{I_i}(f_n)||I_i|\leqslant \sum_{i}\sup\limits_{I_i}|f-f_n|\cdot|I_i|\leqslant\sup\limits_{[a;b]}|f-f_n|\cdot|b-a|<\frac{\ve}{3}
        ```

        Так как {math}`f_n\overset{[a;b]}{\rightrightarrows}f`, то по супремальному критерию:

        ```{math}
        \forall\ve>0\ \exists N:\ \forall n>N\hookrightarrow\sup\limits_{[a;b]}|f-f_n|<\frac{\ve}{3|b-a|}
        ```

    2.  {math}`f_n\in\riman{[a;b]}\Longrightarrow`

        ```{math}
        \forall\ve>0\ \exists\delta>0:\ \forall\T:\ \Delta_{\T}<\delta\ |\us(f_n,\T)-\os(f_n,\T)|<\frac{\ve}{3}
        ```

    3.  Аналогично (1): {math}`|\os(f_n,\T)-\os(f,\T)|\leqslant\sup\limits_{[a;b]}|f-f_n|<\frac{\ve}{3}`

    Получаем, что

    ```{math}
    \forall\ve>0\ \exists\delta>0\ (\exists N)\ \forall \T:\ \Delta_{\T}<\delta\ (\forall n>N)\hookrightarrow|\us(f,\T)-\os(f,\T)|<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve
    ```

    {math}`\Longrightarrow f(x)\in\riman{[a;b]}`

*   Покажем, что {math}`\lim\limits_{n\to\infty}\displaystyle\int\limits_{a}^b f_n(x)\d{x}=\int\limits_{a}^b f(x)\d{x}`

    Рассмотрим

    ```{math}
    \left|\int\limits_{a}^b f_n(x)\d{x}-\int\limits_{a}^b f(x)\d{x}\right|\leqslant\int\limits_a^b|f_n(x)-f(x)|\d{x}\leqslant\sup\limits_{[a;b]}|f_n(x)-f(x)|\cdot|b-a|<\ve
    ```

    Так как {math}`f_n\overset{[a;b]}{\rightrightarrows}f`, то {math}`\forall\ve>0\ \exists N:\ \forall n>N\ \sup\limits_{[a;b]}|f_n(x)-f(x)|<\displaystyle\frac{\ve}{|b-a|}` и получаем, что

    ```{math}
    \forall \ve>0\ \exists N:\ \forall n>N\hookrightarrow \left|\int\limits_{a}^b f_n(x)\d{x}-\int\limits_{a}^b f(x)\d{x}\right|<\ve
    ```

### Теорема о почленном дифференцировании функциональной последовательности

Пусть имеется {math}`\left.\begin{aligned}
    &f_n,f,g:[a;b]\to\mathbb{R}\\
    &f_n\in D([a;b])\\
    &\exists c\in[a;b]:\ \lim\limits_{n\to\infty} f_n(c)\\
    &\exists g(x):\ f^{\prime}_n\overset{[a;b]}{\rightrightarrows}g(x)
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\exists f:\ f_n\overset{[a;b]}{\rightrightarrows}f\\
    &\oplus f^{\prime}(x)=g(x)
\end{aligned}`

Покажем *существование*

(Лагранжа) {math}`f\in C([a,b]),\ f\in D((a, b))\Longrightarrow\exists c\in(a,b):\ f(b)-f(a)=f'(c)(b-a)`

1.  Рассмотрим {math}`\varphi(x)=f_n(x)-f_m(x)`

2.  {math}`\forall n\in\mathbb{N}\ f_n\in D([a;b])\Longrightarrow f_n\in C([a;b])\Longrightarrow \varphi(x)\in D([a;b])` и {math}`\varphi(x)\in C([a;b])`

3.  Рассмотрим: для {math}`c` из условия теоремы Лагранжа

    ```{math}
    \varphi(x)-\varphi(c)=\varphi^{\prime}(\xi)\cdot(x-c),\text{ где }\xi\in[c;x]\ ([x;c])
    ```

    Тогда, {math}`\varphi(x)=\varphi^{\prime}(\xi)(c-x)+\varphi(x)`

% уточнить не надо ли тут \varphi^{\prime}(\xi)(x-c)

5.  Оценим {math}`|\varphi(x)|\leqslant |\varphi^{\prime}(\xi)|\cdot|c-x|+|\varphi(c)|=\underbrace{|f^{\prime}_n(\xi)-f^{\prime}_m(\xi)|}_{\star}\cdot|c-x|+\underbrace{|f_n(c)-f_m(c)|}_{\star\star}`

    {math}`\star\ f^{\prime}_n\overset{[a;b]}{\rightrightarrows}g(x)\Longrightarrow\forall\ve>0\ \exists N_1:\ \forall n,m>N_1\ \forall x\in[a;b]\hookrightarrow|f^{\prime}_n(\xi)-f^{\prime}_m(\xi)|<\displaystyle\frac{\ve}{2|b-a|}`\
    &#x20;{math}`\star\star\ \exists\lim\limits_{n\to\infty}f_n(c)\Longrightarrow\forall\ve>0\ \exists N_2:\ \forall n,m>N_2\hookrightarrow|f_n(c)-f_m(c)|<\displaystyle\frac{\ve}{2}`

    Тогда,

    ```{math}
    |\varphi(x)|\leqslant |\varphi^{\prime}(\xi)|\cdot|c-x|+|\varphi(c)|=\underbrace{|f^{\prime}_n(\xi)-f^{\prime}_m(\xi)|}_{\star}\cdot|c-x|+\underbrace{|f_n(c)-f_m(c)|}_{\star\star}<\frac{\ve}{2|b-a|}\cdot|c-x|+\frac{\ve}{2}<\ve
    ```

    то есть

    ```{math}
    \forall\ve>0\ \exists N=\max\{N_1,N_2\}:\ \forall n,m >N\ \forall x\in[a;b]\hookrightarrow|\varphi(x)|=|f_n(x)-f_m(x)|<\ve\Longrightarrow\exists f: f_n\overset{[a;b]}{\rightrightarrows}f
    ```

Покажем, что {math}`f^{\prime}(x)=g(x)`

Пусть имеется {math}`x_0\in[a;b]`, но он произвольный

1.  Рассмотрим {math}`\psi_n(x)=\displaystyle\frac{f_n(x)-f_n(x_0)}{x-x_0}`

    Покажем по Критерию Коши, что {math}`\psi_n(x)\overset{[a;b]}{\rightrightarrows}`

    ```{math}
    \begin{aligned}
                |\psi_n(x)-\psi_m(x)|&=\left|\frac{f_n(x)-f_n(x_0)-f_m(x)+f_m(x_0)}{x-x_0}\right|\\
                &=\left|\frac{(f_n(x)-f_m(x))-(f_n(x_0)-f_m(x_0))}{x-x_0}\right|\\
                &=\left|\frac{\varphi(x)-\varphi(x_0)}{x-x_0}\right|\\
                &\exists\xi\in[x_0, x]\\
                &=\frac{|\varphi'(\xi)||x-x_0|}{|x-x_0|}\\
                &=|\varphi'(\xi)|\\
                &=|f_n'(\xi)-f'_m(\xi)|<\ve
            \end{aligned}
    ```

    так как {math}`f_n\overset{[a;b]}{\rightrightarrows}`, то есть

    ```{math}
    \forall\ve>0,\exists N,\forall n,m>N,\forall x\in[a,b]\hookrightarrow|f_n'(x)-f'_m(x)|<\ve
    ```

    то {math}`\psi\overset{[a;b]}{\rightrightarrows}`

2.  {math}`\forall n\in\mathbb{N},\exists\lim\limits_{x\to x_0}\psi_n(x)=\lim\limits_{x\to x_0}\displaystyle\frac{f_n(x)-f_n(x_0)}{x-x_0}=f_n'(x_0)`, так как {math}`f_n\in D([a,b])`

    Получаем, что {math}`\psi_n(x)\overset{[a, b]}{\rightrightarrows}` и {math}`\forall n\in\mathbb{N},\exists\lim\limits_{x\to x_0}\psi_n(x)=f'_n(x_0)`, тогда по теореме о почленном переходе к пределу

    ```{math}
    \begin{aligned}
                g(x_0)&=\lim_{n\to\infty}f'_n(x_0)\\
                &=\lim_{n\to\infty}\lim_{x\to x_0}\psi_n(x)\\
                &=\lim_{n\to\infty}\lim_{x\to x_0}\left(\frac{f_n(x)-f_n(x_0)}{x-x_0}\right)\\
                &=\lim_{x\to x_0}\lim_{n\to\infty}\left(\frac{f_n(x)-f_n(x_0)}{x-x_0}\right)\\
                &=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}\\
                &=f'(x_0)
            \end{aligned}
    ```

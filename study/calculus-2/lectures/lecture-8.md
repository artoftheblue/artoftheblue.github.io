
## Замена переменных в кратном интеграле. Функциональные последовательности—1

### Теорема о замене переменных в кратном интеграле

Пусть имеется {math}`M_1,M_2\in\mathbb{R}^n` — открытые множества. {math}`\varphi:M_1\longrightarrow M_2` — биективно, {math}`\varphi,\varphi^{-1}` — непрерывно дифференцируемые отображения

{math}`D:\overline{D}\subset M_1` — допустимое множество

{math}`f:\varphi(D)\longrightarrow\mathbb{R}`

{math}`f\in\riman{\varphi(D)}\Longleftrightarrow f(\varphi(t))\cdot|\det J_{\varphi}(t)|\in\riman{D}` и

```{math}
\int\limits_{\varphi(D)}f(x)\d{x}=\int\limits_{D}f(\varphi(t))\cdot|\det J_{\varphi}(t)|\d{t},\text{ где } J=\begin{pmatrix}
        \frac{\partial\varphi_1}{\partial t_1}&\ldots&\frac{\partial\varphi_1}{\partial t_n}\\
        \vdots&\ddots&\vdots\\
        \frac{\partial\varphi_n}{\partial t_1}&\ldots&\frac{\partial\varphi_n}{\partial t_n}
    \end{pmatrix}
```

{math}`(x_1,\ldots,x_n)\overset{\varphi}{\longrightarrow}(t_1,\ldots,t_n)`, где {math}`x_i=\varphi_i(t_1,\ldots,t_n)`

Ранее мы переходили к полярным координатам так: {math}`(x,y)\rightarrow(r,\varphi)`, при этом {math}`\begin{cases}
    x=r\cos{\varphi}\\
    y=r\sin{\varphi}
\end{cases}`

{math}`J=\begin{pmatrix}
    \cos{\varphi} & -\sin{\varphi}\cdot r\\
    \sin{\varphi} & \cos{\varphi}\cdot r
\end{pmatrix}`

{math}`|J_{\varphi^{-1}}|=|J_{\varphi}|^{-1}`

### Функциональные последовательности

%  $f_n(x)=\displaystyle\frac{x}{n},x\in\mathbb{R}$

Пусть {math}`X\subset\mathbb{R}` и {math}`f_n:X\rightarrow\mathbb{R}\ \forall n\in\mathbb{N}`.

Последовательность функций {math}`\{f_n(x)\}_{n=1}^{\infty}` *сходится* в точке {math}`x_0\in X`, если сходится соответствующая числовая последовательность {math}`\{f_n(x_0)\}_{n=1}^{\infty}`:

```{math}
x_0\in X,\ \forall\ve >0\ \exists N:\forall n>N\hookrightarrow|f_n(x_0)-a_{x_0}|<\ve\Longrightarrow a_{x_0}=\lim\limits_{n\to\infty} f_n{x_0}
```

Множество {math}`D\subset X` точек, в которых последовательность функций {math}`\{f_n(x)\}_{n=1}^{\infty}` сходится называется *множеством сходимости*

Пусть {math}`D\subset X` — множество сходимости {math}`\{f_n(x)\}_{n=1}^{\infty}` и {math}`\forall x\in D` {math}`f_n(x)\rightarrow f(x)`. Тогда, {math}`f(x)=\lim\limits_{n\to\infty} f_n(x)` будем называть *предельной функцией* {math}`\{f_n(x)\}`

{math}`D\subset \mathbb{R}, f,f_n:D\rightarrow\mathbb{R}`. Будем говорить, что {math}`\{f_n(x)\}` *сходится поточечно* к {math}`f(x)` на {math}`D`, если

```{math}
\forall x\in D,\ \forall\ve >0\ \exists N:\ \forall n>N\hookrightarrow|f_n(x)-f(x)|<\ve
```

Обозначение: {math}`f_n(x)\overset{D}{\longrightarrow}f(x)`

### Примеры функциональных последовательностей

1.  Пусть есть {math}`f_n(x)=\displaystyle\frac{x}{n},x\in\mathbb{R}`

    Рассмотрим {math}`x_0\in\mathbb{R}`, {math}`f_n(x_0)=\displaystyle\frac{x_0}{n}\longrightarrow 0` при {math}`n\to\infty`. То есть {math}`f(x)=0\Longrightarrow \displaystyle\frac{x}{n}\overset{\mathbb{R}}{\longrightarrow}0`

2.  {math}`f_n(x)=x^n,\ x\in[0;+\infty]`. Тогда, область сходимости — {math}`[0;1]`

    То есть, предельная функция {math}`f(x)=\begin{cases}
            0,&x\in[0;1)\\
            1,&x=1
        \end{cases}` — *не непрерывная*

    Таким образом, {math}`f_n(x)\overset{[0;1]}{\longrightarrow}f(x)`

3.  {math}`f_n(x)=\displaystyle\frac{\sin{(n^2x)}}{n}` на {math}`\mathbb{R}`

    {math}`\forall x_0\in\mathbb{R}\ \lim\limits_{n\to\infty}f_n(x_0)=0`

    {math}`f(x)=0;\ f_n(x)\overset{\mathbb{R}}{\longrightarrow}f(x)`

    Рассмотрим {math}`f_n^{\prime}(x)=n\cos{(n^2x)}` — эта штука ни к чему не сходится

4.  {math}`f_n(x)=2(n+1)x(1-x^2)^n` на {math}`[0;1]`

    {math}`f_n(0)=0,\ f_n(1)=1`

    Теперь рассмотрим {math}`x\in(0;1)`. {math}`f_n(x)=2(n+1)xq^n`, где {math}`q\in(0;1)`. Тогда, при {math}`n\to\infty` {math}`q^n\longrightarrow0`

    {math}`f_n(x)\overset{[0;1]}{\longrightarrow}0`

    ```{math}
    \begin{aligned}
                \int_0^1f(x)\d{x}&=0\\
                \int_0^1 2(n+1)x(1-x^2)^n\d{x}&=\underbrace{-2(n+1)}_{2}\int_0^1 (1-x^2)^n\d{(-x^2+1)}\\
                &=-\left.(1-x^2)\right\vert_0^1
            \end{aligned}
    ```

Пусть {math}`D\subset\mathbb{R};f_n,f:D\longrightarrow\mathbb{R}`. Будем говорить, что {math}`\{f_n(x)\}` *сходится равномерно* к {math}`f(x)` на {math}`D`, Если

```{math}
\forall\ve>0\ \exists N:\ \forall n>N,\ \forall x\in D\hookrightarrow|f_n(x)-f(x)|<\ve
```

Обозначение: {math}`f_n\overset{D}{\rightrightarrows} f`

### Супремальный критерий

{math}`f_n\overset{D}{\rightrightarrows} f\Longleftrightarrow \lim\limits_{n\to\infty}\left(\sup\limits_{D} \left|f_n(x)-f(x)\right|\right)=0`

Докажем необходимость {math}`(\Longrightarrow)`

Заметим, что {math}`\sup\limits_{D} \left|f_n(x)-f(x)\right|\geqslant 0`. Тогда,

```{math}
\forall\ve >0\ \exists N:\ \forall n>N,\forall x\in D\hookrightarrow \sup\limits_D |f_n(x)-f(x)|<\ve
```

{math}`f_n\overset{D}{\rightrightarrows} f\Longrightarrow \forall\ve>0\ \exists N:\forall n>N,\ \forall x\in D\hookrightarrow|f_n(x)-f(x)|<\frac{\ve}{2}`

В худшем случае, {math}`\sup\limits_{D} |f_n(x)-f(x)|\leqslant \frac{\ve}{2}<\ve`

Докажем достаточность {math}`(\Longleftarrow)`

{math}`\forall \ve>0\ \exists N:\forall n>N\hookrightarrow\sup\limits_{D}|f_n(x)-f(x)|<\ve`, тем более {math}`\forall x\in D\ \sup \geqslant |f_n(x)-f(x)|`

Тогда, {math}`f_n\overset{D}{\rightrightarrows} f`

&#x20;{math}`f\rightrightarrows f\Longrightarrow f_n\longrightarrow f`, но в обратную сторону это не работает

%  \ex Имеем $f_n(x)=\displaystyle\frac{x}{n}$ на $\mathbb{R}$

%  $f_n(n)$

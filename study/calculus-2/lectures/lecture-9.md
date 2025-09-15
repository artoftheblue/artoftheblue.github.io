---

title: Лекция 9. Функциональные последовательности-2
date: 2025-09-10
author: Artemis Feidenheimer
description: Критерий Коши равномерной сходимости функциональной последовательности. Теорема о почленном переходе к пределу. Теорема о непрерывности предельной функции. Условие №1 о неравномерной сходимости --- разрыв точки
thumbnail: ./../images/calculus-2/image.png
numbering:
  enumerator: 9.%s

---

## Функциональные последовательности—2

### Критерий Коши равномерной сходимости функциональной последовательности

{math}`f_n(x)\overset{D}{\rightrightarrows} f(x)\Longleftrightarrow\forall\ve>0\ \exists N:\ \forall n,m>N,\ \forall x\in D\hookrightarrow |f_n(x)-f_m(x)|<\ve`

{math}`\Longrightarrow` Докажем необходимость

Так как {math}`f_n(x)\overset{D}{\rightrightarrows} f(x)`, то

```{math}
\forall\ve>0\ \exists N:\forall n>N\ \forall x\in D\hookrightarrow |f_n(x)-f(x)|<\frac{\ve}{2}
```

Рассмотрим {math}`|f_n(x)-f_m(x)|\leqslant |f_n(x)-f(x)|+|f(x)-f_m(x)|<\frac{\ve}{2}+\frac{\ve}{2}=\ve`

Таким образом, мы показали, что {math}`\forall\ve>0\ \exists N:\ \forall n,m>N,\ \forall x\in D\hookrightarrow |f_n(x)-f_m(x)|<\ve`

{math}`\Longleftarrow` Докажем достаточность

Распишем определение равномерной сходимости:

```{math}
\forall\ve>0\ \exists N:\ \forall n,m>N,\ \exists x\in D:\ |f_n(x)-f_m(x)|<\frac{\ve}{2}
```

Зафиксируем {math}`x_0\in D\Longrightarrow\exists\lim\limits_{n\to\infty} f_n(x_0)=f(x_0)`[^1][^1]: по критерию Коши для числовой последовательности {math}`f_n(x_0)`

```{math}
x_0\in D:\forall\ve>0\exists N:\forall n,m>N: |f_n(x_0)-f_m(x_0)|<\frac{\ve}{2}
```

В худшем случае, {math}`\forall x\in D:\text{при m\to\infty } |f_n(x)-f(x)|\leqslant\frac{\ve}{2}<\ve`

Тогда,

```{math}
\forall\ve>0\ \exists N:\ \forall n>N\ \forall x\in D\hookrightarrow|f_n(x)-f(x)|<\ve
```

Отрицание Критерия Коши:

```{math}
f_n(x)\not\overset{D}{\rightrightarrows} f(x)\Longleftrightarrow\exists\ve_0>0\ \forall N:\ \exists n,m>N,\ \exists x_0\in D\ |f_n(x)-f_m(x)|\geqslant\ve_0
```

Рассмотрим функциональную последовательность {math}`f_n(x)=\frac{x}{n}` на {math}`\mathbb{R}`. Покажем, что она *не сходится равномерно*:

```{math}
\exists \ve_0=\displaystyle\frac{1}{6}\ \forall N\ \exists n=2N, m=3N,\ \exists x_0=N\hookrightarrow \left|\frac{N}{2N}-\frac{N}{3N}\right|=\frac{1}{6}=\ve_0
```

### Теорема о почленном переходе к пределу

Пусть {math}`f_n,f: D\longrightarrow\mathbb{R},\ x_0\text{ — предельная точка } D,\ f_n\overset{D}{\rightrightarrows} f,\ \forall n\in\mathbb{N}\ \exists\lim\limits_{x\to x_0} f_n(x)=c_n`

Тогда,

```{math}
\begin{aligned}
        &\exists\lim\limits_{n\to\infty} c_n=\lim\limits_{x\to x_0} f(x)\\
        &\left(\text{или }\lim\limits_{n\to\infty} \left(\lim_{x\to x_0} f_n(x)\right)=\lim_{x\to x_0}\left(\lim_{n\to\infty} f_n(x)\right)\right)
    \end{aligned}
```

%  $\left.\begin{aligned}

%      &f_n,f: D\longrightarrow\mathbb{R},\\

%      &x_0\text{ — предельная точка } D,\\

%      &f_n\overset{D}{\rightrightarrows} f,\\

%      &\forall n\in\mathbb{N}\ \exists\lim\limits_{x\to x_0} f_n(x)=c_n

%  \end{aligned}\right\}\Longrightarrow \begin{aligned}

%      &\exists\lim\limits_{n\to\infty} c_n=\lim\limits_{x\to x_0} f(x)\\

%      &\left(\text{или }\lim\limits_{n\to\infty} \left(\lim_{x\to x_0} f_n(x)\right)=\lim_{x\to x_0}\left(\lim_{n\to\infty} f_n(x)\right)\right)

%  \end{aligned}$

Сначала покажем, что {math}`\exists\lim\limits_{n\to\infty }c_n=c`, а потом что {math}`\exists c=\lim\limits_{n\to\infty }c_n`

1.  Рассмотрим {math}`|c_n-c|\leqslant\underbrace{|c_n-f_n|}_{(a)}+\underbrace{|f_n-f_m|}_{(b)}+|\underbrace{f_m-c_m|}_{(c)}<\displaystyle\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve`

    1.  По условию, {math}`\forall n\in\mathbb{N}\ \exists \lim\limits_{x\to x_0} f_n(x)=c_n` получим

        ```{math}
        \forall\ve>0\ \exists\delta>0:\forall x\in \overset{\circ}{B_{\delta}}(x_0)\cap D\hookrightarrow|f_n(x)-c_n|<\frac{\ve}{3}
        ```

    2.  {math}`f_n\overset{D}{\rightrightarrows} f\Longrightarrow` по Критерию Коши

        ```{math}
        \forall\ve>0\ \exists N:\forall n,m>N\ \forall x\in D\hookrightarrow|f_n(x)-f_m(x)|<\frac{\ve}{3}
        ```

        Получаем, что {math}`\forall x\in \overset{\circ}{B_{\delta}}(x_0)`

    Собираем: {math}`\forall\ve>0\ \exists N:\forall n,m>N:\forall x\in \overset{\circ}{B_{\delta}}(x_0):|c_n-c_m|<\ve\Longrightarrow\exists c=\lim\limits_{n\to\infty} c_n`

2.  Теперь покажем, что {math}`\exists\lim\limits_{x\to x_0}f(x)=c`, то есть {math}`\forall\ve>0\exists\delta:\forall x\in \overset{\circ}{B_{\delta}}(x_0): |f(x)-c|<\ve`

    Рассмотрим {math}`|f(x)-c|\leqslant\underbrace{|f(x)-f_n(x)|}_{(a)}+\underbrace{|f_n(x)-c_n|}_{(b)}+\underbrace{|c_n-c|}_{(c)}`

    1.  {math}`f_n\overset{D}{\rightrightarrows} f(x)\Longrightarrow\forall\ve>0\exists N_1:\forall n>N_1\forall x\in D:|f_n(x)-f(x)|<\frac{\ve}{3}`

    2.  {math}`\forall n\in\mathbb{N}\ \exists\lim\limits_{x\to x_0}f_n(x)=c_n\Longrightarrow \forall \ve>0\ \exists\delta:\forall x\in \overset{\circ}{B_{\delta}}(x_0)\hookrightarrow|f_n(x)-c_n|<\frac{\ve}{3}`

    3.  По доказанному в п. 1 следует, что

        ```{math}
        \exists\lim_{n\to\infty} c_n=c\Longrightarrow \forall\ve>0\ \exists N_2\ \forall n>N_2\hookrightarrow|c_n-c|<\frac{\ve}{3}
        ```

    Собираем: {math}`\forall\ve>0\ (\exists N=\max(N_1,N_2))\ \exists\delta>0:\ \forall x\in\overset{\circ}{B_{\delta}}(x_0):|f(x)-c|<\ve`

### Теорема о непрерывности предельной функции

Пусть имеется {math}`\left.\begin{aligned}
    &f_n,f: D\longrightarrow\mathbb{R},\\
    &f_n\overset{D}{\rightrightarrows} f,\\
    &\forall n\in\mathbb{N}\ f_n\in C(D)
\end{aligned}\right\}\Longrightarrow f\in C(D)`

%  $f_n,f: D\longrightarrow\mathbb{R}$, $f_n\rightrightarrows f$, $\forall n\in\mathbb{N} f_n\in C(D)\Longrightarrow f\in C(D)$

Нужно доказать, что {math}`f\in C(D)`. Значит, надо показать, что

```{math}
\forall x_0\in D: \forall\ve>0\ \exists\delta>0:\forall x\in B_{\delta}(x_0)\cap D\hookrightarrow|f(x)-f(x_0)|
```

Рассмотрим {math}`|f(x)-f(x_0)|\leqslant\underbrace{|f(x)-f_n(x)|}_{(1)}+\underbrace{|f_n(x)-f_n(x_0)|}_{(2)}+\underbrace{|f_n(x_0)-f(x_0)|}_{(3)}<\frac{\ve}{3}+\frac{\ve}{3}+\frac{\ve}{3}=\ve`

1.  {math}`f_n\overset{D}{\rightrightarrows} f:\forall\ve>0\ \exists N:\forall n>N,\ \forall x\in D\hookrightarrow|f_n(x)-f(x)|<\frac{\ve}{3}`

2.  Так как {math}`\forall n\in\mathbb{N}\ f_n\in C(D)\Longrightarrow\forall x_0\in D,\ \forall\ve>0\ \exists\delta>0:\forall x\in B_{\delta}(x_0)\cap D\hookrightarrow|f_n(x)-f_n(x_0)|<\frac{\ve}{3}`

3.  {math}`f_n\overset{D}{\rightrightarrows} f:\forall\ve>0\ \exists N:\forall n>N,\ \forall x_0\in D\hookrightarrow|f_n(x_0)-f(x_0)|<\frac{\ve}{3}`

Тогда, собрав три части, получим, что {math}`\forall x_0\in D`

```{math}
\begin{aligned}
        \forall\ve>0\ \exists \delta>0:(\exists N:\forall n>N)\ \forall x\in B_{\delta}(x_0)\cap D\hookrightarrow|f(x)-f(x_0)|<\ve&\Longrightarrow f(x)\in C(x_0)\ \forall x_0\in D\\
        &\Longrightarrow f(x)\in C(D)
    \end{aligned}
```

### Условие №1 о неравномерной сходимости — разрыв точки

Пусть имеется {math}`\left.\begin{aligned}
    &f_n\in C\left([a;b)\right),\\
    &f\in C((a;b))+\text{разрыв в т.}a,\\
    &f_n\overset{[a;b)}{\longrightarrow} f
\end{aligned}\right\}\Longrightarrow f_n\overset{(a;b)}{\rightrightarrows} f`

То есть будет поточечная сходимость, но не будет равномерной:

```{math}
f_n\overset{(a;b)}{\longrightarrow}f,\text{ но }f_n\overset{(a;b)}{\rightrightarrows} f
```

От противного

1.  Пусть {math}`f_n\overset{(a;b)}{\rightrightarrows} f\Longrightarrow \forall\ve>0\ \exists N:\forall n>N\ \forall x\in [a;b)\hookrightarrow|f_n(x)-f(x)|<\ve`

2.  {math}`f_n\overset{[a;b)}{\longrightarrow} f \Longrightarrow f_n(a)\longrightarrow f(a)\Longrightarrow\forall\ve>0\ \exists N_2:\forall n>N_2\hookrightarrow|f_n(a)-f(a)|<\ve`

3.  {math}`f_n\overset{[a;b)}{\rightrightarrows} f`, так как {math}`\forall\ve>0\ \exists N=\max(N_1,N_2)\ \forall n>N,\ \forall x\in [a;b) \hookrightarrow|f_n(x)-f(x)|<\ve`

4.  Получаем, что

    ```{math}
    \begin{cases}
                f_n\overset{[a;b)}{\rightrightarrows} f\\
                f_n\in C([a;b))
            \end{cases}
    ```

    Тогда, по теореме о непрерывности предельной функции следует, что {math}`f\in C([a;b))`, но {math}`f` имеет разрыв в точке {math}`a`. Противоречие

%  \ex $f_n(x)=x^n$ на $[0;1]$

%  $f_n\longrightarrow f(x)$, но $f_x(x)\not\rightrightarrows f(x)$
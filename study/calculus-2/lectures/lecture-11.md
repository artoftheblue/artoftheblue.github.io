---

title: Лекция 11. Функциональные ряды-1
date: 2025-09-10
author: Artemis Feidenheimer
description: Критерий Коши равномерной сходимости функционального ряда. Необходимое условие равномерной сходимости функционального ряда. Признак сравнения. Мажорантный признак Вейерштрасса о равномерной сходимости функционального ряда. Преобразование Абеля. Признак Дирихле
thumbnail: ./../images/calculus-2/image.png
numbering:
  enumerator: 11.%s

---

## Функциональные ряды—1

Пусть {math}`D\subset\mathbb{R}`, {math}`f_n, S:D\to\mathbb{R}\ (\forall n\in\mathbb{N})`, а также {math}`S_k(x)=\sum_{n=1}^{k}f_n(x)` — частичные суммы функционального ряда

Если {math}`\exists S(x): S_k\overset{D}{\longrightarrow}S`, то будем говорить, что функциональный ряд {math}`\sum_{n=1}^{\infty}f_n(x)` *сходится поточечно* к {math}`S(x)` на {math}`D`

Если {math}`\exists S(x): S_k\overset{D}{\rightrightarrows}S`, то будем говорить, что функциональный ряд {math}`\sum_{n=1}^{\infty}f_n(x)` *сходится равномерно* к {math}`S(x)`

### Критерий Коши равномерной сходимости функционального ряда

Пусть {math}`f_n:D\to\mathbb{R}\ \forall n\in\mathbb{N}`, {math}`\sum_{n=1}^{\infty}f_n(x)\overset{D}{\rightrightarrows}` тогда и только тогда, когда

```{math}
\forall \ve>0\ \exists N:\ \forall m>k>N\ \forall x\in D\hookrightarrow |S_m(x)-S_k(x)|=\left|\sum_{n=k+1}^{m}f_n(x)\right|<\ve
```

Следует из критерия Коши для функциональных последовательностей

```{math}
S_i(x)=\sum_{n=1}^{i}f_n(x)
```

### Необходимое условие равномерной сходимости функционального ряда

Пусть {math}`\left.\begin{aligned}
   &f_n:D\to\mathbb{R}\ (\forall n\in\mathbb{N})\\
   &\sum_{n=1}^{\infty}f_n(x)\overset{D}{\rightrightarrows}
\end{aligned}\right\}\Longrightarrow f_n(x)\overset{D}{\rightrightarrows}0`

{math}`\sum_{n=1}^{\infty}f_n(x)\overset{D}{\rightrightarrows}`, значит выполняется критерий Коши:

```{math}
\forall\ve>0\ \exists N:\ \forall k,k-1>N\ \forall x\in D\hookrightarrow |S_k(x)-S_{k-1}(x)|=|f_{k}(x)|<\ve
```

Получаем, что {math}`\forall\ve>0\ \exists N:\ \forall k>N+1\ \forall x\in D\hookrightarrow |f_k(x)|<\ve`, то есть {math}`f_k(x)\overset{D}{\rightrightarrows}0`

Ряд {math}`\sum_{n=1}^{\infty}a_n(x)` *сходится абсолютно*, если

```{math}
\forall x_0\in \sum_{n=1}^{\infty}a_n(x_0)\text{ — сходится абсолютно}
```

### Признак сравнения

Имеется {math}`\left.\begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x)\text{ и }\sum_{n=1}^{\infty}b_n(x):\\
    &\exists N\ \forall n>N\ \forall x\in D\ |a_n(x)|\leqslant b_n(x)\\
    &\sum_{n=1}^{\infty}b_n(x)\overset{D}{\rightrightarrows}
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}\text{ и }\sum_{n=1}^{\infty}a_n(x)\text{ сходится абсолютно }D`

Докажем по критерию Коши

```{math}
(\star)\quad |a_{m+1}(x)+\ldots+a_k(x)|\leqslant |a_{m+1}(x)|+\ldots+|a_k(x)|\underset{\forall m,k>N\forall x\in D}{\leqslant}b_{m+1}(x)+\ldots+b_{k}(x)\underset{\forall m, k>N_1 \forall x\in D}{<}\ve
```

Получаем, что

```{math}
\forall\ve>0\ \exists \overset{\sim}{N}=\max\{N,N_1\}: \forall k>m>\overset{\sim}{N}\ \forall x\in D\hookrightarrow|a_{m+1}(x)+\ldots+a_k(x)|<\ve\Longrightarrow\sum_{n=1}^{\infty}a_n(x)\overset{D}{\rightrightarrows}
```

Так как {math}`(\star)` выполняется для любого {math}`x\in D`, то {math}`\forall x_0\in D` выполняется

```{math}
\forall\ve>0\ \exists \overset{\sim}{N}=\max\{N,N_1\}: \forall k>m>\overset{\sim}{N}\hookrightarrow |a_{m+1}(x)|+\ldots+|a_k(x)|<\ve,
```

то есть {math}`\sum_{n=1}^{\infty}|a_n(x_0)|` — сходится, а значит сходится абсолютно {math}`\forall x_0\in D`

### Мажорантный признак Вейерштрасса о равномерной сходимости функционального ряда

{math}`\left.\begin{aligned}
    &\sum_{n=1}^{\infty}a_n(x):\\
    &\exists N\ \forall n>N\ \sup\limits_{D}|a_n(x)|\leqslant M_n\\
    &\sum_{n=1}^{\infty} M_n\text{ — сходится}
\end{aligned}\right\}\Longrightarrow \begin{aligned}
    &\sum_{n=1}^{\infty}a_n\overset{D}{\rightrightarrows}\\
    &\sum_{n=1}^{\infty}a_n\text{ сходится абсолютно на }D
\end{aligned}`

Если в признаке сравнения принять, что {math}`\forall n\in \mathbb{N}\ b_n(x)=M_n=\text{const}(n)`, то условие теоремы выполняется

Частичные суммы ряда {math}`\sum_{n=1}^{\infty}f_n(x):S_k(x)=\sum_{n=1}^{k}f_n(x)` *равномерно ограничены* на {math}`D`, если

```{math}
\exists c>0:\ \forall k\in\mathbb{N},\forall x\in D\hookrightarrow|S_k(x)|\leqslant c
```

Последовательность функций {math}`\{f_n(x)\}_{n=1}^{\infty}` *монотонна на* {math}`D` (по {math}`n`), если {math}`\forall x_0\in D` соответствующая числовая последовательность {math}`\{f_n(x_0)\}_{n=1}^{\infty}` имеет ту же монотонность. То есть

```{math}
\forall x_0\in D\ b_n(x_0)\geqslant b_{n+1}(x_0)\text{ или }b_n(x_0)\leqslant b_{n+1}(x_0)
```

### Преобразование Абеля

Здесь обозначения {math}`a_n` и {math}`a_n(x)` эквивалентны

Пусть {math}`\{a_n(x)\}_{n=1}^{\infty}` и {math}`\{b_n(x)\}_{n=1}^{\infty}`, тогда {math}`\forall k>m\in\mathbb{N}` верно

```{math}
\sum_{n=m+1}^{k}\left(a_n-a_{n-1}\right)b_n=a_kb_k-a_mb_{m+1}+\sum_{n=m+1}^{k-1}a_n\left(b_n-b_{n+1}\right)
```

```{math}
\begin{aligned}
        \sum_{n=m+1}^{k}(a_n-a_{n-1})b_n&=\sum_{n=m+1}^{k}a_nb_n-\sum_{n=m+1}^k a_{n-1}b_n\\
        &\text{сдвинем индексы на 1 во второй сумме}\\
        &\sum_{n=m+1}^{k}a_nb_n-\sum_{n=m}^{k-1}a_nb_{n+1}\\
        &\text{отщипнем лишнее, то есть вытащим из суммы }a_kb_k\\
        &=a_kb_k+\sum_{n=m+1}^{k-1}a_nb_n-a_mb_{m+1}-\sum_{n=m+1}^{k-1}a_mb_{n+1}\\
        &=a_kb_k-a_mb_{m+1}+\sum_{n=m+1}a_n(b_n-b_{n+1})
    \end{aligned}
```

### Признак Дирихле

{math}`\left.\begin{aligned}
    &a_n,b_n:D\to\mathbb{R}\\
    &\exists c>0:\forall k\in\mathbb{N},\forall x\in D\ |A_k(x)|\leqslant c\\
    &\{b_n(x)\}_{n=1}^{\infty}\text{ — монотонна на }D\\
    &b_n\overset{D}{\rightrightarrows} 0
\end{aligned}\right\}\Longrightarrow \sum_{n=1}^{\infty}a_n(x)b_n(x)\overset{D}{\rightrightarrows}`

Докажем по критерию Коши. Пусть {math}`A_k(x)=\sum_{n=1}^k a_n(x)` и {math}`a_n(x)=A_n(x)-A_{n-1}(x)`

Рассмотрим

```{math}
\begin{aligned}
        \left|\sum_{n=m+1}^{k}a_n(x)b_n(x)\right|&=\left|\sum_{n=m+1}^{k}\left(A_n(x)-A_{n-1}(x)\right)b_n(x)\right|\\
        &\text{выполним преобразование Абеля}\\
        &=\left|A_k(x)b_k(x)-A_m(x)b_{m+1}(x)+\sum_{n=m+1}^{k-1}A_n(x)\left(b_n(x)-b_{n+1}(x)\right)\right|\\
        &\leqslant\underbrace{|A_k(x)|}_{\leqslant c}\cdot|b_k(x)|+\underbrace{|A_m(x)|}_{\leqslant c}\cdot|b_{m+1}(x)|+\max\limits_{m+1\leqslant n\leqslant k-1}\underbrace{|A_n(x)|}_{\leqslant c}\cdot\left|\sum_{n=m+1}^{k-1}(b_n(x)-b_{n+1}(x))\right|\\
        &\leqslant c\cdot\left(|b_k(x)|+|b_{m+1}(x)|+|b_{m+1}(x)-b_{k}(x)|\right)\\
        &\leqslant \underbrace{c\cdot 4\cdot \max\{|b_k(x)|,|b_{m+1}(x)|\}}_{(\star)}
    \end{aligned}
```

Знаем, что {math}`b_n\overset{D}{\rightrightarrows} 0`, то есть {math}`\forall \ve>0\ \exists N:\forall n>N\ \forall x\in D\hookrightarrow|b_n(x)|<\frac{\ve}{4c}`, тогда {math}`(\star)<4c\cdot\displaystyle\frac{\ve}{4c}=\ve`

Значит, выполняется критерий Коши равномерной сходимости функциональных рядов, то есть

```{math}
\left|\sum_{n=m+1}^{k}a_n(x)b_n(x)\right|<\ve\Longrightarrow\text{ ряд }\sum_{n=m+1}^{\infty}a_n(x)b_n(x)\overset{D}{\rightrightarrows}
```
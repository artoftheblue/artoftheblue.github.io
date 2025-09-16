---

title: Лекция 13. Степенные ряды-2
date: 2025-10-29
description: Теорема о равномерной сходимости степенного ряда. Теорема о непрерывности суммы степенного ряда. Теорема о почленном интегрировании степенного ряда. Теорема о почленном дифференцировании степенного ряда. Разложение функции в степенной ряд.
numbering:
  enumerator: 13.%s

---

## Степенные ряды—2

### Теорема о равномерной сходимости степенного ряда

Пусть {math}`\sum_{n=1}^{\infty}a_n(x-x_0)^n`, {math}`R` — радиус сходимости степенного ряда, тогда

```{math}
\forall r>0:\ 0<r<R\text{ степенной ряд }\sum_{n=1}^{\infty}a_n(x-x_0)^n\overset{|x-x_0|\leqslant r}{\rightrightarrows}
```

Используем признак Вейерштрасса: {math}`|a_n(x-x_0)^n|=|a_n|\cdot|x-x_0|^n\leqslant |a_n|\cdot r^n`

По радикальному признаку Коши ряд {math}`\sum_{n=1}^{\infty}|a_n|r^n` — сходится, а {math}`\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|r^n}=\frac{r}{R}<1`. Значит, по мажорантному признаку Вейерштрасса {math}`\sum_{n=1}^{\infty}a_n(x-x_0)^n\overset{|x-x_0|\leqslant r}{\rightrightarrows}`

### Теорема о непрерывности суммы степенного ряда

{math}`S(x)=\sum_{n=1}^{\infty}a_n(x-x_0)^n\ \in C(|x-x_0|<R)`

{math}`\forall n\in\mathbb{N}\ a_n(x-x_0)^n\in C(|x-x_0|<R)`

Зафиксируем {math}`\overset{\sim}{x}:|\overset{\sim}{x}-x_0|<R`. Пусть {math}`r:|\overset{\sim}{x}-x_0|\leqslant r<R`, тогда {math}`\forall x:|x-x_0|\leqslant r \quad S(x)\overset{|x-x_0|\leqslant r}{\rightrightarrows}`

То есть {math}`S(x)\in C(x)`, так как {math}`\overset{\sim}{x}` — произвольная и {math}`r` — любой {math}`<R\Longrightarrow S(x)\in C(|x-x_0|<R)`

### Теорема о почленном интегрировании степенного ряда

Пусть {math}`R` — радиус сходимости ряда {math}`\sum_{n=0}^{\infty}a_nx^n=S(x)`, тогда

```{math}
\int\limits_{0}^{x}S(t)\d{t}=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}\ \forall x\in (-R;R)
```

{math}`\forall x\in(-R;R)\ a_nx^n\in\riman{[0;x]}` и {math}`S(x)\overset{[0;x]}{\rightrightarrows}`, тогда применима теорема о почленном интегрировании:

```{math}
\int\limits_0^xS(t)\d{t}=\int\limits_{0}^x\sum_{n=0}^{\infty}a_nt^n\d{t}=\sum_{n=0}^{\infty}a_n\int\limits_{0}^xt^n\d{t}=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}
```

Найдем его радиус сходимости с помощью формулы Коши-Адамара

```{math}
\varlimsup\limits_{n\to\infty}\sqrt[n+1]{\left|\frac{a_n}{n+1}x^{n+1}\right|}=\varlimsup\limits_{n\to\infty}\frac{\sqrt[n+1]{|a_n|}}{\sqrt[n+1]{n+1}}|x|=\frac{|x|}{R}<1\Longleftrightarrow x\in (-R;R)
```

Любой степенной ряд вида {math}`\sum_{n=0}^{\infty}a_n(x-x_0)^n` можно путём сдвига {math}`y=x-x_0` свести к ряду {math}`\sum_{n=0}^{\infty}a_ny^n`

### Теорема о почленном дифференцировании степенного ряда

Пусть {math}`R` — радиус сходимости ряда {math}`S(x)=\sum_{n=0}^{\infty}a_nx^n`, тогда

```{math}
S^{\prime}(x)=\sum_{n=1}^{\infty}na_nx^{n-1}\ \forall x\in (-R;R)
```

Для любого {math}`x\in(-R;R)`:

1.  {math}`a_n(x)^n\in D[0;x]`

2.  {math}`\exists 0: S(0)=0` — сходится

3.  ```{math}
    \varlimsup\limits_{n\to\infty}\sqrt[n-1]{n\cdot|a_n|\cdot|x^{n-1}|}=\varlimsup\limits_{n\to\infty}\sqrt[n-1]{n}\cdot|x|\cdot\sqrt[n-1]{|a_n|}=\frac{|x|}{R}<1\Longleftrightarrow |x|<R
    ```

    то есть {math}`\sum_{n=0}^{\infty}na_nx^{n-1}\overset{[0;x]}{\rightrightarrows}`

Получаем, {math}`S^{\prime}(x)=\sum_{n=0}^{\infty}na_nx^{n-1}\ \forall x\in(-R;R)`

{math}`\forall n\in\mathbb{N}\ \exists S^{(\star)}(x)=\sum_{n=k+1}^{\infty}n(n-1)\cdot\ldots\cdot(n-k+1)x^{n-k}` с радиусом сходимости {math}`R` и {math}`\forall r:\ 0<r<R\ S^{(\star)}_N(x)\overset{[-r;r]}{\rightrightarrows}`

### Разложение функции в степенной ряд

Если {math}`f(x)` раскладывается в степенной ряд на {math}`(-R;R)`, {math}`R>0`, то {math}`f(x)\in D(-R;R)`

{math}`f(x)=\sum_{n=0}^{\infty}a_nx^n,\ x\in(-R;R)`, а далее по замечанию из предыдущей теоремы

Если {math}`f(x)` раскладывается в степенной ряд на {math}`(-R;R)`, {math}`R>0`, то это разложение единственно
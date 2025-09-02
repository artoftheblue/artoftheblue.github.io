# Лекция 7, 14.10.2014

## Смешанное дискретно-непрерывное распределение

```{prf:definition}
**Смешанное дискретно-непрерывное распределение:**
$$\exists a_1\dots,a_n,\quad p_1\dots p_n\dots,\quad \exists f_\xi(x)\geq 0$$

$$\PP(\xi=a_k)\neq 0$$

$$\underset{B\subset\BB}{\PP(\xi\in B)}=\sum_{a_k\in B}\PP(\xi=a_k)+\int\limits_B f_\xi(x)\d x$$
```

$$(\Omega,\FF,\PP)\xrightarrow{\xi \text{ порождает}}(\RR,\BB(\RR),F_\xi)$$

## Преобразование случайных величин

```{seealso} Замечание
$\forall$ борелевской (измеримой) функции $g(x)$, $x\in\RR$.

$g(\xi)$ — случайная величина
```

```{prf:proposition}
Пусть $\xi$ — абсолютно непрерывна, $g(x)$ монотонна, дифференцируема, $g'(x)\neq 0,\forall x\in\RR$.

$\eta=g(\xi)$. Тогда 

$$f_\eta(y)=\frac{f_\xi(g^{-1}(y))}{|g'(g^{-1}(y))|}$$
```

```{prf:proof}
Пусть $(g(x)\uparrow)$.

Найдём $F_\eta(y)=\PP(\eta\leq y)=\PP(g(\xi)\leq y)=\PP(\xi\leq g^{-1}(y))=F_\xi(g^{-1}(y))$

$$F'_\eta=f_\eta(y)=\frac{f_\xi(g^{-1}(y))}{g'(g^{-1}(y))}$$
```

| Дискретный | Абсолютно непрерывный |
|:-:|:-:|
| $(\Omega,\PP)$ | $(\Omega,\FF,\PP)$ |
| $p(\omega)$ | $\PP(A)$, где $A\in\FF$ |
| Случайная величина $\xi$ — $\forall$ функция | Случайная величина $\xi$ — измеримая функция (прообраз $\forall B\in\BB$ является элементом $\FF$) |
| $E(\xi)=\displaystyle\sum_kx_k\PP(\xi=x_k)$ | $E(\xi)=\displaystyle\int\limits^\infty_{-\infty} f_\xi(x)\d x$, если $\displaystyle\int\limits^\infty_{-\infty}\|x\|f_\xi(x)\d x<\infty$ |

Интеграл Лебега-Стилтьеса обобщается на случай меры:

$$E(\xi)=\int\limits_\Omega\xi(\omega)\d\PP(\omega)$$

## Свойства математического ожидания

Для $\forall$ борелевской функции $g(x)$:

1. $$\EE(g(\xi))=\left[\begin{align*}
    &\sum_kg(xk)\PP(\xi=x_k), &\quad \text{если } \xi \text{ — дискретная}\\
    &\int\limits^\infty_{-\infty}g(x)f_x(x)\d x, &\quad \text{если } \xi \text{ абсолютно непрерывна}
\end{align*}\right.$$

$$\boxed{\eta=g(\xi),\quad\int\limits^\infty_{-\infty}yf_\eta(y)\d y=\int\limits^\infty_{-\infty}g(x)f_\xi(x)\d x}$$

2. $\EE(c)=c$
3. $\EE(c\xi)=c\EE\xi$
4. $\EE(\xi+\eta)=\EE\xi+\EE\eta$
5. Если $\PP(\xi\geq0)=1$, $(\xi\geq0)$, то $\EE(\xi)\geq0$

```{seealso} Замечание
Почти наверное означает "с вероятностью 1".

Если $\xi\geq0$ почти наверное $(\PP(\xi\geq0)=1)$ и $\EE(\xi)=0$, то $\xi=0$ почти наверное.
```

6. Если $\xi\geq\eta$ почти наверное, то $\EE\xi\geq\EE\eta, (\xi-\eta\geq0)$
7. $a\leq\xi\leq b$ почти наверное, $a\leq E(\xi)\leq b$

## Дисперсия

```{prf:definition}
$\Var(\xi)=\EE(\xi-\EE\xi)^2$

**Стандартное среднеквадратичное отклонение** $\sigma=\sqrt{\Var(\xi)}$.

**Интерквантильный размах** $x_{0.75}-x_{0.25}$
```

### Свойства дисперсии
1. $\Var(\xi)=\EE\xi^2-(\EE\xi)^2$

    $\Var(\xi)=\EE(\xi^2-2\xi\EE\xi+(\EE\xi)^2)=E\xi^2-2\EE\xi\cdot\EE\xi+(\EE\xi)^2=\EE\xi^2-(\EE\xi)^2$

$$\EE\xi^2=\left[\begin{align*}&\sum_kx_k^2\PP(\xi=x_k)\\
&\int\limits^\infty_{-\infty}x^2f_\xi(x)\d x
\end{align*}\right.$$

2. $\Var(c)=0$
3. $\Var(c\xi)=c^2\Var(\xi)$
4. $\Var(\xi)\geq0$, причём если $\Var(\xi)=0$, то $\PP(\xi=c)=1$.

## Основные непрерывные распределения

1. $U[a, b]$ — **равномерное**

$$f_\xi(x)=\begin{cases}
    \frac{1}{b-a}, & x\in[a, b]\\
    0, & x\not\in[a, b]
\end{cases}$$

$$\EE\xi=\frac{a+b}{2}$$

$$\Var\xi=\frac{(b-a)^2}{12}$$

2. Показательное (экпоненциальное)

$$f_\xi(x)=\begin{cases}
    \lambda e^{-\lambda x}, & x>0\\
    0, & x\leq 0
\end{cases}$$

$$\EE\xi=\frac{1}{2}$$

$$\Var\xi=\frac{1}{\lambda^2}$$

$$F_\xi(x)=1-e^{-\lambda x},\quad x>0$$

$$\PP(a+\tau<\xi<b | \xi<\tau)=\PP(a<\xi<b)=\frac{\PP(a+\tau<\xi<b+\tau)}{\PP(\xi>\tau)}=\PP(a<\xi<b)$$
# Лекция 9, 18.11.2024

## Одномерные функции от случайных векторов

:::{note}
Всюду далее считаем, что $\xi_1,\ldots,\xi_n$ определены на $(\Omega,\FF,\mathbb{P})$
:::

:::{prf:definition}
Функция $g:\mathbb{R}^n\longrightarrow\mathbb{R}^m$ называется **борелевской**, если $\forall B\in\bk(\mathbb{R}^m)$

$$g^{-1}(B)\in\bk(\mathbb{R}^n)$$

:::{prf:theorem}
Пусть $\xi_1,\ldots,\xi_n$ — случайные величины на $(\Omega,\FF,\mathbb{P})$, $g(\xi_1,\ldots,\xi_n)$ — борелевская функция. Тогда, $g(\xi_1,\ldots,\xi_n)$ — случайная величина
:::

:::{prf:theorem}
Пусть $\xi_1,\ldots,\xi_n$ — СВ на $(\Omega,\FF,\mathbb{P})$, тогда

$$\varlimsup_{n\to\infty} \xi_n,\ \varliminf_{n\to\infty} \xi_n,\ \inf_{n} \xi,\ \sup_{n}\xi_n\text{ — СВ},$$
где $\varlimsup\limits_{n\to\infty} \xi_n=\limsup\limits_{n\to\infty} \xi_n,\ \varliminf\limits_{n\to\infty} \xi_n=\liminf\limits_{n\to\infty} \xi_n$

$$
\begin{aligned}
\forall x\ \{\omega:\sup_n\xi_n>x\}&=\bigcup_n\{\xi_n>x\}\in\FF\\
\forall x\ \{\omega:\inf_n\xi_n<x\}&=\bigcup_n\{\xi_n<x\}\in\FF
\end{aligned}
$$

$$
\begin{aligned}
\varlimsup_{n\to\infty}\xi_n&=\inf_{n\in\mathbb{N}}\sup_{k\geqslant n}\xi_k\\
\varliminf_{n\to\infty}\xi_n&=\sup_{n\in\mathbb{N}}\inf_{k\geqslant n}\xi_k
\end{aligned}
$$
:::

:::{prf:theorem}
Пусть $\xi_1,\xi_2$ — независимые СВ, тогда $\forall$ борелевских $g_1,g_2$

$$g_1(\xi_1),g_2(\xi_2)\text{ — независимые СВ}$$

## Пример со случайными суммами
Пусть имеется $\nu\sim\text{Pois}(\lambda)$ — число обращений, $\xi_i\sim\text{Exp}(\theta)$ — длина разговора

$S=\xi_1+\ldots+\xi_\nu=g(\xi_1,\ldots,\xi_n;\nu)$ — элементы суммы независимы


## Свёртка распределения

```{prf:definition}
Пусть $\xi_1,\xi_2$ — абсолютно непрерывны и независимы, тогда $\xi_1+\xi_2$ — абсолютна непрерывна и 

$$\boxed{f_{\xi_1+\xi_2}(z)=\int\limits_{-\infty}^{+\infty}f_{\xi_1}(z)f_{\xi_2}(z-x)\d{x}}$$

$$
\begin{aligned}
F_{\xi_1+\xi_2}(z)=\PP{\xi_1+\xi_2\leqslant z}&=\iint\limits_{D}f_{\xi_1}(x_1)f_{\xi_2}(x_2)\d{x_1}\d{x_2}\\
&=\int\limits_{x_1=-\infty}^{+\infty}\int\limits_{x_2=-\infty}^{-x_1+z}f_{\xi_1}(x_1)f_{\xi_2}(x_2)\d{x_1}\d{x_2}\\
&=\int\limits_{-\infty}^{+\infty}\d{x_1}\int\limits_{-\infty}^{z}f_{\xi_2}(u-x_1)f_{\xi_1}(x_1)\d{u}\\
&=\int\limits_{-\infty}^{z}\int\limits_{-\infty}^{\infty}f_{\xi_1}(x_1)f_{\xi_2}(u-x_1)\d{x_1}\d{u},
\end{aligned}
$$
где 

$$\begin{aligned}
&x_1+x_2=u\\
&\d{x_2}=\d{u}
\end{aligned}$$

{bluerect}`test`

```
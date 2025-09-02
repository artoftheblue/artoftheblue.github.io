# Лекция 3, 16.09.2024

```{prf:example}
Хотим анонимизировать опрос и понизить страх у людей быть раскрытыми, если они отвечают правду. Количества шаров даны ниже:

$N=N_r+N_b+N_w$

* r — человек вытаскивает красный шар и говорит правду
* b — человек вытаскивает чёрный шар и ставит только 1 (да)
* w — человек вытаскивает белый шар и ставит только 0 (нет)

Ищем вероятность $P$ того, употреблял ли человек наркотики.

$$P(1)=P(1|w)P(w)+P(1|b)P(b)+P(1|r)P(r)$$

$$P=\frac{P(1)N-N_b}{N_r}$$

$$N=100,\ N_w=20,\ N_b=40, \ N_r=40$$

$$P(1)=0.6\implies P=\frac{1}{2}$$
```

## Схема Бернулли

Предполагается, что мы проводим $n$ независимых опытов, каждый из которых может закончиться либо успехом (1), либо неудачей (0).

$$P(\text{успех})=p,\ P(\text{неудача})=1-p=q$$

$\underbrace{(\text{у, н, ..., н})}_{n} \implies 2^n$ исходов.

$P((\underbrace{1,\dots,1}_k,\underbrace{0,\dots,0}_{n-k}))=P^k(1-p)^{n-k}$ таких исходов с $k$ успехами $n \choose k$

$$\boxed{P(\text{k успехов в n испытаний})={n \choose k}p^k(1-p)^{n-k}}$$

---

## Как Пуассон дошёл до своей теоремы?

$p$ — вероятность верного решения присяжного. Обвиняем виновным и не обвиняем невиновных.

$A$ — улик достаточно для обвинения.

$$P(\text{обвинения})=P(\text{обвинения}|A)\underbrace{P(A)}_{\text{неизвестно}}+P(\text{обвинения}|\bar A)P(\bar A)$$

$$P(\text{обв. 7})=P(\text{обв. 7}| A)P(A)+P(\text{обв. 7}|\bar A)P(\bar A)$$

$$P(\text{обв. 7})={12 \choose 7}p^7(1-p)^5P(A)+{12 \choose 5}(1-p)^7p^5(1-P(A))$$

$$P(\text{обв. 7})=\left(\sum^{12}_{k=7}{12 \choose k}p^k(1-p)^{12-k}\right)P(A)+\left(\sum^{12}_{k=7}{12 \choose 12-k}(1-p)^kp^{12-k}\right)(1-P(A))$$

$$P\simeq \frac{2}{3}$$

## Теорема Пуассона

```{prf:theorem} Теорема Пуассона
При $n\to\infty$ и $p_n\xrightarrow{n\to\infty} 0$, причём $np_n\xrightarrow{n\to\infty}2$

Тогда 

$$P(\text{k успехов в n испытаний})={n\choose k}p^k(1-p)^{n-k}\xrightarrow{n\to\infty}e^{-\lambda}\frac{\lambda^k}{k!}$$
```

```{aside}
**Схема серий**

В каждой серии $n$ испытаний, $p_n$ — вероятность успеха
```

```{prf:proof}
$\lambda n=np_n$. $\mu_n$ — число успехов.
$$\begin{align*}P(\mu_n=m)&=\frac{n!}{m!(n-m)!}P^m_n(1-p_n)^{n-m}\\&=\frac{n\cdot\ldots\cdot(n-m+1)}{m!}\left(\frac{\lambda_n}{n}\right)^m\frac{\left(1-\frac{\lambda_n}{n}\right)^n}{\left(1-\frac{\lambda_n}{n}\right)^m}\\&=\frac{\lambda_n^m}{m!}\underbrace{\frac{n\cdot\ldots\cdot(n-m+1)}{n\cdot\ldots\cdot n}}_{\xrightarrow{n\to\infty} 1}\underbrace{\left(1-\frac{\lambda_n}{n}\right)^n}_{\xrightarrow{n\to\infty}e^{-\lambda}}\underbrace{\frac{1}{\left(1-\frac{\lambda^n}{n}\right)^m}}_{\xrightarrow{n\to\infty}1}\\&=e^{-\lambda}\frac{\lambda^m}{m!}\end{align*}$$
```

```{note} Замечаине
$\forall B$ — множество значений

$$\left|P(\mu_n\in B)-\sum_{m\in B}e^{-\lambda}\frac{\lambda^m}{m!}\right|\leq\min(p, np^2)$$
```

## Случайная величина

```{prf:definition}
**Случайная величина** — $\xi\colon\Omega\to\mathbb{R}$

```

```{prf:definition}
Случайная величина $\xi$ имеет биномиальное распределение, если она принимает значения $\xi\in\{0,1\ldots,n\},P(\xi=k)={n\choose k}p^k(1-p)^{n-k}$

$\{0,1\ldots,n\}$ — число успехов в $n$ испытаний

$$P(\xi\in B)=\sum_\omega P(\omega\colon\xi(\omega)\in B)$$
```


## Математическое ожидание

```{prf:definition}
**Математическое ожидание**
$$E(\xi)=\sum_{\omega\in\Omega}\xi(\omega)p(\omega)$$

если

$$\sum|\xi(\omega)|p(\omega)$$
```

```{prf:theorem}
$$E(\xi)=\sum_k a_k P(\xi=a_k)$$

1. если $\exists$ вышенаписанное, то
2. Доказать, что $E(\xi+\eta)=E\xi+E\eta$
```
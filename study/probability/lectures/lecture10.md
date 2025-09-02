# Лекция 10, 25.11.2024

## Ковариация и корреляция случайных величин

```{prf:definition} Ковариация
$$\cov(\xi, \eta)=\EE[(\xi-\EE\xi)(\eta-\EE\eta)]$$

Для непрерывного случая:
$$\cov(\xi, \eta)=\iint\limits_{\RR^2}(x-\EE\xi)(y-\EE\eta)f(x,y)\d x\d y$$

Для дискретного случая:
$$\cov(\xi,\eta)=\sum_i\sum_j(x_i-\EE\xi)(y_j-\EE\eta)p_{ij}$$
```

```{prf:definition}
1. $\boxed{\cov(\xi,\eta)=\EE(\xi\cdot\eta)-\EE\xi\EE\eta}$
2. $\cov(a\xi,\eta)=a\cov(\xi, \eta)$
3. $\cov(\xi, a)=0,\quad a\in\RR$
4. $\cov(\eta,\xi)=\cov(\xi,\eta)$
5. $\cov(\eta_1+\eta_2,\eta)=\cov(\xi_1,\eta)+\cov(\xi_2,\eta)$
6. $\Var(\xi)=\cov(\xi,\xi)$
7. Если $\xi$ и $\eta$ независимы, то $\cov(\xi,\eta)=0$, а **обратное неверно!**
```

```{prf:proof} пункт 7
$$\cov(\xi,\eta)=\EE[(\xi-\EE\xi)(\eta-\EE\eta)]=\EE(\xi\eta-\EE\xi\cdot\eta-\xi\cdot\EE\eta+\EE\xi\EE\eta)$$

Если $\xi$ и $\eta$ независимы, то $\EE(\xi\eta)=\EE\xi\EE\eta$ 

для абсолютно непрерывного случая:

$$\EE(\xi\eta)=\iint\limits_{\RR^2}xy\underbrace{f(x,y)}_{f_\xi(x)f_\eta(y)}\d x\d y=\int\limits_{-\infty}^\infty xf_\xi(x)\d x\int\limits^\infty_{-\infty}yf_\eta(y)\d y=\EE\xi\EE\eta$$
```

```{note}
Ковариация — второй смешанный момент.

Стандартизированная величина $\xi^*$:

$$\xi^*=\frac{\xi-\EE\xi}{\sigma_\xi}$$

$$\EE\xi^*=0,\quad\Var\xi^*=1$$

$$\sigma_\xi=\sqrt{\Var\xi}$$
```

```{prf:definition}
$$\corr(\xi,\eta)=\cov(\xi^*,\eta^*)$$
```

```{prf:definition}
$$\corr(\xi,\eta)=\frac{\cov(\xi,\eta)}{\sigma_\xi\sigma_\eta}$$
```

```{prf:definition}
1. Если $\xi$ и $\eta$ независимы, то $\corr(\xi,\eta)=0$.
2. $-1\leq\rho\leq 1$
3. $|\rho|=1\iff\eta=a\xi+b$
4. $\forall a,b,c,d\in\RR,\corr(a\xi+b,c\eta+d)=\corr(\xi,\eta)\cdot\sign(ac)$
```

```{note} Ещё одно свойство дисперсии
$$\boxed{\Var(\xi+\eta)=\Var\xi+\Var\eta+2\cov(\xi,\eta)}$$

$$\boxed{\Var(a\xi+b\eta)=a^2\Var\xi+b^2\Var\eta+2ab\cov(\xi,\eta)}$$
```

```{prf:proof} пункт 2
$$\Var(\xi^*-\eta^*)=\Var\xi^*+\Var\eta^*-2\cov(\xi^*,\eta^*)$$

$$0\leq 1+1-2\corr(\xi,\eta)$$

$$\corr(\xi,\eta)\leq 1$$

$$\Var(\xi^*+\eta^*)=2+2\corr(\xi,\eta)\geq 0$$

$$\corr(\xi,\eta)\geq -1$$
```

```{prf:proof} пункт 3
$|\rho|=1\iff\eta=a\xi+b$

1. Если $\eta=a\xi+b$, то $\corr(\xi,\eta)=1$.
2. $$\begin{align*}\corr(\xi,\eta)&=\corr(\xi,a\xi+b)\\&=\frac{\cov(\xi,a\xi+b)}{\sigma_\xi\sqrt{\Var(a\xi+b)}}\\&=\frac{a\cov(\xi,\xi)}{\sigma_\xi|a|\sigma_\xi}=\frac{a}{|a|}=1\cdot\sign(a)\end{align*}$$

$\rho=1$, тогда 

$$\Var(\xi^*-\eta^*)=\Var\xi^*+\Var\eta^*-2\cov(\xi^*,\eta^*)=2-2\underbrace{\corr(\xi,\eta)}_1=0$$

$$\implies \exists c\in\RR, \xi^*-\eta^*=c$$

$$\frac{\xi-\EE\xi}{\sigma_\xi}-\frac{\eta-\EE\eta}{\sigma_\eta}=c$$

Аналогично рассматриваем для $\rho=-1$

$$\Var(\xi^*+\eta^*)=0$$
```

```{prf:proof} пункт 4
$$\begin{align*}\corr(a\xi+b,c\eta+d)&=\frac{\cov(a\xi+b,c\eta+d)}{\sqrt{\Var(a\xi+b)}\sqrt{\Var(c\eta+d)}}\\
&=\frac{ac\cdot\cov(\xi,\eta)}{|a|\sigma_\xi|c|\cdot\sigma_\eta}=\sign(ac)\corr(\xi,\eta)
\end{align*}$$
```

```{note}
**Коэффициент детерминации**

$$R^2=\corr^2(Y,\hat Y)$$

где $Y$ — реальные данные, а $\hat Y$ — спрогнозированные
```

```{prf:example}
* $\xi$ — акции компании IBM
* $\eta$ — акции компании General Foods

* $\sigma^2_\xi=16,\quad\sigma_\eta^2=9$
* $\rho=\corr(\xi,\eta)=-0.8$

$$\Var(\alpha\xi+\beta\eta)\xrightarrow[\alpha,\beta]{}\min$$

$$\alpha+\beta=1,\quad \alpha\geq 0,\beta\geq 0$$

$$\begin{align*}&\Var(\alpha\xi+(1-\alpha)\eta)=\\&\alpha^2\times16+(1-\alpha)^2\times 9+2\alpha(1-\alpha)(-0.8\times4\times3)\xrightarrow[\alpha]{}\min\end{align*}$$

$$\alpha_0\simeq0.42,\quad \Var(0.42\xi+0.58\eta)=1.17$$
```
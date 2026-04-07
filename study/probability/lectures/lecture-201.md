## Lecture 2-XX

### Условное нормальное распределение

```{prf:corollary}
$$z_2|z_1=x\sim N(\rho x, 1-\rho^2)$$
```

```{prf:proof}

$$U=\{z_2|z_2=x\}=\{\rho z_1+u|z_1=x\}=\{u+\rho x|z_1=x\}=u+\rho x$$

$$\EE U=\EE(z_2|z_1=x)=\rho x$$

$$\Var U=\Var(u+\rho x)=1-\rho^2$$

```

$$\begin{pmatrix}
    \xi_1 \\ \xi_2
\end{pmatrix}\sim N\left(\begin{pmatrix}
    \mu_1 \\ \mu_2
\end{pmatrix},\begin{pmatrix}
    \sigma_1^2 & \rho\sigma_1\sigma_2\\
    \rho\sigma_1\sigma_2 & \sigma_2^2
\end{pmatrix}\right)$$

$$\xi_2|\xi_1=x\sim N\left(u_2+\sigma_2\cdot\rho\frac{x-\mu_1}{\sigma_1},\sigma_2^2(1-\rho^2)\right)$$

$$\xi_2^*=\frac{\xi_2-\mu_2}{\sigma_2},\quad \xi_1^*=\frac{\xi_1-\mu_1}{\sigma_1}$$

$$\xi_2=\sigma_2\xi_2^*+\mu_2$$

$$\begin{aligned}
    \EE(\xi_2|\xi_1=x)&=\EE\left(\sigma_2\xi^*_2+\mu_2|\xi_1^*=\frac{x-\mu_1}{\sigma_1}\right)\\&
    =\mu_2+\sigma_2\underbrace{\EE\left(\xi_2^*|\xi_1^*=\frac{x-\mu_1}{\sigma}\right)}_{\rho\cdot\tfrac{x-\mu_1}{\sigma_1}}\\
    &=\mu_2+\sigma\rho\frac{x-\mu_1}{\sigma_1}
\end{aligned}$$

$$\Var(\xi_2|\xi_1=x)=\sigma_2^2(1-\rho^2)$$

$\EE(\xi_2|\xi_1=x)=g(x)=a+bx$ --- регрессия

$$\Phi_2(\Phi^{-1}(F_1(x_1)),\Phi^{-1}(F_2(x_2)), \rho)$$

где $\rho$ --- коэффициент корреляции

Усечённое нормальное распределение (Truncated Normal Distribution)

$$z\sim N(0,1)\quad z|z>a\sim\ ?$$
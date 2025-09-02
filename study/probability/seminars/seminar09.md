# Семинар 9, 15.11.2024

## Задача 4

| | $Y=-1$ | $Y=0$  | $Y=1$ |
| :-: | :-: | :-: | :-: |
| $X=-1$ | $0.2$ | $0.1$ | $0.2$ |
| $X=1$ | $0.1$ | $0.3$ | $0.1$ | 

### Подзадача D

```{prf:theorem}
Пусть случайная величина $X$ принимает значения $a_1,\ldots, a_m$. Случайная величина $Y$ принимает значения $b_1,\ldots,b_n$. Тогда для любой (борелевской) $y\colon\RR^2\mapsto\RR$ верно 

$$\EE[g(X, Y)]=\sum^m_{i=1}\sum^n_{j=1}g(a_i,b_j)\PP(\{X=a_i\}\cap\{Y=b_j\})$$

$$\begin{align*}\EE[\max(X,Y)]&=\max(-1,-1)\times0.2+\max(-1,0)\times0.1+\max(-1,1)\times0.2\\&+\max(1,-1)\times0.1+\max(1,0)\times0.3+\max(1,1)\times0.1=0.5\end{align*}$$
```

### Подзадача А

$$\EE[X]=(-1)\times0.2+(-1)\times0.1+(-1)\times0.2+(1)\times0.1+(1)\times0.3+(1)\times0.1=0$$

## Задача 5

| | $Y=-1$ | $Y=0$  | $Y=1$ |
| :-: | :-: | :-: | :-: |
| $X=-1$ | $0.2$ | $0.1$ | $0.2$ |
| $X=1$ | $0.1$ | $0.3$ | $0.1$ | 

### Подзадача А

$$D(X)=\EE[X^2]-[\EE X]^2=1-0^2=1$$

$$\begin{align*}\EE[X^2]&=(-1)^2\times0.2+(-1)^2\times0.1+(-1)^2\times0.2\\&+(1)^2\times0.1+(1)^2\times0.3+(1)^2\times0.1=1\end{align*}$$

```{prf:definition}
**Ковариация**:

$$\cov(X,Y)=\EE[(X-\EE[X])\cdot(Y-\EE[Y])]$$

```

:::{note} Свойства ковариации
1. $\cov(X,X)=D(X)$
2. $\cov(X,Y)=\cov(Y,X)$
3. $\cov(X+Y,Z)=\cov(X,Z)+\cov(Y,Z)$

```{prf:proof}
$$\begin{align}\cov(X+Y,Z)&=\EE[(X+Y-\EE[X+Y])\cdot(Z-\EE[Z])]=\\
&=\EE[(X+Y-\EE[X]-\EE[Y])(Z-\EE[Z])]\\
&=\EE[((X-\EE[X])+(Y-\EE[Y]))\cdot(Z-\EE[Z])]\\
&=\underbrace{\EE[(X-\EE[X])(Z-\EE[Z])]}_{\cov(X,Z)}+\underbrace{\EE[(Y-\EE[Y])(Z-\EE[Z])]}_{\cov(Y,Z)}
\end{align}$$
```

4. $\cov(c\cdot X, Y)=c\cdot\cov(X,Y)$
:::

### Подзадача С

$$\cov(X,Y)=\EE[(X-\EE[X])\cdot(Y-\EE[Y])]\overset{\text{д/з}}{=}\EE[XY]-\EE[X]\EE[Y]$$

### Подзадача D

$$\corr(X,Y)=\frac{\cov(X,Y)}{\sqrt{D(X)}\sqrt{D(Y)}}$$

$$|\corr(X,Y)|\leq1 $$

$$\boxed{|\cov(X,Y)|\leq\sqrt{D(X)}\sqrt{D(Y)}}$$

$$D(Y)=0\implies Y=C\implies\cov(X,Y)=\cov(X,C)=0$$

$$D(X\plusmn Y)=D(X)+D(Y)\plusmn 2\cov(X,Y)$$

$$\begin{align*}D(X+Y)&=\cov(X+Y,X+Y)=\cov(X,X+Y)+\cov(Y,X+Y)
\\&=\cov(X,X)+\cov(X,Y)+\cov(Y,X)+\cov(Y,Y)\\&=D(X)+D(Y)+2\cov(X,Y)
\end{align*}$$

---

$t\in\RR$

$$\begin{align*}g(t)&=D(X+t\cdot Y)=D(X)+D(tY)-2\cov(X,tY)
\\&=D(X)+t^2D(Y)-2t\cov(X,Y)
\\&=D(Y)t^2-2\cov(X,Y)\cdot t+D(X)\geq 0
\end{align*}$$

$$\text{Диск}=4\cov^2(X,Y)-4D(Y)D(X)\leq 0$$

$$\cov^2(X,Y)\leq D(Y)D(X)$$

$$|\cov(X,Y)|\leq\sqrt{D(X)}\sqrt{D(Y)}$$

---

$$\EE[XY]=(-1)\times(-1)\times0.2+(-1)\times0\times0.1+(-1)\times1\times0.2+1\times(-1)\times0.1+1\times0\times0.3+1\times1\times0.1=0$$

## Задача 6

### Подзадача B

$$F_{X,Y}(x,y)=\PP(\{X\leq x\}\cap\{Y\leq y\})$$

$$F_{X,Y}(-1,-0.2)=\PP(\{X\leq -1\}\cap\{Y\leq0.2\})=0.2+0.1$$

### Подзадача F

$$F_{X,Y}(2,3)=\PP(\{X\leq 2\}\cap\{Y\leq 3\})=1$$

## Задача 7

### Подзадача А

$$\PP(\{X=-1\}|\{Y=0\})=\frac{\PP(\{X=-1\}\cap \{Y=0\})}{\PP(\{Y=0\})}=\frac{0.1}{0.1+0.3}=\frac{1}{4}=0.25$$

### Подзадача B 

$$\PP(\{Y=0\}|\{X=-1\})=\frac{\PP(\{Y=0\}\cap\{X=-1\})}{\PP(\{X=-1\})}=\frac{0.1}{0.2+0.1+0.2}=\frac{1}{5}=0.2$$

### Подзадача С

Таблица условного распределения случайной величины $Y$ при условии $\{X=-1\}$

| $y$ | $-1$ | $0$ | $1$ |
| :-: | :-: | :-: | :-: |
| $\PP(\{Y=y\}|\{X=-1\})$ | $0.4$ | $0.2$ | $0.4$ | 


### Подзадача D

$$\EE[Y|\{X=-1\}]=(-1)\times0.4+0\times0.2+1\times0.4=0$$

### Подзадача E

$$D(Y|X=-1)=\underbrace{\EE[Y^2|X=-1]}_{=0.8}-(\underbrace{\EE[Y|X=-1]}_{=0})^2=0.8$$

## Листок 2, Задача 1

$X\sim\text{Pois}(\lambda),Y\sim\text{Pois}(\mu)$ — независимо

$Z=X+Y\sim\ \, ?$

$k\in\{0,1,2,\ldots\}$

$$\begin{align*}\PP(\{Z=k\})&=\PP(\bigsqcup^k_{j=0}(\{X=j\}\cap\{Y=k-j\}))
\\&=\sum^k_{j=0}\PP(\{X=j\}\cap\{Y=k-j\})
\\&=\sum^k_{j=0}\PP(\{X=j\})\cdot\PP(\{Y=k-j\})
\\&=\sum^k_{j=0}\frac{\lambda^j}{j!}e^{-\lambda}\cdot\frac{\mu^{k-j}}{(k-j)!}e^{-\mu}=\frac{1}{k!}e^{-(\lambda+\mu)}\sum^k_{j=0}\boxed{\frac{k!}{j!(k-j)!}}_{{k\choose j}}\lambda^i\mu^{k-i}
\\&=\frac{1}{k!}e^{-(\lambda+\mu)}(\lambda+\mu)^k
\end{align*}$$

$$\boxed{\xi\sim\text{Pois}(\lambda)\overset{def}\iff\PP(\{\xi=k\})=\frac{\lambda^k}{k!}e^{-\lambda},\quad k\in\{0, 1, 2, \ldots\}}$$

## Листок 2, Задача 2

$X_1\sim\text{Be}(p),X_2\sim\text{Be}(p)$ — независимы

$Y=X_1+X_2\sim\text{Bi}(2,p)$

$k=0,1,2$

$$\begin{align*}\PP(\{Y=0\})&=\PP(\{X_1=0\cap\{X_2=0\}\})
\\&=\PP(\{X_1=0\})\cdot\PP(\{X_2=0\})=(1-p)^2
\end{align*}
$$

$$\begin{align*}\PP(\{Y=1\})&=\PP(\{X_1=0\}\cap\{X_2=1\})+\PP(\{X_1=1\}\cap\{X_2=0\})
\\&=\underbrace{\PP(\{X_1=0\})}_{1-p}\underbrace{\PP(\{X_2=1\})}_p+\underbrace{\PP(\{X_1=1\})}_p\cdot\underbrace{\PP(\{X_2=0\})}_{1-p}
\\&=2p(1-p)={2\choose 1}p^1(1-p)^1
\end{align*}$$

$$\PP(\{Y=2\})=\PP(\{X_1=1\}\cap\{X_2=1\})=\ldots=p^2={2\choose 2}p^2(1-p)^0$$

## Листок 2, Задача 2

$X\sim f_X(x), Y\sim \text{Be}(p)$ — независимая

$Z=X+Y\sim\,\ ?$

$$\begin{align*}F_Z(z)&=\PP(\{Z\leq z\})=\PP(\{Z\leq z\}\cap\{Y=0\})+\PP(\{Z\leq z\}\cap\{Y=1\})
\\&=\PP(\{Z\leq z\}\cap\{Y=0\})+\PP(\{Z\leq z\}\cap\{Y=1\})
\\&=\PP(\{X\leq z\}\cap\{Y=0\})+\PP(\{X\leq z-1\}\cap\{Y=1\})
\\&=\PP(\{X\leq z\})\cdot\PP(\{Y=0\})+\PP(\{X\leq z-1\})\cdot\PP(\{Y+1\})
\\&=F_X(z)(1-p)+F_X(z-1)p
\end{align*}$$

Дифференцируем:

$$\boxed{f_Z(z)=f_X(z)(1-p)+f_X(z-1)p}$$
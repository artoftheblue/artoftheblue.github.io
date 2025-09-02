# Семинар 8, 08.11.2024

## Задача 1

$$\Omega=\{\heartsuit,\diamondsuit,\spadesuit,\clubsuit\},\quad \FF=2^\Omega$$

$$\PP(\{\heartsuit\})=\ldots=\PP(\{\clubsuit\})=\frac{1}{4}$$

| $\omega$ | $\heartsuit$ | $\diamondsuit$ | $\spadesuit$ | $\clubsuit$ |
| :-: | :-: | :-: | :-: | :-: |
| $X(\omega)$ | $1$ | $0$ | $-1$ | $0$ |
| $Y(\omega)$ | $1$ | $1$ | $-1$ | $-1$ | 

### Подзадача А

$$\begin{align*}\PP(\{X=-1\}\cap\{Y=-1\})&=\PP(\{\omega\in\Omega\colon X(\omega)=-1\}\cap\{\omega\in\Omega\colon Y(\omega)=-1\})\\&=\PP(\{\spadesuit\}\cap\{\spadesuit,\clubsuit\})=\PP(\{\spadesuit\})=\frac{1}{4}\end{align*}$$

### Подзадача B

$$\begin{align*}
\PP(\{X=-1\}\cap\{Y=1\})&=\PP(\{\omega\in\Omega\colon X(\omega)=-1\}\cap\{\omega\in\Omega\colon Y(\omega)=1\})\\&=\PP(\{\spadesuit\cap\{\heartsuit,\diamondsuit\}\})=\PP(\varnothing)=0
\end{align*}$$

### Подзадача C

$$\PP(\{X=0\}\cap\{Y=-1\})=\PP(\{\clubsuit\})=\frac{1}{4}$$

### Подзадача D

$$\PP(\{X=0\}\cap\{Y=1\})=\PP(\{\diamondsuit\})=\frac{1}{4}$$

### Подзадача E

$$\PP(\{X=1\}\cap\{Y=-1\})=\PP(\varnothing)=0$$

### Подзадача F

$$\PP(\{X=1\}\cap\{Y=1\})=\PP(\{\heartsuit\})=\frac{1}{4}$$

### Подзадача G

| | $Y=-1$ | $Y=1$ | 
| :-: | :-: | :-: |
| $X=-1$ | $\frac{1}{4}$ | $0$ |
| $X=0$ | $\frac{1}{4}$ | $\frac{1}{4}$ |
| $X=1$ | $0$ | $\frac{1}{4}$ |

## Задача 2

| | $Y=-1$ | $Y=0$ | $Y=1$ |
| :-: | :-: | :-: | :-: | 
| $X=-1$ | $0.2$ | $0.1$ | $0.2$ |
| $X=1$ | $0.1$ | $0.3$ | $0.1$ |

### Подзадача А

$$\PP(\{X=1\}\cap\{Y=-1\})=0.1$$

### Подзадача B

$$\begin{align*}\PP(\{X=1\})&=\underbrace{\PP(\{X=1\}\cap\{Y=-1\})}_{=0.1}+\underbrace{\PP(\{X=1\}\cap\{Y=0\})}_{=0.3}\\&+\underbrace{\PP(\{X=1\}\cap\{Y=1\})}_{=0.1}=0.5
\end{align*}$$

### Подзадача С

$$\PP(\{Y=-1\})=\underbrace{\PP(\{X=-1\}\cap\{Y=-1\})}_{=0.2}+\underbrace{\PP(\{X=1\}\cap\{Y=-1\})}_{=0.1}=0.3$$

### Подзадача D

$X$ и $Y$ зависимы?

```{prf:definition}
Случайные величины $X\colon\Omega\to\RR$ и $Y\colon\Omega\to\RR$ называются независимыми, если $\forall B_1,B_2\in\BB(\RR)$

$$\PP(\{X\in B_1\}\cap\{Y\in B_2\})=\PP(\{X\in B_1\})\cdot\PP(\{Y\in B_2\}),$$

т. е. события $\{X\in B_1\}$ и $\{Y\in B_2\}$ независимые
```

```{prf:theorem} Критерий независимости в дискретном случае
Пусть случайная величина $X$ принимает значения $a_1, a_2,\ldots, a_m,\ldots$. Случайная величина $Y$ принимает значения $b_1,b_2,\ldots,b_n,\ldots$

Тогда случайные величины $X$ и $Y$ независимы $\iff$ когда $\forall i \in\NN,\forall j\in \NN$

$$\PP(\{X=a_i\}\cap\{Y=b_j\})=\PP(\{X=a_i\})\cdot\PP(\{Y=b_j\})$$
```

```{prf:proof}
$(\Rightarrow)$ $B_1=\{a_i\}$, $B_2=\{b_j\}$

$$\underbrace{\PP(\{X\in\{a_i\}\}\cap\{Y\in\{b_j\}\})}_{=\PP(\{X=a_i\}\cap\{Y=b_j\})}=\underbrace{\PP(\{X\in\{a_i\}\})}_{=\PP(\{X=a_i\})}\cdot\underbrace{\PP(\{Y\in\{b_j\}\})}_{\PP(\{Y=b_j\})}$$

$$B_1=(B_1\cap\{a_1,a_2,\ldots, a_m,\ldots\})\sqcup(B_1\setminus\{a_1,a_2,\ldots,a_m,\ldots\})$$

$$\forall B_1, B_2\in\BB(\RR)$$

$$B_1=(B_1\cap\{a_1,a_2,\ldots, a_m,\ldots\})\sqcup \underbrace{(B_1\setminus\{a_1,a_2,\ldots,a_m,\ldots\})}_{=B_{1,0}}$$

$$B_2=(B_2\cap\{a_1,a_2,\ldots, a_m,\ldots\})\sqcup \underbrace{(B_2\setminus\{a_1,a_2,\ldots,a_m,\ldots\})}_{=B_{2,0}}$$

$$\begin{align*}\PP(\{X\in B_1\}\cap\{Y\in B_2\})&=\PP([\{X\in B_{1,1}\}\sqcup\{X\in B_{1,0}\}]\cap[\{Y\in B_{2,1}\}\sqcup\{Y\in B_{2,2}\}])\\&=
\PP(\{X\in B_{1,1}\}\cap\{Y\in B_{2,1}\})+\PP(\overbrace{\{X\in B_{1,0}\}}^{=\varnothing}\cap\{Y\in B_{2,1}\})\\&+\PP(\{X\in B_{1,1}\}\cap\overbrace{\{Y\in B_{2,0}\}}^{=\varnothing})+\PP(\overbrace{\{X\in B_{1,0}\}}^{\varnothing}\cap\overbrace{\{Y\in B_{2,0}\}}^{=\varnothing})
\\&=\PP\left(\bigsqcup^\infty_{\underset{\scriptstyle i\colon a_i\in B_1}{i=1}}\{X=a_i\}\right)\cap\left(\bigsqcup^\infty_{\underset{\scriptstyle j\colon b_j\in B_2}{j=1}}\{Y= b_j\}\right)
\\&=\PP\left(\bigsqcup^\infty_{\underset{\scriptstyle i\colon a_i\in B_1}{i=1}}\bigsqcup^\infty_{\underset{\scriptstyle j\colon b_j\in B_2}{j=1}}(\{X=a_i\}\cap\{Y=b_j\})\right)
\\&=\sum^\infty_{\underset{\scriptstyle i\colon a_i\in B_1}{i=1}}\sum^\infty_{\underset{\scriptstyle j\colon b_j\in B_2}{j=1}}\underbrace{\PP(\{X=a_i\}\cap\{Y=b_j\})}_{=\PP(\{X=a_i\})\cdot\PP(\{Y=b_j\})}
\\&=\left(\sum^\infty_{\underset{\scriptstyle i\colon a_i\in B_1}{i=1}}\PP(\{X=a_i\})\right)\left(\sum^\infty_{\underset{\scriptstyle j\colon b_j\in B_2}{j=1}}\PP(\{Y=b_j\})\right)
\\&=\PP(\{X\in B_{1,1}\})\cdot\PP(\{Y\in B_{2,1}\})
\\&=\PP(\{X\in B_1\})\cdot\PP(\{Y\in B_2\})
\end{align*}$$

$$B_{1,1}=\bigsqcup^\infty_{\underset{\scriptstyle i\colon a_i\in B_1}{i=1}}\{a_i\},\quad B_{2,1}=\bigsqcup^\infty_{\underset{\scriptstyle j\colon b_j\in B_2}{j=1}}\{b_j\}$$
```

$$\underbrace{\PP(\{X=1\}\cap\{Y=-1\})}_{=0.1}\neq \underbrace{\PP(\{X=1\})\cdot\PP(\{Y=-1\})}_{=0.15}$$

$X$ и $Y$ являются зависимыми.

## Задача 3 

| | $Y=-1$ | $Y=0$ | $Y=1$ |
| :-: | :-: | :-: | :-: | 
| $X=-1$ | $0.2$ | $0.1$ | $0.2$ |
| $X=1$ | $0.1$ | $0.3$ | $0.1$ |

### Подзадача A

| $X$ | $-1$ | $1$ |
| :-: | :-: | :-: |
| $\PP_X$ | $0.5$ | $0.5$ | 

### Подзадача F

$$\EE[X]=(-1)\times-0.5+1\times0.5=0$$

### Подзадача B

| $X$ | $-1$ | $0$ | $1$ |
| :-: | :-: | :-: | :-: |
| $\PP_Y$ | $0.3$ | $0.4$ | $0.3$ |

### Подзадача G

$$\EE[Y]=(-1)\times 0.3+0\times0.4+1\times0.3=0$$

### Подзадача С 

| $X\cdot Y$ | $-1$ | $0$ | $1$ |
| $\PP_{X\cdot Y}$ | $0.2+0.1=0.3$ | $0.1+0.3=0.4$ | $0.2+0.1=0.3$ | 

### Подзадача H 

$$\EE[XY]=(-1)\times 0.3+0\times0.4+1\times0.3=0$$

| $\max(X,Y)$ | $-1$ | $0$ | $1$ |
| $\PP_{X\cdot Y}$ | $0.2+0.1=0.3$ | $0.1+0.3=0.4$ | $0.2+0.1=0.3$ |

### Подзадача D 

| $\max(X, Y)$ | $-1$ | $0$ | $1$ |
| :-: | :-: | :-: |
| $\PP(X, Y)$ | $0.2$ | $0.1$ | $0.2+0.1+0.3+0.1=0.7$|

### Подзадача I 

$$\EE[\max(X, Y)]=(-1)\times0.2+0\times0.1+1\times0.7=0.5$$

$$\EE[\min(X, Y)]=-0.5$$

$$X+Y=(X\land Y)+(X\lor Y)$$

$$0+0=\min(X,Y)+0.5$$
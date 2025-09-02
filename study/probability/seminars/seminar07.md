# Семинар 7, 18.10.2024

```{prf:definition}
Случайная величина $\xi$ называется **абсолютно непрерывной**, если существует неотрицательная интегрируемая функция $f_\xi(x)$ такая, что для любого $x\in\RR$

$$F_\xi(x)=\int_{-\infty}^xf_{\xi}(t)\d t$$

При этом функция $f_\xi(t)$ называется **плотностью распределения случайной величины** $\xi$.

```

## Задача 1

$\Omega=[0, 1],\quad\FF=\BB([0, 1]),\quad \PP(A)$ — длина множества $А\in\FF$, $\xi(\omega)=\omega^2$ — случайная величина

### Подзадача А

$$\begin{align*}F_\xi(x)&=\PP(\{\xi\leq x\})=\PP(\{\omega\in\Omega\colon\xi(\omega)\leq x\})\\&=\PP(\{\omega\in[0, 1]\colon\omega^2\leq x\})
\\&=\begin{cases}
    0 & \text{при } x < 0\\
    \sqrt{x} & \text{при } 0\leq x\leq 1\\
    1 & \text{при } x > 1\\
\end{cases}
\end{align*}$$

$$\begin{align*}0\leq x\leq 1\colon &\PP(\{\omega\in[0, 1]\colon\omega^2\leq x\})=\\&\PP(\{\omega\in[0, 1]\colon-\sqrt{x}\leq\omega\leq\sqrt{x}\})=\\&
\PP([0,\sqrt{x}])=\sqrt{x}
\end{align*}$$

$$F_\xi(x)=\int^x_{-\infty}f_\xi(t)\d t$$

$$\boxed{\frac{\d}{\d x}F_\xi(x)=f_\xi(x)}$$

### Подзадача B

$$f_\xi(x)=\frac{\d}{\d x}F_\xi(x)=\begin{cases}
    0, & \text{при } x < 0\\
    \frac{1}{2\sqrt{2}}, & \text{при } 0 < x \leq 1\\
    0, & \text{при } x > 1\\
\end{cases}$$

### Подзадача C

$$\EE[\xi]=\int^{+\infty}_{-\infty}xf_\xi(x)\d x$$

> Если $\displaystyle\int^{+\infty}_{-\infty}|x|f_\xi(x)\d x$ сходится

$$\int_0^1x\frac{1}{2\sqrt{x}}\d x=\frac{1}{2}\int^1_0\sqrt{x}\d x=\frac{1}{2}\frac{x^{\frac{3}{2}}}{\frac{3}{2}}\biggm|^{x=1}_{x=0}=\frac{1}{3}$$

### Подзадача D

$$\begin{align*}
\EE[\xi^2]&=\int^{+\infty}_{-\infty}x^2f_\xi(x)\d x=\int^1_0 x^2\frac{1}{2\sqrt{x}}\d x\\&=\frac{1}{2}\int^1_0 x^{\frac{3}{2}}\d x=\frac{1}{2}\frac{x^{\frac{5}{2}}}{\frac{5}{2}}\int^{x=1}_{x=0}=\frac{1}{5}\end{align*}$$

### Подзадача E

$$D(\xi)=\EE[\xi^2]-[\EE\xi]^2=\frac{1}{5}-\left(\frac{1}{5}\right)-\left(\frac{1}{3}\right)^2=\frac{1}{5}-\frac{1}{9}=\frac{9-5}{45}=\frac{4}{45}$$

## Задача 2

$$f_\xi(x)=\begin{cases}
    cx, & x\in[0, 1],
    0, & x\not\in[0, 1]
\end{cases}$$

> $$F_\xi(x)=\int^x_{-\infty}f_\xi(t)\d t$$
> $$1=\int^{+\infty}_{-\infty}f_\xi(t)\d t$$

### Подзадача А

$$1=\int^{+\infty}_{-\infty}f_\xi(t)\d t=\int^1_0 c\cdot t\d t=c\cdot\frac{t^2}{2}\biggm|^{t=1}_{t=0}=\frac{c}{2}\implies c=2$$

```{prf:theorem}
Пусть $\xi$ — абсолютно непрерывная случайная величина. Тогда для любого $B\in\BB(\RR)$

$$\boxed{\PP(\{\xi\in B\})}=\int_Bf_\xi(t)\d t$$
```

### Подзадача Б 

$$\begin{align*}
\PP(\{\xi\leq\tfrac{1}{2}\})&=\PP(\{\xi\in\underbrace{(-\infty,\tfrac{1}{2}]}_{=B}\})\\&=\int_B f_\xi(t)\d t=\int^{\frac{1}{2}}_{-\infty}f_\xi(t)\d t=\int^{\frac{1}{2}}_02t\d t=t^2\biggm|^{t=\frac{1}{2}}_{t=0}=\frac{1}{4}
\end{align*}$$

### Подзадача С

$$\PP(\{\xi\in[\tfrac{1}{2},\tfrac{3}{2}]\})=\int_Bf_\xi(t)\d t=\int^1_\frac{1}{2}2t\d t=t^2\biggm|^{t=1}_{t=\frac{1}{2}}=1-\frac{1}{4}=\frac{3}{4}$$

### Подзадача D

$$\PP(\{\xi\in[2, 3]\})=\int_{[2, 3]}\underbrace{f_\xi(t)}_{=0}\d t=0$$

### Подзадача E

1. Пусть $x<0$, тогда $F_\xi(x)=\displaystyle\int^x_{-\infty}f_\xi(t)\d t=0$.
2. Пусть $0\leq x\leq 1$, тогда $F_\xi(x)=\displaystyle\int^x_{-\infty}f_\xi(t)\d t=\cancel{\int^0_{-\infty}f_\xi(t)\d t}+\int^x_0 f_\xi(t)\d t=t^2\biggm|^{t=x}_{t=0}=x^2$
3. Пусть $x>1$, тогда $F_\xi(x)=\displaystyle\int^x_{-\infty}f_\xi(t)\d t=\cancel{\int^0_{-\infty}f_\xi(t)\d t}+\int^1_0\underbrace{f_\xi(t)}_{2t}\d t+\cancel{\int^x_1f_\xi(t)\d t}=1$

$$F_\xi(x)=\begin{cases}
    0 & x < 0,\\
    x^2 & 0\leq x \leq 1\\
    1 & x > 1 
\end{cases}$$

### Подзадача F

$$\begin{align*}\EE[\xi]&=\int^{+\infty}_{-\infty}xf_\xi(x)\d x=\int^1_0x\cdot 2x\d x\\&=2\int^1_0x^2dx=2\frac{x^2}{3}\biggm|^{x=1}_{x=0}=\frac{2}{3}
\end{align*}$$

### Подзадача G

$$\begin{align*}\EE[\xi^2]&=\int^{+\infty}_{-\infty}x^2f_\xi(x)\d x=\int^1_0 x^22x\d x=2\int^1_0 x^2\d x\\&=2\frac{x^3}{\d x}=2\frac{x^4}{4}\biggm|^{x=1}_{x=0}=\frac{1}{2}
\end{align*}$$

### Подзадача H 

$$D(\xi)=\EE[\xi^2]-[\EE\xi]^2=\frac{1}{2}-\left(\frac{2}{3}\right)^2=\frac{1}{2}-\frac{4}{9}=\frac{9-8}{18}=\frac{1}{18}$$

### Подзадача I 

$$\EE[\sqrt{\xi}]=\int^1_0\sqrt{x}2x\d x=2\int^1_0x^{\frac{3}{2}}\d x=2\frac{x^{\frac{5}{2}}}{\frac{5}{2}}\biggm|^{x=1}_{x=0}=\frac{4}{5}$$

```{prf:definition}
Пусть случайная величина $\xi$ имеет плотность $f_\xi(t)$. Квантилью уровня $u\in(0,1)$ случайной величины $\xi$ называется наименьшее число $q\in\RR$:

$$\boxed{\int_{-\infty}^{q}f_\xi(t)\d t}=u$$
```

## Задача 2 

$$f_\xi(x)=\begin{cases}
    2x, & x\in[0, 1],\\
    0, & x\not\in[0, 1]
\end{cases}$$

$$M=\text{med}(\xi)=?$$

$$\int^M_{-\infty}f_\xi(t)\d t=0.5$$

$$\int^M_02t\d t=t^2\biggm|^{t=M}_{t=0}$$

$$M^2=0.5\implies M=\sqrt{0.5}$$

## Задача 3 

$\xi$ — продолжительность ругания Васи родителями

$$\xi\sim\text{Exp}(\lambda)\overset{def}{\iff}f_\xi(x)=\begin{cases}
    0, & x <0\\
    \lambda e^{-\lambda x}, & x\geq 0
\end{cases}$$

$$\EE[\xi]=\frac{1}{\lambda}=6,\quad D(\xi)=\frac{1}{\lambda^2}\implies\lambda=\frac{1}{6}$$

### Подзадача А

$$F_\xi(x)=\begin{cases}0, & x<0\\
1-e^{-\lambda x}, & x\geq 0\end{cases}$$

$$\PP(\{\xi>6\})&=1-\PP(\{\xi\leq 6\})=1-F_\xi(6)\\&=1-[1-e^{-\lambda \cdot 6}]=e^{-\lambda \cdot 6}=e^{-\frac{1}{6}\cdot 6}=e^{-1}$$

### Подзадача B

$$D(\xi)=\frac{1}{\lambda^2}=36$$

### Подзадача С 

$$\PP(\{\xi\leq 7\}|\{\xi>6\})=\frac{\PP(\{6<\xi\leq 7\})}{\underbrace{\PP(\{\xi>6\})}_{e^{-1}}}=\frac{F_\xi(7)-F_\xi(6)}{e^{-1}}=\frac{[1-e^{-\lambda\cdot 7}]-[1-e^{-\lambda\cdot 6}]}{e^{-1}}=\frac{e^{-6\cdot\frac{1}{6}}-e^{-7\cdot\frac{1}{6}}}{e^{-1}}=1-e^{-\frac{1}{6}}$$
# Семинар 6, 11.10.2024

## Задача 8

$n = 1000$ призывников.

$p=0.05$ — доля призывников, больных сифилисом.

$k^*=?$, при котором ожидаемое число проверок по методике Дорфмана минимально.

$n$ делится на $k$ нацело

Всего $\frac{n}{k}$ групп.

Введём $\xi_i$ — число проверок, которое необходимо сделать в $i$-й подгруппе.

$$\xi_i=\begin{cases}
    1, & \text{если в i-й группе все здоровы} \\
    k + 1, & \text{если в i-й группе есть хотя бы 1 больной}
\end{cases}$$

| $x$ | $1$ | $k+1$ |
| --- | --- | ----- | 
| $\PP(\{\xi_i=x\})$ | $(1-p)^k$ | $1-(1-p)^k$ | 

$$\EE[\xi_1]=1(1-p)^k+(k+1)[1-(1-p)^k]=k+1-k(1-p)^k$$

$$\xi:=\xi_1+\ldots+\xi_\frac{n}{k}$$

$$\begin{align*}\EE[\xi]&=\EE[\xi_1]+\ldots+\EE[\xi_{\frac{n}{k}}]=\tfrac{n}{k}\EE[\xi_1]\\&=\tfrac{n}{k}[k+1-k(1-p)^k]=\underbrace{n[1+\tfrac{1}{k}-(1-p)^k]}_{=\EE(k)}\end{align*}$$

Оптимально группировать людей в группы по $5$ человек.

## Задача 6

Мошенник звонит, пытаясь узнать секретный код. Половина абонентов не отвечает на звонки с незнакомых номеров. Есть вероятность $p$, что мошеннику повезёт и ему скажут секретный код. В таком случае он перестаёт звонить и пытается снять деньги.

$\theta$ — вероятность узнать код мошенников при очередной звонке.

$\theta=0\times0.5+p\times0.5=\frac{p}{2}$, где первая 0.5 — вероятность того, что абонент не снимет трубку, а вторая 0.5 — вероятность того, что абонент снимет трубку. $0$ — условная вероятность узнать код, $p$ — условная вероятность узнать код.

### Подзадача А

Найдите вероятность того, что мошеннику повезёт на $20$-м звонке. $\xi$ — номер первого удачного звонка для мошенника.

$$\xi\sim G(\theta=\tfrac{p}{2})\xLeftrightarrow{def}\PP(\{\xi=k\})=(1-\theta)^{k-1}\theta,\quad k=1,2,3,\ldots$$

Найти $\PP(\{\xi=20\})$.

$$\PP(\{\xi=20\})=(1-\theta)^{19}\theta=(1-\tfrac{p}{2})^{19}(\tfrac{p}{2})$$

### Подзадача B

Найдите $p$, при котором вероятность из предыдущего пункта максимальна.

$$\lambda(p)=19\ln(1-\tfrac{p}{2})+\ln(\tfrac{p}{2})$$

$$\begin{align*}\frac{\d}{\d p}\lambda(p)&=-\frac{1}{2}\frac{19}{1-\frac{p}{2}}+\frac{1}{2}\frac{1}{\frac{p}{2}}=-\frac{19}{2-p}+\frac{1}{p}\\&=\frac{-19+2-p}{p(2-p)}=\frac{2-20p}{p(2-p)}=0\implies p^*=\frac{1}{10}\end{align*}$$

### Подзадача С

Найдите вероятность того, что $100$ звонков не хватит, чтобы получить код.

$$\begin{align*}\PP(\{\xi\geq 101\})&=\sum^\infty_{k=101}(1-\theta)^{k-1}\theta\\&=(1-\theta)^{100}+(1-\theta)^{101}\theta+(1-\theta)^{102}\theta+\ldots\\&=(1-\theta)^{100}\theta\cdot(1+(1-\theta)+(1-\theta)^2+\ldots)\\&=(1-\theta)^{100}\cancel{\theta}\cdot\cancel{\frac{1}{1-(1-\theta)}}=(1-\theta)^{100}=(1-\tfrac{p}{2})^{100}\end{align*}$$

### Подзадача D

Найдите вероятность того, что удача ждёт мошенника на чётном по счёту звонке.

$$\begin{align*}\PP(\{\xi\in\{2,4,6,\ldots\}\})&=(1-\theta)\theta+(1-\theta)^3\theta+(1-\theta)^5\theta+\ldots\\&=(1-\theta)\theta[1+(1-\theta)^2+(1-\theta)^4+\ldots]\\&=(1-\theta)\theta\frac{1}{1-(1-\theta)^2}\\&=\frac{1-\theta}{2-\theta}=\frac{2-p}{4-p}\end{align*}$$

## Задача 7

$$\PP(\{\xi=1\})+\ldots+\PP(\{\xi=10\})=1$$

$$\PP(\{\xi\geq 1\})+\ldots+\PP(\{\xi\geq 10\})=5$$

Найти $\EE[\xi]$

---

$$\begin{matrix}
\PP(\{\xi\geq 1\})\ + & \bigm| & =\PP(\{\xi=1\})&+&\PP(\{\xi=2\})&+&\PP(\{\xi=3\})&+&\ldots&+&\PP(\{\xi=10\})\\
\PP(\{\xi\geq 2\})\ + & \bigm| & &+&\PP(\{\xi=2\})&+&\PP(\{\xi=3\})&+&\ldots&+&\PP(\{\xi=10\})\\
\PP(\{\xi\geq 3\})\ + & \bigm| & && &+&\PP(\{\xi=3\})&+&\ldots&+&\PP(\{\xi=10\})\\
\vdots & \biggm| & & & &&&&& & \vdots\\
\PP(\{\xi\geq 10\}) & \bigm| & &&&& & & &+&\PP(\{\xi=10\}) &=\\
\end{matrix}\\
=1\cdot\PP(\{\xi=1\})+2\cdot\PP(\{\xi=2\})+3\cdot\PP(\{\xi\})+\ldots+10\cdot\PP(\{\xi=10\})=\EE[\xi]=5$$

## Задача 8

$\xi\sim G(p)$

### Подзадача A

$$\begin{align*}\EE[\xi]&=\sum^\infty_{k=1}k\PP(\{\xi=k\})=\sum^\infty_{k=1}kq^{k-1}p=p\sum^\infty_{k=1}kq^{k-1}\\&=p\sum^\infty_{k=1}\frac{\d}{\d q}(q^k)=p\sum^\infty_{k=0}\frac{\d}{\d q}(q^k)=p\frac{\d}{\d q}\left(\sum^\infty_{k=0}q^k\right)\\&=p\frac{\d}{\d q}\left(\frac{1}{1-q}\right)=\frac{p}{(1-q)^2}=p\cdot\frac{1}{p^2}=\frac{1}{p}\end{align*}$$

### Подзадача B

$$\begin{align*}\EE[\xi(\xi-1)]&=\sum^\infty_{k=1}k(k-1)\cdot\PP(\{\xi=k\})=\sum^\infty_{k=1}k(k-1)\cdot q^{k-1}p\\&=qp\sum^\infty_{k=1}k(k-1)q^{k-2}=qp\sum^\infty_{k=1}\frac{\d^2}{\d q^2}(q^k)=qp\sum^\infty_{k=0}\frac{\d^2}{\d q^2}(q^k)\\&=qp\frac{\d^2}{\d q^2}\left(\sum^\infty_{k=0}q^k\right)=qp\frac{\d^2}{\d q^2}\left(\frac{1}{1-q}\right)=qp\frac{\d}{\d q}\left(\frac{1}{(1-q)^2}\right)\\&=qp\frac{2}{(1-q)^3}=qp\frac{2}{p^3}=\frac{2q}{p^2}\end{align*}$$

### Подзадача С

$$\begin{align*}\EE[\xi^2]=\EE[\xi(\xi - 1)]+\EE[\xi]=\frac{2q}{p^2}+\frac{1}{p}=\frac{2q+p}{p^2}=\frac{1+q}{p^2}\end{align*}$$

### Подзадача D

$$\begin{align*}
D(\xi)=\EE[\xi^2]-[\EE[\xi]]^2=\frac{1+q}{p^2}-\frac{1}{p^2}=\frac{q}{p^2}
\end{align*}$$
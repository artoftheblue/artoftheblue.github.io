## Компакты в {math}`\mathbb{R}^n`

### Замкнутый брус — компакт

Пусть {math}`I\subset\mathbb{R}^n` — замкнутый брус {math}`\Longrightarrow I` — компакт

Пойдем от противного

Пусть {math}`I=[a_1;b_1]\times\ldots\times[a_n;b_n]`

1.  Положим, что {math}`I` — не компакт. Значит, существует его покрытие {math}`\{A_{\alpha}\}` — открытые множества, такие что {math}`I\subset \{A_{\alpha}\}`, не допускающее выделения конечного подкпорытия

2.  Поделим каждую сторону пополам. Тогда, {math}`\exists I_1`, такой что не допускает конечного подпокрытия. Иначе, {math}`I` — компакт

3.  Аналогично, повторим процесс и получим систему вложенных брусов:

    ```{math}
    I\supset I_1\supset I_2\supset \ldots
    ```

    То есть на каждой стороне возникает последовательность вложенных отрезков, которые стягиваются в точку {math}`a=(a_1,\ldots,a_n)`

    При этом, {math}`a\in I_i\ \forall i\text{ или } a\in\displaystyle\bigcap_{i=1}^{\infty}I_i`

4.  {math}`a\in I\Longrightarrow a\in \bigcup A_{\alpha}\Longrightarrow\exists \alpha_0:a\in \underbrace{A_{\alpha_0}}_{\text{открытое}}\Longrightarrow\exists \ve>0: B_{\ve}(a)\subset A_{\alpha_0}`

5.  Мы знаем, что {math}`d(I_i)\mapsto0` при {math}`i\mapsto\infty`. Тогда,

    ```{math}
    \exists N:\forall i > N\ I_i\subset B_{\ve}(a)\subset A_{\alpha_0}
    ```

    Получается, что {math}`\forall i>N\ I_i` покрывается одним лишь {math}`A_{\alpha_0}` из системы {math}`\{A_{\alpha}\}`

    Получаем противоречие тому, что любое {math}`I_i` не допускает конечного подпокрытия, а у нас получилось, что {math}`I_i\in A_{\alpha_0}\forall i>N`

Любое ограниченное множество можно вписать в замкнутый брус. Потому что можно вокруг него описать шарик, который точно можно вписать в брус

### Критерий компактности

{math}`K\subset \mathbb{R}^n`. {math}`K` — компакт {math}`\Longleftrightarrow` {math}`K` замкнуто и ограниченно

Докажем необходимость {math}`(\Longrightarrow)`

*   *Ограниченность.* {math}`K` — компакт, значит монжо выбрать покрытие {math}`\{B_{m}(0)\}_{m=1}^{\infty}` — открытые шары

    Тогда, {math}`\exists m_0:K\subset \displaystyle\bigcup_{m=1}^{m_0} B_m(0)\Longrightarrow K\subset B_{m_0}(0)\Longrightarrow` по определению {math}`K` — ограничено

*   *Замкнутость.* Пойдем от противного. {math}`K` — компакт, тогда возьмем {math}`\{B_{\frac{\delta(x)}{2}}(0)\}_{x\in K}` — покрытие открытыми шарами, где {math}`\delta(x)=\rho(x,x_0)`. {math}`x_0` — предельная точка, которая {math}`\notin K` (или же {math}`\in \mathbb{R}^n\setminus K`)

    Так как {math}`K` — компакт, {math}`\exists x_1,\ldots, x_s:K\subset\displaystyle\bigcup_{i=1}^{s} B_{\frac{\delta(x_i)}{2}}(x_i)`

    Пусть {math}`\delta=\min\limits_{1\leqslant i\leqslant s}{\delta(x_i)}`, тогда

    ```{math}
    \begin{aligned}
                B_{\frac{\delta}{2}}(x_0)\cap\bigcup_{i=1}^{s}B_{\frac{\delta(x_i)}{2}}(x_i)=\varnothing&\Longrightarrow B_{\frac{\delta}{2}}(x_0)\subset\mathbb{R}^n\setminus K\\
                &\Longrightarrow\stackrel{\circ}{B}_{\frac{\delta}{2}}(x_0)\cap K=\varnothing
            \end{aligned}
    ```

    Значит, {math}`x_0` *не является предельной точкой* {math}`K`, что противоречит нашему предположению

Докажем достаточность

{math}`K` — замкнуто и ограничено {math}`\Longrightarrow r>0:B_r(0)\supset K\Longrightarrow\exists I` — замкнутый брус, такой что

```{math}
K\subset I\text{ и }I=[-r;r]^n\supset K
```

%  тут позже будет картинка

Пусть {math}`A_{\alpha}` — произвольное покрытие открытыми множествами для {math}`K`. Тогда, {math}`I\subset \{A_{\alpha}\}\cup\underbrace{\{\mathbb{R}^n\setminus K\}}_{\text{открыто}}`. Так как {math}`I` — компакт, то {math}`\exists` конечное подпокрытие

```{math}
\{A_{\alpha_i}\}_{i=1}^m\cup\{\mathbb{R}^n\setminus K\}\supset I\supset K\text{ — покрытие для $I$}
```

Значит, {math}`K\subset\{A_{\alpha_i}\}_{i=1}^{m}` — конечное и {math}`\{A_{\alpha}\}` — произвольное, тогда {math}`K` — компакт по определению

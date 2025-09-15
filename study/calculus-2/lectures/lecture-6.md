## Суммы Дарбу

### Нижняя и верхняя суммы Дарбу

Пусть {math}`I` - замкнутый брус, {math}`f: I\mapsto \R`, {math}`\T = \{I_i\}_{i=1}^{K}` -разбиение бруса {math}`I`, {math}`m_i = \displaystyle\inf_{I_i} (f)`, и {math}`M_i = \displaystyle\sup_{I_i} (f)`. Тогда числа {math}`\underline{S}(f, \T) = \sum_{i=1}^{K}m_i|I_i|` и {math}`\overline{S}(f, \T) = \sum_{i=1}^KM_i|I_i|` будем называть **нижней и верхней суммой Дарбу** соответственно

### Нижняя сумма Дарбу не больше верхней

```{math}
\us(f, \T) = \int_{\xi}\sigma(f, \T, \xi) \le \sup_{\xi}\sigma(f, \T, \xi) = \os(f, \T)
```

```{math}
\begin{aligned}
    &\us(f, \T) = \sum_{i=1}^{K}m_i|I_i| = \sum_{i}\inf_{\xi_i}(f(\xi_i))|I_i| = \inf_{\xi}\sum_{i}f(\xi_i)|I_i| = \inf_{\xi}\sigma(f, \T, \xi) \le\\
    &\sup_{\xi}\sigma(f, \T, \xi) = \sum_i (f(\xi_i))|I_i| = \sum_{i}M_i|I_i| = \os(f, \T)
    \end{aligned}
```

### Монотонность сумм относительно измельчений разбиения

Пусть {math}`\tilde{\T}` — измельчение разбиения {math}`\T`, тогда

```{math}
\us(f, \T) \le \us(f, \tilde{\T}) \le \os(f, \tilde{\T}) \le \os(f, \T)
```

Если {math}`L \subset M`, то {math}`\inf L \ge \inf M` и {math}`\sup L \le \sup M`, тогда:

```{math}
\us(f, \T) \le \us(f, \tilde{\T}) \underset{\text{по 6.2}}{\le} \os (f, \tilde{\T}) \le \os (f, \T)
```

### Никакая нижняя сумма Дарбу не больше какой-либо верхней суммы на том же брусе

{math}`\forall \T_1, \T_2 : \quad \us(f, \T_1) \le \os(f, \T_2)`

{math}`\forall \T_1, \T_2` рассмотрим {math}`\tilde{\T} = \T_1 \cap \T_2`, тогда по 6.3:

```{math}
\us(f, \T_1) \le \us(f, \tilde{\T}) \le \os(f, \tilde{\T}) \le \os(f, \T_2)
```

### Верхние и нижние интегралы Дарбу

**Верхним и нижним интегралом** Дарбу будем называть числа

```{math}
\oi := \inf_{\T}\os(f, \T) \qquad \ui := \sup_{\T}\us(f, \T)
```

соответственно

### Интеграл Дарбу как предел сумм Дарбу

Пусть {math}`I\subset \R^n` — замкнутый брус, а {math}`f: I \mapsto \R` — ограничена. Тогда:

```{math}
\oi = \lim_{\Delta_{\T}\to0}\os(f, \T) \qquad \text{и} \qquad \ui = \lim_{\Delta_{\T} \to 0} \us(f, \T)
```

Докажем, что {math}`\ui = \displaystyle\lim_{\Delta_{\T} \to 0} \us(f, \T) \quad (= \displaystyle\sup_{\T} \us (f, \T))`

1.  {math}`f`-ограничена на {math}`I`, то {math}`\exists C > 0: \forall x \in I\quad |f(x)|< C`

2.  т.к. по определению {math}`\underline{I} = \displaystyle\sup_{\T}\us(f, \T)`, то {math}`\forall \ve > 0 \,\, \exists\T_1 = \{I_i^1\}_{i=1}^{m_1}:\ \ui-\ve < \us(f, \T_1) \le \ui < \ui + \ve`

3.  Пусть {math}`G = \displaystyle\bigcup_{i=1}^{m_1}\partial I_i^1` - объединение границ брусов (без повторов). Тогда {math}`G` множество меры нуль по Лебегу (т.к. границы — мн-ва меры нуль по Лебегу)

4.  Пусть {math}`\T_2` - произвольное разбиение {math}`I: \,\, \T_2 = \{I_i^2\}_{i=1}^{m_2}` \
    &#x20;Рассмотрим две кучки брусов:\


    ```{math}
    \begin{aligned}
            A = \{I_i^2 \in \T_2: I_i^2 \cap G \ne \varnothing\} \qquad \text{и} \qquad B = \T_2\backslash A \implies\\
            \forall \ve > 0 \,\, \exists \delta > 0 : \forall \T_2: \Delta_{\T_2} < \delta \text{ верно, что } \sum_{I_i^2 \in A} |I_i^2| < \epsilon
        \end{aligned}
    ```

    по определению множества меры нуль, а также т.к. {math}`A` - покрытие замкнутыми брусами, а {math}`G` - мн-во меры нуль.

5.  С другой стороны {math}`\forall I_i^2 \in B` верно, что {math}`I_i^2 \in \T_1 \cap \T_2`

Хотим рассмотреть

```{math}
\begin{aligned}
    |\ui - \us(f, \T_2)| = |I-\us(f, \T_1\cap \T_2) + \us(f, \T_1\cap \T_2) -\us(f, \T_2)| &\le \underbrace{|I-\us(f, \T_1\cap \T_2)|}_* + \underbrace{|\us(f, \T_1\cap \T_2) -\us(f, \T_2)|}_{**} \\
    &< \ve + 2M\ve = \ve(1+2M)
\end{aligned}
```

*   из п.2: {math}`\ui - \ve < \us(f, \T_1) \le \us(f, \T_1\cap \T_2) \le \ui < \ui + \ve \implies |\ui - \us(f, \T_1\cap\T_2)| < \ve`\


*   ```{math}
    \begin{aligned}
                \left|\us(f, \T_1\cap\T_2) - \us(f, \T_2)\right| &= \left|\sum_{I_i^2\in B}m_i|I_i^2| + \sum_{I_i^2\in \T_2\cap A}m_i|I_i^2| - \sum_{I_i^2\in B}m_i|I_i^2| - \sum_{I_i^2\in A}m_i|I_i^2|\right|\\
                % &\le \sum_{I_i^2\in \T_2\cap A}m_i|I_i^2| - \sum_{I_i^2\in A}m_i|I_i^2||\\
                &\le \left|\sum_{I_i^2\in \T_2\cap A}m_i|I_i^2|\right| + \left|\sum_{I_i^2\in A}m_i|I_i^2|\right|\\
                &\le 2\left|\sum_{I_i^2\in A}m_i|I_i^2|\right|\\
                &< 2M\left|\sum_{I_i^2\in A}|I_i^2|\right|\\
                &\le 2M\ve
            \end{aligned}
    ```
---
title: Cræftas
description: Nem cræftas, nime inġehāt, ġield gield, and geheald lēafscop.
---

Cræft is forma-cynn gield. Hē mæg on naman bēon gebunden, to ōþrum cræfte gegiefen, and of cræfte gegolden.

## Cræft awritan

```wyrd
cræft grēt(nama) dō
    ġield "Wes hāl, " + nama + "!";
ende

cweþ grēt("Wulfstan");
```

Inġehāt standaþ betwēonan `(` and `)`; gield standaþ on þǣre clipunge. Þæt getæl sceal emn bēon.

Gif nā `ġield` becymþ, ġieldþ se cræft `nāwiht`.

## Eftclipung

Cræft mæg hine selfne clipian. Wyrd bint þone cræftes naman ǣr his līchama weorþ fremed:

```wyrd
cræft fib(n) dō
    gif n <= 1 þonne
        ġield n;
    elles
        ġield fib(n - 1) + fib(n - 2);
    ende
ende

cweþ fib(9);
```

## Lēafscop gehealdan

Cræft gemunan þone lēafscop þær hē wearþ geworht. Þis maciaþ beclysed gebind:

```wyrd
cræft talere(fruma) dō
    lǣt n = fruma;

    cræft nēxt() dō
        n = n + 1;
        ġield n;
    ende

    ġield nēxt;
ende

fæst tel = talere(40);
cweþ tel();
cweþ tel();
```

Sēo andswaru is `41`, þonne `42`. Þæt gebind `n` leofaþ for þām þe `nēxt` hit gemunan.

:::note[Gebind]
Cræftes nama is fæst. His inġehāt sind āwendlīc innan his līchaman.
:::

## Cræft ætȳwan

Gif cræft biþ gecweden, ætȳwþ Wyrd hine swā:

```text
<cræft grēt>
```

Inbyrd cræft hæfþ `inbyrd` on his ætȳwnysse, swā `<inbyrd cræft lengþu>`.

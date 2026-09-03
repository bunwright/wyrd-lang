---
title: Flōw and ymbhwyrft
description: Cēos dǣd, edlæc, far þurh rǣwas, and stȳr þone flōw.
---

Wyrd gebod sind rǣdlic: gecorennys brȳcþ `gif`, ymbhwyrft brȳcþ `þāhwīle` oþþe `for`, and ælc bylġ geendaþ mid `ende`.

## Gif and elles

```wyrd
gif wind > 6 þonne
    cweþ "Se storm cymþ.";
elles
    cweþ "Sēo lyft is smylte.";
ende
```

Se `elles` dǣl is selfcȳre. `gif` fremmeþ ānne dǣl and ġiefþ him nīwne lēafscop.

## Þāhwīle

```wyrd
lǣt n = 0;

þāhwīle n < 3 dō
    cweþ n;
    n = n + 1;
ende
```

Þæt gield æfter `þāhwīle` biþ gefandod ǣr ǣlcere hwyrft. `dō` onginneþ þone līchaman.

## For and on

`for` farþ þurh rǣw oþþe word:

```wyrd
for nama on ["Ælfred", "Wulfstan", "Ælfric"] dō
    cweþ "Wes hāl, " + nama;
ende
```

Se hwyrftnama is fæst innan þǣre ānlīcan hwyrfte. Brūc `rīm(0, 5)` tō getimbrienne rǣw fram `0` oþ būtan `5`:

```wyrd
for n on rīm(0, 5) dō
    cweþ n;
ende
```

## Breċ and forþ

`breċ` forlǣt þone nīehstan ymbhwyrft. `forþ` forlǣt þā dǣda þe ġiet belifaþ and onginneþ þā æfteran hwyrft.

```wyrd
for n on rīm(0, 10) dō
    gif n == 2 þonne
        forþ;
    ende
    gif n == 7 þonne
        breċ;
    ende
    cweþ n;
ende
```

:::caution[Gemǣre]
`breċ` and `forþ` magon āna innan ymbhwyrfte standan. `ġield` mæg āna innan cræfte standan. Se rǣwere cȳþ þæt ǣr fremminge.
:::

## Lēafscop

Ælc `gif`, `þāhwīle`, and `for` līchama hæfþ nīwne lēafscop. Naman innan þǣm līchaman ne oferwrītaþ gebind būtan him; þēah āwendlīc gebind of ūtan magon bēon eftgesette.

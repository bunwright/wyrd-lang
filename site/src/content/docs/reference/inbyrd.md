---
title: Inbyrde cræftas
description: Rīm, lengþu, cynn, and tōworde.
---

Fēower cræftas sind gebundene on ǣlcere Wyrd fremminge. Hīe sind fæste gebind.

| Cræft | Inġehāt | Ġield |
| --- | --- | --- |
| `rīm(fruma, ende)` | twēgen unneode ealle getæl | rǣw fram `fruma` oþ būtan `ende` |
| `lengþu(gield)` | word oþþe rǣw | getæl þǣra stafa oþþe dǣla |
| `cynn(gield)` | ænig gield | word mid þǣm gieldcynne |
| `tōworde(gield)` | ænig gield | gieldes ætȳwnys swā word |

## Rīm

```wyrd
for n on rīm(2, 6) dō
    cweþ n;
ende
```

Þis cweþ `2`, `3`, `4`, and `5`. Bēgen gemǣru sceolan ealle, unneode getæl bēon.

## Lengþu

```wyrd
cweþ lengþu("wyrd");
cweþ lengþu(["a", "b", "c"]);
```

Þā andsware sind `4` and `3`.

## Cynn

```wyrd
cweþ cynn(42);
cweþ cynn("hwæt");
cweþ cynn([1, 2]);
```

Þæt ġiefþ `tæl`, `word`, and `rǣw`. Eall cȳþ gieldcynn sind:

- `nāwiht`
- `sōþgield`
- `tæl`
- `word`
- `rǣw`
- `cræft`

## Tōworde

`tōworde` maciaþ þā ylcan ætȳwnysse þe `cweþ` brȳcþ, ac ġieldþ hīe swā word:

```wyrd
fæst bod = "Þæt getæl is " + tōworde(7);
cweþ bod;
```

:::caution[Gieldgetæl]
Ælc inbyrd cræft fandaþ his gieldgetæl and gieldcynn. Unriht clipung ġiefþ `FREM010` oþþe gecȳþedne cynn-gedwolan.
:::

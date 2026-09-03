---
title: Gield and gebind
description: Þā gieldcynn, naman, weorcendas, and gebind Wyrd.
---

Wyrd is dǣdrǣd sprǣc: gield beraþ heora cynn on þǣre fremminge, and naman cumaþ þurh lēafscopas.

## Gieldcynn

| Cynn | Bisen | Andgiet |
| --- | --- | --- |
| `tæl` | `42`, `3.14` | Getæl |
| `word` | `"Wes hāl"`, `“wyrd”`, `「word」` | Unicode ġewrit |
| `sōþgield` | `sōþ`, `lēas` | Sōþ oþþe lēas |
| `nāwiht` | `nāwiht` | Nā gield |
| `rǣw` | `[1, 2, 3]` | Gerǣd gield |
| `cræft` | `cræft twīfeald(n) dō … ende` | Clipendlic dǣd |

`lēas` and `nāwiht` āna sind unsōþ on gecorennysse. Ælc ōþer gield is sōþ.

## Naman bindan

`lǣt` maciaþ āwendlīc gebind:

```wyrd
lǣt talu = 1;
talu = talu + 1;
```

`fæst` maciaþ unāwendlīc gebind:

```wyrd
fæst tungol = "Earendel";
```

Gif þū fandast `tungol` eft to settanne, ġiefþ Wyrd `FREM002` mid þǣre rǣw and þǣm stede.

:::tip[Naman]
Naman sind Unicode and magon ealde stafu habban: `ġear`, `þēod`, `æþeling`. Hwītblæd and weorcendtācn tōdǣlaþ naman.
:::

## Rǣwas and ordtæl

```wyrd
fæst wordhord = ["hwæt", "wyrd", "middangeard"];
cweþ wordhord[1];
```

Ordtæl onginneþ æt `0`. Word and rǣw magon ordtæl habban; unriht oþþe būtan-gemǣre ordtæl ġiefþ gecȳþedne gedwolan.

`+` geþēod twā rǣwas and maciaþ nīwne rǣw:

```wyrd
fæst eall = [1, 2] + [3, 4];
```

## Weorcendas

Fram strangestan to unstrangestan:

| Stæf | Dǣd |
| --- | --- |
| `()` `[]` | clipung and ordtæl |
| `ne` `-` | wiþercwide and neodtæl |
| `*` `/` `%` | fealdung, tōdǣlung, lāf |
| `+` `-` | ēacnung, geþēodung, wanung |
| `<` `<=` `>` `>=` | metung |
| `==` `!=` | emnlicnys |
| `and` | bēgen sōþ; scort-rǣd |
| `oþþe` | ān sōþ; scort-rǣd |
| `=` | eftsetnys |

`and` and `oþþe` ġieldaþ þæt gield þe hīe findaþ, nā nēodlīce ān `sōþgield`.

## Gemyndword

`#` oþþe `//` onginneþ gemynd oþ þǣre rǣwe ende:

```wyrd
# Þis is gemynd.
fæst talu = 7; // and þis swā gelīce
```

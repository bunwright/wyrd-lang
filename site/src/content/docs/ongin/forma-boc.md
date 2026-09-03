---
title: Sēo forma bōc
description: Bind word, cweþ andswaru, and cēos weg on Wyrd.
---

Āwrīt `wes-hal.wyrd` mid þissum andgiete:

```wyrd title="wes-hal.wyrd"
# Sēo forma Wyrd.
lǣt nama = "middangeard";
cweþ "Wes hāl, " + nama + "!";

gif lengþu(nama) > 5 þonne
    cweþ "Þæt word is lang.";
elles
    cweþ "Þæt word is scort.";
ende
```

Fremme þā bōc þurh þone Wyrd ingang:

```sh
yanxu 行 src/主.yx -- wes-hal.wyrd
```

## Gebind

```wyrd
lǣt nama = "middangeard";
```

`lǣt` bint ānne naman wiþ ān gield. Þes nama mæg siþþan beon awend. Gif þæt gield sceal fæst wunian, brūc `fæst`:

```wyrd
fæst tungol = "Earendel";
```

## Sprǣc

```wyrd
cweþ "Wes hāl, " + nama + "!";
```

`cweþ` wrīt þæt gield on þā andsware. `+` geþēod twā word, oþþe ġeēacaþ twā getæl.

## Gecorennys

```wyrd
gif lengþu(nama) > 5 þonne
    cweþ "Þæt word is lang.";
elles
    cweþ "Þæt word is scort.";
ende
```

`gif` fandaþ ān gield. Is hit sōþ, þonne fremmeþ se forma dǣl; elles se ōþer. `ende` geendaþ þæt gebod.

:::note[Gemynd]
Ælc gebind, sprǣc, ġield, and ānlīc dǣd geendaþ mid `;`. Gebodlīce dǣlas, swā `gif` and `cræft`, geendaþ mid `ende`.
:::

## Hwæt nū?

- [Leorn gield and gebind](/wyrd-lang/spræc/gield/).
- [Awrit cræftas](/wyrd-lang/spræc/craftas/).
- [Geseoh eall cȳþword](/wyrd-lang/reference/cwide/).

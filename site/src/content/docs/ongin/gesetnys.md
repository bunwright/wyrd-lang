---
title: Gesetnys
description: Set Yanxu and Wyrd, and fand þæt eall sīe gearu.
---

Wyrd þurfeþ **Yanxu 1.1.20** oþþe nīwran. Sēo sprǣc, hire bēodrǣw, and hire fandunga sind eall on Yanxu awritene.

## I. Yanxu nim

Fylġ [þǣre Yanxu handbēc](https://github.com/yanxulang/yanxu) for þīn ymbhwyrft. Þonne fand þā gearwunge:

```sh
yanxu --version
```

Sēo andswaru sceal `1.1.20` oþþe nīwre bēon.

## II. Wyrd nim

```sh
git clone https://github.com/bunwright/wyrd-lang.git
cd wyrd-lang
```

Wyrd hæfþ nāne fremde sprǣclīce nēodþearfe. `言序.toml` cȳþ þone ingang, þā līe, and þā lȳtlan filemihta.

## III. Þā forman bōc fremme

```sh
yanxu 行 src/主.yx -- examples/wes-hal.wyrd
```

Þū scealt þis geseon:

```text
Wes hāl, middangeard!
Þæt word is lang.
```

:::tip[Rǣd]
Wyrd bēc cumaþ mid þǣre bōcendunge `.wyrd` and sind UTF-8. Swa mihton `þ`, `æ`, `ġ`, and macron-stafas rihtlīce wunian.
:::

## Bōc timbrian

Wyrd mæg Yanxu-bytum bēon getimbrod:

```sh
yanxu 编 . -o build/wyrd.yxb --release
```

Þæt ġiefþ āne fæste `build/wyrd.yxb` bōc. Sēo frume and sēo getimbrode bōc habbaþ þæt ylce Wyrd ġewrit.

```sh
yanxu 行 build/wyrd.yxb -- examples/wes-hal.wyrd
```

## Gearwung and fultum

```sh
yanxu 行 src/主.yx -- gearwung
yanxu 行 src/主.yx -- fultum
```

Nū is Wyrd gearu. [Awrit þā forman bōc](/wyrd-lang/ongin/forma-boc/).

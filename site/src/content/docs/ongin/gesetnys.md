---
title: Gesetnys
description: Nim selfstandende Wyrd, oþþe timbre hit of þǣre Yanxu fruman.
---

Wyrd 0.1.1 cymþ as selfstandende fremmere. **Yanxu ne þearf on þīnum mǣċene geset bēon** būtan þū Wyrd of þǣre fruman timbrian wille.

## I. Gearolǣste nim

Nim þone fremmere þe þīnum ymbhwyrfte and mǣċencynne gerīseþ:

| Ymbhwyrft | ARM64 | x86–64 |
| --- | --- | --- |
| macOS | [Apple Silicon](https://github.com/bunwright/wyrd-lang/releases/latest/download/wyrd-aarch64-apple-darwin.tar.gz) | [Intel](https://github.com/bunwright/wyrd-lang/releases/latest/download/wyrd-x86_64-apple-darwin.tar.gz) |
| Linux | [ARM64](https://github.com/bunwright/wyrd-lang/releases/latest/download/wyrd-aarch64-unknown-linux-gnu.tar.gz) | [x86–64](https://github.com/bunwright/wyrd-lang/releases/latest/download/wyrd-x86_64-unknown-linux-gnu.tar.gz) |
| Windows | [ARM64](https://github.com/bunwright/wyrd-lang/releases/latest/download/wyrd-aarch64-pc-windows-msvc.zip) | [x86–64](https://github.com/bunwright/wyrd-lang/releases/latest/download/wyrd-x86_64-pc-windows-msvc.zip) |

Ælc frēolǣstung hæfþ āne [SHA-256 handfæstnysbōc](https://github.com/bunwright/wyrd-lang/releases/latest/download/SHA256SUMS). [Ealle lǣstunga](https://github.com/bunwright/wyrd-lang/releases) standað on GitHub.

On macOS oþþe Linux, unbind þā bōc and fand þone bēodrǣw:

```sh
tar -xzf wyrd-*.tar.gz
cd wyrd-*
./wyrd --version
```

On Windows PowerShell:

```powershell
Expand-Archive .\wyrd-*.zip -DestinationPath .
cd .\wyrd-*
.\wyrd.exe --version
```

Sēo andswaru sceal `Wyrd 0.1.1 (on Yanxu 1.1)` bēon. Þæt `on Yanxu` cȳþ þā timbrungsprǣce, nā āne foregesette nēodþearfe.

## II. Þā forman bōc fremme

```sh
./wyrd þīn-bōc.wyrd
```

Windows brȳcþ `wyrd.exe` on þǣre ylcan wīsan. [Awrit þā forman bōc](/wyrd-lang/ongin/forma-boc/) and fremme hīe mid þissum bēode.

## III. Of fruman timbre

Wyrd sylf, hire bēodrǣw, and hire fandunga sind eall on Yanxu awritene. Gif þū þā fruman bētan oþþe fandian wille, set [Yanxu 1.1.20](https://github.com/yanxulang/yanxu) oþþe nīwran:

```sh
git clone https://github.com/bunwright/wyrd-lang.git
cd wyrd-lang
yanxu 试 tests
yanxu 编 . -o build/wyrd --release --standalone
```

:::tip[Fruman and getimbre]
Þā `.yx` fruman sind 100% Yanxu. Se selfstandenda fremmere beclyseþ þæt getimbrode Wyrd and Yanxu fremminggrund, swā þæt niþerhlādende mǣċen nāne Yanxu gesetnysse þurfe.
:::

## Bytubōc timbrian

Wyrd mæg Yanxu-bytum bēon getimbrod:

```sh
yanxu 编 . -o build/wyrd.yxb --release
```

Þæt ġiefþ āne fæste `build/wyrd.yxb` bōc. Sēo frume and sēo getimbrode bōc habbaþ þæt ylce Wyrd ġewrit.

```sh
yanxu 行 build/wyrd.yxb -- examples/wes-hal.wyrd
```

YXB þurfeþ Yanxu VM on þǣm endemǣċene; `--standalone` ne þurfeþ hit. Þā open frēolǣstunga brūcaþ for þȳ `--standalone`.

## Gearwung and fultum

```sh
yanxu 行 src/主.yx -- gearwung
yanxu 行 src/主.yx -- fultum
```

Nū is Wyrd gearu. [Awrit þā forman bōc](/wyrd-lang/ongin/forma-boc/).

# Atomic Design 準拠改修

## 目的

routes / organisms / constants / types の責務をルール通りに揃える。お手本は `/music`（薄い route → organism + props）。

## 方針

### 型

- `ArtistItem` / `MusicItem` を `url` 付きの `OctagonItem`（`url?`）に統合。`youtubeUrl` → `url`
- ドメイン型は `src/types/octagon.ts` に残す（BWOctagon atom へは移さない）
- `BWOctagon` は `OctagonStatus` を import して重複解消
- `Life` / `LinkItem` / `NavItem` を `src/types/` へ移動

### 新規 organism

- `ProfilePage` — profile の UI 合成
- `ContactPage` — contact の UI 合成

### props 駆動

- `Skills` / `LifeTable` — constants 直 import をやめ、props で受け取る
- `MusicPage` — パネル見出しを props 化
- `game` — `sections` 組み立てを `constants/game.ts` へ
- `LockedPage` — 文言を props（定数から渡す）
- `GameStartButton` — `to` を props 化
- `GlobalNav` — `items` を `__root` から渡す
- `HomePage` — route から定数を props 渡し

### 対象外

- Contact フォームラベルの定数化（フォーム chrome）
- パネル見出し UI の molecule 共通化（既知負債）

## 影響範囲

- 対象: profile / contact / music / game / home / locked 系 / GlobalNav / octagon 関連型
- 非対象: api/、routeTree.gen.ts

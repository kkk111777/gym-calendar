# Gym Calendar

筋トレ・睡眠・疲れの記録から、次のジムの日とメニュー・重さを提案する Web アプリです。
提案のルールは、運動の指針や研究の結果をもとに決めています。

> **状況：開発中（フェーズ0：土台づくり）**
> まだ使える機能はありません。

## できるようになること（予定）

- 筋トレ・体重・体調（睡眠・疲れ・筋肉痛）の記録
- 回復の推定から、次のジムの日の候補を出す
- 目的（やせたい・体力をつけたい・筋肉を大きくしたい など）に合ったメニューと重さの提案
- ジムに行った回数・重さの伸び・体重のグラフ
- メールアドレスとパスワードでのログイン（自分の記録は自分だけが見られる）

## 使っている技術

| 分類 | 技術 |
| --- | --- |
| 画面と処理 | [Next.js](https://nextjs.org/)（App Router）、[TypeScript](https://www.typescriptlang.org/) |
| 見た目 | [Tailwind CSS](https://tailwindcss.com/) |
| カレンダー表示 | [FullCalendar](https://fullcalendar.io/)（予定） |
| データとログイン | [Supabase](https://supabase.com/)（予定） |
| 公開 | [Vercel](https://vercel.com/)（予定） |

## 手元で動かす

[Node.js](https://nodejs.org/)（LTS 版）が必要です。

```bash
npm install
npm run dev
```

ブラウザで <http://localhost:3000> を開きます。

## 資料

- [要件定義書 v1.8](docs/requirements-v1.8.md)：前身の Google Apps Script 版（作者ひとり用）の要件定義書です

## 著作権

Copyright (c) 2026 kkk111777. All rights reserved.

このリポジトリのコードと文書は、読んで参考にするために公開しています。
作者の許可なく、コピーして使うこと・改変すること・配布することはできません。

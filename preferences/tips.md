---
layout: default
title: Tips
---

# [Tips](#tips) {#tips}

記憶を上手に使うコツをまとめました

---

## [公式ソースあり](#official) {#official}

### [CLAUDE.mdはどう書く？](#how-to-write-claude-md) {#how-to-write-claude-md}

シンプルに、必要なことだけ書きましょう

```markdown
# プロジェクト概要

- このプロジェクトはNext.js + TypeScriptを使用
- パッケージマネージャーはpnpm

# コーディング規約

- 2スペースインデント
- セミコロンなし
- シングルクォート使用

# よく使うコマンド

- ビルド：pnpm build
- テスト：pnpm test
- リント：pnpm lint
```

> 参考：[Manage Claude's memory](https://code.claude.com/docs/en/memory)

---

### [他ファイルを参照するには？](#file-reference) {#file-reference}

`@` を使って他のファイルを参照できます

```markdown
# 参照ファイル

@README.md
@docs/architecture.md
```

Claudeがこれらのファイルも読み込んでくれます

> 参考：[Memory](https://code.claude.com/docs/en/memory)

---

### [記憶に関するコマンドは？](#memory-commands) {#memory-commands}

{: .labeled}

| コマンド             | 説明             |
| -------------------- | ---------------- |
| `/memory`            | 現在の記憶を表示 |
| `/memory clear`      | 記憶をクリア     |
| `/memory add <内容>` | 記憶を追加       |

> 参考：[Memory](https://code.claude.com/docs/en/memory)

---

### [CLAUDE.mdが複数あるとどうなる？](#multiple-claude-md) {#multiple-claude-md}

Claudeは以下の順序で読み込みます

1. `~/.claude/CLAUDE.md`（ユーザー設定）
2. プロジェクトルートの `CLAUDE.md`
3. サブディレクトリの `CLAUDE.md`（作業中のディレクトリ）

すべてが統合されて適用されます

> 参考：[Memory](https://code.claude.com/docs/en/memory)

---

### [会話を削除するとメモリはどうなる？](#delete-conversation) {#delete-conversation}

会話を削除しても、メモリは残ります

メモリを削除したい場合は、設定画面から個別に削除する必要があります

> 参考：[Using Claude's chat search and memory](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context)

---

### [一時停止とリセットの違いは？](#pause-vs-reset) {#pause-vs-reset}

{: .labeled}

| 操作     | 効果                             |
| -------- | -------------------------------- |
| 一時停止 | メモリを保持したまま、使用を停止 |
| リセット | メモリを完全に削除               |

一時停止は「今は使わないけど、後で復活させたい」ときに便利です

> 参考：[Using Claude's chat search and memory](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context)

---

### [パーソナライゼーション機能とは？](#personalization) {#personalization}

Claudeがあなたの好みを自動で学習する機能です

{: .labeled}

| 設定 | 説明                           |
| ---- | ------------------------------ |
| オン | 会話から好みを学習             |
| オフ | 学習しない（プライバシー重視） |

> 参考：[Understanding Claude's Personalization Features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

---

## [公式ソースなし](#unofficial) {#unofficial}

以下は私の検証結果に基づく情報です

公式ドキュメントには明記されていないため、参考程度にご覧ください

---

### [指示が矛盾したらどうなる？](#conflict) {#conflict}

複数の記憶に矛盾する指示がある場合、以下の優先順位で適用されるようです

1. 最も具体的なスコープの指示（プロジェクト > ユーザー > 組織）
2. 最新の指示
3. より詳細に書かれた指示

ただし、明確なルールがあるわけではないので、矛盾は避けるのがベストです

---

### [どんな書き方が効きやすい？](#effective-writing) {#effective-writing}

私の経験上、以下の書き方が効果的でした

<strong>具体的に書く</strong>

```markdown
# 悪い例

コードは綺麗に書いて

# 良い例

- 関数は20行以内
- 変数名は英語で、camelCaseを使用
- コメントは日本語で
```

<strong>箇条書きを使う</strong>

長文よりも箇条書きのほうが、Claudeが理解しやすいようです

<strong>優先順位を明示する</strong>

```markdown
# 重要度：高

- セキュリティ最優先
- エラーハンドリングは必須

# 重要度：中

- パフォーマンスを意識
- テストカバレッジ80%以上
```

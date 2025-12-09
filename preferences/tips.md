---
layout: default
title: preferences
---

# [これはなに？](#what-is-this) {#what-is-this}

効果的に覚えてもらうためには、いくらかコツがあるようです

---

## [公式ソースあり](#official) {#official}

### [CLAUDE.mdはどう書く？](#how-to-write-claude-md) {#how-to-write-claude-md}

シンプルに、大事なことだけ書きましょう

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

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

### [他ファイルを参照するには？](#file-reference) {#file-reference}

`@` をつけると、他のファイルも見てくれます

```markdown
# 参照ファイル

@README.md
@docs/architecture.md
```

Claudeがこれらのファイルも読み込んでくれます

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

### [覚えてもらう系のコマンドは？](#memory-commands) {#memory-commands}

{: .labeled}

| コマンド             | なにができる？         |
| -------------------- | ---------------------- |
| `/memory`            | 今覚えてることを見る   |
| `/memory clear`      | 覚えたことをクリア     |
| `/memory add <内容>` | 覚えてもらうことを追加 |

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

### [CLAUDE.mdが複数あるとどうなる？](#multiple-claude-md) {#multiple-claude-md}

全部読み込まれて、まとめて使われます

{: .labeled}

| 読む順番 | 種類                 | 場所                   |
| -------- | -------------------- | ---------------------- |
| 1        | Enterprise Policy    | OS固有のパス           |
| 2        | Project Memory       | `./CLAUDE.md`          |
| 3        | Project Rules        | `./.claude/rules/*.md` |
| 4        | User Memory          | `~/.claude/CLAUDE.md`  |
| 5        | Project Memory Local | `./CLAUDE.local.md`    |

後から読み込まれるものほど優先度が高くなります

ただし、公式ドキュメントでは「矛盾する指示は避けるべき」と書いてあります

作業ディレクトリから親に向かって探して、サブディレクトリは後から読み込まれます

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

### [会話を削除するとメモリはどうなる？](#delete-conversation) {#delete-conversation}

会話を削除しても、メモリは残ります

メモリを消したいときは、設定画面から個別に消してください

{: .source}
[公式ドキュメント](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context){:target="\_blank"}

---

### [一時停止とリセットの違いは？](#pause-vs-reset) {#pause-vs-reset}

{: .labeled}

| 操作     | なにが起きる？                     |
| -------- | ---------------------------------- |
| 一時停止 | メモリを残したまま、使用をストップ |
| リセット | メモリを完全に消す                 |

一時停止は「今は使わないけど、後で復活させたい」ときに便利です

{: .source}
[公式ドキュメント](https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context){:target="\_blank"}

---

### [パーソナライゼーション機能とは？](#personalization) {#personalization}

Claudeがあなたの好みを勝手に覚えてくれる機能です

{: .labeled}

| 設定 | なにが起きる？               |
| ---- | ---------------------------- |
| オン | 会話から好みを覚える         |
| オフ | 覚えない（プライバシー重視） |

{: .source}
[公式ドキュメント](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features){:target="\_blank"}

---

## [公式ソースなし](#unofficial) {#unofficial}

ここからは私が試してわかったことです

公式には書いてないので、参考までにどうぞ

---

### [指示が矛盾したらどうなる？](#conflict) {#conflict}

覚えてることが矛盾したら、こんな優先順位になるみたいです

1. 最も具体的なスコープの指示（プロジェクト > ユーザー > 組織）
2. 最新の指示
3. より詳細に書かれた指示

ただし、明確なルールがあるわけではないので、矛盾は避けるのがベストです

---

### [どんな書き方が効きやすい？](#effective-writing) {#effective-writing}

私の経験上、以下の書き方が効果的でした

#### [具体的に書く](#write-specifically) {#write-specifically}

```markdown
# 悪い例

コードは綺麗に書いて

# 良い例

- 関数は20行以内
- 変数名は英語で、camelCaseを使用
- コメントは日本語で
```

#### [箇条書きを使う](#use-bullet-points) {#use-bullet-points}

長文よりも箇条書きのほうが、Claudeが理解しやすいようです

#### [優先順位を明示する](#show-priority) {#show-priority}

```markdown
# 重要度：高

- セキュリティ最優先
- エラーハンドリングは必須

# 重要度：中

- パフォーマンスを意識
- テストカバレッジ80%以上
```

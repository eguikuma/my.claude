---
layout: default
title: preferences
---

# [これはなに？](#what-is-this) {#what-is-this}

ターミナル版のClaudeには、5つの覚え方があります

---

## [エンタープライズ](#enterprise) {#enterprise}

### [Enterprise Policy](#enterprise-policy) {#enterprise-policy}

組織全体で使う設定をまとめられます

|            |                            |
| ---------- | -------------------------- |
| 範囲       | 組織の全員                 |
| どこで設定 | 管理コンソール             |
| 使いどころ | 組織のルールをみんなに反映 |

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/settings){:target="\_blank"}

---

## [プロジェクト](#project) {#project}

### [Project Memory](#project-memory) {#project-memory}

チームみんなで共有するプロジェクトの覚え書きです

`CLAUDE.md` をコミットすると、チーム全員に反映されます

|            |                                          |
| ---------- | ---------------------------------------- |
| 範囲       | チームメンバー（Git経由）                |
| どこで設定 | `CLAUDE.md` ファイル                     |
| 使いどころ | プロジェクトの概要、コーディング規約など |

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

### [Project Rules](#project-rules) {#project-rules}

チームで共有するルールファイルです

`CLAUDE.md` が長くなったら、分割できます

|            |                               |
| ---------- | ----------------------------- |
| 範囲       | チームメンバー（Git経由）     |
| どこで設定 | `.claude/rules/` ディレクトリ |
| 使いどころ | 細かいルールを分けて書く      |

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

### [Project Memory Local](#project-memory-local) {#project-memory-local}

自分だけのプロジェクト設定です

コミットせずに、自分だけの設定を持てます

|            |                               |
| ---------- | ----------------------------- |
| 範囲       | 自分だけ（このプロジェクト）  |
| どこで設定 | `.claude/settings.local.json` |
| 使いどころ | 自分の作業スタイルを反映      |

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

---

## [ユーザー](#user) {#user}

### [User Memory](#user-memory) {#user-memory}

全プロジェクトで使う個人設定です

ホームに置けば、全プロジェクトで使えます

|            |                            |
| ---------- | -------------------------- |
| 範囲       | 自分だけ（全プロジェクト） |
| どこで設定 | `~/.claude/CLAUDE.md`      |
| 使いどころ | どこでも使いたい自分の設定 |

{: .source}
[公式ドキュメント](https://code.claude.com/docs/en/memory){:target="\_blank"}

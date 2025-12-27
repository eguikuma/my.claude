---
layout: default
title: Claude Code の記憶
---

# [Claude Code の記憶](#claude-code-memory) {#claude-code-memory}

ターミナルで使うClaudeには5種類の記憶があります

---

## [エンタープライズ](#enterprise) {#enterprise}

### [Enterprise Policy](#enterprise-policy) {#enterprise-policy}

組織全体で統一したい設定を管理します

{: .labeled}
| 項目 | 内容 |
| -------- | ---------------------------------------- |
| スコープ | 組織の全ユーザー |
| 設定場所 | 管理コンソール |
| 用途 | 組織のポリシーやガイドラインを全員に適用 |

> 参考：[Claude Code settings](https://code.claude.com/docs/en/settings)

---

## [プロジェクト](#project) {#project}

### [Project Memory](#project-memory) {#project-memory}

チームで共有するプロジェクトの記憶です

`CLAUDE.md` をリポジトリにコミットすると、チーム全員に適用されます

{: .labeled}
| 項目 | 内容 |
| -------- | ---------------------------------------- |
| スコープ | チームメンバー（Git経由） |
| 設定場所 | `CLAUDE.md` ファイル |
| 用途 | プロジェクトの概要、コーディング規約など |

> 参考：[Memory](https://code.claude.com/docs/en/memory)

---

### [Project Rules](#project-rules) {#project-rules}

チームで共有するルールファイルです

`CLAUDE.md` が大きくなりすぎたら、ルールを分割して管理できます

{: .labeled}
| 項目 | 内容 |
| -------- | ------------------------------------ |
| スコープ | チームメンバー（Git経由） |
| 設定場所 | `.claude/rules/` ディレクトリ |
| 用途 | 詳細なルールやガイドラインを分割管理 |

> 参考：[Memory](https://code.claude.com/docs/en/memory)

---

### [Project Memory Local](#project-memory-local) {#project-memory-local}

自分だけのプロジェクト設定です

Gitにコミットせず、自分だけの設定を持てます

{: .labeled}
| 項目 | 内容 |
| -------- | ---------------------------------------- |
| スコープ | 自分のみ（現プロジェクト） |
| 設定場所 | `.claude/settings.local.json` |
| 用途 | 個人的な作業スタイルをプロジェクトに適用 |

> 参考：[Memory](https://code.claude.com/docs/en/memory)

---

## [ユーザー](#user) {#user}

### [User Memory](#user-memory) {#user-memory}

全プロジェクトで使う個人設定です

ホームディレクトリに置くと、すべてのプロジェクトで読み込まれます

{: .labeled}
| 項目 | 内容 |
| -------- | -------------------------------------- |
| スコープ | 自分のみ（全プロジェクト） |
| 設定場所 | `~/.claude/CLAUDE.md` |
| 用途 | どのプロジェクトでも適用したい個人設定 |

> 参考：[Memory](https://code.claude.com/docs/en/memory)

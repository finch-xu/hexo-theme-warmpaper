<div align="center">
  <img src="source/images/logo.svg" alt="Warmpaper Logo" width="120">
  <h1>hexo-theme-warmpaper</h1>
  <p><em>「8000 年前のハラフ期の陶工が描いた放射状の文様を、現代の AI 企業もまたロゴに選んだ——ある種の視覚的直感は、文明そのものより古い。」</em></p>
  <p>Claude のカラーパレットから着想を得た、温かみのある Hexo ブログテーマ。<br>ベージュの背景にほのかなオレンジ色の方眼紙テクスチャを重ね、没入感のある読書体験を提供します。</p>

  [![GitHub License](https://img.shields.io/github/license/finch-xu/hexo-theme-warmpaper?color=DA7756)](LICENSE)
  [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D5.0.0-DA7756)](https://hexo.io)
  [![Node Version](https://img.shields.io/badge/node-%3E%3D20-DA7756)](https://nodejs.org)
  [![GitHub Stars](https://img.shields.io/github/stars/finch-xu/hexo-theme-warmpaper?style=flat&color=DA7756)](https://github.com/finch-xu/hexo-theme-warmpaper)

  **デモサイト**: [pidan.dev](https://pidan.dev) | [中文](README.md) | [English](README_EN.md)
</div>

<table>
  <tr>
    <td><img src="screenshots/home.png" alt="ホーム"></td>
    <td><img src="screenshots/post.png" alt="記事ページ"></td>
  </tr>
</table>

---

## 特徴

- Claude 風のカラースキーム（温かみのあるベージュ + オレンジのアクセント）
- ほのかなオレンジ色の方眼紙背景テクスチャ
- 記事ページは 1 カラムレイアウト + 右側に目次（sticky 配置、スクロール連動ハイライト）
- ホームページはカード型の記事一覧
- レスポンシブデザイン（モバイルでは目次を自動的に非表示）
- 霞鶩文楷 GB（LXGW WenKai GB）フォント（CDN からサブセット分割で読み込み）
- ライトテーマ・ダークテーマに対応。自動切り替えに加え、手動切り替えも可能
- コメントシステム連携：Waline と Giscus（GitHub Discussions）。どちらも任意で有効化でき、併用も可能
- 数式レンダリング（MathJax v4、任意で有効化）

## インストール

Hexo ブログの `themes` ディレクトリにテーマをクローンします：

```bash
cd your-hexo-blog
git clone https://github.com/finch-xu/hexo-theme-warmpaper.git themes/warmpaper
```

EJS レンダラーをインストールします（未インストールの場合）：

```bash
npm install hexo-renderer-ejs --save
```

ブログのルートにある `_config.yml` でテーマを有効化します：

```yaml
theme: warmpaper
```

## 開発

### 前提条件

- Node.js >= 14
- Hexo CLI (`npm install -g hexo-cli`)

### 開発環境のセットアップ

1. テスト用の Hexo ブログを作成します：

```bash
hexo init hexo-test-blog
cd hexo-test-blog
npm install
npm install hexo-renderer-ejs --save
```

2. テーマをブログの themes ディレクトリにリンクします：

```bash
# 方法 1：シンボリックリンク（推奨。変更が即座に反映されます）
ln -s /path/to/hexo-theme-warmpaper themes/warmpaper

# 方法 2：直接クローン
git clone https://github.com/finch-xu/hexo-theme-warmpaper.git themes/warmpaper
```

3. ブログの `_config.yml` を編集します：

```yaml
theme: warmpaper
```

4. テスト記事を作成します（目次を確認するため、複数レベルの見出しを含めてください）：

```bash
hexo new post "テスト記事"
```

### 開発サーバーの起動

```bash
hexo clean && hexo server
```

`http://localhost:4000` にアクセスしてプレビューします。テーマファイルを編集したら、ページを再読み込みすると反映されます。

### よく使うコマンド

```bash
# キャッシュのクリア（テンプレート変更後に実行することを推奨）
hexo clean

# ローカルプレビューサーバーの起動
hexo server

# 下書きも表示した状態でサーバーを起動
hexo server --draft

# 静的ファイルの生成
hexo generate

# クリア + 生成 + プレビュー（まとめて実行）
hexo clean && hexo generate && hexo server
```

### 静的プレビュー

プロジェクトには `preview.html` が含まれており、Hexo 環境を用意しなくても、ブラウザで直接開いてテーマの見た目を確認できます。

## ビルドとデプロイ

静的ファイルを生成します：

```bash
hexo clean && hexo generate
```

生成されたファイルは `public/` ディレクトリに出力され、任意の静的ホスティングサービス（GitHub Pages、Vercel、Netlify など）にデプロイできます。

### GitHub Pages へのデプロイ

```bash
npm install hexo-deployer-git --save
```

ブログの `_config.yml` に設定を追加します：

```yaml
deploy:
  type: git
  repo: https://github.com/your-username/your-username.github.io.git
  branch: main
```

デプロイを実行します：

```bash
hexo clean && hexo deploy
```

## テーマの設定

テーマディレクトリ内の `_config.yml` を編集します：

```yaml
# ナビゲーションメニュー
menu:
  Home: /
  Archives: /archives

# プロフィールカード（ホームページの記事一覧の上に表示）
profile:
  avatar: /images/avatar.png     # アバター画像のパス
  description: "ひとことプロフィール"  # 自己紹介文
  links:                         # ソーシャルリンク（数に制限なし）
    - name: GitHub
      url: https://github.com/yourname
      icon: github               # 対応アイコン: github, email, website, twitter, rss, bilibili, zhihu
    - name: Email
      url: mailto:your@email.com
      icon: email
    - name: Website
      url: https://yoursite.com
      icon: website

# 目次（右サイドバー）
toc:
  enable: true
  max_depth: 3
  min_depth: 2
  list_number: false

# 数式（MathJax v4）— Markdown レンダラーが $...$ をそのまま渡す必要があります。詳細は後述の「数式」を参照
math:
  enable: false

# Waline コメントシステム
waline:
  enable: false
  serverURL: 'https://your-server-url'

# 記事の抜粋リンクのテキスト
excerpt_link: Read More

# フッターの著作権表示（空欄にするとデフォルトを使用）
copyright: ""
```

## ディレクトリ構成

```
hexo-theme-warmpaper/
├── _config.yml              # テーマ設定
├── package.json
├── scripts/
│   └── pages.js             # /tags と /categories ページを生成
├── layout/
│   ├── layout.ejs           # HTML の基本骨格
│   ├── index.ejs            # ホームページ
│   ├── post.ejs             # 記事詳細ページ
│   ├── page.ejs             # 独立ページ
│   ├── archive.ejs          # アーカイブページ
│   ├── category.ejs         # 個別カテゴリページ
│   ├── categories.ejs       # カテゴリ一覧ページ（/categories）
│   ├── tag.ejs              # 個別タグページ
│   ├── tags.ejs             # タグ一覧ページ（/tags）
│   └── partial/
│       ├── head.ejs         # HTML head
│       ├── header.ejs       # ナビゲーションバー
│       ├── footer.ejs       # フッター
│       ├── profile.ejs      # プロフィールカード
│       ├── post-card.ejs    # 記事カード
│       ├── pagination.ejs   # ページネーション
│       ├── toc.ejs          # 目次サイドバー
│       ├── comment.ejs      # Waline コメントテンプレート
│       ├── giscus.ejs       # Giscus コメントコンポーネント
│       └── math.ejs         # MathJax 数式コンポーネント
└── source/
    ├── css/
    │   ├── style.css        # メインスタイルシート
    │   ├── waline.css       # Waline コメントのスタイル
    │   ├── giscus.css       # Giscus コメントのスタイル
    │   └── math.css         # 数式のスタイル
    ├── images/
    │   └── logo.svg         # テーマのデフォルトロゴ
    └── js/
        └── main.js          # 目次のスクロール追従
```

## 数式

本テーマは LaTeX 数式を描画する MathJax v4 を内蔵しています（デフォルトは無効）。`_config.yml` で有効化してください：

```yaml
math:
  enable: true
```

- インライン数式は `$ ... $` または `\( ... \)`、ディスプレイ数式は `$$ ... $$` または `\[ ... \]` を使用します。
- 記事単位の上書き：記事の front-matter に `math: true`（強制的に有効化）または `math: false`（その記事のみ無効化）を指定します。
- 記事ページと独立ページでのみ読み込まれ、ホームページや一覧ページでは読み込まれません。

**重要な前提：Markdown レンダラーが `$...$` をそのまま保持する必要があります。** Hexo 標準の `hexo-renderer-marked` は `x_i` を斜体に変換し、`\alpha` のバックスラッシュを削除してしまうため、数式が崩れます。数式に対応したレンダラーに切り替えてください。例：

```bash
npm un hexo-renderer-marked
npm i hexo-renderer-markdown-it
```

> MathJax は jsDelivr CDN から必要に応じて読み込まれます（バージョンは `4.1.2` に固定し、SRI による完全性チェックを有効化しています。アップグレードする際はバージョン番号と `integrity` ハッシュを併せて更新してください）。以前に MathJax / KaTeX を独自に導入している場合は、数式が二重に描画されるのを防ぐため、事前に削除してください。

## フォント

本テーマは以下の外部フォントリソースを使用しています。

### 霞鶩文楷 GB (LXGW WenKai GB)

サイト全体の組版（本文、ナビゲーションバー、目次など）に統一して使用しているオープンソースの楷書体フォントです。FONTWORKS の Klee One から派生し、中国大陸の G 源字形規格に準拠しています。

- **フォント本家リポジトリ**: https://github.com/lxgw/LxgwWenkaiGB
- **Webfont サブセットパッケージ**: https://github.com/CMBill/lxgw-wenkai-gb-web
- **CDN (Regular)**: https://cdn.jsdelivr.net/npm/lxgw-wenkai-gb-web@latest/lxgwwenkaigb-regular/result.css
- **CDN (Medium)**: https://cdn.jsdelivr.net/npm/lxgw-wenkai-gb-web@latest/lxgwwenkaigb-medium/result.css
- **フォントライセンス**: [SIL Open Font License 1.1](https://openfontlicense.org/)

## ライセンス

テーマのコードは [MIT License](LICENSE) の下で公開されています。

参照しているフォントリソースは [SIL Open Font License 1.1](https://openfontlicense.org/) に従います。

# Yuki Writes — ポートフォリオサイト

フリーランスWebライターのポートフォリオサイトです。
GitHub Pages で公開可能な静的サイト（HTML / CSS / JavaScript）です。

---

## フォルダ構成

```
portfolio/
├── index.html                    ← トップページ（ポートフォリオ本体）
├── style.css                     ← トップページ用スタイル
├── script.js                     ← スクロール・ハンバーガーメニュー等
├── README.md                     ← このファイル
└── samples/
    ├── sample-common.css         ← サンプル記事ページ共通スタイル
    ├── lp-juku.html              ← LPサンプル（学習塾）
    ├── seo-reform.html           ← SEO記事サンプル（キッチンリフォーム）
    └── corporate-koumuten.html  ← コーポレートテキストサンプル（工務店）
```

---

## ローカルでの確認方法

### 方法A：VS Code の Live Server（推奨）

1. VS Code に「Live Server」拡張機能をインストール
2. `index.html` を右クリック →「Open with Live Server」
3. ブラウザが自動で開きます

### 方法B：Python の簡易サーバー

```bash
# portfolio/ フォルダに移動
cd portfolio

# Python 3 の場合
python3 -m http.server 8000

# ブラウザで http://localhost:8000 を開く
```

### 方法C：Node.js の http-server

```bash
npm install -g http-server
cd portfolio
http-server
# http://localhost:8080 を開く
```

> ⚠️ `index.html` をブラウザで直接ダブルクリックして開くと、
> フォントの読み込みやリンクが正しく動作しない場合があります。
> 必ずローカルサーバー経由で確認してください。

---

## GitHub Pages へのデプロイ手順

### 1. GitHubリポジトリを作成

```bash
# GitHubで新しいリポジトリを作成（例: portfolio）
# リポジトリ名は「yourname.github.io」でも可
```

### 2. ファイルをプッシュ

```bash
cd portfolio
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yourname/portfolio.git
git push -u origin main
```

### 3. GitHub Pages を有効化

1. GitHubリポジトリページを開く
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** を `Deploy from a branch` に設定
5. **Branch** を `main` / `/ (root)` に設定して **Save**

### 4. 公開URLを確認

しばらく待つと以下のURLでアクセス可能になります。

```
https://yourname.github.io/portfolio/
```

> 反映まで1〜5分かかることがあります。

---

## カスタマイズ方法

### 名前・プロフィール文を変更する

`index.html` の以下の箇所を書き換えてください。

| 場所 | 変更内容 |
|---|---|
| `<title>` タグ | サイトのタイトル |
| `.logo` | ヘッダーロゴのテキスト（「Yuki Writes」） |
| `#profile` セクション | 名前・経歴・スキルタグ |
| `#contact` セクション | メールアドレス |
| `footer` | フッターのコピーライト・SNSリンク |

### プロフィール写真を追加する

1. `images/` フォルダに写真ファイルを置く（例: `images/profile.jpg`）
2. `index.html` の `.profile-photo-placeholder` 部分を以下に書き換え：

```html
<img src="images/profile.jpg" alt="プロフィール写真" style="width:200px;height:200px;object-fit:cover;border-radius:14px;">
```

### お客様の声を差し替える

`index.html` の `#testimonials` セクション内にある3つの `.testimonial-card` の文章を実際のお客様の声に書き換えてください。
コメントで `<!-- ここに実際のお客様の声を入れてください -->` と記載されています。

### Googleフォームを設置する

1. Googleフォームで問い合わせフォームを作成
2. 「送信」→「埋め込み」からiframeコードを取得
3. `index.html` の `#contact` セクション内のコメントを参照して差し替え

### カラーを変更する

`style.css` の `:root {}` 内の CSS変数を変更すると全体のカラーが変わります。

```css
:root {
  --color-primary: #2C4A6B;  /* メインカラー（ネイビーブルー） */
  --color-accent:  #E08560;  /* アクセントカラー（オレンジ） */
}
```

---

## 技術仕様

| 項目 | 内容 |
|---|---|
| 構成 | HTML5 + バニラCSS + 最小限のJS |
| フォント | Noto Sans JP（Google Fonts） |
| 対応ブラウザ | Chrome / Safari / Edge / Firefox 最新版 |
| スマホ対応 | iOS Safari / Chrome Android（スマホファースト設計） |
| 外部依存 | Google Fonts のみ |
| フォーム | mailto: リンク（Googleフォーム差し替え可） |

---

*Ver 1.0 / 2026年4月30日*

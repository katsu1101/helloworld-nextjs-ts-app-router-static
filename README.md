# Next.js TypeScript Hello World 初期設定とベストプラクティス（静的ファイルの生成）

これは、TypeScriptとNext.js（App Router）を使用して静的サイトを生成するプロジェクトの初期設定とベストプラクティスを示した構築例です。

## 目次
- [必要条件](#必要条件)
- [インストール](#インストール)
- [プロジェクトの実行](#プロジェクトの実行)
- [静的ファイルの生成](#静的ファイルの生成)
- [プロジェクトの構成](#プロジェクトの構成)
- [さらに詳しく](#さらに詳しく)

## 必要条件
- [Node.js](https://nodejs.org/) バージョン 16.x 以降
- [npm](https://www.npmjs.com/) または [yarn](https://yarnpkg.com/) の最新バージョン

## インストール
1. リポジトリをクローンする：
   ```bash
   git clone https://github.com/your-username/helloworld-nextjs-ts-app-router-static.git
   ```
2. プロジェクト・ディレクトリに移動する：
   ```bash
   cd helloworld-nextjs-ts-app-router-static
   ```
3. 依存関係をインストールします：

npmの場合:
   ```bash
   npm install
   ```
yarnの場合:
   ```bash
   yarn
   ```

## プロジェクトの実行

以下のコマンドで開発モードでプロジェクトを実行します：

npmの場合:
   ```bash
   npm run dev
   ```
yarnの場合:
   ```bash
   yarn dev
   ```
ブラウザを開き、[http://localhost:3000](http://localhost:3000)にアクセスすると、Hello Worldのページが表示されます。

## 静的ファイルの生成

Next.jsの静的サイト生成（Static Export）を利用して完全な静的サイトを生成します。

静的ファイルを生成するには以下の手順を実行します：

npmの場合:
   ```bash
   npm run build
   ```
yarnの場合:
   ```bash
   yarn build
   ```
これにより、`docs`フォルダに静的ファイルが生成されます。

生成したサイトをローカルで確認するには、以下のようにします:

npmの場合:
   ```bash
   npx serve@latest docs
   ```
yarnの場合:
   ```bash
   yarn serve docs
   ```

## プロジェクトの構成

このプロジェクトは以下のような構成になっています：

```
helloworld-nextjs-ts-app-router-static/
├── src/
│   ├── app/
│   │   ├── globals.css                  # グローバルスタイル
│   │   ├── layout.tsx                   # 共通レイアウト（globals.cssをimport）
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.module.css       # Blog個別ページ専用スタイル
│   │   │   ├── page.tsx
│   │   │   └── page.module.css           # Blog一覧ページ専用スタイル
│   │   └── page.tsx                      # ホームページ
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   ├── styles/                           # 共通スタイル
│   └── utils/                            # ユーティリティ関数
├── public/                               # 静的アセット（画像、フォントなど）
├── next.config.mjs                       # Next.js設定ファイル（最新のES Module形式）
├── package.json                          # 依存関係
└── README.md                             # プロジェクト文書
```

### 重要なファイル
- `src/app/page.tsx`: Hello World メッセージを表示するホームページ。
- `src/app/layout.tsx`: 共通のレイアウトファイル（全ページ共通のヘッダーやグローバルスタイルを管理）。
- `src/components/`: 再利用可能な共通コンポーネントを格納。

## さらに詳しく
Next.jsの詳細については、以下のリソースをご覧ください：
- [Next.js Documentation](https://nextjs.org/docs) - Next.js公式ドキュメント
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.js学習コース


# Texas Hold'em Glossary

初心者向けに、テキサスホールデムの用語を意味・使用例・関連語と一緒に学べる図鑑サイトです。

## 開発

Node.js 20 以上を用意して、プロジェクトのフォルダーで実行します。

```bash
npm install
npm run dev
```

本番用ビルドは `npm run build` で確認できます。

## 用語データ

- `src/data/entries.ts` に初期用語、別名、カテゴリ、説明、使用例、関連語を定義
- 用語は「基本」「実戦」の学習目安付き
- 「覚えた！」の状態はブラウザーのローカルストレージに保存
- 画面の意味説明は独自の日本語で作成し、参考資料名を用語詳細に表示

## GitHub Pages

`.github/workflows/deploy.yml` は `main` への push 時にビルドし、GitHub Pages へデプロイします。GitHub の **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。

## 初期調査

用語の範囲を定めるため、[調査メモ](docs/research.md) と [MVP仕様書](docs/spec.md) を参照してください。


# CommerceHub - Stripe審査対応ECサイト

GitHub Pagesで公開可能な、Stripe決済システム審査に必要な全ページを含む完全なECサイトです。

## 🚀 特徴

### Stripe審査完全対応
- ✅ 商品詳細ページ（仕様・価格・通貨表示）
- ✅ 返金ポリシー（30日間返品保証）
- ✅ 配送ポリシー（全国送料無料）
- ✅ サポートポリシー（24時間サポート）
- ✅ 特定商取引法に基づく表記（日本法要件）
- ✅ プライバシーポリシー
- ✅ 利用規約
- ✅ 会社概要・お問い合わせページ

### 技術スタック
- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **ルーティング**: React Router (HashRouter for GitHub Pages)
- **デプロイ**: GitHub Pages + GitHub Actions

### レスポンシブデザイン
- モバイルファーストデザイン
- タブレット・デスクトップ対応
- 直感的なナビゲーション

## 📦 インストール

```bash
# リポジトリをクローン
git clone [your-repo-url]
cd stripe-commerce-app

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドファイルをプレビュー
npm run preview

# リンターチェック
npm run lint
```

## 🌐 GitHub Pagesデプロイ

### 自動デプロイ（推奨）
1. GitHubリポジトリの設定
2. Settings > Pages > Source を "GitHub Actions" に設定
3. メインブランチにプッシュすると自動デプロイ

### 手動デプロイ
```bash
# ビルド
npm run build

# GitHub Pagesにデプロイ
npm run deploy
```

## 📄 ページ構成

### メインページ
- **ホーム** (`/`) - 商品紹介・会社特徴
- **商品一覧** (`/products`) - 全商品・カテゴリ絞り込み
- **商品詳細** (`/products/:id`) - 詳細仕様・価格・購入ボタン
- **会社概要** (`/about`) - 企業情報・ミッション
- **お問い合わせ** (`/contact`) - フォーム・連絡先

### 法的ページ（Stripe審査必須）
- **特定商取引法** (`/commercial-transactions`)
- **返金ポリシー** (`/refund-policy`)
- **配送ポリシー** (`/shipping-policy`)
- **サポートポリシー** (`/support-policy`)
- **プライバシーポリシー** (`/privacy-policy`)
- **利用規約** (`/terms-of-service`)

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: #3b82f6 (ブルー)
- **アクセント**: #B8C568 (ライムグリーン)
- **グレースケール**: #000000, #666666, #f5f5f5

### コンポーネント設計
- 再利用可能なUIコンポーネント
- 一貫したスタイリング
- アクセシビリティ対応

## 📊 商品データ構造

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  inStock: boolean;
  specifications: Record<string, string>;
}
```

## 🏢 会社情報カスタマイズ

`src/data/company.ts` ファイルで会社情報を変更できます：

```typescript
export const companyInfo = {
  name: 'あなたの会社名',
  representative: '代表者名',
  address: '住所',
  phone: '電話番号',
  email: 'メールアドレス',
  registrationNumber: '法人番号',
  businessHours: '営業時間'
};
```

## 📝 商品データカスタマイズ

`src/data/products.ts` ファイルで商品情報を追加・変更できます。

## 🔧 設定ファイル

### Vite設定 (`vite.config.ts`)
- GitHub Pages用のベースパス設定
- ビルド最適化設定

### Tailwind設定 (`tailwind.config.js`)
- カスタムカラーパレット
- フォント設定

## 📱 モバイル対応

- レスポンシブデザイン
- タッチフレンドリーなUI
- モバイルメニュー

## 🔒 セキュリティ

- CSP対応
- XSS防止
- 安全なフォーム処理

## 📈 SEO対応

- メタタグ最適化
- 構造化データ
- サイトマップ

## 🤝 コントリビューション

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 📞 サポート

質問やサポートが必要な場合は、以下までお問い合わせください：

- Email: info@commercehub.co.jp
- Phone: 03-1234-5678

---

© 2024 CommerceHub. All rights reserved. 
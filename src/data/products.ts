import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'digital-001',
    name: 'プレミアム デザインテンプレート集',
    description: 'プロ仕様のWebサイト・グラフィックデザインテンプレート50点セット。商用利用可能で、ブランディングに最適な洗練されたデザインをご提供します。',
    price: 4980,
    currency: 'JPY',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400'
    ],
    category: 'デザイン',
    inStock: true,
    specifications: {
      'ファイル形式': 'PSD, AI, Figma, Sketch',
      'テンプレート数': '50点',
      '商用利用': '可能',
      'サポート': 'メールサポート付き',
      'ダウンロード期限': '購入から30日間'
    }
  },
  {
    id: 'digital-002',
    name: 'ビジネス文書作成講座（動画）',
    description: '効果的なプレゼンテーション・提案書作成のノウハウを学べるオンライン動画講座。実践的なテンプレートと解説で、あなたのビジネススキルを向上させます。',
    price: 12800,
    currency: 'JPY',
    images: [
      'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400'
    ],
    category: '教育',
    inStock: true,
    specifications: {
      '動画時間': '約3時間',
      'チャプター数': '12章',
      '付属資料': 'テンプレート20点',
      'ストリーミング': '無制限視聴',
      'サポート期間': '購入から90日間'
    }
  },
  {
    id: 'digital-003',
    name: 'ミニマル アイコンパック',
    description: 'モダンでシンプルなベクターアイコン500個セット。Webサイト・アプリ・プレゼンテーションに使える汎用性の高いデザインです。',
    price: 2980,
    currency: 'JPY',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400'
    ],
    category: 'デザイン',
    inStock: true,
    specifications: {
      'アイコン数': '500個',
      'ファイル形式': 'SVG, PNG, AI',
      'サイズ': '複数サイズ対応',
      '商用利用': '可能',
      'カテゴリ': '20種類'
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
}; 
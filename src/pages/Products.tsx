import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  
  const categories = ['すべて', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'すべて' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="gradient-bg min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            デジタルコンテンツ
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            プロフェッショナルが制作した高品質なデザイン素材・教育コンテンツを<br />
            商用利用可能な形でご提供いたします
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-secondary-700 hover:bg-primary-50 border border-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card group hover:scale-105 transition-transform duration-300">
              {/* Product Image */}
              <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.inStock && (
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      利用可能
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-secondary-600 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications Preview */}
                <div className="bg-secondary-50 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-secondary-500">{key}:</span>
                        <div className="text-secondary-700 font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                  <div className="text-3xl font-bold text-primary-600">
                    ¥{product.price.toLocaleString()}
                  </div>
                  <Link 
                    to={`/products/${product.id}`}
                    className="btn-primary text-sm px-6 py-3"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.267-5.543-3.259C6.146 11.25 6 10.642 6 10a6 6 0 1112 0c0 .642-.146 1.25-.457 1.741zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              該当する商品が見つかりません
            </h3>
            <p className="text-secondary-600">
              別のカテゴリをお試しください
            </p>
          </div>
        )}

        {/* Features Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              すべてのコンテンツに含まれる特典
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">商用利用可能</h3>
              <p className="text-secondary-600">
                すべてのコンテンツは商用利用が可能です
              </p>
            </div>
            
            <div className="card text-center bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">即時ダウンロード</h3>
              <p className="text-secondary-600">
                購入後すぐにダウンロード開始
              </p>
            </div>
            
            <div className="card text-center bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M5.636 6.464L12 12.25l6.364-5.786M5.636 17.536L12 11.75l6.364 5.786" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">30日間保証</h3>
              <p className="text-secondary-600">
                安心の30日間返金保証付き
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products; 
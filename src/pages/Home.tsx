import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
              Candy<span className="text-primary-500">Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              クリエイティブなデジタルコンテンツで<br className="hidden sm:block" />
              あなたのプロジェクトを次のレベルへ
            </p>
            <Link 
              to="/products" 
              className="btn-primary text-lg px-8 py-4"
            >
              コンテンツを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              厳選コンテンツ
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              プロフェッショナルが制作した高品質なデジタルコンテンツをお届けします
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card group cursor-pointer">
                <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-primary-600 mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-secondary-600 mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <Link 
                    to={`/products/${product.id}`}
                    className="btn-secondary text-sm"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              選ばれる理由
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">高品質コンテンツ</h3>
              <p className="text-secondary-600 leading-relaxed">
                プロフェッショナルが制作した、商用利用可能な高品質なデジタルコンテンツ
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">安心購入</h3>
              <p className="text-secondary-600 leading-relaxed">
                30日間の返金保証と充実したサポートで、安心してご購入いただけます
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">即時ダウンロード</h3>
              <p className="text-secondary-600 leading-relaxed">
                購入後すぐにダウンロード可能。お急ぎのプロジェクトにも対応できます
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
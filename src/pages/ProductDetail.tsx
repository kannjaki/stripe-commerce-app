import { useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!id) {
    return <Navigate to="/products" replace />;
  }
  
  const product = getProductById(id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">商品が見つかりません</h1>
          <p className="text-gray-600 mb-8">お探しの商品は存在しないか、販売を終了している可能性があります。</p>
          <button 
            onClick={() => window.history.back()}
            className="btn-primary"
          >
            前のページに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <span className="text-primary-600 font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-primary-600">
              ¥{product.price.toLocaleString()}
            </span>
            <span className="text-gray-500">({product.currency})</span>
            {product.inStock ? (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                在庫あり
              </span>
            ) : (
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                在庫切れ
              </span>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Purchase Section */}
          <div className="border-t pt-6">
            <div className="space-y-4">
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors ${
                  product.inStock 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'カートに追加' : '在庫切れ'}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                ※ 実際の購入機能は実装されていません（デモンストレーション用）
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="border-t pt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>送料無料</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>1年保証</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>30日返品保証</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24時間サポート</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">商品仕様</h2>
        <div className="card">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-2">
                <dt className="font-medium text-gray-900">{key}</dt>
                <dd className="text-gray-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 
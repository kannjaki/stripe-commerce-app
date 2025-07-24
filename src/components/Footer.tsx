import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">CommerceHub</h3>
            <p className="text-sm leading-relaxed mb-4">
              高品質な商品を安心してお買い求めいただける総合ECプラットフォーム
            </p>
            <div className="space-y-1 text-sm">
              <p>{companyInfo.name}</p>
              <p>{companyInfo.address}</p>
              <p>TEL: {companyInfo.phone}</p>
              <p>Email: {companyInfo.email}</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/commercial-transactions" className="hover:text-white transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">ポリシー</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/refund-policy" className="hover:text-white transition-colors">
                  返金ポリシー
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:text-white transition-colors">
                  配送ポリシー
                </Link>
              </li>
              <li>
                <Link to="/support-policy" className="hover:text-white transition-colors">
                  サポートポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-sm mt-2 sm:mt-0">
              営業時間: {companyInfo.businessHours}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
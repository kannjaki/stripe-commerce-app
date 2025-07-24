import { useState } from 'react';
import { companyInfo } from '../data/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // メール送信の実装
    alert('お問い合わせありがとうございます。確認後、ご返信いたします。');
  };

  return (
    <div className="gradient-bg min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">お問い合わせ</h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
            商品に関するご質問やサポートが必要でしたら<br />
            お気軽にメールでご連絡ください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">連絡先情報</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">メール</h3>
                    <p className="text-secondary-600">{companyInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">サポート時間</h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {companyInfo.businessHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">事業者</h3>
                    <p className="text-secondary-600">{companyInfo.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">メッセージを送信</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="田中太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    件名 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">件名を選択してください</option>
                    <option value="product-inquiry">商品に関するお問い合わせ</option>
                    <option value="technical-support">技術サポート</option>
                    <option value="license-inquiry">ライセンスに関するご質問</option>
                    <option value="refund-request">返金のご相談</option>
                    <option value="custom-request">カスタマイズのご相談</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                    placeholder="お問い合わせの詳細をご記入ください..."
                  />
                </div>

                <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-4">
                  <p className="text-sm text-secondary-600">
                    <span className="font-medium">ご注意：</span>
                    お送りいただいた内容は、サポート目的でのみ使用いたします。
                    通常1-2営業日以内にご返信いたします。
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  メッセージを送信
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">よくあるご質問</h2>
            <p className="text-secondary-600">
              お問い合わせの前に、こちらもご確認ください
            </p>
          </div>
          
          <div className="card">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Q. ダウンロードがうまくいきません
                </h3>
                <p className="text-secondary-700">
                  A. ブラウザのキャッシュをクリアしてから再度お試しください。それでも解決しない場合は、注文番号を含めてお問い合わせください。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Q. 商用利用は可能ですか？
                </h3>
                <p className="text-secondary-700">
                  A. はい、当サイトの全商品は商用利用可能です。ライセンス詳細は各商品ページをご確認ください。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Q. カスタマイズは依頼できますか？
                </h3>
                <p className="text-secondary-700">
                  A. はい、別途お見積もりにてカスタマイズ対応も承っております。詳細はお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 
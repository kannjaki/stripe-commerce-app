import { companyInfo } from '../data/company';

const About = () => {
  return (
    <div className="gradient-bg min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">会社概要</h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
            クリエイティブなデジタルコンテンツを通じて、お客様のプロジェクトを成功に導きます。
          </p>
        </div>

        {/* Company Mission */}
        <section className="mb-16">
          <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 text-center">私たちのミッション</h2>
            <p className="text-lg text-secondary-700 leading-relaxed text-center max-w-3xl mx-auto">
              プロフェッショナルが制作した高品質なデジタルコンテンツを提供し、
              クリエイターやビジネスオーナーの創造性を支援することを使命としています。
              美しく実用的なデザインで、あなたのアイデアを形にするお手伝いをいたします。
            </p>
          </div>
        </section>

        {/* Company Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">企業情報</h2>
          <div className="card">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b border-secondary-100 pb-4">
                <dt className="font-semibold text-secondary-900 mb-2">事業者名</dt>
                <dd className="text-secondary-700">{companyInfo.name}</dd>
              </div>
              
              <div className="border-b border-secondary-100 pb-4">
                <dt className="font-semibold text-secondary-900 mb-2">代表者</dt>
                <dd className="text-secondary-700">{companyInfo.representative}</dd>
              </div>
              
              <div className="border-b border-secondary-100 pb-4">
                <dt className="font-semibold text-secondary-900 mb-2">メールアドレス</dt>
                <dd className="text-secondary-700">{companyInfo.email}</dd>
              </div>
              
              <div className="border-b border-secondary-100 pb-4">
                <dt className="font-semibold text-secondary-900 mb-2">サポート対応時間</dt>
                <dd className="text-secondary-700">{companyInfo.businessHours}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">私たちの価値観</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">クリエイティビティ</h3>
              <p className="text-secondary-600 leading-relaxed">
                独創性と美しさを追求し、インスピレーションを与えるデザインを創造します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">品質第一</h3>
              <p className="text-secondary-600 leading-relaxed">
                プロフェッショナルスタンダードに基づく、妥協のない品質管理を実践しています。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">迅速対応</h3>
              <p className="text-secondary-600 leading-relaxed">
                お客様のプロジェクトスケジュールに合わせた迅速なサポートを提供します。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="card bg-gradient-to-r from-primary-50 to-accent-50 border-primary-100">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6 text-center">お問い合わせについて</h2>
          <div className="text-center space-y-6">
            <p className="text-secondary-700 text-lg leading-relaxed">
              商品に関するご質問やカスタマイズのご相談など、<br />
              お気軽にメールでお問い合わせください。
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-3 bg-white/50 rounded-xl px-6 py-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-secondary-700 font-medium">{companyInfo.email}</span>
              </div>
            </div>
            <p className="text-sm text-secondary-500">
              {companyInfo.businessHours}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 
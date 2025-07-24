const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">返金ポリシー</h1>
        <p className="text-lg text-secondary-600">
          デジタルコンテンツの返金に関するポリシーをご確認ください。
        </p>
      </div>

      <div className="card space-y-10">
        {/* 返金対象 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            返金対象
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>以下の場合に限り、返金対応いたします：</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>商品の内容が商品説明と著しく異なる場合</li>
              <li>ファイルが破損しており、ダウンロードできない場合</li>
              <li>技術的な問題により商品を利用できない場合</li>
              <li>当社側の過失による誤請求の場合</li>
            </ul>
          </div>
        </section>

        {/* 返金対象外 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            返金対象外
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>以下の場合、返金はいたしかねます：</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>ダウンロード完了後の単純な購入者都合による返品</li>
              <li>商品の期待値と異なるという主観的な理由</li>
              <li>購入後30日を過ぎた場合</li>
              <li>利用方法が分からないという理由</li>
              <li>既に商用利用している場合</li>
            </ul>
          </div>
        </section>

        {/* 返金申請方法 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            返金申請方法
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>返金をご希望の場合は、以下の手順に従ってください：</p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>購入から30日以内にメールでご連絡</li>
              <li>注文番号（購入時のメールに記載）を明記</li>
              <li>返金理由の詳細をご記載</li>
              <li>問題の具体的な状況（スクリーンショット等があれば添付）</li>
            </ol>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mt-6">
              <p className="text-secondary-900 font-medium mb-2">お問い合わせ先：</p>
              <p className="text-secondary-700">support@digitalstudio.co.jp</p>
            </div>
          </div>
        </section>

        {/* 返金処理期間 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            返金処理期間
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p><span className="font-medium">審査期間：</span>ご連絡から5営業日以内</p>
            <p><span className="font-medium">返金実行：</span>承認後3-10営業日以内</p>
            <p className="text-sm text-secondary-600">
              ※ 返金方法は、元のお支払い方法と同じ方法で行います。<br />
              ※ クレジットカードの場合、カード会社の処理により反映まで時間がかかる場合があります。
            </p>
          </div>
        </section>

        {/* サポート */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            ご利用サポート
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>返金申請の前に、まずはサポートチームまでご相談ください。</p>
            <p>技術的な問題の多くは、サポートにより解決可能です：</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>ファイルの使用方法についてのご質問</li>
              <li>ソフトウェアの互換性に関する問題</li>
              <li>カスタマイズ方法のご相談</li>
            </ul>
          </div>
        </section>

        {/* 30日間保証 */}
        <section className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">30日間安心保証</h3>
            <p className="text-secondary-700 leading-relaxed">
              商品に問題がある場合は、購入から30日以内であれば<br />
              無条件で返金または修正版の提供をいたします。
            </p>
          </div>
        </section>
      </div>

      {/* 最終更新日 */}
      <div className="mt-12 text-center text-sm text-secondary-500">
        <p>最終更新日: 2024年7月24日</p>
      </div>
    </div>
  );
};

export default RefundPolicy; 
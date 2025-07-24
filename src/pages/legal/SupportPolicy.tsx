import { Link } from 'react-router-dom';

const SupportPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">サポートポリシー</h1>
        <p className="text-lg text-secondary-600">
          当社のデジタルコンテンツに関するサポート方針です。
        </p>
      </div>

      <div className="card space-y-10">
        {/* サポート対象 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            サポート対象
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>当社のサポートは、以下の内容を対象とします：</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>購入したデジタルコンテンツのダウンロードに関する問題</li>
              <li>ファイルの破損や不具合</li>
              <li>商品説明と実際の内容の著しい相違</li>
              <li>基本的な使用方法に関する質問（ソフトウェアの操作方法自体は除く）</li>
              <li>ライセンスに関するご質問</li>
            </ul>
          </div>
        </section>
        
        {/* サポート対象外 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            サポート対象外
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>以下の内容はサポート対象外となります：</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>コンテンツを利用するサードパーティ製ソフトウェアの操作方法</li>
              <li>お客様の環境（PC、OS、ソフトウェアバージョン）に起因する問題</li>
              <li>高度なカスタマイズや改変に関する技術的支援</li>
              <li>デザインの変更や修正のご依頼（別途有償で対応可能な場合があります）</li>
              <li>コンテンツ制作の代行</li>
              <li>サーバー設定、Webサイト構築など、コンテンツ利用以上の技術サポート</li>
            </ul>
          </div>
        </section>

        {/* サポートチャネル */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            サポートチャネル
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>サポートはメールでのみ受け付けております。</p>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mt-6">
              <p className="text-secondary-900 font-medium mb-2">お問い合わせ先：</p>
              <p className="text-secondary-700">support@digitalstudio.co.jp</p>
              <p className="text-sm text-secondary-600 mt-2">
                お問い合わせの際は、購入時の注文番号とお名前をご記載ください。
              </p>
            </div>
          </div>
        </section>

        {/* サポート時間と応答時間 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            サポート時間と応答時間
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p><span className="font-medium">サポート受付：</span>24時間365日</p>
            <p><span className="font-medium">サポート対応時間：</span>平日 10:00 - 18:00（土日祝日を除く）</p>
            <p><span className="font-medium">初回応答時間の目安：</span>1-2営業日以内</p>
            <p className="text-sm text-secondary-600">
              ※ お問い合わせ内容により、調査にお時間をいただく場合がございます。
            </p>
          </div>
        </section>

        {/* 注意事項 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            注意事項
          </h2>
          <div className="text-secondary-700 space-y-3">
            <p>
              本サポートポリシーは、予告なく変更されることがあります。
              最新の情報は当ページにてご確認ください。
            </p>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">関連情報</h3>
            <div className="flex justify-center space-x-6">
              <Link to="/refund-policy" className="font-medium text-primary-600 hover:underline">
                返金ポリシー
              </Link>
              <Link to="/contact" className="font-medium text-primary-600 hover:underline">
                お問い合わせ
              </Link>
            </div>
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

export default SupportPolicy; 
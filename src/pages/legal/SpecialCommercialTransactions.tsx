import { companyInfo } from '../../data/company';
import { Link } from 'react-router-dom';

const SpecialCommercialTransactions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">特定商取引法に基づく表記</h1>
        <p className="text-lg text-secondary-600">
          特定商取引に関する法律に基づき、以下の通り表示いたします。
        </p>
      </div>

      <div className="card space-y-10">
        {/* 販売業者 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            販売業者
          </h2>
          <p className="text-secondary-700">{companyInfo.name}</p>
        </section>

        {/* 運営統括責任者 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            運営統括責任者
          </h2>
          <p className="text-secondary-700">{companyInfo.representative}</p>
        </section>

        {/* 所在地・連絡先 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            所在地・連絡先
          </h2>
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-secondary-700 font-medium mb-2">
                <span className="text-blue-800">📍 所在地・電話番号について</span>
              </p>
              <p className="text-secondary-700 text-sm leading-relaxed">
                所在地及び電話番号につきましては、ご購入をご検討のお客様からのご請求により、
                遅滞なくメールにて開示いたします。下記メールアドレスまでお気軽にお問い合わせください。
              </p>
            </div>
            <p className="text-secondary-700">
              <span className="font-medium">メールアドレス:</span> {companyInfo.email}
            </p>
            <p className="text-secondary-700">
              <span className="font-medium">対応時間:</span> {companyInfo.businessHours}
            </p>
          </div>
        </section>

        {/* 商品の販売価格 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            商品の販売価格
          </h2>
          <div className="text-secondary-700 space-y-2">
            <p>各商品ページに表示された価格（税込）</p>
            <p>価格は商品によって異なります。詳細は各商品ページをご確認ください。</p>
          </div>
        </section>

        {/* 商品代金以外の必要料金 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            商品代金以外の必要料金
          </h2>
          <div className="text-secondary-700 space-y-2">
            <p><span className="font-medium">追加料金:</span> なし</p>
            <p><span className="font-medium">手数料:</span> お支払い方法により異なります</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>クレジットカード決済: 無料</li>
            </ul>
          </div>
        </section>

        {/* 申込の有効期限 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            申込の有効期限
          </h2>
          <div className="text-secondary-700">
            <p>ご注文手続き完了まで有効です。カート内商品の保持期限はございません。</p>
          </div>
        </section>

        {/* お支払い方法 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            お支払い方法
          </h2>
          <div className="text-secondary-700">
            <ul className="list-disc list-inside space-y-1">
              <li>クレジットカード（VISA、MasterCard、JCB、American Express、Diners Club）</li>
              <li>デビットカード</li>
              <li>プリペイドカード（一部制限あり）</li>
            </ul>
          </div>
        </section>

        {/* お支払い時期 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            お支払い時期
          </h2>
          <div className="text-secondary-700">
            <p><span className="font-medium">クレジットカード:</span> ご注文確定時に決済処理が行われます</p>
          </div>
        </section>

        {/* 商品の引き渡し時期 */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            商品の引き渡し時期
          </h2>
          <div className="text-secondary-700 space-y-2">
            <p>ご決済完了後、即座にダウンロードリンクをご登録のメールアドレスにお送りいたします。</p>
            <p>ダウンロード期限は購入から30日間です。期限内に必ずダウンロードをお済ませください。</p>
          </div>
        </section>

        {/* 返品・交換について */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            返品・交換について
          </h2>
          <div className="text-secondary-700 space-y-2">
            <p><span className="font-medium">返品期限:</span> 商品購入後30日以内</p>
            <p><span className="font-medium">返品条件:</span> デジタルコンテンツの性質上、原則として返品はお受けできませんが、商品に不具合がある場合や説明と著しく異なる場合は対応いたします。</p>
            <p><span className="font-medium">返品手数料:</span> 当社都合による返品の場合は無料、お客様都合による返品はお受けしておりません</p>
            <p>詳細は<Link to="/refund-policy" className="text-primary-600 hover:underline">返金ポリシー</Link>をご確認ください。</p>
          </div>
        </section>

        {/* 不良品について */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            不良品について
          </h2>
          <div className="text-secondary-700 space-y-2">
            <p>商品の不具合・ダウンロードに関する問題があった場合は、購入後30日以内に上記メールアドレスまでご連絡ください。</p>
            <p>確認後、速やかに修正版の提供または返金対応いたします。</p>
          </div>
        </section>

        {/* 個人情報の取り扱い */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            個人情報の取り扱い
          </h2>
          <div className="text-secondary-700">
            <p>お客様の個人情報は、商品の提供および必要なご連絡のためのみに使用し、適切に管理いたします。</p>
            <p>詳細は<Link to="/privacy-policy" className="text-primary-600 hover:underline">プライバシーポリシー</Link>をご確認ください。</p>
          </div>
        </section>

        {/* 重要事項の開示について */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4 border-b border-secondary-200 pb-2">
            重要事項の開示について
          </h2>
          <div className="text-secondary-700 space-y-2">
            <p>特定商取引法第11条に基づき、ご購入をご検討のお客様からのご請求により、以下の事項を遅滞なく書面または電子メールにて開示いたします：</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>事業者の住所</li>
              <li>事業者の電話番号</li>
              <li>その他法定表示事項</li>
            </ul>
            <p className="text-sm text-secondary-600 mt-3">
              開示をご希望の場合は、上記メールアドレスまで「特定商取引法に基づく表記の開示請求」の件名でご連絡ください。
            </p>
          </div>
        </section>
      </div>

      {/* 最終更新日 */}
      <div className="mt-12 text-center text-sm text-secondary-500">
        <p>最終更新日: 2024年12月19日</p>
      </div>
    </div>
  );
};

export default SpecialCommercialTransactions; 
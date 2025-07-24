import { companyInfo } from '../../data/company';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
        <p className="text-lg text-gray-600">
          お客様の個人情報の保護に関する当社の方針をご説明いたします。
        </p>
      </div>

      <div className="card space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            基本方針
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              {companyInfo.name}（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
              個人情報の保護に関する法律及び関連する法令、規範を遵守し、
              適切な個人情報の取扱いを実施いたします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            収集する個人情報
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>当社では、以下の個人情報を収集する場合があります：</p>
            
            <h3 className="text-lg font-semibold text-gray-900">お客様から直接提供される情報</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>氏名・住所・電話番号・メールアドレス</li>
              <li>生年月日・性別</li>
              <li>クレジットカード情報等の決済情報</li>
              <li>商品の配送先情報</li>
              <li>お問い合わせ内容</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">自動的に収集される情報</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IPアドレス・ブラウザ情報</li>
              <li>アクセス日時・閲覧ページ</li>
              <li>Cookie情報</li>
              <li>デバイス情報（OS、画面サイズ等）</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            個人情報の利用目的
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>収集した個人情報は、以下の目的で利用いたします：</p>
            
            <h3 className="text-lg font-semibold text-gray-900">商品・サービス提供のため</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>商品の販売・配送</li>
              <li>代金の決済処理</li>
              <li>アフターサービス・サポート</li>
              <li>返品・交換の対応</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">お客様との連絡のため</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ご注文内容の確認</li>
              <li>商品発送のご連絡</li>
              <li>お問い合わせへの回答</li>
              <li>重要なお知らせの送信</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">サービス改善のため</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>サイト利用状況の分析</li>
              <li>商品・サービスの改善</li>
              <li>新商品・サービスの開発</li>
              <li>マーケティング活動（同意いただいた場合のみ）</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            個人情報の第三者提供
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              当社は、法令に定める場合を除き、お客様の個人情報を第三者に提供いたしません。
              ただし、以下の場合は除きます：
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体又は財産の保護のために必要がある場合</li>
              <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">業務委託先への提供</h3>
            <p>以下の業務委託先に必要な範囲で個人情報を提供する場合があります：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>配送業者（商品配送のため）</li>
              <li>決済代行業者（決済処理のため）</li>
              <li>システム運用保守業者（システム運用のため）</li>
            </ul>
            <p className="text-sm text-gray-600">
              ※ 委託先には適切な管理を義務付け、秘密保持契約を締結しています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            個人情報の保護措置
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>お客様の個人情報を保護するため、以下の措置を講じています：</p>
            
            <h3 className="text-lg font-semibold text-gray-900">技術的措置</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>SSL暗号化通信の使用</li>
              <li>ファイアウォールによる不正アクセス防止</li>
              <li>ウイルス対策ソフトの導入</li>
              <li>定期的なセキュリティ監査の実施</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">物理的措置</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>サーバー室への入退室管理</li>
              <li>個人情報を含む書類の施錠管理</li>
              <li>廃棄時の適切な処理</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">人的措置</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>従業員への定期的な教育研修</li>
              <li>秘密保持契約の締結</li>
              <li>アクセス権限の適切な管理</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Cookie（クッキー）について
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              当サイトでは、より良いサービス提供のためにCookieを使用しています。
              Cookieとは、Webサイトがお客様のコンピュータに一時的にデータを保存する仕組みです。
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900">Cookieの利用目的</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ログイン状態の維持</li>
              <li>ショッピングカートの内容保持</li>
              <li>サイト利用状況の分析</li>
              <li>広告配信の最適化（第三者Cookie含む）</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">Cookieの無効化</h3>
            <p>
              ブラウザの設定によりCookieを無効にすることができますが、
              一部の機能が利用できなくなる場合があります。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            個人情報の開示・訂正・削除
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              お客様は、当社が保有するご自身の個人情報について、
              以下の権利を行使することができます：
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>開示請求</strong>: 保有する個人情報の内容確認</li>
              <li><strong>訂正請求</strong>: 個人情報の訂正・追加・削除</li>
              <li><strong>利用停止請求</strong>: 個人情報の利用停止・消去</li>
              <li><strong>提供停止請求</strong>: 第三者への提供停止</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">請求方法</h3>
            <p>上記の請求は、以下の連絡先までお申し出ください：</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p><strong>個人情報お問い合わせ窓口</strong></p>
              <p>電話: {companyInfo.phone}</p>
              <p>メール: {companyInfo.email}</p>
              <p className="text-sm text-blue-800 mt-2">
                ※ ご本人確認のため、身分証明書の提示をお願いする場合があります。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            個人情報の保存期間
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>個人情報の保存期間は以下の通りです：</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>お客様情報</strong>: 最終取引から5年間</li>
              <li><strong>注文履歴</strong>: 取引完了から5年間</li>
              <li><strong>お問い合わせ履歴</strong>: 対応完了から3年間</li>
              <li><strong>アクセスログ</strong>: 3ヶ月間</li>
            </ul>
            
            <p className="text-sm text-gray-600">
              ※ 法令により保存期間が定められている場合は、その期間に従います。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            未成年者の個人情報
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              15歳未満の方の個人情報を収集する場合は、
              保護者の同意を得ることを原則とします。
            </p>
            <p>
              未成年者が保護者の同意なく個人情報を提供した場合、
              保護者の方は当社までご連絡ください。
              適切に対応いたします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            プライバシーポリシーの変更
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              本プライバシーポリシーは、法令の変更や事業内容の変更に伴い、
              予告なく変更する場合があります。
            </p>
            <p>
              変更した場合は、当サイトに掲載してお知らせいたします。
              重要な変更については、メール等でご連絡する場合があります。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            お問い合わせ
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              個人情報の取扱いに関するご質問・ご意見がございましたら、
              以下までお問い合わせください。
            </p>
            
            <div className="bg-primary-50 border border-primary-200 rounded p-4">
              <p><strong>個人情報保護管理者</strong></p>
              <p>{companyInfo.name}</p>
              <p>{companyInfo.representative}</p>
              <p>{companyInfo.address}</p>
              <p>電話: {companyInfo.phone}</p>
              <p>メール: {companyInfo.email}</p>
              <p>受付時間: {companyInfo.businessHours}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>制定日: 2024年7月24日</p>
        <p>最終更新日: 2024年7月24日</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
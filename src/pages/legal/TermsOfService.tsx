import { companyInfo } from '../../data/company';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">利用規約</h1>
        <p className="text-lg text-gray-600">
          当サービスをご利用いただく際の利用条件について定めています。
        </p>
      </div>

      <div className="card space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第1条（適用）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              本利用規約（以下「本規約」）は、{companyInfo.name}（以下「当社」）が提供する
              ECサイト「CommerceHub」（以下「本サービス」）の利用条件を定めるものです。
            </p>
            <p>
              利用者（以下「ユーザー」）には、本規約に従って本サービスをご利用いただきます。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第2条（利用登録）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              本サービスの利用を希望する者は、本規約に同意の上、
              当社の定める方法によって利用登録を申請し、
              当社がこれを承認することによって、利用登録が完了するものとします。
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900">登録拒否事由</h3>
            <p>当社は、以下の場合には利用登録を拒否することがあります：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>未成年者、成年被後見人等の法定代理人の同意を得ていない場合</li>
              <li>その他、当社が利用登録を相当でないと判断した場合</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第3条（アカウント管理）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              ユーザーは、自己の責任において、本サービスのアカウント情報を
              適切に管理するものとします。
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>パスワード等のアカウント情報を第三者に利用させ、または貸与・譲渡・名義変更・売買等をしてはならないものとします</li>
              <li>アカウント情報の管理不十分、使用上の過誤、第三者の使用等によって生じた損害の責任はユーザーが負うものとします</li>
              <li>アカウント情報が盗用された場合、直ちに当社に通知するものとします</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第4条（商品の購入）
          </h2>
          <div className="text-gray-700 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">注文と契約成立</h3>
            <p>
              ユーザーが商品の購入を希望する場合、当社の定める方法により注文を行い、
              当社が注文確認メールを送信した時点で売買契約が成立するものとします。
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900">価格・支払い</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>商品の価格は、注文時点でサイトに表示された価格とします</li>
              <li>価格には消費税が含まれています</li>
              <li>送料は全国一律無料です</li>
              <li>支払い方法は当社が指定する方法によります</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">在庫・配送</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>在庫不足により商品の提供ができない場合、速やかに連絡いたします</li>
              <li>配送は当社指定の配送業者により行います</li>
              <li>配送遅延について、当社は責任を負いません（当社に故意・重過失がある場合を除く）</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第5条（返品・キャンセル）
          </h2>
          <div className="text-gray-700 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">返品条件</h3>
            <p>
              商品の返品については、別途定める「返金ポリシー」に従うものとします。
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900">注文キャンセル</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>注文確定後のキャンセルは原則としてお受けできません</li>
              <li>商品発送前であれば、当社の判断によりキャンセルを承る場合があります</li>
              <li>ユーザー都合によるキャンセルの場合、キャンセル料を請求する場合があります</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第6条（禁止事項）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
            
            <h3 className="text-lg font-semibold text-gray-900">法令違反・権利侵害</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>第三者の知的財産権、肖像権、プライバシー、名誉その他の権利を侵害する行為</li>
              <li>第三者を誹謗中傷し、または名誉を損なう行為</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">システム・運営妨害</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>当社のサーバーやネットワークに不正にアクセスする行為</li>
              <li>逆アセンブル、逆コンパイル、リバースエンジニアリング等を行う行為</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">不正利用</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>虚偽の情報を登録する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>同一人物が複数のアカウントを保有する行為</li>
              <li>営利を目的として本サービスを利用する行為（転売等）</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第7条（本サービスの提供の停止等）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
            
            <p>
              当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、
              一切の責任を負わないものとします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第8条（利用制限および登録抹消）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>登録事項に虚偽の事実があることが判明した場合</li>
              <li>料金等の支払債務の不履行があった場合</li>
              <li>当社からの連絡に対し、一定期間返答がない場合</li>
              <li>最後の利用から一定期間利用がない場合</li>
              <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
            </ul>
            
            <p>
              前項各号のいずれかに該当した場合、ユーザーは、当然に当社に対する一切の債務について期限の利益を失い、
              その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第9条（保証の否認および免責事項）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、
              セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </p>
            
            <p>
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について、
              当社の故意または重過失による場合を除き、一切の責任を負いません。
              ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、
              この免責規定は適用されません。
            </p>
            
            <p>
              前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為により
              ユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、
              または予見し得た場合を含みます。）について一切の責任を負いません。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第10条（サービス内容の変更等）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
              ユーザーはこれに同意するものとします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第11条（利用規約の変更）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします：
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本規約の変更がユーザーの一般の利益に適合するとき</li>
              <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</li>
            </ul>
            
            <p>
              当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知いたします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第12条（個人情報の取扱い）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              当社は、本サービスの利用によって取得する個人情報については、
              当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第13条（通知または連絡）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
              当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、
              現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、
              これらは、発信時にユーザーへ到達したものとみなします。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第14条（権利義務の譲渡の禁止）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、
              または担保に供することはできません。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            第15条（準拠法・裁判管轄）
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              本規約の解釈にあたっては、日本法を準拠法とします。
            </p>
            <p>
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
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

export default TermsOfService; 
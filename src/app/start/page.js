export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between">
            <div className="body-docs flex flex-col items-start w-full max-w-5xl p-10 gap-3">

                <div className="topic">                
                    <b>
                        <li><a href="#cloud-autext">CloudAuTextとは</a></li>
                        <li><a href="#install">インストール</a></li>
                        <li><a href="#start-setting">必須設定に関する説明</a></li>
                    </b>
                </div>


                <h2 id="cloud-autext">CloudAuTextとは</h2>
                <p>ソフトウェアが発する音やマイク音から、リアルタイム文字起こし・翻訳出来る<b>Windowsアプリ</b>です。</p>

                <p><b>※ このアプリは、Azureと利用者が契約した上で、このアプリにキーやリージョンを設定する必要があります。</b></p>
                <p><b>※ Azureは、現在翻訳・文字起こしのサービス(Azure AI Services)を無料枠(Free (F0))と従量課金制枠で提供しています。無料枠は、支払いは必要ありませんが、従量課金制枠の場合は、使用した時間だけ、料金の請求がされますのでご注意ください。</b></p>

                <div className="flex flex-col gap-x-8 gap-y-4 lg:grid-cols-2 lg:grid">

                    <div className="bg-gray-200 dark:bg-zinc-900 p-4 rounded-lg">
                    <h3>音楽流しながら、動画を見る</h3>
                    <p>ソフトウェア別に音が取得できるから、<b>音収録の妨げにならず、正確な翻訳・文字起こし</b>ができます！</p>
                    </div>

                    <div className="bg-gray-200 dark:bg-zinc-900 p-4 rounded-lg">
                    <h3>会議しながら、自分の声も文字起こし</h3>
                    <p>マイク音・ソフトウェア音、同時に処理を行う事が出来るため、<b>「他の人の言葉を翻訳しながら、自分の声も文字起こしする」という芸当</b>ができます！</p>
                    </div>

                    <div className="bg-gray-200 dark:bg-zinc-900 p-4 rounded-lg">                
                    <h3>ゲームしながら、リアルタイムで言葉を知る</h3>
                    <p>リアルタイムに翻訳・文字起こしができるため、大事な場面で「言葉の壁」にぶつかることがありません！</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-zinc-900 p-4 rounded-lg">
                    <h3>会議録を作りたい</h3>
                    <p>処理後の喋った内容(音声・テキスト)は、サーバに保存せず、使用しているパソコンに保存します。簡単に確認できます！</p>
                    </div>
                    
                </div>


                <h2 id="install">インストール</h2>

                <a href="" className="bg-gray-200 dark:bg-zinc-900 p-4 rounded-lg">
                    <img src="/ms.svg" className="max-w-48 mx-auto" />
                    <p>**************** ここにURL *****************</p>
                </a>
                <p>上記のリンクからMicrosoftStoreに行き、インストールしてください。</p>
                <p>もしくは、MicrosoftStore上で、「CloudAutext」と検索して、アプリをインストールしてください。</p>


                <h2 id="start-setting">必須設定に関する説明</h2>

                <h3>Azureに関する料金の確認</h3>
                <p>Azure使用料金表：<a href="https://azure.microsoft.com/ja-jp/pricing/details/cognitive-services/speech-services/#pricing">https://azure.microsoft.com/ja-jp/pricing/details/cognitive-services/speech-services/#pricing</a></p>

                <p>本アプリは、上記料金表の内、「Speech to Text」と「Speech Translation」を使用しています。翻訳の場合は、「Speech to Text」と「Speech Translation」の両方を使用するので、ご注意ください。</p>
                <p><b>「Free (F0)」枠ならば、無料で使うことができますが、「Free (F0)」の上限を超えて文字起こし・翻訳を行う場合は、「従量課金制」をご利用してください。</b></p>
                <p>本アプリからは、「Token」や「リージョン」の設定しかできないため、「Free (F0)」枠のTokenであるか？などは判別などはできませんので、ご了承ください。</p>

                <p><b>本アプリでは、複数の文字起こし・翻訳処理を同時に行うことができますが、その分だけ使用されたと判定されます。</b>例えば、対象アプリ1つで文字起こしを1時間行った場合、1時間分の使用料となりますが、対象アプリ2つで文字起こしを1時間行った場合は、2時間分の使用料となります。</p>

                <h3>文字起こし・翻訳に必要なAzureのトークンなどの取得方法</h3>
                <p><b>※ ここでは既にAzureアカウントを作成済みで話をします。</b></p>

                <img src="/azure/azure1.jpg" className="max-w-96"/>
                <p>まず、<a href="https://portal.azure.com">https://portal.azure.com</a>にアクセスします。すると、上記の画像のようなページに飛びますので、そこで「Azure AI services」をクリックしてください。</p>
                <p>※ もし、「Azure AI services」が見つからなければ、上の検索欄で検索すると出てきます。</p>

                <img src="/azure/azure2.jpg" className="max-w-96"/>
                <p>次にAzure AI servicesでできるサービス一覧が出てきますので、「音声サービス」を探し出してクリックします。</p>

                <img src="/azure/azure3.jpg" className="max-w-96"/>
                <p>初期は、上記の画像のように音声サービスが登録されていないと思いますので、上の方の「＋作成」ボタンをクリック</p>

                <img src="/azure/azure4.jpg" className="max-w-96"/>
                <p>リージョンはアプリを使いたいパソコンがある国・地域を選択します。価格レベルは、「Freeレベル(F0)」かその他のものが選択できると思いますが、無料枠を使いたければ、「Free(F0)」を選択してください。</p>
                <p>設定が終わりましたら、下の方にある「作成」ボタンを押してください。</p>

                <img src="/azure/azure5.png" className="max-w-96"/>
                <p>音声サービスの作成が終わったら、画像のように追加したサービスが見えると思います。</p>
                <p>そのサービス名をクリックしてください。</p>

                <img src="/azure/azure6.jpg" className="max-w-96"/>
                <p>上記の画像のように、サービス情報が表示されますが、その中の「キーを管理するためにはここをクリック」をクリックしてください。</p>
                
                <img src="/azure/azure7.jpg" className="max-w-96"/>
                <p>キー1もしくはキー2の値をコピーしてください。これはCloudAuText上での「Azure Token」にあたります。CloudAuTextの設定の「Azure Token」にペーストしてください。</p>
                <p>次に場所/地域の値をコピーしてください。これはCloudAuText上での「Azure Region」にあたります。CloudAuTextの設定の「Azure Region」にペーストしてください。</p>

                <p>以上で、Azureに関する設定は終了です。</p>

                <h3>音声データや文字データをファイルに保存する</h3>

                <p>本アプリでは、自動的に音声データなどを保存する機能があります。</p>
                <p>CloudAuTextの「録音した音を保存する場所」欄で、設定することで、指定した場所に音声データや文字データを、ファイルに保存します。設定しない場合は、保存されません。</p>
                
                <hr/>

            </div>
        </main>
    );
}
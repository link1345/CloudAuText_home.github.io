export default function Home() {
    return (
        <main className="body-docs flex flex-col items-center justify-between">
            <div className="flex flex-col items-start w-full max-w-5xl p-10 gap-4">
                <h2>Docs</h2>
                <h3>文字起こし・翻訳した文章を外部アプリ(Discord、VRChat等)へ出力する方法</h3>
                <p>仮想オーディオデバイスを用いると、文字起こし・翻訳した文章を、DiscordやVRChatといった外部アプリケーションに出力することが可能です。</p>
                <p>本アプリではありませんが、「VB-CABLE Virtual Audio Device」や「SYNCROOM」などという仮想オーディオデバイスを提供するソフトウェアがあります。</p>
            </div>
        </main>
    );
}
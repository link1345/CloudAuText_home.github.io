
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="">
        <a
          href=""
          className="group rounded-lg"
          rel="noopener noreferrer"
        >

          <img src="/ms.svg"
              alt="Logo"
              width={180}
              height={34}
          />
        </a>
        </p>
      </div>

      <div className="relative flex flex-col place-items-center">
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/icon1.png"
          alt="Logo"
          width={180}
          height={37}
        />
        <p className="m-3 text-2xl font-semibold">ソフトウェアが発する音やマイク音から、リアルタイム文字起こし・翻訳</p>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        
        <p className="lg:m-2 lg:p-3 text-center flex w-full justify-center bg-gray-200 dark:bg-zinc-900 rounded-lg">
        WindowsStoreで公開されているため、インストールが簡単！
        </p>
        <p className="lg:m-2 lg:p-3 text-center flex w-full justify-center bg-gray-200 dark:bg-zinc-900 rounded-lg">
        シンプルなデザインで、複雑な作業がありません！
        </p>
        <p className="lg:m-2 lg:p-3 text-center flex w-full justify-center bg-gray-200 dark:bg-zinc-900 rounded-lg">
        Azure(外部)で文字起こし・翻訳するため、パソコンへの負荷は殆どありません。
        </p>

        </div>

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/start"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Start{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          CloudAuTextの説明や導入の仕方など
          </p>
        </a>

        <a
          href="/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          CloudAuTextの使い方が書かれたドキュメント
          </p>
        </a>

        <a
          href="/other"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Other{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          ライセンスや利用規約、FAQなど。
          </p>
        </a>
      </div>
    </main>
  );
}

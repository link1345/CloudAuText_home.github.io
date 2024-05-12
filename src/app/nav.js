'use client'
 
export function NavLinks() {
    return(

<header className="bg-white">
  <nav className="mx-auto flex max-w-full items-center justify-between p-3 lg:px-8 dark:bg-zinc-900" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5">
        <img className="h-8 w-auto dark:invert" src="/icon1.png" alt=""/>
      </a>
    </div>
    <div className="flex  gap-4 lg:gap-x-12 justify-end">
      <a href="/start" className="text-sm font-semibold leading-6">Start</a>
      <a href="/docs" className="text-sm font-semibold leading-6">Documents</a>
      <a href="/other" className="text-sm font-semibold leading-6">Other</a>
    </div>
  </nav>
  
</header>

    )
}
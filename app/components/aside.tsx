import Link from 'next/link'

import { Logo } from './logo'
import { Nav } from './nav'

export function Aside() {
  return (
    <aside className="sticky top-0 w-16 md:w-24 shrink-0 h-screen overflow-y-auto no-scrollbar border-r border-neutral-200">
      <div className="h-full flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex justify-center my-4">
            <Link href="/">
              <Logo width={32} height={32} />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 grow flex items-center">
          <Nav />
        </div>
        <div className="flex-1 flex items-end mt-auto">
          {/* Theme switch or language selector*/}
        </div>
      </div>
    </aside>
  )
}

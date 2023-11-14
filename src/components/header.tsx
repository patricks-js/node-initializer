import Image from 'next/image'
import { ToggleTheme } from './toggle-theme'
import { Icons } from './icons'
import { Button } from './ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="h-20 grid items-center border-b border-border">
      <div className="flex items-center justify-between">
        <h2 className="inline-flex tracking-wide text-3xl font-bold gap-[2px]">
          N
          <Image src="node-js.svg" alt="Node Js logo" width={20} height={20} />
          de Initializer
        </h2>
        <div className="flex items-center gap-2">
          <Link
            className="h-9 w-9"
            href="https://github.com/patricks-js/node-initializer"
            target="_blank"
          >
            <Button size="icon">
              <Icons.gitHub width={18} height={18} />
            </Button>
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}

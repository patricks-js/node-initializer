import { Icons } from './icons'
import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="h-20 grid place-items-center border-t border-border fixed bottom-0 left-0 right-0">
      <Button className="px-10 py-5 text-base flex items-center gap-2">
        Generate
        <span className="inline-flex items-center text-muted/80">
          <Icons.cmd width={16} height={16} />
          +K
        </span>
      </Button>
    </footer>
  )
}

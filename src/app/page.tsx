import { SelectMainSettings } from '@/components/main-settings/select-main-settings'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="grid grid-cols-2 h-full">
        <div className="border-r border-border">
          <SelectMainSettings />
        </div>
        <div>dependencies</div>
      </div>
    </div>
  )
}

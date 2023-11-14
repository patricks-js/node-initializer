import { SelectMainSettings } from '@/components/main-settings/select-main-settings'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="max-w-xl mx-auto">
        <div className="">
          <SelectMainSettings />
        </div>
      </div>
    </div>
  )
}

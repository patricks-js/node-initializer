import { Footer } from '@/components/footer'
import { SelectMainSettings } from '@/components/form-settings/form'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="container relative">
      <Header />
      <main className="grid grid-cols-1 gap-10 pt-5 md:grid-cols-2">
        <SelectMainSettings />
      </main>
      <Footer />
    </div>
  )
}

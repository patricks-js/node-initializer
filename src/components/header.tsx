import Image from 'next/image'

export function Header () {
  return (
    <header className="">
      <div className="flex items-center text-4xl font-bold gap-[2px]">N
      <Image src="node-js.svg" alt="Node Js logo" width={24} height={24} />
      de Initializer</div>
    </header>
  )
}

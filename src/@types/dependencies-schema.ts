export type TPackageProps = {
  name: string
  description: string
  version: string
  devDependency?: boolean
}

export type TSearchResponse = {
  package: TPackageProps
}

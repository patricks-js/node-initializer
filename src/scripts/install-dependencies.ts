type Params = {
  packageManager: 'npm' | 'yarn' | 'pnpm'
  directory: string
  dependencies: string[]
}

export function installDependencies(params: Params) {
  let cmd = ''
  if (params.packageManager === 'npm') {
    cmd = `npm install ${[...params.dependencies]}`
  } else {
    cmd = `${params.packageManager} add ${[...params.dependencies]}`
  }

  console.log(cmd)
}

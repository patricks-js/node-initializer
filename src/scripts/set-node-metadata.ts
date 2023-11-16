import { exec } from 'node:child_process'

type TMetadata = {
  name: string
  author: string
  description: string
}

export function setNodeMetadata(params: TMetadata, projectPath: string) {
  let cmd = `cd ${projectPath} &&`

  const metadata = {
    name: params.name,
    author: params.author,
    description: params.description,
  }

  const keys = Object.keys(metadata)

  keys.forEach((key) => {
    cmd += `npm pkg set ${key}="${metadata[key as keyof typeof metadata]}" &&`
  })

  cmd = cmd.slice(0, -2)

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      return
    }

    if (stderr) {
      console.error(stderr)
    }

    console.log(stdout)
  })
}

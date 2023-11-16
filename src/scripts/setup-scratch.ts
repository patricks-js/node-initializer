import { TDataSchema } from '@/@types/data-schema'
import fs from 'node:fs'
import path from 'node:path'

export function setupScratch(data: TDataSchema): string {
  const projectPath = path.join(process.cwd(), 'src', 'temp', data.name)

  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath)
  }

  const packageJsonMetadata = {
    name: data.name,
    version: '1.0.0',
    description: data.description,
    main: 'index.js',
    scripts: {
      start: 'node index.js',
    },
    author: data.author,
    license: 'MIT',
  }

  let packageJsonContent = {}

  if (data.language === 'module-js') {
    packageJsonContent = { ...packageJsonMetadata, type: 'module' }
  } else {
    packageJsonContent = { ...packageJsonMetadata }
  }

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJsonContent, null, 2),
  )

  return projectPath
}

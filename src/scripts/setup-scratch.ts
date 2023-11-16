import { TFormSchema } from '@/components/form-settings/form'
import fs from 'node:fs'
import path from 'node:path'

export function setupScratch(data: TFormSchema): string {
  const projectPath = path.join(
    process.cwd(),
    'src',
    'templates',
    'temp',
    data.name,
  )

  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath)
  }

  fs.copyFile(
    path.join(projectPath, '..', '..', 'scratch', 'package.json'),
    path.join(projectPath, 'package.json'),
    (err) => {
      console.log(err)
    },
  )

  return projectPath
}

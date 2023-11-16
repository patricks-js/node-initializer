import { execSync } from 'child_process'

export function createProject() {
  const mainPath = `${process.cwd()}/src/templates`

  const command = `cp -R ${mainPath}/scratch ${mainPath}/temp`
  execSync(command)
}

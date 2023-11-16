import { dataSchema } from '@/@types/data-schema'
import { setNodeMetadata } from '@/scripts/set-node-metadata'
import { setupScratch } from '@/scripts/setup-scratch'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const bodyParsed = dataSchema.parse(body)

  const metadata = {
    name: bodyParsed.name,
    author: bodyParsed.author,
    description: bodyParsed.description,
  }

  const projectPath = setupScratch(bodyParsed)

  setNodeMetadata(metadata, projectPath)

  // TODO: [After that implement zip function] => fs.rmdirSync(projectPath)

  return NextResponse.json({ message: 'ok' })
}

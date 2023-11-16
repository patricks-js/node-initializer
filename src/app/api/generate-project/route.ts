import { dataSchema } from '@/@types/data-schema'
import { setupScratch } from '@/scripts/setup-scratch'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const bodyParsed = dataSchema.parse(body)

  const projectPath = setupScratch(bodyParsed)

  // TODO: [After that implement zip function] => fs.rmdirSync(projectPath)

  return NextResponse.json({ message: 'ok' })
}

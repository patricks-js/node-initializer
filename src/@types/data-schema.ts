import { z } from 'zod'

export const dataSchema = z.object({
  package: z.enum(['npm', 'yarn', 'pnpm'], {
    required_error: 'You need to select a package manager.',
  }),
  language: z.enum(['common-js', 'module-js', 'ts'], {
    required_error: 'You need to select a language.',
  }),
  name: z.string().min(1),
  author: z.string().min(1),
  description: z.string(),
})

export type TDataSchema = z.infer<typeof dataSchema>

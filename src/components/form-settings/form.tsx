'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '../ui/form'
import { SelectPackager } from './form-select-packager'
import { SelectLanguage } from './form-select-laguages'
import { DefineMetadata } from './form-define-metadata'
import { Button } from '../ui/button'

const formSchema = z.object({
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

type TFormSchema = z.infer<typeof formSchema>

export function SelectMainSettings() {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: TFormSchema) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-5">
        <div className="grid grid-cols-2 mb-5">
          <SelectPackager />
          <SelectLanguage />
        </div>
        <DefineMetadata />
        <Button type="submit">Generate</Button>
      </form>
    </Form>
  )
}
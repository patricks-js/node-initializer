'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Form } from '../ui/form'
import { SelectPackager } from './form-select-packager'
import { SelectLanguage } from './form-select-languages'
import { DefineMetadata } from './form-define-metadata'
import { Button } from '../ui/button'
import { TDataSchema, dataSchema } from '@/@types/data-schema'

const formSchema = dataSchema

export function SelectMainSettings() {
  const form = useForm<TDataSchema>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: TDataSchema) {
    await axios.post('/api/generate-project', {
      package: values.package,
      language: values.language,
      name: values.name,
      author: values.author,
      description: values.description,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex-1">
        <div className="grid mb-5 gap-5 lg:gap-0 lg:grid-cols-2">
          <SelectPackager />
          <SelectLanguage />
        </div>
        <DefineMetadata />
        <Button type="submit">Generate</Button>
      </form>
    </Form>
  )
}

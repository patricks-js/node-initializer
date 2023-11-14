'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { RadioGroup } from '@radix-ui/react-dropdown-menu'
import { RadioGroupItem } from '@radix-ui/react-radio-group'
import { Button } from './ui/button'

const formSchema = z.object({
  type: z.enum(['npm', 'yarn', 'pnpm'], {
    required_error: 'You need to select a package manager.',
  }),
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => <FormItem className="space-y-3"></FormItem>}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

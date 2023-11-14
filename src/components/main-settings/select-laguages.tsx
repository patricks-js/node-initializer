import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export function SelectLanguage() {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name="language"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Choose a language</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="common-js" />
                </FormControl>
                <FormLabel className="font-normal">
                  JavaScript (common)
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="module-js" />
                </FormControl>
                <FormLabel className="font-normal">
                  JavaScript (import/export)
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="ts" />
                </FormControl>
                <FormLabel className="font-normal">TypeScript</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

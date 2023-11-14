import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export function SelectPackager() {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name="package"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Choose a package manager</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="npm" />
                </FormControl>
                <FormLabel className="font-normal">Npm</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="yarn" />
                </FormControl>
                <FormLabel className="font-normal">Yarn </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="pnpm" />
                </FormControl>
                <FormLabel className="font-normal">Pnpm</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

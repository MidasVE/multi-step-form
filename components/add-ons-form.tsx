"use client"

import { useRouter } from "next/navigation"
import { addOnPricing } from "@/data/price-maps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { formAtom } from "@/lib/atoms"
import { addOnsFormSchema } from "@/lib/form-schema"
import { cn } from "@/lib/utils"

import BackButton from "./back-button"
import ButtonGroup from "./button-group"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form"

export default function AddOnsForm() {
  const [
    { onlineService, largerStorage, customizableProfile, ...rest },
    setFormValues,
  ] = useAtom(formAtom)
  const router = useRouter()
  const form = useForm<z.infer<typeof addOnsFormSchema>>({
    resolver: zodResolver(addOnsFormSchema),
    defaultValues: {
      onlineService,
      largerStorage,
      customizableProfile,
    },
  })

  const onSubmit = (values: z.infer<typeof addOnsFormSchema>) => {
    setFormValues({
      ...rest,
      onlineService: values.onlineService,
      largerStorage: values.largerStorage,
      customizableProfile: values.customizableProfile,
    })
    router.push("/summary")
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-1 flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {Array.from(addOnPricing.entries()).map(([key, value]) => (
          <FormField
            control={form.control}
            name={key}
            key={key}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="cursor-pointer">
                  <Card
                    className={cn(
                      "border hover:border-primary",
                      field.value && "border-primary bg-background/50"
                    )}
                  >
                    <CardContent className="flex items-center gap-6 p-4">
                      <FormControl>
                        <Checkbox
                          className="border-accent data-[state=checked]:border-accent data-[state=checked]:bg-accent"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="!mt-0 space-y-1">
                        <span className="text-base font-bold">
                          {value.name}
                        </span>
                        <FormDescription>{value.description}</FormDescription>
                      </div>
                      <span className="ml-auto text-accent">
                        {rest.yearlyBilling
                          ? `+ €${value.price.yearly}/yr`
                          : `+ €${value.price.monthly}/mo`}
                      </span>
                    </CardContent>
                  </Card>
                </FormLabel>
              </FormItem>
            )}
          />
        ))}

        <ButtonGroup
          backButton={<BackButton path={"/select-plan"} />}
          nextButton={<Button type="submit">Next step</Button>}
        />
      </form>
    </Form>
  )
}

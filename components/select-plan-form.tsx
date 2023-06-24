"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useAtom } from "jotai"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { formAtom } from "@/lib/atoms"
import { selectPlanFormSchema } from "@/lib/form-schema"

import { planPricing } from "../data/price-maps"
import BackButton from "./back-button"
import ButtonGroup from "./button-group"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Switch } from "./ui/switch"

export default function SelectPlanForm() {
  const [{ plan, yearlyBilling, ...rest }, setFormValues] = useAtom(formAtom)
  const router = useRouter()
  const form = useForm<z.infer<typeof selectPlanFormSchema>>({
    resolver: zodResolver(selectPlanFormSchema),
    defaultValues: {
      plan,
      yearlyBilling,
    },
  })

  const yearlyBillingValue = form.watch("yearlyBilling")

  const onSubmit = (values: z.infer<typeof selectPlanFormSchema>) => {
    setFormValues({
      ...rest,
      plan: values.plan,
      yearlyBilling: values.yearlyBilling,
    })
    router.push("/add-ons")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-2 md:gap-6"
      >
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Select your plan</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-6"
                >
                  {Array.from(planPricing.entries()).map(([key, value]) => (
                    <FormItem key={key}>
                      <FormLabel htmlFor={key}>
                        <FormControl>
                          <RadioGroupItem
                            className="sr-only"
                            value={key}
                            id={key}
                          />
                        </FormControl>
                        <Card className="cursor-pointer border hover:border-primary">
                          <CardContent className="flex gap-4 p-4 lg:flex-col lg:gap-8">
                            <Image
                              src={`/icon-${key}.svg`}
                              width={40}
                              height={40}
                              alt={key}
                            />
                            <div className="flex flex-col gap-2">
                              <span className="font-bold">{value.name}</span>
                              {yearlyBillingValue ? (
                                <>
                                  <span className="text-muted">
                                    €{value.price.yearly}/yr
                                  </span>
                                  <span>2 months free</span>
                                </>
                              ) : (
                                <span className="text-muted">
                                  €{value.price.monthly}/mo
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="yearlyBilling"
          render={({ field }) => (
            <FormItem className="flex w-full items-baseline justify-center gap-4 rounded-xl bg-background/50 pb-3 pt-2">
              <FormLabel className={yearlyBillingValue ? "text-muted" : ""}>
                Monthly
              </FormLabel>
              <FormControl>
                <Switch
                  defaultChecked={field.value}
                  onCheckedChange={field.onChange}
                  className="!mt-0"
                />
              </FormControl>
              <FormLabel className={!yearlyBillingValue ? "text-muted" : ""}>
                Yearly
              </FormLabel>
            </FormItem>
          )}
        />

        <ButtonGroup
          backButton={<BackButton path={"/"} />}
          nextButton={<Button type="submit">Next step</Button>}
        />
      </form>
    </Form>
  )
}

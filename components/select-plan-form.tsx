"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { formAtom } from "@/lib/atoms"
import { selectPlanFormSchema } from "@/lib/form-schema"

import BackButton from "./back-button"
import ButtonGroup from "./button-group"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Switch } from "./ui/switch"

export default function SelectPlanForm() {
  const [{ plan, yearlyBilling, ...rest }, setFormValues] = useAtom(formAtom)
  const [yearlyBillingValue, setYearlyBillingValue] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof selectPlanFormSchema>>({
    resolver: zodResolver(selectPlanFormSchema),
    defaultValues: {
      plan,
      yearlyBilling,
    },
  })

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
        className="flex flex-1 flex-col gap-6"
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
                  className="grid grid-cols-1 gap-6 lg:grid-cols-3"
                >
                  <FormItem>
                    <FormLabel htmlFor="arcade">
                      <FormControl>
                        <RadioGroupItem
                          className="sr-only"
                          value="arcade"
                          id="arcade"
                        />
                      </FormControl>
                      <Card className="check-card">
                        <CardContent className="p-4">
                          <Image
                            src="/icon-arcade.svg"
                            width={40}
                            height={40}
                            alt="icon-arcade"
                          />
                          <div className="flex flex-col gap-2 pt-8">
                            <span className="font-bold">Arcade</span>
                            {yearlyBillingValue ? (
                              <>
                                <span className="text-muted">€90/yr</span>
                                <span>2 months free</span>
                              </>
                            ) : (
                              <span className="text-muted">€9/mo</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="advanced">
                      <FormControl>
                        <RadioGroupItem
                          className="sr-only"
                          value="advanced"
                          id="advanced"
                        />
                      </FormControl>
                      <Card className="check-card">
                        <CardContent className="p-4">
                          <Image
                            src="/icon-advanced.svg"
                            width={40}
                            height={40}
                            alt="icon-advanced"
                          />
                          <div className="flex flex-col gap-2 pt-8">
                            <span className="font-bold">Advanced</span>
                            {yearlyBillingValue ? (
                              <>
                                <span className="text-muted">€120/yr</span>
                                <span>2 months free</span>
                              </>
                            ) : (
                              <span className="text-muted">€12/mo</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="pro">
                      <FormControl>
                        <RadioGroupItem
                          className="sr-only"
                          value="pro"
                          id="pro"
                        />
                      </FormControl>
                      <Card className="check-card">
                        <CardContent className="p-4">
                          <Image
                            src="/icon-pro.svg"
                            width={40}
                            height={40}
                            alt="icon-pro"
                          />
                          <div className="flex flex-col gap-2 pt-8">
                            <span className="font-bold">Pro</span>
                            {yearlyBillingValue ? (
                              <>
                                <span className="text-muted">€150/yr</span>
                                <span>2 months free</span>
                              </>
                            ) : (
                              <span className="text-muted">€15/mo</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="yearlyBilling"
          render={({ field }) => (
            <FormItem className="flex w-full items-baseline justify-center gap-4 rounded-xl bg-background pb-3 pt-2">
              <FormLabel className={yearlyBillingValue ? "text-muted" : ""}>
                Monthly
              </FormLabel>
              <FormControl>
                <Switch
                  defaultChecked={field.value}
                  onCheckedChange={() => {
                    field.onChange(field.value)
                    setYearlyBillingValue(!yearlyBillingValue)
                  }}
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
          backButton={<BackButton />}
          nextButton={<Button type="submit">Next step</Button>}
        />
      </form>
    </Form>
  )
}

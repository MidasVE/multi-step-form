"use client"

import { useRouter } from "next/navigation"
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
        <FormField
          control={form.control}
          name="onlineService"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="cursor-pointer">
                <Card
                  className={cn(
                    "border hover:border-primary",
                    field.value && "border-primary bg-background"
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
                        Online service
                      </span>
                      <FormDescription>
                        Access to multiplayer games
                      </FormDescription>
                    </div>
                    <span className="ml-auto text-accent">
                      {rest.yearlyBilling ? "+ €10/yr" : "+ €1/mo"}
                    </span>
                  </CardContent>
                </Card>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="largerStorage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="cursor-pointer">
                <Card
                  className={cn(
                    "border hover:border-primary",
                    field.value && "border-primary bg-background"
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
                        Larger storage
                      </span>
                      <FormDescription>Extra 1TB of cloud save</FormDescription>
                    </div>
                    <span className="ml-auto text-accent">
                      {rest.yearlyBilling ? "+ €20/yr" : "+ €2/mo"}
                    </span>
                  </CardContent>
                </Card>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customizableProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="cursor-pointer">
                <Card
                  className={cn(
                    "border hover:border-primary",
                    field.value && "border-primary bg-background"
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
                        Customizable profile
                      </span>
                      <FormDescription>
                        Custom theme on your profile
                      </FormDescription>
                    </div>
                    <span className="ml-auto text-accent">
                      {rest.yearlyBilling ? "+ €20/yr" : "+ €20/mo"}
                    </span>
                  </CardContent>
                </Card>
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

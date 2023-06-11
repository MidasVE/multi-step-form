"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { formAtom } from "@/lib/atoms"
import { personalInfoFormSchema } from "@/lib/form-schema"
import {
  Form,
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import ButtonGroup from "./button-group"
import { Button } from "./ui/button"

export const PersonalInfoForm = () => {
  const [{ name, email, phone, ...rest }, setFormValues] = useAtom(formAtom)
  const router = useRouter()
  const form = useForm<z.infer<typeof personalInfoFormSchema>>({
    resolver: zodResolver(personalInfoFormSchema),
    defaultValues: {
      name,
      email,
      phone,
    },
  })

  const onSubmit = (values: z.infer<typeof personalInfoFormSchema>) => {
    setFormValues({
      ...rest,
      ...values,
    })
    router.push("/select-plan")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Name</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <FormInput placeholder="e.g Stephen King" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Email Address</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <FormInput
                  placeholder="e.g. stephenking@lorem.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Phone Number</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <FormInput
                  placeholder="e.g +1 234 567 890"
                  {...field}
                  type={"tel"}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <ButtonGroup
          nextButton={
            <Button className="ml-auto" type="submit">
              Next step
            </Button>
          }
        ></ButtonGroup>
      </form>
    </Form>
  )
}

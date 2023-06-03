"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { atom, useAtom } from "jotai"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { lengthError, requiredError } from "@/lib/errorMessages"
import {
  Form,
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "./ui/button"

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: requiredError,
    })
    .max(50, {
      message: lengthError({ max: 50 }),
    }),
  email: z
    .string()
    .min(1, {
      message: requiredError,
    })
    .email(),
  phone: z
    .string()
    .min(1, {
      message: requiredError,
    })
    .min(10, {
      message: lengthError({ min: 10 }),
    })
    .max(12, {
      message: lengthError({ max: 12 }),
    }),
})

const formAtom = atom({
  name: "",
  email: "",
  phone: "",
})

export const PersonalInfoForm = () => {
  const [formValues, setFormValues] = useAtom(formAtom)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formValues,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFormValues(values)
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
        <Button type="submit" className="ml-auto mt-auto">
          Next step
        </Button>
      </form>
    </Form>
  )
}

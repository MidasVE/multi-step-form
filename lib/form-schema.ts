import { z } from "zod"

const requiredError = "This field is required"
const lengthError = ({ min, max }: { min?: number; max?: number }) => {
  if (min && max) {
    return `Between ${min} and ${max} characters long`
  } else if (min) {
    return `At least ${min} characters long`
  } else if (max) {
    return `At most ${max} characters long`
  }
}

export const personalInfoFormSchema = z.object({
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

export const selectPlanFormSchema = z.object({
  plan: z.enum(["arcade", "advanced", "pro"]).optional(),
  yearlyBilling: z.boolean().optional(),
})

export const addOnsFormSchema = z.object({
  onlineService: z.boolean().optional(),
  largerStorage: z.boolean().optional(),
  customizableProfile: z.boolean().optional(),
})

export const formSchema = personalInfoFormSchema
  .merge(selectPlanFormSchema)
  .merge(addOnsFormSchema)

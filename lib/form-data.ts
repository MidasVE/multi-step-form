import { atom } from "jotai"
import { z } from "zod"

import { lengthError, requiredError } from "./errorMessages"

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

export { formSchema, formAtom }

import { atom } from "jotai"
import { z } from "zod"

import { formSchema } from "./form-schema"

type Form = z.infer<typeof formSchema>

const formAtom = atom<Form>({
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  yearlyBilling: false,
})

export { formAtom }

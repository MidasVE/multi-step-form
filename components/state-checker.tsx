"use client"

import { useRouter } from "next/navigation"
import { useAtomValue } from "jotai"

import { formAtom } from "@/lib/form-data"

import { useToast } from "./ui/use-toast"

export default function StateChecker() {
  const formValues = useAtomValue(formAtom)
  const router = useRouter()
  const { toast } = useToast()

  if (!formValues.name || !formValues.email || !formValues.phone) {
    toast({
      title: "Please fill in the first part of the form",
      description: "You need to fill in the form before proceeding",
      duration: 5000,
    })
    router.push("/")
  }

  return null
}

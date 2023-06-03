"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAtomValue } from "jotai"

import { formAtom } from "@/lib/form-data"

import { useToast } from "./ui/use-toast"

interface StateCheckerProps {
  children: React.ReactNode
}

export default function StateChecker({ children }: StateCheckerProps) {
  const formValues = useAtomValue(formAtom)
  const router = useRouter()
  const { toast } = useToast()

  const firstFormValuesSet =
    formValues.name && formValues.email && formValues.phone

  useEffect(() => {
    if (!firstFormValuesSet) {
      toast({
        title: "Please fill in the first part of the form",
        description: "You need to fill in the form before proceeding",
        duration: 5000,
      })
    }
    router.push("/")
  }, [firstFormValuesSet, router, toast])

  return <>{firstFormValuesSet && <>{children}</>}</>
}

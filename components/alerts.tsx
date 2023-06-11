"use client"

import Link from "next/link"
import { useAtomValue } from "jotai"

import { formAtom } from "@/lib/atoms"

import { Alert, AlertDescription } from "./ui/alert"

export default function Alerts() {
  const form = useAtomValue(formAtom)

  const personalInfoSet = form.name && form.email && form.phone
  const selectPlanSet = form.plan && form.yearlyBilling !== undefined

  return (
    <>
      {!personalInfoSet && (
        <Alert variant={"destructive"}>
          <AlertDescription>
            Please provide your{" "}
            <Link href="/" className="underline">
              personal information
            </Link>
            .
          </AlertDescription>
        </Alert>
      )}
      {!selectPlanSet && (
        <Alert variant={"destructive"}>
          <AlertDescription>
            Please select a{" "}
            <Link href={"/select-plan"} className="underline">
              plan.
            </Link>
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}

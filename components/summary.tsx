"use client"

import Link from "next/link"
import { addOnPricing, planPricing } from "@/data/price-maps"
import { useAtomValue } from "jotai"

import { formAtom } from "@/lib/atoms"

import BackButton from "./back-button"
import ButtonGroup from "./button-group"
import { Button } from "./ui/button"

export default function Summary() {
  const form = useAtomValue(formAtom)

  if (!form.plan) return null

  const addOns = Array.from(addOnPricing.entries())
  const filteredAddOns = addOns.filter(([key]) => form[key])

  const total = (yearlyBilling: boolean): number => {
    let total = 0
    total +=
      planPricing.get(form.plan || "arcade")?.price[
        yearlyBilling ? "yearly" : "monthly"
      ] ?? 0
    for (const [, value] of filteredAddOns) {
      total += value.price[yearlyBilling ? "yearly" : "monthly"]
    }
    return total
  }

  return (
    <>
      <div className="rounded-lg bg-background/50 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-bold">
              {planPricing.get(form.plan)?.name} (
              {form.yearlyBilling ? "Yearly" : "Monthly"})
            </span>
            <Link
              href="/select-plan"
              className="text-sm text-muted underline hover:text-accent"
            >
              Change plan
            </Link>
          </div>
          <span className="font-bold">
            €
            {form.yearlyBilling
              ? planPricing.get(form.plan)?.price.yearly + "/yr"
              : planPricing.get(form.plan)?.price.monthly + "/mo"}
          </span>
        </div>
        <hr />
        <div className="mt-4 space-y-2 text-sm">
          {filteredAddOns.map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-muted">{value.name}</span>
              <span>
                +€
                {form.yearlyBilling
                  ? value.price.yearly + "/yr"
                  : value.price.monthly + "/mo"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between px-6">
        <span className="font-bold">Total</span>
        <span className="font-bold">
          € {total(form.yearlyBilling)} /{form.yearlyBilling ? "yr" : "mo"}
        </span>
      </div>
      <ButtonGroup
        backButton={<BackButton />}
        nextButton={<Button type="submit">Submit</Button>}
      />
    </>
  )
}

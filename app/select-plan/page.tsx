import SelectPlanForm from "@/components/select-plan-form"

export default function Page() {
  return (
    <>
      <div>
        <h1>Select your plan</h1>
        <p className="text-sm text-muted">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <SelectPlanForm />
    </>
  )
}

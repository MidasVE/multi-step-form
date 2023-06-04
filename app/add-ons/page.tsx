import AddOnsForm from "@/components/add-ons-form"
import StateChecker from "@/components/state-checker"

export default function Page() {
  return (
    <StateChecker>
      <div>
        <h1>Pick add-ons</h1>
        <p className="text-sm text-muted">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <AddOnsForm />
    </StateChecker>
  )
}

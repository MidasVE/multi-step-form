import BackButton from "@/components/back-button"
import StateChecker from "@/components/state-checker"

export default function IndexPage() {
  return (
    <StateChecker>
      <>
        <div>
          <h1>Select your plan</h1>
          <p className="text-sm text-muted">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <BackButton></BackButton>
      </>
    </StateChecker>
  )
}

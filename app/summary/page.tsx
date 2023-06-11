import Alerts from "@/components/alerts"
import Summary from "@/components/summary"

export default function Page() {
  return (
    <>
      <div>
        <h1>Finishing up</h1>
        <p className="text-sm text-muted">
          Double-check everything looks 0K before confirming.
        </p>
      </div>
      <Alerts />
      <Summary />
    </>
  )
}

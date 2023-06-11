import AddOnsForm from "@/components/add-ons-form"

export default function Page() {
  return (
    <>
      <div>
        <h1>Pick add-ons</h1>
        <p className="text-sm text-muted">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <AddOnsForm />
    </>
  )
}

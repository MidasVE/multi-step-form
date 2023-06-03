import { PersonalInfoForm } from "@/components/personal-info-form"

export default function IndexPage() {
  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p className="text-sm text-muted">
          Please provide your name, email address and phone number.
        </p>
      </div>
      <PersonalInfoForm />
    </>
  )
}

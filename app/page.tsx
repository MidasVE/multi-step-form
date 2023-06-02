import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { PersonalInfoForm } from "@/components/personal-info-form"

export default function IndexPage() {
  return (
    <section className="container grid flex-1 items-center justify-center">
      <Card>
        <CardContent className="flex p-4">
          <Image
            src={"/bg-sidebar-desktop.svg"}
            width={274}
            height={568}
            alt="bg-sidebar-desktop"
          ></Image>
          <div className="p-form flex flex-col space-y-8">
            <div>
              <h1>Personal info</h1>
              <p className="text-sm text-muted">
                Please provide your name, email address and phone number.
              </p>
            </div>
            <PersonalInfoForm />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

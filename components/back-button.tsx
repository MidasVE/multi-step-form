"use client"

import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

function BackButton() {
  const router = useRouter()
  return (
    <Button variant="ghost" onClick={() => router.push("/")}>
      Go Back
    </Button>
  )
}

export default BackButton

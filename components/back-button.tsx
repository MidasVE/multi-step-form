"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

function BackButton({ path }: { path?: string }) {
  const router = useRouter()

  if (path) {
    return (
      <Button variant="ghost" asChild>
        <Link href={path}>Go Back</Link>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      onClick={() => {
        return router.back()
      }}
    >
      Go Back
    </Button>
  )
}

export default BackButton

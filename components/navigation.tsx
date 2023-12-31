"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { NavItem } from "../types/nav"

const navItems: NavItem[] = [
  {
    title: "Your info",
    href: "/",
    active: false,
  },
  {
    title: "Select plan",
    href: "/select-plan",
    active: false,
  },
  {
    title: "Add-ons",
    href: "/add-ons",
    active: false,
  },
  {
    title: "Summary",
    href: "/summary",
    active: false,
  },
]

export default function Navigation() {
  const pathName = usePathname()

  navItems.forEach((item) => {
    item.active = item.href === pathName
  })

  return (
    <nav>
      <ul className="flex justify-center gap-4 text-sm text-primary-foreground md:block md:space-y-6">
        {navItems.map((item, index) => (
          <li key={item.title} className="flex items-center gap-3">
            <Link
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border font-bold",
                item.active &&
                  "border-secondary bg-secondary text-secondary-foreground"
              )}
              href={item.href}
            >
              {index + 1}
            </Link>
            <div className="hidden flex-col uppercase md:flex">
              <span className="text-xs font-thin">Step {index + 1}</span>
              <span className="font-semibold tracking-wider">{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

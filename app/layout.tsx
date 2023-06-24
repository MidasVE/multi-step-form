/* eslint-disable @next/next/no-head-element */
import "@/styles/globals.css"
import { Metadata } from "next"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "@/components/navigation"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>Multi step form</title>
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider>
            {/* Mobile Navigation */}
            <div className="fixed left-0 top-0 z-10 block h-[194px] w-full md:hidden">
              <Image
                src={"/bg-sidebar-mobile.svg"}
                fill
                priority
                className="object-cover"
                alt="bg-sidebar-mobile"
              ></Image>
              <div className="absolute inset-0 px-8 py-10">
                <Navigation />
              </div>
            </div>
            <div className="pointer-events-none relative flex min-h-screen flex-col py-24 md:py-0">
              <section className="container grid flex-1 items-center justify-center">
                <Card className="pointer-events-auto relative z-10 lg:w-[908px]">
                  <CardContent className="flex p-2 md:p-4">
                    {/* Desktop Navigation */}
                    <div className="relative hidden md:block">
                      <Image
                        src={"/bg-sidebar-desktop.svg"}
                        width={274}
                        height={568}
                        priority
                        alt="bg-sidebar-desktop"
                      ></Image>
                      <div className="absolute inset-0 px-4 py-10 md:px-8">
                        <Navigation />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col space-y-4 px-4 py-6 md:space-y-8 md:px-20 md:pt-12">
                      {children}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

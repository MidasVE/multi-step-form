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
    shortcut: "/favicon-16x16.png",
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
            <div className="relative flex min-h-screen flex-col">
              <section className="container grid flex-1 items-center justify-center">
                <Card>
                  <CardContent className="flex p-4">
                    <div className="relative">
                      <Image
                        src={"/bg-sidebar-desktop.svg"}
                        width={274}
                        height={568}
                        alt="bg-sidebar-desktop"
                      ></Image>
                      <div className="absolute inset-0 px-8 py-10">
                        <Navigation />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-8 px-[100px] pb-4 pt-12">
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

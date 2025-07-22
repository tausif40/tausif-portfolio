import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tausif - Web Developer",
  description:
    "Web developer specializing in React, Next.js and Node.js. View my projects and get in touch for collaboration opportunities.",
  keywords: ["web developer", "react", "nextjs", "typescript", "portfolio"],
  authors: [{ name: "Tausif" }],
  openGraph: {
    title: "Tausif - Web Developer",
    description: "I am a Web developer specializing in React, Next.js",
    type: "website",
    locale: "India",
  },
  generator: 'tausif'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main>
            <Navigation />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

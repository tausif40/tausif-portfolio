import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tausif - Frontend Developer",
  description:
    "Passionate frontend developer specializing in React, Next.js. View my projects and get in touch for collaboration opportunities.",
  keywords: ["web developer", "react", "nextjs", "typescript", "portfolio"],
  authors: [{ name: "Tausif" }],
  openGraph: {
    title: "Tausif - Frontend Developer",
    description: "Passionate frontend developer specializing in React, Next.js",
    type: "website",
    locale: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tausif - Frontend Developer",
    description: "Passionate frontend developer specializing in React, Next.js",
  },
  generator: 'tausif.portfolio'
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

"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, Code2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Show/hide nav based on scroll direction
      if (scrollPosition > lastScrollY && scrollPosition > 100) {
        setShowNav(false) // Scrolling down
      } else {
        setShowNav(true) // Scrolling up
      }
      setLastScrollY(scrollPosition)

      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPositionForSections = scrollPosition + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPositionForSections >= offsetTop && scrollPositionForSections < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${showNav ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "nav-blur shadow-2xl" : "bg-transparent backdrop-blur-md md:backdrop-blur-none"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 group-hover:scale-110">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-foreground">Tausif</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-96 py-4 border-t border-border/50" : "max-h-0"}`}>
          <div className="flex flex-col space-y-2 backdrop-blur-md rounded-lg p-2 bg-black/30">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg group relative ${activeSection === item.href.substring(1)
                  ? "text-primary bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

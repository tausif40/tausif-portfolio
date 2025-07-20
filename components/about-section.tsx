"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, MapPin, Calendar, Coffee, Code, Heart } from "lucide-react"
import { portfolioData } from "@/lib/data"
import React, { useEffect, useState } from "react"

export function AboutSection() {
  const { personal } = portfolioData
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-400/10 via-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16`}>
          <Badge variant="secondary" className="mb-6 glass-morphism text-lg px-6 py-3 neon-border">
            <User className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">About Me</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Get To Know </span>
            <span className="text-secondary-foreground"> me </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              better
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about my journey, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}>
            <div className="relative">
              <div className="relative w-[340px] h-[360px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={"/img/about-img.jpg"}
                  alt={personal.name}
                  className="relative z-10 w-[340px] h-[360px] rounded-3xl border-4 object-cover border-white/20 shadow-2xl hover:scale-105 transition-all duration-700 object-top"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years Experience", value: "1+", icon: Calendar, color: "from-blue-500 to-cyan-500" },
                { label: "Projects Completed", value: "9+", icon: Code, color: "from-purple-500 to-pink-500" },
                { label: "Cups of Coffee", value: "∞", icon: Coffee, color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <Card key={stat.label} className="glass-morphism border-0 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-10 h-10 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${stat.color} p-3 shadow-lg`}>
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div
                      className={`text-2xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {/* Passionate Developer & Problem Solver */}
                Skilled Developer & Problem Solver
              </h3>

              <div className="space-y-4 text-md md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hi there! I'm <span className="font-semibold text-foreground">{personal.name}</span>, a passionate
                  frontend developer with over 1+ years of experience creating digital solutions that make a
                  difference.
                </p>

                <p>
                  I specialize in building scalable web applications using modern technologies like React, Next.js, and
                  Node.js. My journey in tech started with a curiosity about how things work, and it has evolved into a
                  deep passion for creating elegant solutions to complex problems.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I believe in continuous learning and staying
                  updated in this fast-changing industry.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <Card className="glass-morphism border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Personal Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <span className="ml-2 font-medium">{personal.location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <span className="ml-2 font-medium">{personal.email}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="ml-2 font-medium">{personal.phone}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <span className="ml-2 font-medium text-green-500">Available for hire</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-105 text-lg px-8 py-4 rounded-2xl group"
              >
                <a href="#contact">
                  <Heart className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span className="font-bold">Let's Work Together</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass-morphism border-2 !border-purple-500/60 !bg-gray-700 hover:border-purple-600 transition-all duration-500 hover:scale-105 text-lg px-8 py-4 rounded-2xl group bg-transparent"
              >
                <a href='/resume/Tausif-resume.pdf' target="_blank" rel="noreferrer">
                  <Code className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  <span className="font-bold">View Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

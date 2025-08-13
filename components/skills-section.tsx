"use client"

import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/lib/data"
import { useEffect, useState } from "react"
import { Sparkles, } from "lucide-react"
import { Card, CardContent } from "./ui/card"

export function SkillsSection() {
  const { skills } = portfolioData
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])


  const getSkillColor = (skillName: string, index: number) => {
    const colors = [
      "from-pink-500 via-red-500 to-yellow-500",
      "from-green-400 via-blue-500 to-purple-600",
      "from-purple-400 via-pink-400 to-red-400",
      "from-yellow-400 via-red-500 to-pink-500",
      "from-indigo-400 via-purple-400 to-pink-400",
      "from-green-400 via-cyan-500 to-blue-500",
      "from-orange-400 via-red-400 to-pink-400",
      "from-cyan-400 via-blue-500 to-indigo-600",
      "from-lime-400 via-green-500 to-emerald-600",
      "from-rose-400 via-pink-500 to-purple-600",
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="pt-20 pb-16 md:px-4 relative overflow-hidden bg-gradient-to-br from-background via-slate-50/50 to-background dark:via-slate-900/50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-float">
        </div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-green-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        >

        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-morphing"></div>

        {/* Floating Tech Icons */}
        {["⚛️", "🚀", "💻", "🎨", "⚡", "🔥", "✨", "🌟"].map((icon, i) => (
          <div
            key={i}
            className="absolute text-6xl opacity-5 animate-float select-none"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        {/* ${isVisible ? "animate-bounce-in" : "opacity-0"} */}
        <div className={`text-center mb-16`}>
          <Badge variant="secondary" className="mb-6 glass-morphism text-lg px-6 py-3 neon-border">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">Tech Arsenal</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Skills</span><span> & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of cutting-edge technologies and frameworks that I use to create
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold">
              {" "}
              extraordinary digital experiences
            </span>
          </p>
        </div>
        {/* Category Filter */}
        <div
          className={`mb-16 ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex m-auto justify-center max-w-5xl flex-wrap gap-4 md:gap-6">
            {skills.map((skill, index) => {
              return (
                <>
                  <div key={index} className={`glass-morphism transition-all duration-700 sm:text-md md:text-lg pl-6 pr-8 py-2 border rounded-full flex items-center gap-4`}>
                    <img src={skill.icon} alt="" className="w-6 h-6 object-cover" />
                    <p className="min-w-max">{skill.name}</p>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
          style={{ animationDelay: "1s" }}
        >
          <Card className="glass-morphism border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-gradient-shift" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 rainbow-text">Always Learning</h3>
                <p className="text-muted-foreground">
                  I'm constantly exploring new technologies and staying up-to-date with the latest industry trends to
                  deliver cutting-edge solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}

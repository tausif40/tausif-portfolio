"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, TrendingUp, Award, Briefcase } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useEffect, useState } from "react"

export function ExperienceSection() {
  const { experience } = portfolioData
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getExperienceIcon = (index: number) => {
    const icons = [Award, TrendingUp, Building2]
    return icons[index % icons.length]
  }

  const getGradientColor = (index: number) => {
    const gradients = [
      "from-purple-500 via-pink-500 to-red-500",
      "from-blue-500 via-cyan-500 to-teal-500",
      "from-green-500 via-emerald-500 to-lime-500",
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-morphing"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/10 via-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-morphing"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating Experience Icons */}
        {["💼", "🚀", "⭐", "🏆", "💡"].map((icon, i) => (
          <div
            key={icon}
            className="absolute text-4xl opacity-10 animate-float select-none"
            style={{
              left: `${15 + i * 18}%`,
              top: `${25 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20`}>
          <Badge variant="secondary" className="mb-6 glass-morphism text-lg px-6 py-3 neon-border">
            <Award className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">Professional Journey</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Work </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional evolution through innovative companies and
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold">
              {" "}
              game-changing projects
            </span>
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          {/* <div className="absolute transform w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full opacity-30 left-10"></div> */}

          <div className="space-y-16">
            {experience.map((exp, index) => {
              const gradientColor = getGradientColor(index)
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isVisible ? "animate-slide-in-bounce" : "opacity-0"
                    }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >

                  {/* Experience Card */}
                  <Card
                    className={`group w-full glass-morphism border-0 hover:shadow-2xl transition-all duration-700 `}
                  >
                    {/* Animated Border */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColor} animate-shimmer`}
                    />

                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                    />

                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 flex items-center gap-3 mb-2">
                            <Briefcase className="w-6 h-6" />
                            {exp.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium text-lg">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-2 w-fit glass-morphism bg-gradient-to-r ${gradientColor} text-white border-0 px-4 py-2`}
                        >
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 px-8 pb-8">
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">{exp.description}</p>

                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="transition-all duration-300 cursor-pointer holographic border-0 text-sm font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {/* Floating Decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Experience Stats */}
        <div
          className={`mt-24 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
          style={{ animationDelay: "1.5s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1+", label: "Years Experience", icon: "⏰", color: "from-blue-500 to-cyan-500" },
              { number: "1", label: "Companies", icon: "🏢", color: "from-purple-500 to-pink-500" },
              { number: "8+", label: "Projects Delivered", icon: "🚀", color: "from-green-500 to-emerald-500" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className="group glass-morphism border-0 hover:shadow-xl transition-all duration-500 hover:scale-110"
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="text-4xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                    <div
                      className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

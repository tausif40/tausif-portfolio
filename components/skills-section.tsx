"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/lib/data"
import { useEffect, useState } from "react"
import { Code2, Palette, Database, Cloud, Globe, Zap, Cpu, Terminal, Layers, GitBranch, Rocket, Star, Sparkles, } from "lucide-react"

export function SkillsSection() {
  const { skills } = portfolioData
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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

  const skillIcons: { [key: string]: any } = {
    React: Code2,
    "Next.js": Rocket,
    TypeScript: Terminal,
    JavaScript: Terminal,
    "redux toolkit": '',
    "Tailwind CSS": Palette,
    "Shadcn UI": Layers,
    "Socket IO": Cpu,
    HTML5: Globe,
    CSS3: Palette,
    Figma: Palette,
    MongoDB: Database,
    GraphQL: Globe,
    Git: GitBranch,
    Docker: Cloud,
    AWS: Cloud,
    Jest: Zap,
    "Express.js": Cpu,
    // Webpack: Cloud,
    // Kubernetes: Cloud,
    // Jenkins: Cloud,
  }

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
    <section className="pt-20 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-background via-slate-50/50 to-background dark:via-slate-900/50">
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
            key={icon}
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

        {/* Central Tech Hub */}
        {/* <div
          className={`flex justify-center mb-14`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full glass-morphism flex items-center justify-center animate-neon-glow border-4 border-purple-500/30">
              <div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center animate-spin shadow-2xl"
                style={{ animationDuration: "10s" }}
              >
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 rounded-full blur-2xl animate-pulse"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="animate-orbit absolute"
                  style={{
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${8 + i * 2}s`,
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full shadow-lg ${i === 0
                      ? "bg-gradient-to-r from-pink-500 to-violet-500"
                      : i === 1
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "bg-gradient-to-r from-yellow-500 to-orange-500"
                      }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Category Filter */}
        <div
          className={`mb-16 ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >

          {/* Skills Constellation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const gradientColor = getSkillColor(skill.name, index)
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`relative group`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Card className="tech-card-3d glass-morphism border-0 hover:shadow-2xl transition-all duration-700 group-hover:scale-105 relative overflow-hidden">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <CardContent className="p-6 text-center relative z-10">
                      {/* Skill Icon */}
                      <div className="relative mb-4">
                        <div className={`w-16 h-16 mx-auto rounded-2xl z-10`}>
                          {/* <IconComponent className="w-full h-full text-white" /> */}
                          <Icon className={`text-${skill.color} w-14 h-14`} />
                        </div>
                        {/* {skill.color} */}
                        {/* bg-gradient-to-br ${gradientColor} p-4 group-hover:animate-tech-hover shadow-lg relative */}
                        {/* Floating Particles */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        {/* <div
                          className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100"
                          style={{ animationDelay: "0.5s" }}
                        ></div> */}
                      </div>

                      {/* Skill Name */}
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </h3>

                      {/* Skill Category */}
                      <Badge variant="outline" className="text-xs font-medium mb-2 holographic border-0">
                        {skill.category}
                      </Badge>

                      {/* Skill Emoji */}
                      {/* <div className="text-2xl group-hover:animate-bounce">{skill.icon}</div> */}

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    </CardContent>

                    {/* Neon Border Effect */}
                    <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 bg-gradient-to-r ${gradientColor} p-[1px]`} >
                      <div className="w-full h-full bg-background rounded-lg"></div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Interactive Stats */}
          {/* <div
          className={`mt-20 text-center ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
          style={{ animationDelay: "1.5s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: `${allSkills.length}+`, label: "Technologies", icon: "🚀" },
              { number: "3+", label: "Years Experience", icon: "⭐" },
              { number: "14+", label: "Projects Built", icon: "💻" },
              { number: "∞", label: "Lines of Code", icon: "🔥" },
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <Card className="glass-morphism border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-3xl font-black rainbow-text mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </section>
  )
}

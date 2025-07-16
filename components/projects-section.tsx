"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Eye, Rocket, Code2, Play, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/lib/data"
import { useState, useEffect } from "react"

export function ProjectsSection() {
  const { projects } = portfolioData
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-rotate featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [featuredProjects.length])

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-br from-background via-purple-50/20 to-background dark:via-purple-950/20 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-morphing"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-morphing"
          style={{ animationDelay: "5s" }}
        ></div>

        {/* Floating Project Icons */}
        {["🚀", "💻", "🎨", "⚡", "🔥", "✨"].map((icon, i) => (
          <div
            key={icon}
            className="absolute text-6xl font-mono text-purple-500/10 animate-float select-none"
            style={{
              left: `${5 + i * 15}%`,
              top: `${15 + i * 12}%`,
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
        <div className={`text-center mb-20`}>
          <Badge variant="secondary" className="mb-6 glass-morphism text-lg px-6 py-3 neon-border">
            <Rocket className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">Portfolio Showcase</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="rainbow-text">Amazing </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive into my digital universe of innovative solutions and
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold">
              {" "}
              cutting-edge applications
            </span>
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-24">
          <div
            className={`relative ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* Main Featured Project Display */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden glass-morphism border-0 shadow-2xl">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-1000 ${index === activeProject ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-12">
                    <div className="max-w-2xl">
                      <Badge className="mb-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-0 animate-pulse text-lg px-4 py-2">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Featured Project
                      </Badge>

                      <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{project.title}</h3>
                      <p className="text-sm mb-4 text-gray-100">({project.subTitle})</p>
                      <p className="text-xl text-gray-200 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="glass-morphism text-white border-white/20 text-sm px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          asChild
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-110 text-lg px-8 py-4 rounded-2xl group"
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <Play className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                            <span className="font-bold">Live Demo</span>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          asChild
                          className="glass-morphism border-2 border-white/30 hover:border-white/50 text-white hover:text-white transition-all duration-500 hover:scale-110 text-lg px-8 py-4 rounded-2xl bg-transparent group"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Code2 className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                            <span className="font-bold">View Code</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Action Buttons */}
                  {/* <div className="absolute top-8 right-8 flex gap-3">
                    <Button
                      size="icon"
                      className="glass-morphism hover:scale-125 transition-all duration-300 w-12 h-12"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="glass-morphism hover:scale-125 transition-all duration-300 w-12 h-12"
                    >
                      <Zap className="w-5 h-5" />
                    </Button>
                  </div> */}
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${index === activeProject
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Thumbnails */}
            <div className="flex gap-4 mt-8 justify-center">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden transition-all duration-500 ${index === activeProject ? "scale-110 ring-4 ring-purple-500" : "opacity-60 hover:opacity-100"
                    }`}
                >
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <div
            className={`text-center mb-16 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <h3 className="text-4xl font-bold mb-6 rainbow-text">More Incredible Work</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {/* Explore additional projects that showcase my versatility and creativity */}
              See more projects that highlights my skills and creativity."
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group break-inside-avoid glass-morphism border-0 hover:shadow-2xl transition-all duration-700 `} //${isVisible ? "animate-slide-in-bounce" : "opacity-0"} hover:scale-105 cursor-pointer 
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              // onMouseEnter={() => setHoveredProject(project.id)}
              // onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-all duration-700 "
                  />
                  {/* group-hover:scale-125 group-hover:rotate-2 */}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Floating Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="icon"
                      className="glass-morphism hover:scale-110 transition-all duration-300 w-10 h-10"
                      asChild
                    >
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      size="icon"
                      className="glass-morphism hover:scale-110 transition-all duration-300 w-10 h-10"
                      asChild
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <Link href={project.liveUrl}>
                    <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
                      {project.title}
                    </CardTitle>
                  </Link>
                  <p className="text-sm font-light mb-2 text-gray-500">- &nbsp;&nbsp;&nbsp;{project.subTitle}</p>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6 h-16">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:scale-110 transition-transform duration-300 cursor-pointer holographic border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Animated Border */}
                {/* <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredProject === project.id ? "animate-rainbow" : ""
                    }`}
                  style={{
                    background: "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff6600)",
                    padding: "2px",
                    backgroundSize: "400% 400%",
                  }}
                >
                  <div className="w-full h-full bg-background rounded-lg"></div>
                </div> */}
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
          style={{ animationDelay: "1.5s" }}
        >
          <Card className="glass-morphism border-0 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 animate-gradient-shift" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 rainbow-text">Ready to Start Your Project?</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's collaborate and bring your amazing ideas to life with cutting-edge technology!
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl text-lg px-12 py-6 rounded-2xl group"
                >
                  <Link href="#contact">
                    <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    <span className="font-bold">Let's Build Something Amazing</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

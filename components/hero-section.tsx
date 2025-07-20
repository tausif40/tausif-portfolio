"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Sparkles, Zap, Rocket, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/lib/data"
import React, { useEffect, useState } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiZod
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";


export function HeroSection() {
  const { personal } = portfolioData
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [magicActive, setMagicActive] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Create blinking dots on mouse move
      const dot = document.createElement("div")
      dot.className = "mouse-dot"
      dot.style.left = e.clientX + "px"
      dot.style.top = e.clientY + "px"
      document.body.appendChild(dot)

      // Remove dot after animation
      setTimeout(() => {
        if (document.body.contains(dot)) {
          document.body.removeChild(dot)
        }
      }, 600)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const triggerMagic = () => {
    setMagicActive(true)

    // Create magical effects
    createFireworks()
    createFloatingElements()
    createMatrixRain()
    createColorExplosion()

    // Reset after 5 seconds
    setTimeout(() => {
      setMagicActive(false)
      // Clean up effects
      document.querySelectorAll(".magic-effect").forEach((el) => el.remove())
    }, 5000)
  }

  const createFireworks = () => {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const firework = document.createElement("div")
        firework.className = "magic-effect fixed pointer-events-none z-[9999]"
        firework.style.left = Math.random() * window.innerWidth + "px"
        firework.style.top = Math.random() * window.innerHeight + "px"
        firework.innerHTML = "✨"
        firework.style.fontSize = "30px"
        firework.style.animation = "firework-explosion 2s ease-out forwards"
        document.body.appendChild(firework)
      }, i * 200)
    }
  }

  const createFloatingElements = () => {
    const emojis = ["🚀", "⚡", "🔥", "💫", "🌟", "✨", "🎉", "🎊", "💎", "🦄"]
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const element = document.createElement("div")
        element.className = "magic-effect fixed pointer-events-none z-[9999]"
        element.style.left = Math.random() * window.innerWidth + "px"
        element.style.top = window.innerHeight + "px"
        element.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
        element.style.fontSize = "40px"
        element.style.animation = "float-up 4s ease-out forwards"
        document.body.appendChild(element)
      }, i * 100)
    }
  }

  const createMatrixRain = () => {
    for (let i = 0; i < 10; i++) {
      const column = document.createElement("div")
      column.className = "magic-effect fixed pointer-events-none z-[9998] text-green-400 font-mono text-sm"
      column.style.left = Math.random() * window.innerWidth + "px"
      column.style.top = "-100px"
      column.style.animation = "matrix-fall 3s linear forwards"
      column.innerHTML = "01010101<br/>11001100<br/>10101010<br/>01110111"
      document.body.appendChild(column)
    }
  }

  const createColorExplosion = () => {
    const colors = ["#ff00ff", "#00ffff", "#ffff00", "#ff6600", "#ff0066", "#66ff00"]
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const particle = document.createElement("div")
        particle.className = "magic-effect fixed pointer-events-none z-[9999] rounded-full"
        particle.style.width = "10px"
        particle.style.height = "10px"
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        particle.style.left = window.innerWidth / 2 + "px"
        particle.style.top = window.innerHeight / 2 + "px"
        particle.style.animation = "particle-explosion 3s ease-out forwards"
        particle.style.transform = `rotate(${Math.random() * 360}deg)`
        document.body.appendChild(particle)
      }, i * 50)
    }
  }


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Tausif-resume.pdf';
    link.download = 'Tausif-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* ${magicActive ? "magic-active" : ""} */}
      <section className={`min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden`} >
        {/* Mouse Follower Effect */}
        <div
          className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className={`${isVisible ? "animate-slide-in-bounce" : "opacity-0"} mt-16`}>
            <div className="space-y-8">
              <Badge variant="secondary" className="text-sm glass-morphism neon-border px-6 py-2">
                <Sparkles className="w-3 h-3 mr-2 animate-pulse" />
                <span className="rainbow-text font-semibold">Available for Epic Projects</span>
              </Badge>

              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
                  <span className="block text-muted-foreground text-2xl md:text-3xl font-normal">Hey, I'm</span>
                  <span className="relative block">
                    <span className="animate-gradient-shift text-4xl md:text-6xl font-bold tracking-tight">{personal.name}</span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                  </span>
                </h1>

                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {personal.title}
                  </h2>
                  <div className="absolute -bottom-4 left-0 w-32 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full animate-rainbow"></div>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold">
                  {personal.tagline}
                </span>
              </p>

              <div className="relative p-[20px] md:p-6 glass-morphism rounded-3xl border neon-border">
                <p className="md:text-lg text-muted-foreground leading-relaxed">{personal.bio}</p>
                <div className="absolute top-3 right-4 flex gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl text-lg px-8 py-4 rounded-2xl"
              >
                <Link href="#contact">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="group glass-morphism border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-500 hover:scale-110 hover:shadow-xl text-lg px-8 py-4 rounded-2xl neon-border bg-transparent"
              >
                <div onClick={handleDownload} >
                  <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                  <span className="font-bold">Download CV</span>
                </div>
              </Button>
            </div>

            <div className="flex gap-6 mt-4">
              {[
                { href: personal.social.github, icon: Github, color: "from-gray-600 to-gray-800" },
                { href: personal.social.linkedin, icon: Linkedin, color: "from-blue-600 to-blue-800" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="group w-14 h-14 glass-morphism hover:scale-125 transition-all duration-500 rounded-2xl"
                >
                  <Link href={social.href} target="_blank">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                    ></div>
                    <social.icon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-bounce" : "opacity-0"} lg:pl-20 mt-12 mb-16`}
            style={{ animationDelay: "0.5s" }}>
            <div className="relative w-96 h-96 m-auto">
              {/* 3 Orbital Rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ width: `${360 + i * 60}px`, height: `${360 + i * 60}px` }}
                >
                  <div
                    className={`absolute inset-0 rounded-full border-2 opacity-30`}
                    style={{
                      borderColor: ["#ff00ff", "#00ffff", "#ffff00"][i],
                      borderStyle: "solid",
                    }}
                  />
                </div>
              ))}

              {/* Main Avatar */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={personal.avatar || "/placeholder.svg"}
                  alt={personal.name}
                  className="relative z-10 h-[300px] w-[300px] rounded-full border-4 object-cover border-white/20 shadow-2xl hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Ring 1 - 3 icons */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-container-1">
                {[
                  { icon: FaReact, color: 'text-blue-500', angle: 0 },
                  { icon: SiZod, color: 'text-sky-300', angle: 120 },
                  { icon: FaGitAlt, color: 'text-red-500', angle: 240 },
                ].map((item, index) => (
                  <div
                    key={`ring1-${index}`}
                    className="absolute"
                    style={{
                      top: "50%", left: "50%",
                      transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(180px) rotate(-${item.angle}deg)`,
                    }}
                  >
                    <div className="text-3xl opacity-90 hover:scale-125 transition-transform cursor-pointer hover:opacity-100">
                      <item.icon className={`${item.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Ring 2 - 4 icons at 180px radius */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-container-2">
                {[
                  { icon: "⌛", angle: 0 },
                  { icon: "⚡", angle: 90 },
                  { icon: "🔥", angle: 180 },
                  { icon: "🎓", angle: 270 },
                ].map((item, index) => (
                  <div
                    key={`ring2-${index}`}
                    className="absolute"
                    style={{
                      top: "50%", left: "50%",
                      transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(210px) rotate(-${item.angle}deg)`,
                    }}
                  >
                    <div className="text-3xl opacity-90 hover:scale-125 transition-transform cursor-pointer hover:opacity-100">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ring 3 - 4 icons at 220px radius */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-container-3">
                {[
                  { icon: "🎯", angle: 45 },
                  { icon: "💻", angle: 135 },
                  { icon: "🥇", angle: 225 },
                  { icon: "🏆", angle: 315 },
                ].map((item, index) => (
                  <div
                    key={`ring3-${index}`}
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(240px) rotate(-${item.angle}deg)`,
                    }}
                  >
                    <div className="text-3xl opacity-90 hover:scale-125 transition-transform cursor-pointer hover:opacity-100">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
      <style jsx global>{`
        @keyframes firework-explosion {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(4) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes particle-explosion {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0);
            opacity: 0;
          }
        }

        .magic-active {
          animation: rainbow-pulse 0.5s ease-in-out infinite alternate;
        }

        @keyframes rainbow-pulse {
          0% {
            filter: hue-rotate(0deg) saturate(1);
          }
          100% {
            filter: hue-rotate(360deg) saturate(2);
          }
        }

        @keyframes orbit-ring-1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-ring-2 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes orbit-ring-3 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .orbit-container-1 {
          animation: orbit-ring-1 20s linear infinite;
        }

        .orbit-container-2 {
          animation: orbit-ring-2 35s linear infinite;
        }

        .orbit-container-3 {
          animation: orbit-ring-3 50s linear infinite;
        }
      `}</style>
    </>
  )
}

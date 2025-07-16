"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useEffect, useState } from "react"

export function ServicesSection() {
  const { services } = portfolioData
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

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-morphing"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-morphing"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20`}>
          <Badge variant="secondary" className="mb-6 glass-morphism text-lg px-6 py-3 neon-border">
            <CheckCircle className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">What I Offer</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
            <span> & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to bring your ideas to life with
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold">
              {" "}
              cutting-edge technology and creative excellence
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group glass-morphism border-0 hover:shadow-2xl transition-all duration-700 hover:scale-105 relative overflow-hidden ${isVisible ? "animate-slide-in-bounce" : "opacity-0"
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Service Icon */}
              <div className="absolute top-4 left-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.color} p-3 shadow-2xl group-hover:animate-bounce`} >
                  <div className="text-white text-xl">{service.icon}</div>
                </div>
              </div>

              <CardHeader className="pt-20 pb-4 relative z-10">
                <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>

              {/* Floating Decoration */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-20 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
          style={{ animationDelay: "1s" }}
        >
          <Card className="glass-morphism border-0 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 animate-gradient-shift" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 rainbow-text">Ready to Start Your Project?</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's discuss how I can help bring your vision to life with the perfect solution.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl text-lg px-12 py-6 rounded-2xl group"
                >
                  <a href="#contact">
                    <CheckCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    <span className="font-bold">Get Started Today</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

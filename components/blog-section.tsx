"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/lib/data"
import { useEffect, useState } from "react"

export function BlogSection() {
  const { blog } = portfolioData
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    const el = document.getElementById("blog")
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-morphing"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-morphing"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20`}>
          <Badge variant="secondary" className="mb-6 glass-morphism text-lg px-6 py-3 neon-border">
            <Clock className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">Latest Insights</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Blog</span>
            <span> & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughts on code, design and the ever-changing tech landscape
          </p>
        </div>

        {/* Posts */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blog.map((post, idx) => (
            <Card
              key={post.title}
              className={`group glass-morphism border-0 hover:shadow-2xl transition-all duration-700 hover:scale-105 relative overflow-hidden ${
                isVisible ? "animate-slide-in-bounce" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <CardHeader className="pt-6 pb-3">
                <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-3 text-sm">
                  <CalendarIcon className="w-4 h-4" /> {post.date} • {post.readTime}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs holographic border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                >
                  <Link href="#!" aria-label={`Read ${post.title}`}>
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Eye, Rocket, Code2, Play, Zap, MoveLeft, MoveRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/lib/data"
import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import 'swiper/css';
import 'swiper/css/navigation';

export function ProjectsSection() {
  const { projects } = portfolioData
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [thumbnailIndex, setThumbnailIndex] = useState(0)
  const thumbnailsRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

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
    }, 8000)
    return () => clearInterval(interval)
  }, [featuredProjects.length])


  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };


  useEffect(() => {
    startInterval(); // Start on mount

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", stopInterval);
      container.addEventListener("mouseleave", startInterval);

      container.addEventListener("mouseenter", () => {
        console.log("Hovered: Stop auto-swap");
        stopInterval();
      });


    }

    return () => {
      stopInterval();
      if (container) {
        container.removeEventListener("mouseenter", stopInterval);
        container.removeEventListener("mouseleave", startInterval);

        container.addEventListener("mouseleave", () => {
          console.log("Mouse left: Start auto-swap");
          startInterval();
        });
      }
    };

  }, [featuredProjects.length]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 8000); // 6 seconds
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };


  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextProject()
    }
    if (isRightSwipe) {
      prevProject()
    }
  }

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  // Thumbnail navigation
  const nextThumbnail = () => {
    const maxIndex = Math.max(0, featuredProjects.length - 3)
    setThumbnailIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevThumbnail = () => {
    setThumbnailIndex((prev) => Math.max(prev - 1, 0))
  }

  const visibleProjects = otherProjects.slice(0, 6)


  return (
    <section
      id="projects"
      className="py-24 md:px-4 bg-gradient-to-br from-background via-purple-50/20 to-background dark:via-purple-950/20 relative overflow-hidden"
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
            <div
              id="projects"
              className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden glass-morphism border-0 shadow-2xl"
              ref={containerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/80 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end md:p-12">
                    <div className="max-w-2xl">
                      <div className="p-4">
                        <Badge className="mb-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-0 animate-pulse text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                          <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 fill-current" />
                          {project.status === "Working" ? "Working" : "Featured Project"}
                        </Badge>

                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">{project.title}</h3>
                        <p className="text-base md:text-xl text-gray-200 mb-6 leading-relaxed cursor-default">{project.description}</p>

                        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 cursor-default">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="font-semibold text-white border-white/20 text-xs md:text-sm px-2 md:px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="w-full flex justify-center md:justify-start gap-3 md:gap-4 px-3 pb-10 md:pb-6">
                        <Button
                          asChild
                          size="lg"
                          className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-110 text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl group"
                        >
                          <Link href={featuredProjects[activeProject].liveUrl} target="_blank">
                            <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:animate-bounce" />
                            <span className="font-bold">Live Demo</span>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          asChild
                          className="w-full glass-morphism border-2 border-white/30 hover:border-white/50 text-white hover:text-white transition-all duration-500 hover:scale-110 text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-transparent group"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Code2 className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:animate-bounce" />
                            <span className="font-bold">View Code</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Action Buttons */}
                  {/* <div className="absolute top-4 md:top-8 right-4 md:right-8 flex gap-2 md:gap-3">
                    <Button
                      size="icon"
                      className="glass-morphism hover:scale-125 transition-all duration-300 w-10 h-10 md:w-12 md:h-12"
                    >
                      <Eye className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="glass-morphism hover:scale-125 transition-all duration-300 w-10 h-10 md:w-12 md:h-12"
                    >
                      <Zap className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div> */}
                </div>
              ))}

              {/* Swipe Navigation Buttons */}
              {/* <Button
                variant="outline"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 glass-morphism bg-transparent hover:scale-110 transition-all duration-300 w-10 h-10 md:w-12 md:h-12"
                onClick={prevProject}
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 glass-morphism bg-transparent hover:scale-110 transition-all duration-300 w-10 h-10 md:w-12 md:h-12"
                onClick={nextProject}
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button> */}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3">
                {featuredProjects.map((_, index) => (
                  <>
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${index === activeProject
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                        }`}
                    />
                  </>
                ))}
              </div>

              {/* Swipe Indicator */}
              {/* <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 md:hidden">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <ChevronLeft className="w-3 h-3" />
                  <span>Swipe</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div> */}
            </div>

            {/* Project Thumbnails with Navigation */}
            <div className="relative mt-8">
              <div className="flex items-center justify-center">
                {/* Thumbnail Navigation - Left Arrow */}
                {thumbnailIndex > 0 && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="mr-4 glass-morphism bg-transparent hover:scale-110 transition-all duration-300 w-8 h-8 md:w-10 md:h-10"
                    onClick={prevThumbnail}
                  >
                    <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                )}

                {/* Thumbnails Container */}
                <div ref={thumbnailsRef} className="flex justify-center gap-2 md:gap-4 w-full">
                  {featuredProjects.map((project, i) => {
                    const actualIndex = thumbnailIndex + i
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveProject(actualIndex)}
                        className={`relative w-16 h-10 md:w-24 md:h-16 rounded-md md:rounded-xl transition-all duration-500 flex-shrink-0 
                          ${actualIndex === activeProject ? "ring-2 md:ring-4 ring-purple-500" : "opacity-60 hover:opacity-100"}`}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover w-16 h-10 md:w-24 md:h-16 rounded-lg md:rounded-xl"
                        />
                      </button>
                    )
                  })}
                </div>

                {/* Thumbnail Navigation - Right Arrow */}
                {/* {thumbnailIndex < featuredProjects.length - 3 && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-4 glass-morphism bg-transparent hover:scale-110 transition-all duration-300 w-8 h-8 md:w-10 md:h-10"
                    onClick={nextThumbnail}
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                )} */}
              </div>
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
          <div className="relative pb-4">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => { swiperRef.current = swiper; handleSlideChange(); }}
              onSlideChange={handleSlideChange}
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-16"
            >
              {otherProjects.map((project, index) => (
                <SwiperSlide >
                  <Card key={project.id}
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
                      <div className="absolute top-2 right-4 flex gap-2 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <Button
                          size="icon"
                          className="glass-morphism hover:scale-110 transition-all duration-300 w-10 h-10"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                        {/* <Button
                          size="icon"
                          className="glass-morphism hover:scale-110 transition-all duration-300 w-10 h-10"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button> */}
                      </div>

                      {/* Project Number */}
                      <div className="absolute top-2 left-2 transition-all duration-500">
                        <div className="px-2 bg-yellow-200 text-yellow-600 border border-yellow-500 rounded-full flex items-center justify-center text-sm">
                          {project?.status}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="p-6">
                      <Link href={project.liveUrl} target="_blank">
                        <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
                          {project.title}
                        </CardTitle>
                      </Link>
                      <p className="text-sm font-light mb-2 text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;({project.subTitle})</p>
                      <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 min-h-16">
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

                      {/* <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                      </div> */}
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
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              <Button
                variant="outline"
                disabled={isBeginning}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <MoveLeft />
              </Button>
              <Button
                disabled={isEnd}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <MoveRight />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href='all-projects'>
              <Button variant='secondary' className="px-8">See All Project</Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
          style={{ animationDelay: "1.5s" }}
        >
          <Card className="glass-morphism border-0 max-w-2xl mx-auto">
            <CardContent className="p-4 sm:p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 animate-gradient-shift" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 rainbow-text">Ready to Start Your Project?</h3>
                <p className="text-sm md:text-lg text-muted-foreground mb-8">
                  Let's collaborate and bring your amazing ideas to life with cutting-edge technology!
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-105 hover:shadow-xl text-md md:text-lg px-4 sm:px-6 md:px-12 py-6 rounded-2xl group"
                >
                  <Link href="#contact">
                    <Rocket className="w-6 h-6 mr-2 md:mr-3 group-hover:animate-bounce" />
                    <span className="font-semibold md:font-bold">Let's Build Something Amazing</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section >
  )
}

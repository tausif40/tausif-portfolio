"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Send, MessageCircle, Zap, Sparkles, Check, Loader2 } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const { personal } = portfolioData
  const form = useRef(null);
  const [ loading, setLoading ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(false)
  const [ success, setSuccess ] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    // const loadingToast = toast.loading('Sending...');
    // console.log(formData)
    emailjs.sendForm('service_zw30qf3', 'template_ecfpkcl', form.current, 'fJNjYfFHkKhzjxsR7')
      .then((result) => {
        console.log("Message sent:", result.text);
        form.current.reset();
        setSuccess(true)
      })
      .catch((error) => {
        console.error("Error sending message:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  }


  const getButtonContent = () => {
    switch (true) {
      case loading:
        return (
          <>
            {/* <div className="w-5 h-5 ml-3 relative z-10">
              <div className="absolute inset-0 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
            </div> */}
            <span className="relative z-10">Sending...</span>
            <Loader2 className="w-5 h-5 mr-3 relative z-10 animate-spin" />
          </>
        )
      case success:
        return (
          <div className="flex items-center gap-4">
            <Sparkles className="w-5 h-5 ml-3 relative z-10 animate-pulse" />
            <span className="relative z-10">Sent successfully!</span>
            <Check className="w-6 h-6 mr-3 relative z-10 animate-bounce" />
          </div>
        )
      default:
        return (
          <div className="flex items-center gap-4">
            <Zap className="w-5 h-5 ml-3 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">Send Message</span>
            <Send className="w-6 h-6 mr-3 relative z-10 group-hover:animate-bounce" />
          </div>
        )
    }
  }

  const getButtonClasses = () => {
    const baseClasses = "w-full h-14 text-lg font-bold transition-all duration-500 group relative overflow-hidden"

    switch (true) {
      case loading:
        return `${baseClasses} bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 animate-pulse`
      case success:
        return `${baseClasses} bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600`
      default:
        return `${baseClasses} bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 hover:scale-102 hover:shadow-2xl`
    }
  }


  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 via-pink-400/15 to-red-400/15 rounded-full blur-3xl animate-morphing"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/15 via-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-morphing"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Floating Contact Icons */}
        {[ "📧", "💬", "🤝", "✨", "🚀" ].map((icon, i) => (
          <div
            key={icon}
            className="absolute text-5xl opacity-10 animate-float select-none"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center`}>
          <Badge variant="secondary" className="mb-8 glass-morphism text-lg px-6 py-3 neon-border">
            <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
            <span className="rainbow-text font-bold">Let's Connect</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Get In </span>
            {/* <span className="text-gray-300"> in </span> */}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold">
              {" "}
              something extraordinary together
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-24">
          {/* Left Side - Contact Info */}
          <div className={`space-y-10 ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}>
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Create Magic Together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited about new opportunities and innovative projects. Whether you have a groundbreaking
                idea or need a skilled developer to join your team, let's make it happen!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Response Time", value: "< 24hrs", icon: "⚡" },
                  { label: "Projects Done", value: "14+", icon: "🚀" },
                  { label: "Happy Clients", value: "100%", icon: "😊" },
                  { label: "Coffee Consumed", value: "∞", icon: "☕" },
                ].map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="glass-morphism border-0 hover:scale-105 transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="font-bold text-lg rainbow-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Me",
                  subtitle: "Drop me a line anytime",
                  value: personal.email,
                  color: "from-pink-500 to-red-500",
                },
                {
                  icon: Phone,
                  title: "Call Me",
                  subtitle: "Let's talk directly",
                  value: personal.phone,
                  color: "from-green-500 to-blue-500",
                },
                // {
                //   icon: MapPin,
                //   title: "Visit Me",
                //   subtitle: "Based in",
                //   value: personal.location,
                //   color: "from-blue-500 to-purple-500",
                // },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="group glass-morphism border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 flex items-center gap-6 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.color} p-4 group-hover:animate-skill-pulse shadow-lg`}
                    >
                      <contact.icon className="w-full h-full text-white" />
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">{contact.subtitle}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className={`glass-morphism border-0 hover:shadow-2xl transition-all duration-700 ${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* Animated Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-shimmer" />

            <CardHeader className="p-8 relative">
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send Message
                </span>
              </CardTitle>

              {/* <CardDescription className="text-md">
                Fill out the form below and I'll get back to you faster than you can say "Hello World!"
              </CardDescription> */}
            </CardHeader>

            <CardContent className="p-8 pt-0">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="h-14 text-lg glass-morphism border-2 border-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/40 disabled:opacity-50"
                      required
                      disabled={loading}
                      onChange={() => setSuccess(false)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <div className="relative group">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      required
                      disabled={loading}
                      onChange={() => setSuccess(false)}
                      className="h-14 text-lg glass-morphism border-2 border-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/40 disabled:opacity-50"
                    />
                    {/* opacity-0 group-hover:opacity-100  */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write Description Here"
                      rows={6}
                      required
                      disabled={loading}
                      onChange={() => setSuccess(false)}
                      className="text-lg glass-morphism border-2 border-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/40 resize-none disabled:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className={getButtonClasses()}
                // className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-500 hover:scale-103 hover:shadow-2xl group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* <Zap className="w-5 h-5 ml-3 relative z-10 group-hover:animate-pulse" />
                  <span className="relative z-10">{loading ? 'Sending...' : success ? 'Message sent!' : 'Send Message'}</span>
                  <Send className="w-5 h-5 mr-3 relative z-10 group-hover:animate-bounce" /> */}

                  {loading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                  )}

                  {success && (
                    <div className="absolute inset-0 overflow-hidden">
                      {[ ...Array(6) ].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "1s",
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {getButtonContent()}
                </Button>
              </form>

              <div className="mt-10 p-4 glass-morphism rounded-xl text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                {success
                  ? <p className="text-sm text-green-400 flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Message sent successfully! I will get back to you soon.
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </p>
                  : <p className="text-sm text-muted-foreground flex items-center">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />&nbsp;&nbsp;
                    <p> Every great project starts with a conversation. Why not start one now? </p>
                  </p>
                }
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

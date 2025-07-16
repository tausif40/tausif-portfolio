import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        {/* <div id="services">
          <ServicesSection />
        </div> */}
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
  
        {/* <div id="blog">
          <BlogSection />
        </div> */}
        {/* <TestimonialsSection /> */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/lib/data"

export function Footer() {
  const { personal } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">{personal.name}</h3>
            <p className="text-muted-foreground">{personal.title}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {personal.location} • {personal.email}
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href={personal.social.github} target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={personal.social.linkedin} target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`mailto:${personal.email}`}>
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-start justify-center gap-2">
            © {currentYear} {personal.name}.
            Made this using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}

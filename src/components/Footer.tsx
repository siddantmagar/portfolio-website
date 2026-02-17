import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:atharvamagar5866@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-xl text-foreground">Siddant Magar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Artificial Intelligence & Data Science Engineer passionate about creating 
                intelligent solutions through practical web applications and innovative problem-solving.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-foreground">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Pune, Maharashtra, India</p>
                <p>atharvamagar5866@gmail.com</p>
                <p>+91 9623373232</p>
              </div>
              <Button 
                onClick={scrollToTop}
                variant="outline" 
                size="sm"
                className="mt-4"
              >
                Back to Top
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Siddant Magar. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted/30 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 mt-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">SM</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Siddant Magar
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Artificial Intelligence & Data Science Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Third Year B.E. student in Artificial Intelligence & Data Science with strong academic performance 
            (FE SGPA: 9.14, SE SGPA: 9.32). Skilled in building practical web applications using modern technologies 
            and seeking opportunities to apply technical skills and gain industry experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            
            <Button variant="ghost" size="sm" className="p-3">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3" onClick={() => window.open('mailto:atharvamagar5666@gmail.com')}>
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToNext}
          className="animate-bounce p-2"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
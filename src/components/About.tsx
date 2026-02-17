import { Code, Palette, Zap, Users } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.'
  },
  {
    icon: Palette,
    title: 'Design Focused',
    description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Building fast, optimized applications that deliver results at scale.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and stakeholders to achieve common goals.'
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate third-year B.E. student in Artificial Intelligence & Data Science with 
                strong academic performance (FE SGPA: 9.14, SE SGPA: 9.32). My journey in technology 
                began with curiosity about how intelligent systems work, which evolved into building 
                practical web applications that solve real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in web development technologies including JavaScript, HTML, CSS, Tailwind CSS, 
                Bootstrap, Node.js, Express.js, and databases like SQL and MongoDB. My approach combines 
                technical knowledge with practical implementation to create functional and responsive applications.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not studying or coding, you'll find me exploring new AI/ML technologies, working on 
                hackathon projects, and continuously learning through online courses and certifications.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary">AI & Data Science Student</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary">9.14 SGPA</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary">Hackathon Participant</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-3 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
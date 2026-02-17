import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'C++', 'SQL']
  },
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'EJS', 'Responsive Web Design']
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB']
  },
  {
    title: 'Languages',
    skills: ['English', 'Marathi', 'Hindi']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and skills that I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl text-center mb-12 text-foreground">Academic & Project Journey</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      year: '2025',
                      title: 'Campus Lost & Found Web App',
                      company: 'Hackathon Project',
                      description: 'Built a full-stack web application to streamline lost and found management on campus with student view, teacher dashboard, and statistics tracking.'
                    },
                    {
                      year: '2024',
                      title: 'Blender Training Certification',
                      company: 'IIT Bombay - Spoken Tutorial Project',
                      description: 'Completed Blender training with a score of 85.00 and earned 2 credits.'
                    },
                    {
                      year: '2024',
                      title: 'Ruby Programming Training',
                      company: 'IIT Bombay - Spoken Tutorial Project',
                      description: 'Completed Ruby programming training with a score of 86.67 and earned 1 credit.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                      <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:even:ml-auto md:even:pl-8 md:even:pr-0 md:even:text-left">
                        <Card className="p-6">
                          <div className="text-sm text-primary mb-1">{item.year}</div>
                          <h4 className="mb-1 text-foreground">{item.title}</h4>
                          <div className="text-sm text-muted-foreground mb-2">{item.company}</div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
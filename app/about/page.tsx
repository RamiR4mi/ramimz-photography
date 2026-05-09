import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'About | Rami Mazaoui',
  description: 'Learn about Rami Mazaoui and his photography journey',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-muted py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Exploring the world through the lens
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/images/portfolio-1.jpg"
                  alt="Rami Mazaoui"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">Rami Mazaoui</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                I&apos;m a photographer with a passion for capturing meaningful moments and visual stories. My work spans
                across multiple genres including portraiture, landscape, urban, and fine art photography.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                What drives my photography is the pursuit of light, composition, and the emotional connection within each
                frame. Every project is an opportunity to explore new perspectives and push creative boundaries.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I&apos;m not behind the camera, you can find me exploring new locations, studying visual art, or
                collaborating with other creative professionals.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-border">
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Photography Styles</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Portrait Photography</li>
                  <li>• Landscape Photography</li>
                  <li>• Urban Photography</li>
                  <li>• Fine Art Photography</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Technical Skills</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Professional Camera Systems</li>
                  <li>• Lighting Techniques</li>
                  <li>• Post-Processing</li>
                  <li>• Composition & Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you&apos;d like to discuss a project or have questions about my work, I&apos;d be happy to connect.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}

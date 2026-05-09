import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featuredWorks = [
    { id: '1', src: '/images/portfolio-1.jpg', alt: 'Portrait Photography', width: 4000, height: 6000, title: 'Portraits' },
    { id: '2', src: '/images/portfolio-2.jpg', alt: 'Landscape Photography', width: 4000, height: 6000, title: 'Landscapes' },
    { id: '3', src: '/images/portfolio-3.jpg', alt: 'Urban Photography', width: 4000, height: 6000, title: 'Urban' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/portfolio-2.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Rami Mazaoui
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 text-balance">
              Everyone is born a photographer, our eyes are the cameras, our memories the film.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Works Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Works</h2>
            <p className="text-lg text-muted-foreground">
              A selection of recent projects and favorite pieces
            </p>
          </div>

          <GalleryGrid items={featuredWorks} />

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to collaborate?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m always interested in new projects and opportunities. Let&apos;s create something beautiful together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

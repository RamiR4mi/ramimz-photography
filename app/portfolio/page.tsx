import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'

export const metadata = {
  title: 'Portfolio | Rami Mazaoui',
  description: 'Complete photography portfolio showcasing diverse projects and visual work',
}

export default function PortfolioPage() {
  const portfolioItems = [
    { id: '1', src: '/images/portfolio-1.jpg', alt: '', width: 4000, height: 6000, title: 'Portraits' },
    { id: '2', src: '/images/portfolio-2.jpg', alt: '', width: 4000, height: 6000, title: 'Landscapes' },
    { id: '3', src: '/images/portfolio-3.jpg', alt: '', width: 4000, height: 6000, title: 'Urban' },
    { id: '4', src: '/images/portfolio-4.jpg', alt: '', width: 4000, height: 6000, title: 'Nature' },
    { id: '5', src: '/images/portfolio-5.jpg', alt: '', width: 4000, height: 6000, title: 'Interior' },
    { id: '6', src: '/images/portfolio-6.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '7', src: '/images/portfolio-7.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '8', src: '/images/portfolio-8.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '9', src: '/images/portfolio-9.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '10', src: '/images/portfolio-10.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '11', src: '/images/portfolio-11.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '13', src: '/images/portfolio-13.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '14', src: '/images/portfolio-14.jpg', alt: '', width: 4000, height: 6000, title: 'Water' },
    { id: '15', src: '/images/portfolio-15.jpg', alt: '', width: 4000, height: 6000, title: 'Water' }

  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-muted py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive collection of my work across various styles and subjects
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={portfolioItems} />
        </section>

        {/* Info Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Interested in my work?</h2>
            <p className="text-lg text-muted-foreground">
              Whether you need photography services or would like to discuss a project, I&apos;d love to hear from you.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

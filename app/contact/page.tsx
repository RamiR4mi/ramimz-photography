'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-muted py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Artist Statement</h1>
            <p className="text-lg text-muted-foreground">
              I take photos because every little detail in the world counts, and I want to make a one of a kind picture for each subject by working with shades, colors, angles, and rules like the rule of thirds. My first contact with camera started
              when I was out in the Midelt region looking at minerals the way light hit the shiny vanadinite grabbed me, and I spent days taking shots from different spots, learning that photography is about turning things that have stories, like the vanadinite that cavemen put their life in danger to find, into stories only I can tell. My main goal is to make ordinary scenes special, with no two pictures the same, and with every choice, every focus.
</p><p className="text-lg text-muted-foreground">
When I work, I start by closely watching the subject and choose ones with lots of interest like rough rocks or people in their daily life because they let me adjust shades and colors to show feeling, change angles to find new views, what I choose to include and exclude, what's focused and what's not, and composition rules like the rule of thirds which is one of my favorite styles that I have learned in my photography lab and class. I pick these because they give me room to experiment and fit the real stories I see.
</p><p className="text-lg text-muted-foreground">
I like landscape photos best, especially ones with nature details or light portraits, since they help me build each shot step by step into something fresh and true, open to interpretation and imagination something that will either deliver an idea to you, let you think, or feed your eye. Right now, I'm working on two series: one of old mineral sites around Midelt using soft morning light and strong color contrasts to show hidden history, and another from my future trip to Scandinavia capturing icy fjords and northern lights with cool tones and wide angles. This grew out of my vanadinite days and life in places like Mibladen, Ahouli, blending desert grit with frozen vastness. I'm exploring sharp focus against soft blurs, testing high and low angles, and challenging rules to spark thoughts inside the viewer's mind on nature's power, travel risks, and quiet beauty everywhere.

            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:R.Mazaoui@aui.ma"
                    className="text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    R.Mazaoui@aui.ma
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Available For</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Commercial Projects</li>
                    <li>• Portrait Sessions</li>
                    <li>• Event Photography</li>
                    <li>• Collaborations</li>
                    <li>• Consultations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-sm text-green-800">
                      Thank you for your message! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Rami Mazaoui</h3>
            <p className="text-sm text-muted-foreground">
              A polyglot, hiker, boxer and photographer who captures moments and stories through the lens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Email:{' '}
              <a href="mailto:R.Mazaoui@aui.ma" className="hover:text-foreground transition-colors">
                R.Mazaoui@aui.ma
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 Rami Mazaoui. All rights reserved.</p>
          <p>Photography Portfolio</p>
        </div>
      </div>
    </footer>
  )
}

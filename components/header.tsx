'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">RM</span>
            </div>
            <span className="hidden sm:inline text-lg font-semibold text-foreground">Rami Mazaoui</span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/portfolio') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/about') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/contact') ? 'bg-primary text-primary-foreground' : 'bg-primary text-primary-foreground hover:opacity-90'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

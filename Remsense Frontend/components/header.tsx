'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Leaf } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Remsense</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Benefits
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="/technology" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Technology
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-r from-primary/20 to-accent/20 border-t border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of farmers using Remsense to make smarter decisions and grow more sustainably.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          No credit card required. Free 30-day trial. Cancel anytime.
        </p>
      </div>
    </section>
  )
}

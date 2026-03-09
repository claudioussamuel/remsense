'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'Increase Productivity',
    description: 'Make data-driven decisions that boost crop yields by up to 30% on average.',
  },
  {
    title: 'Reduce Costs',
    description: 'Eliminate fertilizer waste and optimize resource usage for maximum ROI.',
  },
  {
    title: 'Sustainable Farming',
    description: 'Practice precision agriculture while protecting soil health and the environment.',
  },
  {
    title: 'Save Time',
    description: 'Automate farm monitoring and get actionable insights without manual guesswork.',
  },
  {
    title: 'Scalable Solution',
    description: 'Works for small farms and large agricultural operations alike.',
  },
  {
    title: 'Community Support',
    description: 'Access a network of farmers and experts to share best practices and insights.',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Why Remsense</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Real Results for Real Farmers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Card } from '@/components/ui/card'
import { Lock, Users, TrendingUp, Award, Eye, DollarSign } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Immutable blockchain records provide transparent documentation of every farming decision, input used, and environmental condition throughout the entire crop cycle.',
  },
  {
    icon: Lock,
    title: 'Data Security & Ownership',
    description: 'Cryptographic encryption and decentralized storage ensure farmer data ownership and protection from unauthorized access while remaining verifiable for third parties.',
  },
  {
    icon: TrendingUp,
    title: 'Evidence-Based Decisions',
    description: 'Historical blockchain records enable farmers to analyze multi-season trends and make data-driven decisions for crop selection, planting dates, and input timing.',
  },
  {
    icon: Award,
    title: 'Verifiable Credentials',
    description: 'Blockchain-backed farm records enable certification for sustainable practices, organic farming, or fair trade, opening access to premium market segments.',
  },
  {
    icon: DollarSign,
    title: 'Improved Financial Access',
    description: 'Verifiable records of farm productivity, inputs, and soil health improve farmers\' ability to access loans, agricultural insurance, and credit facilities.',
  },
  {
    icon: Users,
    title: 'Consumer Trust',
    description: 'Consumers can trace food origin and production methods through blockchain, building trust and enabling premium pricing for sustainably produced agricultural products.',
  },
]

export function TechBenefits() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Advantages</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Blockchain for Agriculture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Blockchain technology solves fundamental challenges in agricultural data management and farmer financial inclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} className="p-8 border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

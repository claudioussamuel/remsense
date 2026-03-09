'use client'

import { Card } from '@/components/ui/card'
import { Package, Smartphone, LineChart, Users } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Package,
    title: 'Data Collection',
    description: 'Soil testers measure nutrient levels at different crop growth stages. GIS mapping delineates farm boundaries. Satellite NDVI imagery monitors crop health.',
    tech: 'Soil Sensors • GIS Mapping • NDVI Satellite Imagery',
  },
  {
    number: '2',
    icon: Smartphone,
    title: 'Data Integration',
    description: 'Climate data from Google Earth Engine provides rainfall and environmental conditions. All data flows through secure oracle networks for verification.',
    tech: 'Climate Data • Google Earth Engine • Oracle Networks',
  },
  {
    number: '3',
    icon: LineChart,
    title: 'Blockchain Recording',
    description: 'Verified data is cryptographically recorded on blockchain, creating immutable, transparent records of all farm activities throughout the growing season.',
    tech: 'Blockchain • Smart Contracts • Encryption',
  },
  {
    number: '4',
    icon: Users,
    title: 'Decision & Transparency',
    description: 'Farmers access historical data for evidence-based decisions. Verifiable records improve access to loans, insurance, and support services. Consumers see food origin.',
    tech: 'Analytics • Data History • Consumer Transparency',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Simple Process</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            How Remsense Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your farm with data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                <Card className="p-8 bg-card border-border/50 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary/20">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {step.description}
                  </p>
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-1">
                      Technology Stack
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {step.tech}
                    </p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

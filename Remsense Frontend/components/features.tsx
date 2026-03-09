'use client'

import { Card } from '@/components/ui/card'
import { DropletIcon, Gauge, TrendingUp, BarChart3, AlertCircle, Leaf } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Soil Health Monitoring',
    description: 'Real-time tracking of nutrient levels, pH, moisture, and organic matter in your soil.',
  },
  {
    icon: DropletIcon,
    title: 'Moisture & Rainfall',
    description: 'Automated tracking of soil moisture and rainfall patterns to optimize irrigation schedules.',
  },
  {
    icon: TrendingUp,
    title: 'Crop Growth Analytics',
    description: 'Monitor crop development stages with data-driven insights for optimal growth conditions.',
  },
  {
    icon: BarChart3,
    title: 'Fertilizer Management',
    description: 'Track fertilizer applications, calculate precise nutrient requirements, and reduce waste.',
  },
  {
    icon: AlertCircle,
    title: 'Smart Alerts',
    description: 'Receive timely notifications for soil deficiencies, disease risks, and optimal application windows.',
  },
  {
    icon: Leaf,
    title: 'Sustainability Insights',
    description: 'Practice precision agriculture while reducing environmental impact and costs.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Powerful Features</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Everything Farmers Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to help you make better decisions and grow more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow border-border/50 bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

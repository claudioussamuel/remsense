'use client'

import { Card } from '@/components/ui/card'
import { Layers, Database, Radio, Cpu } from 'lucide-react'

const layers = [
  {
    name: 'Data Collection Layer',
    icon: Radio,
    items: [
      'Soil Testing Devices - Measure NPK, pH, moisture, and micronutrients at different growth stages',
      'GIS Mapping - Delineate and map farm boundaries with precise geospatial data',
      'Satellite Imagery (NDVI) - Monitor crop health, vegetation index, and growth patterns',
      'Climate Integration - Real-time rainfall, temperature, and environmental conditions',
    ],
    color: 'from-primary/10 to-primary/5',
  },
  {
    name: 'Data Aggregation & Verification',
    icon: Cpu,
    items: [
      'Oracle Networks - Securely transmit data from multiple sources',
      'Data Validation - Verify accuracy and consistency before blockchain recording',
      'Real-time Processing - Analyze data streams and detect anomalies',
      'Google Earth Engine Integration - Access historical and predictive climate data',
    ],
    color: 'from-accent/10 to-accent/5',
  },
  {
    name: 'Blockchain & Smart Contracts',
    icon: Database,
    items: [
      'Smart Contracts - Manage and automate storage of soil nutrients, fertilizer records, crop health, and climate data',
      'Oracle Verification - Receive and validate verified data from oracle networks for secure blockchain recording',
      'Immutable Records - Cryptographically record all farm activities with permanent, tamper-proof timestamps',
      'Automated Triggers - Smart contracts detect anomalies and trigger alerts based on programmed thresholds and conditions',
    ],
    color: 'from-secondary/10 to-secondary/5',
  },
  {
    name: 'Application & Insights',
    icon: Layers,
    items: [
      'Farmer Dashboard - Real-time monitoring and decision support',
      'Historical Analytics - Evidence-based insights for future seasons',
      'Consumer Transparency - Track food origin and production methods',
      'Third-party Access - Enable loan, insurance, and support services verification',
    ],
    color: 'from-primary/10 to-primary/5',
  },
]

export function TechArchitecture() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">System Architecture</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Complete Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive, multi-layer system combining IoT sensors, satellite data, and blockchain technology.
          </p>
        </div>

        <div className="space-y-8">
          {layers.map((layer) => {
            const Icon = layer.icon
            return (
              <Card
                key={layer.name}
                className={`p-8 border-border/50 bg-gradient-to-br ${layer.color}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {layer.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {layer.items.map((item, index) => {
                    const [title, description] = item.split(' - ')
                    return (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/30">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{title}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

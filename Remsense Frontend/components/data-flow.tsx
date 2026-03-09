'use client'

import { Card } from '@/components/ui/card'

export function DataFlow() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Data Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            From Sensors to Blockchain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how farm data flows through Remsense to create verifiable, transparent records.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="flex items-center justify-between gap-2 md:gap-4">
              {/* Soil Testing */}
              <div className="flex flex-col items-center">
                <Card className="w-32 h-32 flex items-center justify-center p-4 text-center bg-gradient-to-br from-primary/20 to-primary/10 border-border/50">
                  <div>
                    <div className="text-2xl mb-2">🌱</div>
                    <p className="font-semibold text-sm text-foreground">Soil Testing</p>
                    <p className="text-xs text-muted-foreground">NPK, pH, Moisture</p>
                  </div>
                </Card>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary/30 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* GIS & Satellite */}
              <div className="flex flex-col items-center">
                <Card className="w-32 h-32 flex items-center justify-center p-4 text-center bg-gradient-to-br from-accent/20 to-accent/10 border-border/50">
                  <div>
                    <div className="text-2xl mb-2">🛰️</div>
                    <p className="font-semibold text-sm text-foreground">Satellite & GIS</p>
                    <p className="text-xs text-muted-foreground">NDVI, Boundaries</p>
                  </div>
                </Card>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary/30 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Climate Data */}
              <div className="flex flex-col items-center">
                <Card className="w-32 h-32 flex items-center justify-center p-4 text-center bg-gradient-to-br from-secondary/20 to-secondary/10 border-border/50">
                  <div>
                    <div className="text-2xl mb-2">☁️</div>
                    <p className="font-semibold text-sm text-foreground">Climate Data</p>
                    <p className="text-xs text-muted-foreground">Rainfall, Temp</p>
                  </div>
                </Card>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary/30 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Oracle */}
              <div className="flex flex-col items-center">
                <Card className="w-32 h-32 flex items-center justify-center p-4 text-center bg-gradient-to-br from-primary/20 to-primary/10 border-border/50">
                  <div>
                    <div className="text-2xl mb-2">🔐</div>
                    <p className="font-semibold text-sm text-foreground">Oracle Network</p>
                    <p className="text-xs text-muted-foreground">Verification</p>
                  </div>
                </Card>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary/30 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Smart Contracts */}
              <div className="flex flex-col items-center">
                <Card className="w-32 h-32 flex items-center justify-center p-4 text-center bg-gradient-to-br from-accent/20 to-accent/10 border-border/50">
                  <div>
                    <div className="text-2xl mb-2">📋</div>
                    <p className="font-semibold text-sm text-foreground">Smart Contracts</p>
                    <p className="text-xs text-muted-foreground">Data Management</p>
                  </div>
                </Card>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary/30 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Blockchain */}
              <div className="flex flex-col items-center">
                <Card className="w-32 h-32 flex items-center justify-center p-4 text-center bg-gradient-to-br from-primary/20 to-primary/10 border-border/50">
                  <div>
                    <div className="text-2xl mb-2">⛓️</div>
                    <p className="font-semibold text-sm text-foreground">Blockchain</p>
                    <p className="text-xs text-muted-foreground">Immutable Record</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-foreground mb-3">Smart Contract Management</h3>
            <p className="text-muted-foreground text-sm">
              Smart contracts automatically record and manage soil nutrients, fertilizer applications, crop health indicators, and climate data submitted through oracle systems, ensuring consistent and accurate documentation.
            </p>
          </Card>
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-foreground mb-3">Automated Verification</h3>
            <p className="text-muted-foreground text-sm">
              Oracle networks verify data accuracy before smart contracts record it, with automated triggers detecting anomalies and alerting farmers to potential issues in real-time.
            </p>
          </Card>
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-foreground mb-3">Permanent Record</h3>
            <p className="text-muted-foreground text-sm">
              Once recorded on blockchain, all farm activities become part of an immutable historical record that farmers can access for years of decision-making insights and financial verification.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

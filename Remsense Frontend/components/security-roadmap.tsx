'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Clock, Target } from 'lucide-react'

const phases = [
  {
    phase: 'Current Stage',
    label: 'MVP Development',
    icon: Target,
    items: [
      'Core smart contract development for farm data management',
      'Integration of IoT sensors, GIS mapping, and satellite data',
      'Oracle network setup for data verification',
      'Internal testing and validation of data flows',
    ],
    color: 'from-primary/10 to-primary/5',
    status: 'active',
  },
  {
    phase: 'Next Phase',
    label: 'Security Audit & Hardening',
    icon: Clock,
    items: [
      'Professional smart contract security audit by specialized firm',
      'Third-party code review and penetration testing',
      'Vulnerability assessment and remediation',
      'Security protocol documentation and compliance checks',
    ],
    color: 'from-accent/10 to-accent/5',
    status: 'upcoming',
  },
  {
    phase: 'Following Deployment',
    label: 'Pilot & Full Rollout',
    icon: CheckCircle2,
    items: [
      'Pilot testing with selected farming communities',
      'Real-world data validation and performance optimization',
      'Smart contract deployment to mainnet blockchain',
      'Wider adoption with ongoing monitoring and improvements',
    ],
    color: 'from-secondary/10 to-secondary/5',
    status: 'future',
  },
]

export function SecurityRoadmap() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Development Path</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Security First Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Remsense is built with security at every stage, from MVP development through professional audit and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => {
            const Icon = phase.icon
            return (
              <Card
                key={phase.label}
                className={`p-8 border-border/50 bg-gradient-to-br ${phase.color} relative overflow-hidden transition-all hover:shadow-lg`}
              >
                {phase.status === 'active' && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Current
                  </div>
                )}
                {phase.status === 'upcoming' && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Next
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                      {phase.phase}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {phase.label}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {phase.items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/30">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Commitment to Security
              </h3>
              <p className="text-muted-foreground">
                While Remsense smart contracts have not yet undergone formal security audit as we are in the MVP stage, professional security auditing is a planned priority before full deployment. This ensures our smart contracts are secure, reliable, and suitable for handling sensitive agricultural and financial data once the system moves into pilot testing and wider adoption. We take the security of farmer data and financial records seriously.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sprout } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <Sprout className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Smart Farming Innovation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Data-Driven Soil &<br className="hidden sm:inline" /> Farm Management
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Remsense empowers farmers with real-time insights into soil health, nutrient levels, and crop conditions through blockchain-based data management. Create transparent, verifiable records of all farm activities that build accountability with buyers and provide evidence for better decisions that boost yields and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right visual - Image placeholder with gradient */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/30 rounded-full blur-2xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="space-y-4">
                  <Sprout className="w-24 h-24 text-primary mx-auto opacity-50" />
                  <p className="text-muted-foreground font-medium">Intelligent Soil Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

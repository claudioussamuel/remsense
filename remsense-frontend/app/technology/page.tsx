import { Header } from '@/components/header'
import { TechArchitecture } from '@/components/tech-architecture'
import { DataFlow } from '@/components/data-flow'
import { SecurityRoadmap } from '@/components/security-roadmap'
import { TechBenefits } from '@/components/tech-benefits'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Technology - Remsense | Blockchain Farm Management',
  description: 'Learn about Remsense\' comprehensive blockchain-based farm data management system combining soil sensors, satellite imagery, GIS mapping, and climate data.',
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Technology Platform</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Blockchain-Powered Farm Data Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Remsense combines cutting-edge IoT sensors, satellite analysis, GIS mapping, and blockchain technology to create a transparent, verifiable farm management system. Our integrated platform transforms raw agricultural data into actionable insights while building permanent records that improve farmer financial access and consumer trust.
            </p>
          </div>
        </div>
      </section>
      <TechArchitecture />
      <DataFlow />
      <SecurityRoadmap />
      <TechBenefits />
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">IoT Sensors</h3>
              <p className="text-muted-foreground">
                Deploy soil testing devices across your fields to continuously monitor nutrient levels (NPK), soil pH, moisture content, and micronutrient availability at different crop growth stages.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Geospatial Intelligence</h3>
              <p className="text-muted-foreground">
                GIS mapping precisely delineates farm boundaries and field zones, while NDVI satellite imagery monitors crop health, vegetation index, and growth patterns throughout the season.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Climate Integration</h3>
              <p className="text-muted-foreground">
                Access real-time and historical climate data through Google Earth Engine, including rainfall, temperature, humidity, and environmental conditions that affect crop performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}

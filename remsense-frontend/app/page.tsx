import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Benefits } from '@/components/benefits'
import { HowItWorks } from '@/components/how-it-works'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </main>
  )
}

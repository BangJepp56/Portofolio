import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
      <Contact />
      <Footer />
    </main>
  )
}
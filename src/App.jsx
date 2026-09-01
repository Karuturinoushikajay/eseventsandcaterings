import About from './components/About'
import Contact from './components/Contact'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Packages from './components/Packages'
import PromoShowcase from './components/PromoShowcase'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-surface"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <PromoShowcase />
        <Gallery />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}

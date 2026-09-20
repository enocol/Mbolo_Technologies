import Header from './components/Header'
import Hero from './components/Hero'
import Services, { TrustStrip } from './components/Services'
import Products from './components/Products'
import { WhyMbolo, Process } from './components/WhyMbolo'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Products />
        <WhyMbolo />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

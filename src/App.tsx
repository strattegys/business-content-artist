import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatYouGet from './components/WhatYouGet'
import Process from './components/Process'
import Trust from './components/Trust'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Nav />
      <Hero />
      <Problem />
      <WhatYouGet />
      <Process />
      <Trust />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}

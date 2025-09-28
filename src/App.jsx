import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App

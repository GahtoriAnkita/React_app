import React from 'react'
import "./App.css"
import Header from './components/Header'
import Concept from './components/Concept'
import { CORE_CONCEPTS } from './components/Data'
function App() {
  return (
    <div className='App'>
      <Header />
      <section>
        <div className='core'>
          <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Core Concepts</h4>
          <div className='comp'>
            <Concept {...CORE_CONCEPTS[0]} />
            <Concept {...CORE_CONCEPTS[1]} />
            <Concept {...CORE_CONCEPTS[2]} />
            <Concept {...CORE_CONCEPTS[3]} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App


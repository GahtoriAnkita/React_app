import React from 'react'
import "./App.css"
import Header from './components/Header'
import Concept from './components/Concept'
import { CORE_CONCEPTS } from './components/Data'
import TabButton from './components/TabButton'
function App() {
  return (
    <div className='App'>
      <Header />
      <section style={{ position: "relative" }}>
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
      <section id='examples'>
        <div className='exam-block'>
          <h3>Examples</h3>
          <TabButton >Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </div>
      </section>
    </div>
  )
}

export default App


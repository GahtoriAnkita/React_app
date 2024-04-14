import React from 'react'
import "./App.css"
import Header from './components/Header'
import Concept from './components/Concept'
import { CORE_CONCEPTS } from './components/Data'
import TabButton from './components/TabButton'
function handleClick(selectedButton) {
  //selected contains string --- "Components","JSX","Props","States" -----
  console.log(selectedButton);
}
function App() {
  return (
    <div className='App'>
      <Header />
      <section id='core-sect'>
        <div className='core'>
          <h4 style={{ fontSize: "24px", fontWeight: "700" }}>Core Concepts</h4>
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
          <TabButton onSelect={()=>handleClick("components")} >Components</TabButton>
          <TabButton onSelect={()=>handleClick("jsx")}>JSX</TabButton>
          <TabButton onSelect={()=>handleClick("props")}>Props</TabButton>
          <TabButton onSelect={()=>handleClick("states")}>State</TabButton>
        </div>
      </section>
    </div>
  )
}

export default App


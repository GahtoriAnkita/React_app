import React from 'react'

function TabButton({children, onSelect}) {
  console.log("TabButton App Component executing");
  return (
    <>
    <button id='exam-btn' onClick={onSelect} >{children}</button>
    </>
  )
}

export default TabButton

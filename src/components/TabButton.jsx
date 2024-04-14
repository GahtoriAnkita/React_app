import React from 'react'

function TabButton({children, onSelect}) {
  return (
    <>
    <button id='exam-btn' onClick={onSelect} >{children}</button>
    </>
  )
}

export default TabButton

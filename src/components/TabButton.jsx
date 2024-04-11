import React from 'react'

function handleClick(){
  console.log("Hello world!");
}
function TabButton({children}) {
  return (
    <>
    <button id='exam-btn' onClick={handleClick} >{children}</button>
    </>
  )
}

export default TabButton

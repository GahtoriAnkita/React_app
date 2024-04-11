import React from 'react'
function Concept(props) {
    return (
        <div className='concept'>
            <img src={props.image} alt="..." className='core-img'/>
            <h4 style={{"color":"white"}}>{props.title}</h4>
            <h5 style={{"padding":"10px 5px 10px 5px","fontSize":"12px"}}>{props.description}</h5>
        </div>
    )
}

export default Concept

import React from 'react'
import react_core from "../assets/react-core-concepts.png"

const reactDescription = ["Fundamental", "Crucial", "Core"];

const mainWord = reactDescription[Math.floor(Math.random()*3)];

function Header() {
    return (
        <>
            <div>
                <img src={react_core} alt="react_core" className="Logo" />
                <h1>React Essentials</h1>
                <p>{mainWord} React concept you will need for almost any app you are going to build!</p>
            </div>
        </>
    )
}

export default Header

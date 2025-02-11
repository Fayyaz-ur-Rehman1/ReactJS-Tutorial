import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div><h1> Contact Page </h1></div>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
        </>
    )
}

export default Contact
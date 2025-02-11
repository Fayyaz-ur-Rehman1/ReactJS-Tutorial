import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function About() {
    const location = useLocation();
    return (
        <>
            <div><h1> About Page {location.state.id} </h1></div>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
        </>
    )
}

export default About
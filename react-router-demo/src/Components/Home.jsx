import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const id = 6;
    function goToAbout() {
        navigate("/about", { state: { id: id } });
    }
    // function goToContact() {
    //     navigate("/contact");
    // }
    return (
        <>
            <div><h1> Home Page </h1></div>
            <button onClick={goToAbout}><h1> About </h1></button>
            {/* <button onClick={goToContact}><h1> Contact </h1></button> */}
            {/* <Link to="/about"><h2>About</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link> */}
        </>
    )
}

export default Home
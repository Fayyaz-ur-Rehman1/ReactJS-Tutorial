import React from "react";
import "./mystyle.css"

function Stylesheet(props) {
    const className = props.primary ? "primary" : "";

    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
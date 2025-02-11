import React from "react";

const headingStyle = {
    fontSize: "72px",
    color: "blue"
}

function InlineStyle(props) {
    return (
        <div>
            <h1 style={headingStyle} >Stylesheets</h1>
        </div>
    )
}

export default InlineStyle
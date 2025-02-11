import React from "react";

function Header(props) {
    return (
        <div>
            <h1>My name is {props.name}. My age is {props.age}. </h1>
        </div>
    )
}

export default Header;
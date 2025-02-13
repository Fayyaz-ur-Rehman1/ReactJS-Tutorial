import React from 'react'

function Props({ name = "xyz", age = "unknown" }) {

    return (
        <div>
            <h1>My name is {name}. <br /> My age is {age}.</h1>
        </div>
    )
}

export default Props
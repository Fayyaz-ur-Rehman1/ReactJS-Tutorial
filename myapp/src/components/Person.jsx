import React from "react";

function Person({ person }) {
    return (
        <div >
            <h2>my name is {person.name}. I am {person.age} years old. I know {person.skills}</h2>
        </div>
    );
}

export default Person;
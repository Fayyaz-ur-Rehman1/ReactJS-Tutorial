import React from "react"

// function Greet(props) {
//     return (
//         <div>
//             <h1>Hello {props.name}. age {props.age}</h1>
//             {props.children}
//         </div>
//     )
// }

// Destructuring props and state

// function Greet({ name, age }) {
//     return (
//         <div>
//             <h1>Hello {name}. age {age}</h1>
//         </div>
//     )
// }


function Greet(props) {
    const { name, age } = props
    return (
        <div>
            <h1>Hello {name}. age {age}</h1>
        </div>
    )
}


// const Greet = () => <h1>Hello Fayyazurrehman</h1>
export default Greet
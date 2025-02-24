import React, { useReducer } from "react"

const intialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (<div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
    )
}

export default Counter;
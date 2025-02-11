import React, { useReducer } from "react";

const intialState = {
    firstCounter: 0,
    secondCounter: 10,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + action.value }
        case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.value }

        case "increment2":
            return { ...state, secondCounter: state.secondCounter + action.value }
        case "decrement2":
            return { ...state, secondCounter: state.secondCounter - action.value }

        case "reset":
            return intialState
        default:
            return state
    }
}

function CounterComplex() {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <h1>{count.secondCounter}</h1>

            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Incement</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>Incement 5</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement 5</button>

            <br />

            <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Incement2</button>
            <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>Decrement2</button>

            <br />

            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default CounterComplex;
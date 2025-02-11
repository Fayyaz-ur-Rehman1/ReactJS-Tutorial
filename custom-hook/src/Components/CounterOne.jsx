import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function CounterOne() {
    const [count, Increment, Decrement, Reset] = useCounter()
    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterOne
import { useState } from "react";

function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment} aria-label="Increment counter">Increment</button>
            <button onClick={decrement} aria-label="Decrement counter">Decrement</button>
            <button onClick={reset} aria-label="Reset counter">Reset</button>
        </div>
    );
}

export default CounterApp;

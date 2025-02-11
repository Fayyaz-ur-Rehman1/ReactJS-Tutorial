import React, { useState } from "react"

function HookCounter() {
    const [Count, setCount] = useState(0);

    function updateValue() {
        setCount(Count + 1);
    }
    return (
        <div>
            <p>{Count}</p>
            <button onClick={updateValue}>Click</button>
        </div>
    )
}

export default HookCounter;
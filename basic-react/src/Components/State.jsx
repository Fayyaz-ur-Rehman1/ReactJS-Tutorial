import React, { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
    function updateCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={() => setCount(count + 1)}>add Count</button> */}
            <button onClick={updateCount}>Add Count</button>
        </div>
    )
}

export default State
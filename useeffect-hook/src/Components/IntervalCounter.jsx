import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(tick, 1000)
        return () => clearInterval(interval)
    }, [])

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter;
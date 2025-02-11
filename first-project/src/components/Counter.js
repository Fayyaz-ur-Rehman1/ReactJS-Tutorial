import { useState } from "react";

function Counter() {
    const [data, setData] = useState(0);

    function updateData() {
        setData(data + 1);
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>Increement</button>
        </div>
    )
}

export default Counter;
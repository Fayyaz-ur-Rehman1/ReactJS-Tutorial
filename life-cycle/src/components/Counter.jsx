import { useState, useEffect } from "react";

function Count() {
    const [countValue, setCoutValue] = useState(0);

    useEffect(() => {
        console.log("Mountupdating Compnent: Updating...");
        return () => {
            console.log("Funtional Component : Remove Components");
        }
    }, [countValue])

    const increment = () => {
        setCoutValue(countValue + 1);
    }
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default Count;
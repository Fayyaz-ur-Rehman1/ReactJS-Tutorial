import { useRef, useState } from "react";

function RefHook() {
    const refElem = useRef("");
    const [name, setName] = useState("Fayyazurrehmamn");
    console.log(refElem)
    function resetFn() {
        setName("");
        refElem.current.focus()
    }
    function handleInput() {
        refElem.current.style.color = "red"
        refElem.current.value = "sana"
    }

    return (
        <div>
            <input ref={refElem} type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <button onClick={resetFn}>Reset</button>
            <button onClick={handleInput}>Handel Input</button>
        </div>
    )
}

export default RefHook;
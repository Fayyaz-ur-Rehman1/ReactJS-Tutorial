import { useMemo, useState } from "react"

function UserMemo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);
    const multiplication = useMemo(
        function multiply() {
            console.log("*****************")
            return add * 10
        },
        [add]
    )

    return (
        <div>
            <h1>{multiplication}</h1>
            <button onClick={() => setAdd(add + 1)}>Increment:</button> <h1>{add}</h1>
            <button onClick={() => setSub(sub - 1)}>Decrement:</button> <h1>{sub}</h1>
        </div>
    )
}

export default UserMemo
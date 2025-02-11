import { useState } from "react"

function CounterThree() {
    let [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <input type="text" name="firstname" onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" name="lastname" onChange={e => setName({ ...name, lastName: e.target.value })} />

            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your first name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default CounterThree;
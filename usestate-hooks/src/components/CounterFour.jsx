import { useState } from "react"

function CounterFour() {
    let [itmes, setItmes] = useState([]);

    const addItems = () => {
        setItmes([...itmes, {
            id: itmes.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItems}>Add a Number</button>
            <ul>
                {itmes.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    ) 
}

export default CounterFour;
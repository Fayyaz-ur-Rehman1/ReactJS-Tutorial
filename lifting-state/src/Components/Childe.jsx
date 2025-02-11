import React, { useState } from 'react'

function Childe(props) {
    const [name, setName] = useState();
    function handelSubmit(e) {
        e.preventDefault()
        props.getData(name)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Childe
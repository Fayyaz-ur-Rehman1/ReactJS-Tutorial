import React, { useEffect, useState } from 'react'

function EventHandel() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePostion = (e) => {
        console.log(MouseEvent)
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        window.addEventListener("mousemove", logMousePostion)
    })
    return (
        <div>
            <h1>X = {x} Y = {y}</h1>
        </div>
    )
}

export default EventHandel
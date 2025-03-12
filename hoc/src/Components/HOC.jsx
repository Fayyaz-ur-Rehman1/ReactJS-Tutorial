import React from 'react'

export const Hoc = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <h2 style={{ backgroundColor: "red", width: 100 }}>
                red
                <props.cmp />
            </h2>
        </div >
    )
}

export const Hoc2 = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <h2 style={{ backgroundColor: "green", width: 100 }}>
                green
                <props.cmp />
            </h2>
        </div >
    )
}


export const Hoc3 = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <h2 style={{ backgroundColor: "blue", width: 100 }}>
                Blue
                <props.cmp />
            </h2>
        </div >
    )
}

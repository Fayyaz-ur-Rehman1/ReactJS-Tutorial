import React from "react";
import PropsDrillingB from "./PropsDrillingB";

function PropsDrillingA({name}) {
    return (
        <div>
            <PropsDrillingB name={name}/>
        </div>
    )
}

export default PropsDrillingA;
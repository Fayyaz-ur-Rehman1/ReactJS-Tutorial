import React from "react";

function FunctionClick() {
    function clickHeandle() {
        console.log("Button is OnClick");
    }
    return (
        <div>
            <button onClick={clickHeandle}>Click</button>
        </div>
    )
}

export default FunctionClick;
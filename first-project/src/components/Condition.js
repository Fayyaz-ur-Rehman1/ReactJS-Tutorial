import { useState } from "react"

function Profile() {
    const [LoggedIn, setLoggedIn] = useState(false)
    // const [LoggedIn, setLoggedIn] = useState(3)
    return (
        <div>
            {LoggedIn ? <h1>Welcome Fayyazurrehman</h1> : <h1>Thanks You</h1>}
        </div>
        // <div>
        //     {LoggedIn == 1 ? <h1>Welcome Fayyazurrehman</h1> : LoggedIn == 2 ? <h1>Thanks You</h1> : <h1>Wlc</h1>}
        // </div>
    )

    // if else
    // if (LoggedIn) {
    //     return (
    //         <div>
    //             <h1>Hy Fayyazurrehman</h1>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Thank you</h1>
    //         </div>
    //     )
    // }
}

export default Profile;
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosGet() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setUserData(res.data)
            })
    }, [])
    return (
        <div>
            {userData.map((data) => {
                return (
                    <div key={data.id}>{data.title}</div>
                )
            })}
        </div>
    )
}

export default AxiosGet
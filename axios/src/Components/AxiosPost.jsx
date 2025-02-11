import axios from 'axios'
import React, { useState } from 'react'

function AxiosPost() {
    const data = { fname: "", lname: "" }
    const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts", inputData)
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/posts/1", inputData)
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handelDelete = (e) => {
        e.preventDefault()
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <label>First Name:</label>
            <input type="text" name='fname' value={inputData.fname} onChange={handleData} /><br />
            <label>last Name:</label>
            <input type="text" name='lname' value={inputData.lname} onChange={handleData} /> <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handelDelete}>Delete</button>
        </div>
    )
}

export default AxiosPost
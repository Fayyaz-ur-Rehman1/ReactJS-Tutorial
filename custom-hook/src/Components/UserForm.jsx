import React from 'react'
import useInput from './hooks/useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput("")
    const [LastName, bindLastName, resetLastName] = useInput("")

    const handler = (e) => {
        e.preventDefault()
        alert(`My Name is ${firstName} ${LastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={handler}>
                <label>FirstName</label>
                <input  {...bindFirstName}  type="text"/>

                <label>LastName</label>
                <input {...bindLastName} type="text"  />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
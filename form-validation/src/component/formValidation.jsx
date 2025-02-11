import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
        if (name === "email") setEmail(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate({ username, email, password });
        setFormError(error);
        console.log(Object.keys(error));

        if (Object.keys(error).length === 0) {
            setUsername("");
            setEmail("");
            setPassword("");
        }
    };

    const validate = (value) => {
        const error = {};
        const emailValidation = "@gmail.com";
        const splitedEmail = value.email.split("@");

        if (!value.username) {
            error.username = "Username is required";
        }
        if (!value.email) {
            error.email = "Email is required";
        } else if ("@" + splitedEmail[1] !== emailValidation) {
            return "This is Not Valid Email";
        }
        if (!value.password) {
            error.password = "Password is required";
        } else if (value.password.length < 4) {
            error.password = "Password must be more than 4 charcters";
        } else if (value.password.length > 10) {
            error.password = "Password cannot exceed more than 10 characters";
        }

        return error;
    };

    return (
        <div className="container">
            <p> {username}</p>
            <p>{password} </p>
            <p> {email}</p>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Usernmae</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
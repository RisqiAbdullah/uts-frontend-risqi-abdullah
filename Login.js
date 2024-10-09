// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";  // Import axios
import { useNavigate } from "react-router-dom";
import '../styles.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Contoh request POST ke backend
        axios.post('http://localhost:5000/login', {
            username: username,
            password: password,
        })
        .then(response => {
            // Jika login berhasil, arahkan ke halaman tabel
            navigate("/table");
        })
        .catch(error => {
            console.error('Login error:', error);
        });
    };

    return (
        <div className="container">
            <h2>Login Puskesmas</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;

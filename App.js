// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Table from "./components/Table";
import './styles.css'; // Mengimpor gaya CSS

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </Router>
    );
};

export default App;

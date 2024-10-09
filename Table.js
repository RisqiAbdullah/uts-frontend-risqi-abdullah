// src/components/Table.js
import React, { useEffect, useState } from "react";
import axios from "axios";  // Import axios
import '../styles.css';

const Table = () => {
    const [data, setData] = useState([]);
    
    // Mengambil data dari API saat komponen pertama kali dirender
    useEffect(() => {
        axios.get('http://localhost:5000/pembeli')  // Ganti URL sesuai dengan API backend
            .then(response => {
                setData(response.data);  // Menyimpan data dari server ke state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <h2>Data Pasien Puskesmas</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>No. Telepon</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pasien) => (
                        <tr key={pasien.id}>
                            <td>{pasien.id}</td>
                            <td>{pasien.nama}</td>
                            <td>{pasien.no_telp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

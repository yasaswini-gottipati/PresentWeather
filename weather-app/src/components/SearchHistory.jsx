import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SearchHistory.css';

const SearchHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await axios.get('https://presentweather.onrender.com/api/search', {
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                });
                setHistory(res.data);
            } catch (err) {
                console.error(err.response.data.message);
            }
        };
        fetchHistory();
    }, []);

    return (
        <div className="history-container">
            <h2>Search History</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item.city} - {new Date(item.date).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;


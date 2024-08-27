// HomePage.jsx
import React from 'react';
import Weather from '../components/Weather';
import SearchHistory from '../components/SearchHistory';

const HomePage = () => {
    return (
        <div>
            <Weather />
            <SearchHistory />
        </div>
    );
};

export default HomePage;

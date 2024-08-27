import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Weather.css';
import curr from './curr.svg';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    const API_KEY = process.env.REACT_APP_API_KEY;

    const fetchWeatherByCity = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(res.data);

            // Save search history
            await axios.post('https://presentweather.onrender.com/api/search', { city }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to fetch weather data');
        }
        setLoading(false);
    };

    const fetchWeatherByLocation = async (latitude, longitude) => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(res.data);

            // Save search history
            await axios.post('https://presentweather.onrender.com/api/search', { city: `${latitude},${longitude}` }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
        } catch (err) {
            setError('Failed to fetch weather data for your location');
        }
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            fetchWeatherByCity();
        }
    };

    const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherByLocation(latitude, longitude);
                },
                () => {
                    setError('Failed to retrieve your location');
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
        }
    };

    return (
        <div className="weather-app">
            <h1>Weather Forecast</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
            <p>Or else</p>
            <button onClick={handleUseCurrentLocation} className="location-button">
                <img style={{paddingRight:'3px'}} src={curr} width='20px' height='20px' />
                Use Current Location
            </button>
            {loading && <div className="loader"></div>}
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;

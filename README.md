# PresentWeather
# Weather Forecasting Web Application

## Project Overview

This project is a weather forecasting web application that allows users to check the current weather and future forecasts for any location. The application has a user-friendly interface and supports features such as location-based weather updates, search functionality, and responsive design for various devices.

The application is built using **React** for the frontend and **Node.js** for the backend. The frontend provides a clean UI for users to interact with, while the backend handles API requests to fetch weather data from an external weather API.

## Features

- **Location-based Weather**: Automatically detects the user's location to provide accurate weather updates.
- **Search Functionality**: Users can search for the weather in different cities.
- **Responsive Design**: Optimized for use on mobile, tablet, and desktop devices.
- **Error Handling**: Displays appropriate messages for network errors or invalid city searches.

## Technologies Used

- **Frontend**: React, CSS (with media queries)
- **Backend**: Node.js, Express
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Git** (for version control)

### Clone the Repository

```bash
git clone https://github.com/yourusername/weather-app.git
```
## Backend Setup

- **Navigate to the backend directory**:
```bash
cd backend
```
- **Install dependencies**:
```bash
npm install
```
- **Create a .env file**:
```bash
PORT=5000
WEATHER_API_KEY=your_openweather_api_key
```
- **Run the backend server:**
```bash
npm start
```

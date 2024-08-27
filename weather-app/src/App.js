// import logo from './logo.svg';
// import './App.css';
// import WeatherApp from './components/Weather';

// function App() {
//   return (
//     <div className="App">
//       <WeatherApp />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import './styles/App.css';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/" />;
};

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/weather" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

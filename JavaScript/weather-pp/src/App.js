import React from 'react';
import './App.css';
import CitiesList from './components/cities-list';
import { WeatherProvider } from './context/weather.context';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <CitiesList />
      </div>
    </WeatherProvider>
  );
}

export default App;

import React, { useState, useEffect, useContext } from 'react';
import './Weather.css';
import { WeatherContext } from '../../context/weather.context';

function Weather( { city } ) {

  const [ weather, setWeather ] = useState( {} );
  const [ cities, setCities ] = useContext( WeatherContext );

  useEffect( () => {
    ( async () => {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ city }`;
      url += '&units=metric&appid=60ab4aca5be46c195b14683b99fab7f0';
      const rawData = await fetch( url );
      let json = await rawData.json();
      if ( json.cod ) {
        let newJson = JSON.parse( JSON.stringify( json ) );
        newJson.list = [];
        for ( let i = 0; i < json.list.length; i += 7 ) {
          newJson.list.push( json.list[ i ] );
        }
        newJson.cnt = newJson.list.length;
        setWeather( newJson );
        console.log( newJson );
      }
    } )();
  }, [ city ] );

  return (
    <div className="weather">
      {
        ( weather.cod === '200' ) ?
          ( <>
            <span
              className="cityName"
              style={{ textAlign: 'center' }}>{weather.city.name}, {weather.city.country}
              <span onClick={() => setCities( cities.filter( c => c !== city ) )}>&nbsp;X</span>
            </span>
            <div className="weatherList">
              {weather.list.map( day => (
                <div key={day.dt} className="weatherItem">
                  <span className="weatherItem_date">{new Date( day.dt * 1000 ).toDateString()}</span>
                  <span className="weatherItem_temp">{day.main.temp}  °C
                    <span className="weatherItem_feels">({day.main.feels_like})</span>
                  </span>
                  <span className="weatherItem_min deg">{day.main.temp_min}</span>
                  <span className="weatherItem_max deg">{day.main.temp_max}</span>
                  <span className="weatherItem_hum">{day.main.humidity}%</span>
                  <span className="weatherItem_wind">{day.wind.speed}m/s</span>
                </div>
              ) )}
            </div>
          </> ) :
          ( weather.cod ) ?
            ( <pre>There was an error fetching {city} data
            <span onClick={() => setCities( cities.filter( c => c !== city ) )}>&nbsp;X</span>
            </pre> ) :
            ( <pre className="loader">Loading</pre> )
      }
    </div>
  );
}

export default Weather;

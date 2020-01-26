import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather( { city } ) {

  const [ weather, setWeather ] = useState( {} );

  useEffect( () => {
    ( async () => {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ city }`;
      url += '&units=metric&cnt=7&appid=60ab4aca5be46c195b14683b99fab7f0';
      const rawData = await fetch( url );
      const json = await rawData.json();
      if ( json.cod )
        setWeather( json );
      console.log( json );
    } )();
  }, [ city ] );

  return (
    <div className="weather">
      {
        ( weather.cod === '200' ) ?
          ( <>
            <span
              className="cityName"
              style={{ textAlign: 'center' }}>{weather.city.name}
            </span>
            <div className="weatherList">
              {weather.list.map( day => (
                <div key={day.dt} className="weatherItem">
                  <p>{new Date( day.dt + weather.city.timezone ).toLocaleTimeString()}</p>
                </div>
              ) )}
            </div>
          </> ) :
          ( weather.cod === '404' ) ?
            ( <pre>City {city} not found</pre> ) :
            ( <pre className="loader">Loading</pre> )
      }
    </div>
  );
}

export default Weather;

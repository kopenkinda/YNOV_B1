import React, { useContext, useState, useEffect } from 'react';
import Weather from '../weather';
import { WeatherContext } from '../../context/weather.context';

import './CitiesList.css'

function CitiesList() {
  const [ cities, setCities ] = useContext( WeatherContext );
  const [ value, setValue ] = useState( 'Toulouse' );

  useEffect( () => {
    setCities( [ ...cities, value ] );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value ] );

  const handleInput = ( e ) => {
    setValue( e.target.value );
    e.target.value = '';
  }

  return (
    <div className="CitiesList">
      <input type="text" onBlur={e => handleInput( e )} />
      {cities.map( city => <Weather city={city} key={city} /> )}
    </div>
  );
}

export default CitiesList;

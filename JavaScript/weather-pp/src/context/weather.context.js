import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = props => {
  const initState = ( localStorage[ 'weatherApp' ] !== undefined ) ?
    JSON.parse( localStorage[ 'weatherApp' ] ) : [ 'Paris', 'Barcelona' ];
  
  const [ cities, setCities ] = useState( initState );

  return ( <WeatherContext.Provider value={[ cities, setCities ]} >
    {props.children}
  </WeatherContext.Provider> )
}
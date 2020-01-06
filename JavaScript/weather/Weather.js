class Weather
{
  _city = "";
  _data = {};

  constructor( base_city, localStorageContainer = 'weather_app' )
  {
    this._city = base_city || 'London';
    if ( localStorage[ localStorageContainer ] != undefined )
    {
      this._data = JSON.parse( localStorage[ localStorageContainer ] );
    } else
    {
      this.getWeather();
      localStorage.setItem( localStorageContainer, JSON.stringify( { city: this._city, data: this._data } ) );
    }
  }

  async getWeather( city )
  {
    try
    {
      const data = await fetch( `http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&q=${ city }&cnt=7&APPID=60ab4aca5be46c195b14683b99fab7f0` );
      this._data = await data.json();
    } catch ( e )
    {
      console.error( e );
    }
  }

  get city()
  {
    return this._city;
  }

  set city( newCity )
  {
    this._city = newCity;
  }

  get data()
  {
    return this._data; // TODO: Filter and stuff
  }

  set data( newData )
  {
    this._data = newData;
  }
}
class Weather {
  apiToken = '';
  _city = "";
  _data = {};
  _coords = {
    latitude: 43.6250019,
    longitude: 1.4319459,
  }

  constructor( apiToken, localStorageContainer = 'weather_app' ) {
    this.apiToken = apiToken;
    this.getCoordinates();
    // this.getAddress( this._coords );
    if ( localStorage[ localStorageContainer ] != undefined ) {
      this._data = JSON.parse( localStorage[ localStorageContainer ] );
    } else {
      // this.getWeather();
      const [ city, data, coords ] = [ this._city, this._data, this._coords ];
      localStorage.setItem( localStorageContainer, JSON.stringify( { city, data, coords } ) );
    }
  }

  async getWeather( city = this._city ) {
    // const data = await fetch( `http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&q=${ city }&cnt=7&APPID=60ab4aca5be46c195b14683b99fab7f0` );
    // return data.json();
    return fetch( `http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&q=${ city }&cnt=7&APPID=60ab4aca5be46c195b14683b99fab7f0` );
  }

  async getCoordinates() {
    navigator.geolocation.getCurrentPosition( data => {

    } );
  }

  async getAddress( { latitude, longitude } ) {
    try {
      const url = `https://eu1.locationiq.com/v1/reverse.php?key=${ this.apiToken }&lat=${ latitude }&lon=${ longitude }&format=json`;
      const rawData = await fetch( url );
      const data = await rawData.json();
      return this._city = data.address.city;
    } catch ( e ) {
      console.error( e );
      return 'Toulouse';
    }
    return data;
  };

  get city() {
    return this._city;
  }

  set city( newCity ) {
    this._city = newCity;
  }

  get data() {
    return this._data; // TODO: Filter and stuff
  }

  set data( newData ) {
    this._data = newData;
  }
}
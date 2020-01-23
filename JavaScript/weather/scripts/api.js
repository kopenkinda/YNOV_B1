class WeatherApi {

  _appid = '';
  _weather = {};

  constructor( { appid } ) {
    this._appid = appid;
  }

  async getWeather( city ) {
    const resBody = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${ city }&units=metric&appid=${ this._appid }`
    );
    const data = await resBody.json();
    this._weather = data;
    return data;
  }

  get weather() {
    return this._weather;
  }
}
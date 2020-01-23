const api = new WeatherApi( { appid: '60ab4aca5be46c195b14683b99fab7f0' } );
const [ select, selectAll ] = [ q => { document.querySelector( q ) }, q => { document.querySelectorAll( q ) } ];

  ( async () => {
    const data = await api.getWeather( 'Toulouse' );
    console.log( data.list[0] );
    select('.app-body')


  } )()

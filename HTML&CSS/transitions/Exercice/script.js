const modififables = () =>
{
  document.querySelector( '#headerVideo' ).width = document.body.clientWidth;
  // document.querySelector( '#headerVideo' ).height = window.innerHeight;
}

modififables();
window.onresize = () => modififables();
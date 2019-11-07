const select = ( q ) =>
{
  return document.querySelector( q );
}

const selectAll = ( q ) =>
{
  return document.querySelectorAll( q );
}

const ham = select( '.hamburger' );
ham.onclick = () =>
{
  select( '.navbar' ).classList.toggle( 'active' );
}
const helpers = {
  propertyCache: {},
  vendors: [ null, [ '-webkit-', 'webkit' ], [ '-moz-', 'Moz' ], [ '-o-', 'O' ], [ '-ms-', 'ms' ] ],

  clamp( value, min, max )
  {
    return min < max
      ? ( value < min ? min : value > max ? max : value )
      : ( value < max ? max : value > min ? min : value )
  },

  data( element, name )
  {
    return helpers.deserialize( element.getAttribute( 'data-' + name ) )
  },

  deserialize( value )
  {
    if ( value === 'true' )
    {
      return true
    } else if ( value === 'false' )
    {
      return false
    } else if ( value === 'null' )
    {
      return null
    } else if ( !isNaN( parseFloat( value ) ) && isFinite( value ) )
    {
      return parseFloat( value )
    } else
    {
      return value
    }
  },

  camelCase( value )
  {
    return value.replace( /-+(.)?/g, ( match, character ) =>
    {
      return character ? character.toUpperCase() : ''
    } )
  },

  accelerate( element )
  {
    helpers.css( element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)' )
    helpers.css( element, 'transform-style', 'preserve-3d' )
    helpers.css( element, 'backface-visibility', 'hidden' )
  },

  transformSupport( value )
  {
    let element = document.createElement( 'div' ),
      propertySupport = false,
      propertyValue = null,
      featureSupport = false,
      cssProperty = null,
      jsProperty = null
    for ( let i = 0, l = helpers.vendors.length; i < l; i++ )
    {
      if ( helpers.vendors[ i ] !== null )
      {
        cssProperty = helpers.vendors[ i ][ 0 ] + 'transform'
        jsProperty = helpers.vendors[ i ][ 1 ] + 'Transform'
      } else
      {
        cssProperty = 'transform'
        jsProperty = 'transform'
      }
      if ( element.style[ jsProperty ] !== undefined )
      {
        propertySupport = true
        break
      }
    }
    switch ( value )
    {
      case '2D':
        featureSupport = propertySupport
        break
      case '3D':
        if ( propertySupport )
        {
          let body = document.body || document.createElement( 'body' ),
            documentElement = document.documentElement,
            documentOverflow = documentElement.style.overflow,
            isCreatedBody = false

          if ( !document.body )
          {
            isCreatedBody = true
            documentElement.style.overflow = 'hidden'
            documentElement.appendChild( body )
            body.style.overflow = 'hidden'
            body.style.background = ''
          }

          body.appendChild( element )
          element.style[ jsProperty ] = 'translate3d(1px,1px,1px)'
          propertyValue = window.getComputedStyle( element ).getPropertyValue( cssProperty )
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none'
          documentElement.style.overflow = documentOverflow
          body.removeChild( element )

          if ( isCreatedBody )
          {
            body.removeAttribute( 'style' )
            body.parentNode.removeChild( body )
          }
        }
        break
    }
    return featureSupport
  },

  css( element, property, value )
  {
    let jsProperty = helpers.propertyCache[ property ]
    if ( !jsProperty )
    {
      for ( let i = 0, l = helpers.vendors.length; i < l; i++ )
      {
        if ( helpers.vendors[ i ] !== null )
        {
          jsProperty = helpers.camelCase( helpers.vendors[ i ][ 1 ] + '-' + property )
        } else
        {
          jsProperty = property
        }
        if ( element.style[ jsProperty ] !== undefined )
        {
          helpers.propertyCache[ property ] = jsProperty
          break
        }
      }
    }
    element.style[ jsProperty ] = value
  }

}

class myParallax extends Parallax
{
  constructor( element, options )
  {
    super( element, options );
  }

  updateLayers()
  {
    if ( this.selector )
    {
      this.layers = this.element.querySelectorAll( this.selector )
    } else
    {
      this.layers = this.element.children
    }

    if ( !this.layers.length )
    {
      console.warn( 'ParallaxJS: Your scene does not have any layers.' )
    }

    this.depthsX = []
    this.depthsY = []

    for ( let index = 0; index < this.layers.length; index++ )
    {
      let layer = this.layers[ index ]

      if ( this.transform3DSupport )
      {
        helpers.accelerate( layer )
      }

      let depth = helpers.data( layer, 'depth' ) || 0
      this.depthsX.push( helpers.data( layer, 'depth-x' ) || depth )
      this.depthsY.push( helpers.data( layer, 'depth-y' ) || depth )
    }
  }
}

const scene = document.querySelector( '.circles' );
const parallaxInstance = new myParallax( scene, {
  relativeInput: true,
  inputElement: document.querySelector( 'header' ),
  limitX: 12,
  limitY: 12
} );

document.querySelectorAll( '.cross' ).forEach( cross =>
{
  cross.style.fontSize = `${ Math.round( Math.random() * 32 ) + 32 }px`;
  cross.style.top = `${ Math.round( Math.random() * 85 ) + 5 }%`;
  cross.style.left = `${ Math.round( Math.random() * 85 ) + 5 }%`;
  cross.style.animation = `waves 3s alternate infinite ease-in-out `;
  cross.style.animationDelay = ` ${ Math.random() * 8 + .33 }s`;
} )

document.querySelectorAll( '.collapsible' ).forEach( el =>
{
  el.onclick = () =>
  {
    el.classList.toggle( 'active' );
    const content = el.querySelector( '.collapsible-content' );
    if ( content.style.maxHeight )
      content.style.maxHeight = null;
    else
      content.style.maxHeight = content.scrollHeight + "px";
  }
} )
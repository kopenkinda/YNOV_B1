const select = q => document.querySelector( q );
const selectAll = q => document.querySelectorAll( q );


select( '.hamburger' ).onclick = e =>
{
  select( 'nav' ).classList.toggle( 'extended' );
};

select( '.name' ).onmouseover = e =>
{
  select( '.name' ).innerHTML = "Dmitrii";
};

select( '.name' ).onmouseout = e =>
{
  select( '.name' ).innerHTML = "Kopenkin";
};


const typeOptions = {
  strings: [
    '`<i class="typed-icon material-icons md-light">school</i>` I am a student.',
    '`<i class="typed-icon material-icons md-light">developer_mode</i>` I am a Full-Stack web developper.',
    '`<i class="typed-icon material-icons md-light">language</i>` I am a web-enthusiast.',
    '`<i class="typed-icon material-icons md-light">local_cafe</i>` I am a coffe-lover.'
  ],
  loop: true,
  loopCount: Infinity,
  typeSpeed: 80
};

const typed = new Typed( '.typed', typeOptions ); 

(() => {
  let headings;
  let fills;
  let windowHeight;

  function init() {
    headings = document.querySelectorAll( '.hidden' );
    fills = document.querySelectorAll( '.empty' );
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let heading of headings) {
      let positionFromTop = heading.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        heading.classList.add('fade-in-element');
        heading.classList.remove('hidden');
      }
    }

    for (let fill of fills) {
      let positionFromTop = fill.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        fill.classList.remove('empty');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
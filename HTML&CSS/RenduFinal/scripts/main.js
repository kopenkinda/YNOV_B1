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

(function() {
  var settings = {
    rainbowLength: 256,
    rainbowClass: 'rainbow-text',
    delay: 50,
    repeat: true
  };

  var Δ = {
    rainbow: makeMeARainbow(settings.rainbowLength),
    init: function() {
      var sourceElement = document.querySelector('.' + settings.rainbowClass);

      this.element = this.dissectText(sourceElement);
      sourceElement.parentNode.insertBefore(this.element, sourceElement);
      sourceElement.remove();

      this.update(this.draw(this.element));

      return this;
    },
    draw: function(el) {
      if (!el) return;
      var _self = this;

      var spans = el.querySelectorAll('span');
      [].forEach.call(spans, function(v, k, c) {
        v.style.color = _self.rainbow[k % _self.rainbow.length];
        v.style.position = 'relative';
        v.style.textShadow = '3px 2px 0 black';
      });

      return spans;
    },
    dissectText: function(sourceEl) {
      var textSource = sourceEl.textContent,
        headingContainer = document.createElement('h1');

      textSource.split('').forEach(function(v, k, c) {
        var span = document.createElement('span'),
          destText = document.createTextNode(v);

        span.appendChild(destText);
        headingContainer.appendChild(span);
      });

      headingContainer.className = settings.rainbowClass;

      return headingContainer;
    },
    update: function(spans) {
      if (!spans) return;
      var _self = this,
        delay = settings.delay,
        tI = _self.totalIterations = 0;

      _self.updater && window.clearTimeout(_self.updater);
      _self.updater = window.setTimeout(animateText.bind(_self, spans), delay);

      function animateText(spans) {
        ++tI;

        [].forEach.call(spans, function(v, k) {
          v.style.color = _self.rainbow[(tI + k) % _self.rainbow.length];
          v.style.top = Math.sin((tI + k) / 2) * 10 + 'px';
        });

        if (settings.repeat) _self.updater = window.setTimeout(animateText.bind(_self, spans), delay);
      };

      return _self.updater;
    }
  }.init();

  function makeMeARainbow(length) {
    var length = length || 64;
    
    return (function generateRainbow(arr, amount) {
      if (--amount < 0 ) return arr;
      arr.push(generateColor( ((length - (amount+1)) % length) , length, 8));
      return generateRainbow(arr, amount);
    })([], length);
    
    

    function generateColor(amount, total, multiplier) {
      return 'hsla\(' + ((amount * multiplier) * (360 / total)) + ',100%,60%,0.90\)'
    }
  }

})();
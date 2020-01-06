const gradients = [
  [ "#091E3A", "#2F80ED", "#2D9EE0" ],
  [ "#9400D3", "#4B0082" ],
  [ "#c84e89", "#F15F79" ],
  [ "#00F5A0", "#00D9F5" ],
  [ "#F7941E", "#72C6EF", "#00A651" ],
  [ "#F7941E", "#004E8F" ],
  [ "#72C6EF", "#004E8F" ],
  [ "#FD8112", "#0085CA" ],
  [ "#bf5ae0", "#a811da" ],
  [ "#00416A", "#E4E5E6" ],
  [ "#fbed96", "#abecd6" ],
  [ "#FFE000", "#799F0C" ],
  [ "#F7F8F8", "#ACBB78" ],
  [ "#00416A", "#799F0C", "#FFE000" ],
  [ "#334d50", "#cbcaa5" ],
  [ "#0052D4", "#4364F7", "#6FB1FC" ],
  [ "#5433FF", "#20BDFF", "#A5FECB" ],
  [ "#799F0C", "#ACBB78" ],
  [ "#ffe259", "#ffa751" ]
];

const directions = [
  'top',
  'top right',
  'right',
  'bottom right',
  'bottom',
  'bottom left',
  'left',
  'top left'
]

document.body.style.backgroundImage = `linear-gradient(to ${ directions[ Math.round( Math.random() * 7 ) ] }, ${ gradients[ Math.round( Math.random() * ( gradients.length - 1 ) ) ].reduce( ( acc, cur ) => acc + ', ' + cur, '' ).slice( 2 ) })`

export function getDefaultTextDirection (api) {
  const queryParam = api.getQueryParam('direction')
  const htmlDirection = window.getComputedStyle(document.documentElement).direction.toLowerCase()
  return queryParam || htmlDirection || 'ltr'
}

export function setTextDirection (direction) {
  document.documentElement.dir = direction;
  
  if(direction === 'rtl') {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
}

// if(!document.body.classList.contains(direction)) {
//   document.body.className += ' ' + direction;
// }

export function getDefaultTextDirection (api) {
  const queryParam = api.getQueryParam('direction')
  const htmlDirection = window.getComputedStyle(document.documentElement).direction.toLowerCase()
  return queryParam || htmlDirection || 'ltr'
}

export function setTextDirection (direction) {
  document.documentElement.dir = direction;
  document.documentElement.body.className += ' ' + direction;
  document.body.className += ' ' + direction;
}

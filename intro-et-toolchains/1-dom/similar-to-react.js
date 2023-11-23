function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

export function createRoot(hostEl) {
  return {
    render(elOrEls) {
      hostEl.innerHTML = '';
      if (isIterable(elOrEls)) {
        hostEl.append(...elOrEls);
      } else {
        hostEl.append(elOrEls);
      }
    },
  };
}

/**
 * Sprite loader
 * Loads an SVG sprite to the DOM (avoids IE issues with external SVG files)
 */
const spriteLoader = (() => {
  function load(spritePath) {
    fetch(spritePath).then(response => {
      return response.text();
    }).then(sprite => {
      const container = document.createElement('div');
      container.innerHTML = sprite;
      container.style.height = 0;
      container.style.width = 0;
      container.style.visibility = 'hidden';
      document.body.insertBefore(container, document.body.childNodes[0]);
    });
  }

  return {
    load,
  }
})();

export default spriteLoader;

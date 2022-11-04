if (!/catalog|form/.test(location.pathname)) {
  window.onresize = window.onload = () => {
    const indexCatalog__icon = document.querySelectorAll(
      ".index-catalog__tagline .index-catalog__icon"
    );

    for (let i of indexCatalog__icon) {
      if (window.innerWidth > 1440 && i.dataset.scale < 2) {
        i.style.width = `${i.getAttribute("width") * 2}px`;
        i.dataset.scale = 2;
      } else if (window.innerWidth < 1440 && i.dataset.scale > 1) {
        i.style.width = `${i.getAttribute("width") / 2}px`;
        i.dataset.scale = 1;
      }
    }
  };
}

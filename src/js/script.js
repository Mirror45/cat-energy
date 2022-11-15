if (!/catalog|form/.test(location.pathname)) {
  window.onresize = window.onload = () => {
    const indexCatalog__icon = document.querySelectorAll(
      ".index-catalog__tagline .index-catalog__icon"
    );

    for (let i of indexCatalog__icon) {
      if (window.innerWidth > 1439 && i.dataset.scale < 2) {
        i.style.width = `${i.getAttribute("width") * 2}px`;
        i.dataset.scale = 2;
      } else if (window.innerWidth < 1440 && i.dataset.scale > 1) {
        i.style.width = `${i.getAttribute("width") / 2}px`;
        i.dataset.scale = 1;
      }
    }
  };
}

const mainNav = document.querySelector(".main-nav");
const mainNav__toggle = document.querySelector(".main-nav__toggle");
mainNav.classList.remove("main-nav--disabled");
mainNav__toggle.onclick = () => {
  mainNav.classList.toggle("main-nav--disabled");
  mainNav__toggle
    .querySelector("use")
    .setAttribute(
      "href",
      mainNav.classList.contains("main-nav--disabled")
        ? "src/icon/img.svg#close"
        : "src/icon/img.svg#burger"
    );
};

if (!/catalog|form/.test(location.pathname)) {
  const sample__toggle = document.querySelector(".sample__toggle");
  const sample__editor = document.querySelector(".sample__editor");

  sample__toggle.onmousedown = (event) => {
    sample__toggle.onmousemove = (e) => {
      let img = +sample__editor.dataset.widthImg;
      if (e.x > event.x && img < 100) {
        sample__editor.dataset.widthImg = img + 10;
        sample__editor.setAttribute(
          "style",
          `--width-sample-img: ${img + 10}%;`
        );
      } else if (e.x < event.x && img > 0) {
        sample__editor.dataset.widthImg = img - 10;
        sample__editor.setAttribute(
          "style",
          `--width-sample-img: ${img - 10}%;`
        );
      }
    };
  };

  window.onmouseup = () => (sample__toggle.onmousemove = null);
}

//# sourceMappingURL=script.js.map

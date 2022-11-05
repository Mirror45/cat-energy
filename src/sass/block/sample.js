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

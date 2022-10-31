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

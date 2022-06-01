let rellax = new Rellax(".rellax", {
  wrapper: ".hero-inside",
});

let socialFloat = document.querySelector("#image");
let footer = document.querySelector("#before-footer");
const mediaQuery = window.matchMedia("(max-width: 1300px)");

function checkOffset() {
  function getRectTop(el) {
    let rect = el.getBoundingClientRect();
    return rect.top;
  }

  if (
    getRectTop(socialFloat) + document.body.scrollTop + socialFloat.offsetHeight >=
    getRectTop(footer) + document.body.scrollTop - 100
  ) {
    socialFloat.style.position = "absolute";
    socialFloat.style.top = "1710px";
    if (mediaQuery.matches) {
      socialFloat.style.top = "1950px";
    }
  }
  if (document.body.scrollTop + window.innerHeight < getRectTop(footer) + document.body.scrollTop) {
    socialFloat.style.position = "fixed"; // restore when you scroll up
    socialFloat.style.top = "15%";
  }
  socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function () {
  checkOffset();
});

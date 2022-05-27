let rellax = new Rellax(".rellax", {
  wrapper: ".hero-inside",
});

let socialFloat = document.querySelector("#image");
let footer = document.querySelector("#before-footer");

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
    socialFloat.style.top = "1910px";
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

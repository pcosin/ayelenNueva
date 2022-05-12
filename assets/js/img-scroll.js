// let aim = document.getElementById('image'), room;

// window.addEventListener('load', setEdge);


// window.addEventListener('scroll', function() {

//   let ratio = (this.pageYOffset || this.scrollY)

//   aim.style.setProperty('--epoch', ratio);
// });

// function setEdge() {

//   room = window.innerHeight;

//   aim.style.setProperty('--maximum', room-aim.height + 'px');
// }

let rellax = new Rellax('.rellax', {
    wrapper: '.hero-inside'
  });


var socialFloat = document.querySelector('.rellax');
var footer = document.querySelector('#before-footer');

function checkOffset() {
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }
  
  if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
    socialFloat.style.bottom = '350px';
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    socialFloat.style.bottom = '0px'; // restore when you scroll up
  
  socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function(){
  checkOffset();
});




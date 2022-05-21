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


let socialFloat = document.querySelector('.rellax');
let footer = document.querySelector('#before-footer');

function checkOffset() {
  function getRectTop(el){
    let rect = el.getBoundingClientRect();
    return rect.top;
  }
  
  if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 100)
    socialFloat.style.position = 'absolute';
    socialFloat.style.bottom = '100px';

  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    socialFloat.style.position = 'fixed'; // restore when you scroll up
  
  socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function(){
  checkOffset();
});






//   $(window).scroll(() => {
//     //Distance from top fo document to top of footer
//     topOfFooter = $('#footer').position().top;
//      // Distance user has scrolled from top + windows inner height
//      scrollDistanceFromTopOfDoc = $(document).scrollTop() + window.innerHeight;
//      // Difference between the two.
//      scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter; 
//     // If user has scrolled further than footer,
//       if (scrollDistanceFromTopOfDoc > topOfFooter) {
//         // add margin-bottom so button stays above footer.
//         $('#floating-button').css('margin-bottom',  0 + scrollDistanceFromTopOfFooter);
//       } else  {
//         // remove margin-bottom so button goes back to the bottom of the page
//         $('#floating-button').css('margin-bottom', 0);
//       }
//     });


const menu = document.querySelector('.js-menu');
const navBar = document.querySelector('.js-navbar');
const close = document.querySelector('.js-close');


menu.addEventListener('click', function() {

    navBar.classList.add('open__navbar')


})

close.addEventListener('click', function() {

    navBar.classList.remove('open__navbar')


})


//slider show big////////////////////////////////
var swiper = new Swiper(".slider__big", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//slidersmall
var swiper = new Swiper('.slider__small', {
    slidesPerView: 5,
    spaceBetween:20,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    direction: getDirection(),
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
   
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }



//playvideo
const play = document.querySelector('.js-play-video');
const modalVideo = document.querySelector('.js-modal-video');
const overLay = document.querySelector('.js-overlay');
const player = document.getElementById('player');



play.addEventListener('click', function() {

    modalVideo.classList.add('open__modal-video');

})



overLay.addEventListener('click', function() {

    modalVideo.classList.remove('open__modal-video');


})

overLay.addEventListener('click', pauseVid)

function pauseVid() {
    player.pause();

}

// couwt down



function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
  window.addEventListener('scroll', function () {

    if(this.scrollY >= 3050 && this.scrollY<3100){
    animateNumber(452, 1, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.querySelector('.js-number').innerText = formattedNumber
    })
    
    animateNumber(120, 1, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.querySelector('.js-number-1').innerText = formattedNumber
    })
    
    animateNumber(283, 1, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.querySelector('.js-number-2').innerText = formattedNumber
    })
    animateNumber(197, 1, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.querySelector('.js-number-3').innerText = formattedNumber
      })
    }
  })



//scroll top


function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 660) scrollTop.classList.add('scroll__open'); else scrollTop.classList.remove('scroll__open')
}
window.addEventListener('scroll', scrollTop)

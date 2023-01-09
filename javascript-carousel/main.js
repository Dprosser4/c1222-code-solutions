
var $rightArrow = document.querySelector('.fa-chevron-right');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $heroImg = document.querySelector('#hero-img');
var currentImgIndex = 0;

var heroImages = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

$rightArrow.addEventListener('click', imageRight);
$leftArrow.addEventListener('click', imageLeft);

var $dots = document.querySelector('.align-dots');
$dots.addEventListener('click', circleChange);
var $allDots = document.querySelectorAll('.dot');

function circleChange(event) {
  if (event.target.tagName === 'I') {
    var currentDotID = event.target.closest('i');
    currentDotID = Number(currentDotID.getAttribute('data-dot-id'));
    for (var i = 0; i < $allDots.length; i++) {
      $allDots[i].setAttribute('class', 'dot dot-pad fa-solid fa-circle');
    }
    $allDots[currentDotID].setAttribute('class', 'dot dot-pad fa-regular fa-circle');
    $heroImg.setAttribute('src', heroImages[currentDotID]);
    currentImgIndex = currentDotID;
    clearInterval(carouselChange);
    carouselChange = setInterval(imageRight, 3000);
  }

}

function imageRight(event) {
  if (currentImgIndex === 4) {
    $heroImg.setAttribute('src', heroImages[0]);
    $allDots[4].setAttribute('class', 'dot dot-pad fa-solid fa-circle');
    $allDots[0].setAttribute('class', 'dot dot-pad fa-regular fa-circle');
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
    $heroImg.setAttribute('src', heroImages[currentImgIndex]);
    $allDots[currentImgIndex - 1].setAttribute('class', 'dot dot-pad fa-solid fa-circle');
    $allDots[currentImgIndex].setAttribute('class', 'dot dot-pad fa-regular fa-circle');
  }
  clearInterval(carouselChange);
  carouselChange = setInterval(imageRight, 3000);
}

function imageLeft(event) {
  if (currentImgIndex === 0) {
    $heroImg.setAttribute('src', heroImages[4]);
    $allDots[0].setAttribute('class', 'dot dot-pad fa-solid fa-circle');
    $allDots[4].setAttribute('class', 'dot dot-pad fa-regular fa-circle');
    currentImgIndex = 4;
  } else {
    currentImgIndex--;
    $heroImg.setAttribute('src', heroImages[currentImgIndex]);
    $allDots[currentImgIndex + 1].setAttribute('class', 'dot dot-pad fa-solid fa-circle');
    $allDots[currentImgIndex].setAttribute('class', 'dot dot-pad fa-regular fa-circle');
  }
  clearInterval(carouselChange);
  carouselChange = setInterval(imageRight, 3000);
}

var carouselChange = setInterval(imageRight, 3000);



var $modalBtn = document.querySelector('.modalbtn')
var $noBtn = document.querySelector('.nobtn')
var $overlay = document.querySelector('.overlay')

$modalBtn.addEventListener('click', modalShow)
$noBtn.addEventListener('click', modalHide)



function modalShow(event){
  $overlay.setAttribute('class', 'overlay')
}

function modalHide(event){
  $overlay.setAttribute('class', 'overlay vanish')
}



var numClicks = 0
var $hotbtn = document.querySelector('.hot-button')
var $clickCount = document.querySelector('.click-count')


function getClicks(event){
  numClicks++
  $clickCount.textContent = 'Clicks: ' + numClicks
  if (numClicks < 4){
    $hotbtn.className = 'hot-button cold'
  } else if( numClicks < 7 ) {
    $hotbtn.className = 'hot-button cool'
  } else if (numClicks < 10) {
    $hotbtn.className = 'hot-button tepid'
  } else if (numClicks < 13) {
    $hotbtn.className = 'hot-button warm'
  } else if (numClicks < 16) {
    $hotbtn.className = 'hot-button hot'
  } else {
    $hotbtn.className = 'hot-button nuclear'
  }
}
$hotbtn.addEventListener('click', getClicks)

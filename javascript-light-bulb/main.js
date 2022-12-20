

function onOff(event){
  if (currentState) {
    $lightbulb.className = 'lightbulb on'
    $background.className = 'background backon'
    currentState = false
  } else {
    $lightbulb.className = 'lightbulb off'
    $background.className = 'background backoff'
    currentState = true
  }
}

var $lightbulb = document.querySelector('.lightbulb')
var $background = document.querySelector('.background')
var currentState = true
$lightbulb.addEventListener('click', onOff)

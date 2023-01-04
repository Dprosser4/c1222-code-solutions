
var countdownInterval = setInterval(changeDisplay, 1000);

var $countdownDisplay = document.querySelector('.countdown-display');

function changeDisplay() {
  if ($countdownDisplay.textContent > 1) {
    var displayNum = $countdownDisplay.textContent;
    displayNum--;
    $countdownDisplay.textContent = displayNum;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownInterval);
  }

}

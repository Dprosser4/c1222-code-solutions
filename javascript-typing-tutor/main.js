
/* creates a flat array of all the starting words with spaces after except the last word */

var startingWords = ['grumpy', 'wizard', 'make', 'toxic', 'brew']

var startingLettersArray = []

function createStartingLetters(array){
  for (let i = 0; i < startingWords.length; i++){
      var splitWords = []
      splitWords.push(startingWords[i].split(''))
      for (var k = 0; k < splitWords.length; k++){
        startingLettersArray.push(splitWords[k])
      }
      startingLettersArray.push(' ')
  }
  startingLettersArray = startingLettersArray.flat()
  startingLettersArray.pop()
}
/* creates all the span elements in the DOM */

createStartingLetters(startingWords)

var $words = document.querySelector('.words')

for (var z = 0; z < startingLettersArray.length; z++) {
  var newSpan = document.createElement('span')
  newSpan.textContent = startingLettersArray[z]
  newSpan.setAttribute('class', 'span')
  $words.appendChild(newSpan)
}

var $firstSpan = document.querySelector('.span')
$firstSpan.setAttribute('class', 'span underline')



/* gets all the spans and adds the keydown event listener */

$allSpans = document.querySelectorAll('.span')

var currentLetter = 0
var errorsMade = 0

function typeDetector(event){
  if (event.key === $allSpans[currentLetter].textContent){
    $allSpans[currentLetter].setAttribute('class', 'span green')
    $allSpans[currentLetter + 1].setAttribute('class', 'span underline')
    currentLetter++
  } else if (event.key !== $allSpans[currentLetter].textContent){
    $allSpans[currentLetter].setAttribute('class', 'span red underline')
    errorsMade++
  }
}

document.addEventListener('keydown', typeDetector)

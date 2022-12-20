/* exported titleCase */

/*
create a new string for the final capitalized title
create a string for the current word
create an array with words to not capitalize
create a boolean for included in the excluded words

look at each char in string
add each char to current word
when the a space char is encountered
look at each of the excluded words

if current word is equal to the any of the exluded words
  add it to the new string as is
  if not upper case the first letter (currentWord at index 0)
  add current word to the new string

  reset the current word


*/

function excludeWord (string){
  var excludedWords = ['and ', 'or ', 'nor ', 'but ', 'a ', 'an ', 'the ', 'as ', 'at ', 'by ', 'for ', 'in ', 'of ', 'on ', 'per ', 'to ']
  var exclude = false
  for (var i = 0; i < excludedWords.length; i++){
    if (string === excludedWords[i]){
      return true
    }
  }
  return false
}

function capFirstLetter(string) {
  var newStr = string[0].toUpperCase()
  for (var i = 1; i < string.length; i++){
    newStr += string[i].toLowerCase()

  }
  return newStr
}


function titleCase(title){
  var finalString = ''
  var currentWord = ''
  for (var i = 0; i < title.length; i++){
    currentWord += title[i].toLowerCase()
    console.log(currentWord)
    if (title[i] === ' ') {
        if (excludeWord(currentWord) && finalString !== '' || currentWord.endsWith(': ')){
        finalString += currentWord
        currentWord = ''
      } else {
        currentWord = capFirstLetter(currentWord)
        finalString += currentWord
        currentWord = ''
      }
    }
  }
    if (currentWord !== ''){
      currentWord = capFirstLetter(currentWord)
      finalString += currentWord
    }
    return finalString
  }

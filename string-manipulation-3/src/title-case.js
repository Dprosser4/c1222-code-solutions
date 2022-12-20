/* exported titleCase */

/*
create a new string for the final capitalized title
create a string for the current word
look at each char in string
add it to current word but lowercase
check if the char is a space
  if it is
  check if it is one of the exluded word(helper function), the first word, or the start of a subtitle
    if yes add current word to the final string
    reset current word to empty string
  check if current word is any of the Special cases (javascipt or API)
    if yes change current word to the correct string (JavaScript, API)
  for all other
  set current word to have its first letter Capitalized (helper function)
  add the current word the final string

after the loop if currentword is not empty
 check if its a special case
 if yes change current word to proper string
 add it to the final string
 for all other cases
 set current word to have proper capitalitaion
 then add it to the final string

return the final string

(helper function for excluding words)

create an array with all excluded words
create a boolean and set it true
look at each word in the array and see if it matches the string
return true if it does
return false if it doesnt


(helper function to capitalize the first char in string)

create a new string with the first char capitalized
look at each of the rest of the chars
if the new string ends with a dash (handles subtitles)
capitalize the nex char
add it to the new string
for all other cases add the char to the new string

return the string after the loop



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
    if (newStr.endsWith('-')){
      newStr += string[i].toUpperCase()
    } else {
      newStr += string[i].toLowerCase()
    }
  }
  return newStr
}




function titleCase(title){
  var finalString = ''
  var currentWord = ''
  for (var i = 0; i < title.length; i++){
    currentWord += title[i].toLowerCase()
    if (title[i] === ' ') {
        if (excludeWord(currentWord) && finalString !== '' && finalString.endsWith(': ') !== true){
        finalString += currentWord
        currentWord = ''
        } else if (currentWord === 'javascript '){
          currentWord = 'JavaScript '
          finalString += currentWord
          currentWord = ''
        } else if (currentWord === 'javascript: ') {
          currentWord = 'JavaScript: '
          finalString += currentWord
          currentWord = ''
        } else if (currentWord === 'api ') {
          currentWord = 'API '
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
      if (currentWord === 'api') {
        currentWord = 'API'
        finalString += currentWord
        currentWord = ''
      } else {
        currentWord = capFirstLetter(currentWord)
        finalString += currentWord
      }
    }
    return finalString
  }

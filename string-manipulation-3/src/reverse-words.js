/* exported reverseWords */


/*
create a new string
create a string to hold the current word
look at each char
add it to the current word if it is not a space
when a space is encountered
look at each char of the current word in reverse
add it to the new string with a space on the other side
reset the current word
when the loop is finished
add what ever is left in current word to the end of the new string
return the new string
*/

function reverseWords(string){

  var newString = ''
  var currentWord = ''

  for (var i = 0; i < string.length; i++){
    if (string[i] !== ' ') {
      currentWord += string[i]
    }
    if (string[i] === ' '){
      for (var j = currentWord.length -1 ; j >= 0; j--){
        newString += currentWord[j]
      }
      newString += ' '
      currentWord = ''
    }
  }
  if (currentWord !== ''){
    for (var k = currentWord.length - 1; k >= 0; k--) {
      newString += currentWord[k]
  }
  }
  return newString
}

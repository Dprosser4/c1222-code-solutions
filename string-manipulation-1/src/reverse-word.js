/* exported reverseWord */



/*
create a new string
get each char starting with the last (index - 1) to first index 0
add each char to new string
return string

*/

function reverseWord(word){
  var newStr = ''
  for (var i = word.length - 1; i >= 0; i--){
    newStr += word[i]
  }
  return newStr
}

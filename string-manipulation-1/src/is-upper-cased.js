/* exported isUpperCased */


/*
create boolean variable set to true
get each char of the string
check if each letter is not uppercase
return false if any chars are lowercase

*/

function isUpperCased(word){
  var isUpper = true
  for (var i = 0; i < word.length; i++){
    if (word[i] !== word[i].toUpperCase()){
      isUpper = false
    }
  }
  return isUpper
}

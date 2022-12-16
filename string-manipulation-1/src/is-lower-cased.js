/* exported isLowerCased */


/*
create boolean variable set to true
get each char of the string
check if each letter is not case
return false if any chars are uppercase

*/

function isLowerCased(word) {
  var isLower = true
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      isLower = false
    }
  }
  return isLower
}

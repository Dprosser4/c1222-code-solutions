/* exported capitalizeWords */


/*
create a new string
capitalize the first char
look at each char
look for a ' ' char
capitalize the next char

return the string

*/

function capitalizeWords(string){
  var newStr = string[0].toUpperCase()
  for (var i = 0; i < string.length - 1; i++){
    if (string[i] === ' '){
      newStr += string[i + 1].toUpperCase()
    } else {
      newStr += string[i + 1].toLowerCase()
    }
  }
  return newStr
}

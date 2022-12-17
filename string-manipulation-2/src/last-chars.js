/* exported lastChars */

/*
create new empty string
check string is shorter than length if true just return the string
look at each char up to the length input starting at the end
add those chars to the new string
return new string
*/

function lastChars(length, string){
  newStr = ''
  if (string.length < length) {
    newStr = string
  } else {
    for (var i = string.length - 1 ; i >= string.length - length; i--) {
      newStr = string[i] + newStr
    }
  }
  return newStr
}

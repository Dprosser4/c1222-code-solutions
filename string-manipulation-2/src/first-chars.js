/* exported firstChars */

/*
create new empty string
check string is shorter than length if not just return the string
look at each char up to the length input
add those chars to the new string
return new string
*/

function firstChars(length, string){
  newStr = ''
  if (string.length < length){
    return string
  } else {
    for (var i = 0; i < length; i++){
      newStr += string[i]
    }
  }
  return newStr
}

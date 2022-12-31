/* exported truncate */

/*

create a empty string
check if the string can be truncated (string is less than the truncation )
if so just add the ...
if not then
access the number of char based on the length input
add those each char to the new string
add the ...
return the new string


*/

function truncate(length, string){
  var newStr = ''
  if (string.length < length){
    newStr = string
  } else {
  for (var i = 0; i < length; i++){
    newStr += string[i]
  }
  }
  newStr += '...'
  return newStr
}

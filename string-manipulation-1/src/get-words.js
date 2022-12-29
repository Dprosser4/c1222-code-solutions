/* exported getWords */


/*

create a new string
create an empty array
get each char of the string
check if char is ' '
if not ' ' then add char to new string
if ' ' is the char then add the new string to the array
reset the new string

for last string check that is not blank
add final word to array

return the array

*/

function getWords(string){
  var newStr = ''
  var array = []
  for (var i = 0; i < string.length; i++){
    if (string[i] !== ' '){
      newStr += string[i]
    } else if (string[i] === ' ') {
      array.push(newStr)
      newStr = ''
    }
  }
  if (newStr !== ''){
    array.push(newStr)
  }
  return array
}

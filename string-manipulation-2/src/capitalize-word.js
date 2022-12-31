/* exported capitalizeWord */


/*
create empty string
capitallize the first letter always
look at each of the remaining strings
set them all to lowercase and add them to the new string
check if the string is 'Javascript'
if yes change to JavaSript

return  the new string


*/

function capitalizeWord(word){
  var newStr = word[0].toUpperCase()
  for (var i = 1; i < word.length; i++){
    newStr += word[i].toLowerCase()
  }
  if (newStr === 'Javascript'){
    newStr = 'JavaScript'
  }
  return newStr
}

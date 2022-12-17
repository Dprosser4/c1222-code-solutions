/* exported ransomCase */


/*
create an new empty string
look at each char of the string
if the last char is lower case then nex will be upper
vice versa

return the new string

*/

function ransomCase(string){
  newStr = string[0]
  for (var i = 1; i < string.length; i++){
    if (string[i] !== string[i].toUpperCase){
      newStr += string[i].toUpperCase()
    } else if (string[i] !== string[i].toLowerCase) {
      newStr += string[i].toLowerCase()
    }
  }
  return newStr

}

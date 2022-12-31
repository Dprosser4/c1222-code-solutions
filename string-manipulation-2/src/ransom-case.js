/* exported ransomCase */


/*
create an new empty string
look at each char of the string
on even iterations convert char to uppercase
on odd vice versa


return the new string

*/

function ransomCase(string){
  newStr = ''
  for (var i = 0; i < string.length; i++){
    if (i % 2 !== 0) {
      newStr += string[i].toUpperCase()
    } else {
      newStr += string[i].toLowerCase()
    }
  }
  return newStr

}

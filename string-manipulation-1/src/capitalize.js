/* exported capitalize */

/*

create new string
first char always upper case
add first char to new string
loop thru the rest of the string each char of string
force all to be lower case and add them to new string
return the new string



*/
function capitalize(word){
  var capWord = word[0].toUpperCase()
  for (var i = 1; i < word.length; i++){
    capWord += word[i].toLowerCase()
  }
  return capWord
}

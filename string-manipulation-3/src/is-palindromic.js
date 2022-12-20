/* exported isPalindromic */


/*
create a boolean
create a variable for the string with no spaces
create a variable for the string reversed with no spaces
look at each char
remove all the spaces
add each char to the nospaces variable
look at each char in the no spaces variable starting from the end
add those chars to the reversed no space variable
check if the variables are the same
set boolean to truf if both are equal
return the boolean


*/

function isPalindromic(string){
  var isPal = false
  var noSpaceString = ''
  var revNoSpaceString = ''
  for (var i = 0; i < string.length; i++){
    if (string[i] != ' '){
      noSpaceString += string[i]
    }
  }
  for (var j = noSpaceString.length -1; j >= 0; j--){
    revNoSpaceString += noSpaceString[j]
  }
  if (noSpaceString === revNoSpaceString){
    isPal = true
  }
  return isPal
}

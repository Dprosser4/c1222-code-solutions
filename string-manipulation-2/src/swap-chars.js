/* exported swapChars */


/*
create a new empty string
create 2 new variables assigned to the chars a input indexes
look at each char in the string
at iteration equal to first insert the oppisite variable
vice versa
all other iterations add the char to the new string

return the new string




*/

function swapChars(firstIndex, secondIndex, string) {
    var newStr = ''
    var firstChar = string[firstIndex]
    var secondChar = string[secondIndex]
    for (var i = 0; i < string.length; i++){
      if (i === firstIndex){
        newStr += secondChar
      } else if (i === secondIndex){
        newStr += firstChar
      } else {
        newStr += string[i]
      }
    }
    return newStr
}

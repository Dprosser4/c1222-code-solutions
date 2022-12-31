/* exported numVowels */

/*
create a new variable number 0
look at each char
check if the char is a vowel
if it is a vowel increase variable by 1
return variable
*/

function numVowels(string){
  var count = 0
  var vowels = ['a','e','i','o','u','A','E','I','O','U']
  for (var i = 0; i < string.length; i++){
    if (vowels.includes(string[i])){
      count++
    }
  }
  return count
}

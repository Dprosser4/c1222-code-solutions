/* exported isAnagram */


/*
create a boolean
create a variable for the sorted first string
create a variable for the sorted first string
look at each char of the first string and if it is not a space
add it to the sorted first string
look at each char of the second string and if it is not a space
add it to the sorted second string
split sort and rejoin the first sorted string so that its in alphabetical order
split sort and rejoin the second sorted string so that its in alphabetical order

compare the two sorted sting and if they are equal
set the boolean to true
return the boolean

*/

function isAnagram(firstString, secondString){
  var isAnagram = false
  var firstStringSorted = ''
  var secondStringSorted = ''
  for (var i = 0; i < firstString.length; i++){
    if (firstString[i] !== ' '){
       firstStringSorted += firstString[i]
       }
    }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondStringSorted += secondString[j]
    }
  }
  var sortFirstString = firstStringSorted.split('')
  firstStringSorted = sortFirstString.sort().join('')

  var sortSecondString = secondStringSorted.split('')
  secondStringSorted = sortSecondString.sort().join('')

  if (firstStringSorted === secondStringSorted){
    isAnagram = true
  }
  return isAnagram
  }

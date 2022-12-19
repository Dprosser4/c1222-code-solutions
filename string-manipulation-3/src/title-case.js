/* exported titleCase */

/*
create a new string for the final capitalized title
create a string for the current word
create an array with words to not capitalize
create a boolean for included in the excluded words

look at each char in string
add each char to current word
when the a space char is encountered
look at each of the excluded words

if current word is equal to the any of the exluded words
  add it to the new string as is
  if not upper case the first letter (currentWord at index 0)
  add current word to the new string

  reset the current word


*/

function titleCase(title){
  var finalString = ''
  var currentWord = ''
  var excludedWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to']
  for (var i = 0; i < title.length; i++){
    currentWord += title[i]
    if (title[i] === ' '){
      finalString += currentWord
      currentWord = ''
    }
  }
  return finalString

}

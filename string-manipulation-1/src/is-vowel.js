/* exported isVowel */


/*
create boolean variable set to true
convert to lowercase
check if char is not equal to a e i or u
if any char pass then change to false





*/

function isVowel(char){
  var vowel = true
  char = char.toLowerCase()
  if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'){
    vowel = false
  }
  return vowel
}

/* exported addSuffixToAll */
function addSuffixToAll(words, suffix){
  var sufAdded = []
  for(var i = 0; i < words.length; i++){
    sufAdded.push(words[i] + suffix)
  }
  return sufAdded
}

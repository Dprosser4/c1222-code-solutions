/* exported includesSeven */
function includesSeven(array){
  var includeSeven = false
  for (var i = 0; i < array.length; i++){
    if (array[i] === 7){
      includeSeven = true
    }
  }
  return includeSeven
}

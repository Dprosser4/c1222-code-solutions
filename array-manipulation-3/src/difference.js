/* exported difference */

/*
create a new empty array
look at each item in the first array
if the second array does not contain the item in first array at index of current iteration
add the item to the new array
if the first array does not contain the item in second array at index of current iteration
add the item to the new array
*/

function difference(first, second) {
  var newArray = []
  for (var i = 0; i < first.length; i++){
    if (second.includes(first[i]) === false){
      newArray.push(first[i])
    }
  }
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i]) === false) {
      newArray.push(second[i])
    }
  }
  return newArray
}

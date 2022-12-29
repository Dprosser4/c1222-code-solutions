/* exported reverse */

/*

create a new empty array
get each item in array in order reverse starting at index of array length - 1 ending at index 0
add each item to new array
return the array

*/



function reverse(array) {
  var newArr = []
  for (var i = array.length - 1 ; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr
}

/* exported initial */

/*

create a new empty array
get each item in array in order excluding index at index equal to the length the array - 1
add each item to new array
return the array

*/



function initial(array){
  var newArr = []
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i])
  }
  return newArr
}

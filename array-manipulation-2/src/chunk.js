/* exported chunk */


/*
create a new empty array
create a another new array to store temporary arrays to be added to the new array
if the array length is longer than the size
look at each of the items in the input array up to the array length
add the cuurent item into the temp array
if temp array length is equal to the size input
push the temp array into the new array and reset it to empty
if were at the end of the array (number of itrerations is equal to array - 1 )
add the remaining items to the new array
return the new array


*/

function chunk(array, size){
  var newArray = []
  var tempArray = []
  if (array.length > size){
    for (var i = 0; i < array.length; i++){
      tempArray.push(array[i])
      if (tempArray.length === size){
        newArray.push(tempArray)
        tempArray = []
      } else if (i === array.length - 1) {
        newArray.push(tempArray)
      }
    }
      return newArray
  } else {
    return newArray
  }
}

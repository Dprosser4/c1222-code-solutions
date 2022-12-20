/* exported takeRight */


/*
create a new array
check if array is longer than the count
if so look at each index of the array staarting at length of the array minus the count
add those items to the new array
return the new array
if not return a copy of the array


*/

function takeRight(array, count) {
  newArray = []
  if (array.length > count) {
    for (var i = array.length - count; i < array.length; i++){
      newArray.push(array[i])
    }
    return newArray
  } else{
    newArray = [...array]
    return newArray
  }

}

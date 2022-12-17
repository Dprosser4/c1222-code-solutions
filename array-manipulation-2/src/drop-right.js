/* exported dropRight */


/*
create a new empty array
check if the array length is greater than the count
if so look at each item in array starting at the beginnning 0 and ending array length - count
add those items to the array
return the new array
if not return the array empty

*/

function dropRight(array, count){
  var newArray = []

  if (array.length > count){
    for (var i = 0; i < array.length - count; i++){
      newArray.push(array[i])
    }
    return newArray
  } else {
    return newArray
  }
}

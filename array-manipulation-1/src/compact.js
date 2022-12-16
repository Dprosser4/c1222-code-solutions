/* exported compact */



/*
need to omit all falsy data from new array

create a new array
get each item in array
if item is truth add it to the array

return the array


*/


function compact(array){
  var newArr = []
  for (var i = 0; i < array.length; i++){
    if (array[i]){
      newArr.push(array[i])
    }
  }
  return newArr
}

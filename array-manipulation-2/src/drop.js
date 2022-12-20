/* exported drop */



/*
create an array
look at each item in the array starting at count
add each char to array
return array

*/

function drop(array, count){
  newArr = []
  for (var i = count; i < array.length; i++){
    newArr.push(array[i])
  }
  return newArr
}

/* exported tail */

/*
create a new empty array
get each item in array in order excluding index 0
add each item to new array
return the array



*/

function tail(array){
  var newArr = []
  for (var i = 1; i < array.length; i++){
    newArr.push(array[i])
  }
  return newArr
}

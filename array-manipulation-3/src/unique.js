/* exported unique */


/*
create a new array
look at each item in the array
if the the array includes the current item and the new array does not include the item
push the item into the new array
return the array

*/

function unique(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++){
    if (array.includes(array[i]) && newArray.includes(array[i]) === false){
      newArray.push(array[i])
    }
  }
  return newArray
}

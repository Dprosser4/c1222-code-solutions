/* exported flatten */


/*
create an empty array
look at each item in array
set a new variable to the current item
if the item is an array
look at each item in the sub array
push the the values to the new array
all other cases just push the item to the new array
return the array
*/

function flatten(array){
  var newArray = []
  for (var i = 0; i < array.length; i++){
    var arr = array[i]
      if (Array.isArray(arr)){
        for (var j = 0; j < arr.length; j++){
          newArray.push(arr[j])
        }
      } else newArray.push(array[i])
  }
  return newArray
}

/* exported includes */


/*
create a boolean variable true
look at each item in the array
check if that item matches the current item
if so return true and finish
if no items match assign false to variable
return the variable
*/

function includes(array, value){
  var included = false
  for (var i = 0; i < array.length; i++){
    if (array[i] === value) {
      included = true
      i = array.length
    }
  }
  return included
}

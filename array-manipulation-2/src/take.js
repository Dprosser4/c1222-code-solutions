/* exported take */


/*
create a new empty array
check that array is greater than count
look at each element up to count index
add each item in array to new array
return new array
*/

function take(array, count){
  var newArr = []
  if (array.length > count){
  for (var i = 0; i < count; i++){
    newArr.push(array[i])
  }
  }
  return newArr
}

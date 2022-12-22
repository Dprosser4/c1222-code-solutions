/* exported union */


/*
create a new empty array
look at each item in first array
add each item into new array
look at each item in second array
if the item in second at current iteraions index is not included in the first array
add it to the new array
return the new array
*/

function union(first, second){
  var newArray = []
  for (var i = 0; i < first.length; i++){
      newArray.push(first[i])
    }
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i]) === false) {
      newArray.push(second[i])
    }
  }
  return newArray
}

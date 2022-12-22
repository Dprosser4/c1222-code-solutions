/* exported intersection */

/*
create a new array
look at each item in the first array
if the second array contains the item at the current iterations index in the first array
push thr item to the new array
return the array
*/

function intersection(first, second){
  var newArray = []
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i])
    }
  }
  return newArray
}

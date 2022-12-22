/* exported zip */

/*
create an empty array
look at each item in which ever array is shorter
push the first and second item at the current iterations index into the new array

return the array

*/

function zip(first, second){
  var newArray = []
  if (first.length >= second.length){
    for (var i = 0; i < second.length; i++){
      newArray.push([first[i], second[i]])
    }
  } else if (first.length < second.length) {
    for (var j = 0; j < first.length; j++) {
      newArray.push([first[j], second[j]])
    }
  }
  return newArray
}

/* exported equal */

/*
create a boolean of true
check if the string lengths are equal
look all the items in first array
if the items at the same index are not equal
set the boolean to false
in all other cases return true
return the boolean
*/

function equal(first, second) {
  var check = true
  if (first.length === second.length){
    for (var i = 0; i < first.length; i++){
      if (first[i] !== second[i]) {
        check = false
      }
    }
  } else {
    check = false
  }
  return check
}

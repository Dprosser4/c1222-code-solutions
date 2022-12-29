/* exported getKeys */

/*
create an empty array
get all the propertys in an object
add them to the array
return the array
*/

function getKeys(object){
  var keys = []
  for (var key in object) {
    keys.push(key)
  }
  return keys;
}

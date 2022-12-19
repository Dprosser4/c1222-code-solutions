/* exported pick */



/*
create new object
look at each item in keys array
if the property exists and its value is not undefined
 look at each property in the input object
add that property and its value to the new object
return the new object
*/

function pick(source, keys){
  var newObject = {}
  for (var i = 0; i < keys.length; i++){
    for (var property in source){
      if (property === keys[i] && source[keys[i]] !== undefined ){
    newObject[property] = source[property]
      }
    }
  }
  return newObject
}

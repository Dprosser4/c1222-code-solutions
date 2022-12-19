/* exported omit */

/*
create a new empty object
look at each property and add it to the new object
look at each item in the keys area
if the property is present
delete that property from the object
return the object
*/

function omit(source, keys) {
  var newObject = {}

    for (var property in source){
      newObject[property] = source[property]
    }
   for (var i = 0; i < keys.length; i++) {
    for (var property in source) {
      if (property === keys[i]) {
        delete newObject[keys[i]]
      }
    }
  }
  return newObject
}

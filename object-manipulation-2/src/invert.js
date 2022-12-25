/* exported invert */


/*
create a new object
look at each property in the source object
assign the new object the name of the source property to the value of the source propety
return the new object
*/

function invert(source){
  var newObject = {}
  for (var property in source){
    newObject[source[property]] = property
  }
  return newObject
}

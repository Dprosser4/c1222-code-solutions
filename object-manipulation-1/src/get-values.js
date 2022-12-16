/* exported getValues */



/*
create an empty array
look at each key in the object
add the value of the property at that key to the array
return the array
*/



function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key])
  }
  return values;
}

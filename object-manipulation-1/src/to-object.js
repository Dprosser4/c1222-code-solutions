/* exported toObject */



/*

create an empty object
assign the input pair to the empty object
return the object

*/

function toObject(keyValuePair){
  var obj = {}
  obj[keyValuePair[0]] = keyValuePair[1]
  return obj;
}

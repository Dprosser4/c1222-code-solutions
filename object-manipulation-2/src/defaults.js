/* exported defaults */


/*
look at each proprety in source object
if target property and source property have the same name dont change the value
if the property doesnt exist add it to the target object
*/

function defaults(target, source){


  for (var addProp in source){
    if (target[addProp] !== source.addProp){
      target[addProp] = target[addProp]
    } else {
      target[addProp] = source[addProp]
    }
  }
}

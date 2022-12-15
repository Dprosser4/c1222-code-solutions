
function convertMinutesToSeconds(minutes){
  var seconds = minutes * 60;
  return seconds;
}
console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(5));

function greet(name){
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('greet result:', greet('Dylan'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('getArea result:', getArea(17,42));

function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}

console.log('getFirstName result:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('getLastElement result:', getLastElement(['propane', 'and', 'propane', 'accessories']));

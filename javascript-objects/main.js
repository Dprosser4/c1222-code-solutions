var student = {
  firstName: 'Dylan',
  lastName: 'Prosser',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName)

student.livesInIrvine = false;
student.previousOccupation = 'installer'
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Chevrolet',
  model: 'Chevelle',
  year: 1969
}

vehicle['color'] = 'Black';
vehicle['isConvertable'] = false;

console.log('value of vehicle["color"]', vehicle['color']);
console.log('value of vehicle["isConvertable"]', vehicle['isConvertable']);
console.log('value of vehicle;', vehicle);

var pet = {
  name: 'Tolstoy',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);

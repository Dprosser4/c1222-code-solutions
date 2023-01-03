
function ExampleConstructor() {

}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var aFunction = new ExampleConstructor();
console.log(aFunction);

var functionExists = aFunction instanceof ExampleConstructor;
console.log(functionExists);

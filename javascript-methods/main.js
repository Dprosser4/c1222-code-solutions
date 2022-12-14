 /*  The Math Object */

var num1 = 4
var num2 = 30
var num3 = 42

var maximumValue = Math.max(num1, num2, num3)

console.log('the largest number is:', maximumValue)


var heroes = ['Batman','Hulk', 'Spiderman', 'Antman']

var randomNumber = Math.random()

randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);

console.log(randomIndex)

var randomHero = heroes[randomIndex]

console.log('random hero:', randomHero)

/*  Array Methods */

var library = [
{
  title: 'War and Peace',
  author: 'Leo Tolsoy'
},
{
  title: 'The God Delusion',
  author: 'Richard Dawkins'
},
{
  title: 'Waking Up',
  author: 'Sam Harris'
}
]

lastBook = library.pop();
firstBook = library.shift()

console.log('lastBook:', lastBook);
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js)

library.unshift(css)

library.splice(1,1)

console.log('contents of library:', library)

/*   String Methods   */

fullName = 'Dylan Prosser'

firstAndLastName = fullName.split(' ')

console.log('value of firstAndLastName:', firstAndLastName)

firstName = firstAndLastName[0]

sayMyName = firstName.toUpperCase()

console.log('sayMyName:', sayMyName)

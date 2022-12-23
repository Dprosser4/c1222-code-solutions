console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
test cases:
playTheGame(['Dylan', 'Cody', 'Josh', 'Joseph'] , 2)
playTheGame(['Cody', 'Alex', 'Jimmy', 'Jordan'], 3)
playTheGame(['Dylan', 'Cody', 'Josh', 'Joseph'] , 12)
playTheGame(['Dylan', 'Cody', 'Josh', 'Joseph'] , 13)
playTheGame(['Cody', 'Alex', 'Jimmy', 'Jordan', 'Matt'], 3)
playTheGame(['Dylan', 'Cody',] , 2)

*/

/*
recieves array of strings that will be the player names
  guard agianst more than 4 players
  create an empty array to store player objects
  looks at each string
  create a temporary object to hold new player
  create a name property of the current iteration player string
  create a hand property with no value
  push the whole object to the players array
  return players
*/

function createPlayerObjects(array){
  if (array.length > 4){
    console.log('Input must contain no more than 4 players!')
    return
  }
  var players = []
  for (var i = 0; i < array.length; i++){
    var tempObj = {}
    tempObj['name'] = array[i]
    tempObj['hand'] = null
    players.push(tempObj)
  }
  return players
}

/*
this function creates a deck of cards as objects stored in an array and shuffles it
  create an array containing all the possible card ranks
  create an array containing all the possible card suits
  create an empty array to store all the card ojects
  create an empty array to store the deck once its shuffled
  look at each item in the card ranks array in order
    look at ech item in the suits array in order
    create a temporary object to store the new card
      add a rank property to the temporay object with the card value of the current iteration of the ranks loop
      add a rank property to the temporay object with the card value of the current iteration of the suits loop
      add a points property to each card based on how long the string name is
      if less the string length is 3 points should be 11 (ace)
      if the the string length is longer than 3 points should be 10 (face cards)
      if the string length is shorter than 3 points equals the value of the string as a number
      push the temporary object to the deck array
   shuffle the deck with the lodash shuffle method (Fisher–Yates shuffle)
   return the deck
*/

function createDeckObject(){
  var cardRanks = ['2','3','4','5','6','7','8','9','10', 'Jack', 'Queen', 'King', 'Ace']
  var suits = ['clubs', 'diamonds', 'hearts', 'spades']
  var deck = []
  var shuffledDeck = []
  for (var i = 0; i < cardRanks.length; i++){
    for (var k = 0; k < suits.length; k++){
      var tempObj = {}
      tempObj['rank'] = cardRanks[i]
      tempObj['suit'] = suits[k]

      if (cardRanks[i].length === 3){
        tempObj['points'] = 11
      } else if (cardRanks[i].length > 3){
        tempObj['points'] = 10
      } else {
        tempObj['points'] = Number(cardRanks[i])
      }
      deck.push(tempObj)
    }
  }
  deck = _.shuffle(deck)
  return deck
}

/*
this is the main function that plays the game

guard against too many cards being input
create a variable for cards dealt
create a varible to store a new shuffled deck and assign it result of the function that creates the desk
create a variable to store the players objects in the game and assign it the result the function that creates the players

look at each item in the game players
  create a temp array
  for the number of cards
  push the first card in the deck to the temp array
  add the the temp array to a new property of the player object called hand


look at each player
  create a variable for the score
  look at each players hand
    add the points of each card to the score
  add a new property to each player with their score

create a new variable to store the winning score
look at each players score
if the current players score is higher than the variable
assign the winnning score to the winnning score vairable

create an empty array to store the winner/winners
look at each players
if the players score is equal to the winning score
push that player into the winner array

create an empty array to store the winners as new strings
if there is more than one winner
  push the winners names into the new array
  log that there was a tie in the console
  have the function call it self with the new array and cards dealt as the new arguments
or else if there is only one winner
return the winner and log it to the console
*/


function playTheGame(array, numberofcards) {
  if (numberofcards > 13) {
    console.log('Number of cards must not exceed 12!');
    return;
  }
  var cardsDealt = numberofcards
  var gameDeck = createDeckObject()
  var gamePlayers = createPlayerObjects(array)


  for (var z = 1; z < array.length + 1; z++){
    var tempArr = []
    for (var q = 1; q < numberofcards + 1; q++){
      tempArr.push(gameDeck.shift())
    }
    gamePlayers[z - 1]['hand'] = tempArr
  }

  console.log(gamePlayers)
  for (var x = 0; x < gamePlayers.length; x++){
    var score = 0
    for (var y = 0; y < gamePlayers[x].hand.length; y++){
      score += gamePlayers[x].hand[y].points
    }
    gamePlayers[x]['score'] = score
  }
  var winningScore = 0
  for (var wincheck = 0; wincheck < gamePlayers.length; wincheck++){
    if (gamePlayers[wincheck].score > winningScore){
      winningScore = gamePlayers[wincheck].score
    }
  }

  var winner = []
  for (var winCompare = 0; winCompare < gamePlayers.length; winCompare++){
    if (gamePlayers[winCompare].score === winningScore){
      winner.push(gamePlayers[winCompare])
    }
  }

  var winners = []
  if (winner.length > 1){
    for (var tie = 0; tie < winner.length; tie++){
      winners.push(winner[tie].name)
    }
    console.log('There was a tie!')
    return playTheGame(winners, cardsDealt)

  } else if (winner.length === 1) {
    var winReturn = 'The Winner is: ' + winner[0].name
    return winReturn;
  }
}

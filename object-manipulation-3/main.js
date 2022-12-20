console.log('Lodash is loaded:', typeof _ !== 'undefined');


/*
test cases:
playCardGame(['Dylan', 'Cody', 'Josh', 'Joseph'], 2)
playCardGame(['Cody', 'Alex', 'Jimmy', 'Jordan'], 3)
playCardGame(['Cody', 'Alex', 'Jimmy', 'Jordan', 'Matt'], 3)




*/
function playCardGame(array, numberofcards){
  var players = []
  for (var i = 0; i < array.length; i++){
    tempObj = {}
    tempObj['name'] = array[i]
    tempObj['hand'] = null
    players.push(tempObj)
  }

console.log(players)





}

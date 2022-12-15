/* exported oddOrEven */
function oddOrEven(numbers){
  var oddEvenArr = []
  for (var i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0 ){
      oddEvenArr.push('even')
    } else {
      oddEvenArr.push('odd')
    }
  }
  return oddEvenArr
}

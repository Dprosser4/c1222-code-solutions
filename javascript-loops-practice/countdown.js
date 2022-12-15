/* exported countdown */
function countdown(number) {
  var countdown = []
  for (var i = 0; i <= number; i++){
    countdown.push(number - i)
  }
  return countdown
}

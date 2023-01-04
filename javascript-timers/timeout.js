
setTimeout(changeMessage, 2000);

var $message = document.querySelector('.message');

function changeMessage() {
  $message.textContent = 'Hello World';
}

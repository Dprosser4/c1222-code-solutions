


var $contactForm = document.querySelector('#contact-form')

function getInputs(event){
  event.preventDefault()
  var messagedata = {}
  messagedata[$contactForm.elements.name.name] = $contactForm.elements.name.value
  messagedata[$contactForm.elements.message.name] = $contactForm.elements.message.value
  messagedata[$contactForm.elements.email.name] = $contactForm.elements.email.value

  console.log(messagedata)
  $contactForm.reset()
}

$contactForm.addEventListener('submit', getInputs)



var $tabContainer = document.querySelector('.tab-container')
var $tabs = document.querySelectorAll('.tab')
var $views = document.querySelectorAll('.view')

$tabContainer.addEventListener('click', switchTabView)

function switchTabView(event){
  if (!event.target.matches('.tab')){
    return;
  }
  for (var i = 0; i < $tabs.length; i++){
    var viewStatus = event.target.getAttribute('data-view')
    if ($tabs[i] === event.target) {
      $tabs[i].setAttribute('class', 'tab active')
      for (var k = 0; k < $views.length; k++){
        if ($views[k].getAttribute('data-view') === viewStatus){
          $views[k].setAttribute('class', 'view')
        } else {
          $views[k].setAttribute('class', 'view hidden')
        }
      }
    } else {
      $tabs[i].setAttribute('class', 'tab')
    }
  }
}

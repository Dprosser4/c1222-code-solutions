


function handleClick(event){
  console.log('button clicked')
  console.log('event:', event)
  console.log('event.target:',  event.target)

}
var $clicked = document.querySelector('.click-button')
$clicked.addEventListener("click", handleClick)

function handleMouseOver(event){
  console.log('button hovered')
  console.log('event:', event)
  console.log('event.target', event.target)
}
var $mouseOver = document.querySelector('.hover-button')
$mouseOver.addEventListener("mouseover", handleMouseOver)

function handleDoubleClick (event){
  console.log('button double-clicked')
  console.log('event:', event)
  console.log('event.target', event.target)
}
var $doubleclick = document.querySelector('.double-click-button')
$doubleclick.addEventListener('dblclick', handleDoubleClick)

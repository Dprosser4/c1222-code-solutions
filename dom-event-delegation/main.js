


var $taskList = document.querySelector('.task-list')
$taskList.addEventListener('click', doneBtn)

function doneBtn(event){
  if (event.target.tagName === 'BUTTON' ){
    event.target.closest('.task-list-item').remove()
  }
}

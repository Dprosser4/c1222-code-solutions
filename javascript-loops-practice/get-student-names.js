/* exported getStudentNames */
function getStudentNames(students){
  var names = []
  for (var i = 0; i < students.length; i++){
    var currentStud = students[i]
    names.push(currentStud.name)
  }
  return names
}

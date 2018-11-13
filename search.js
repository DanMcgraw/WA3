document.addEventListener('DOMContentLoaded', function() {

  var search = document.getElementById('search');
  search.addEventListener("keyup", updateTable);
  var table = document.getElementById('list');
  var list = JSON.parse(localStorage.getItem("studentsList"));

  function updateTable() {
    table.tBodies[0].innerHTML="";
    for (var i = 0; i < list.length; i++)
      if (parseStudent(list[i])[1].toUpperCase().includes(search.value.toUpperCase()))
        table.tBodies[0].appendChild(studentToRow(parseStudent(list[i])));
  }
}, false);

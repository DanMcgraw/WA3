function txtToHTML(str) {
   var div = document.createElement('div');
   div.innerHTML = str.trim();

   return div.firstChild;
}

function parseStudent(str) {
   var out = str.split(',');
   return out;
}

function studentToRow(student) {
   var row = document.createElement('tr');
   var cells = [];
   cells.push(student[0] + " " + student[1]);
   cells.push(student[2] + ", " + student[3] + ", " + student[4] + ", " + student[5]);
   cells.push(student[6]);
   cells.push(student[7]);
   for (var i = 0; i < cells.length; i++) {
      var cell = document.createElement('td');
      cell.textContent = cells[i];
      row.appendChild(cell);
   }
   return row;
}

function listStudents() {
   var table = document.getElementById('list');
   var list = JSON.parse(localStorage.getItem("studentsList"));
   for (var i = 0; i < list.length; i++)
      table.tBodies[0].appendChild(studentToRow(parseStudent(list[i])));
}

function storeData() {
   var data = "";
   var list = [];
   var inputs = document.getElementById("container").getElementsByTagName("input");
   for (var i = 0; i < inputs.length - 1; i++)
      data += inputs[i].value + ",";
   if (localStorage.getItem("studentsList") === null)
      list[0] = data;
   else {
      list = JSON.parse(localStorage.getItem("studentsList"));
      list.push(data);
   }
   window.localStorage.setItem("studentsList", JSON.stringify(list));
}

function deleteData() {
   window.localStorage.removeItem("studentsList");
}

document.addEventListener('DOMContentLoaded', function() {
   var body = document.getElementsByTagName("BODY")[0];
   var request = new XMLHttpRequest();
   request.open('GET', 'navbar.html', false);
   request.send();
   var navBar = txtToHTML(request.responseText);
   var pageTitle = document.head.querySelector("[name=title][content]").content;
   navBar.getElementsByTagName("H4")[0].innerHTML = pageTitle;

   var items = navBar.getElementsByTagName("ul")[0].getElementsByTagName("li");
   for (var i = 0; i < items.length; i++) {
      if (items[i].textContent == pageTitle) {
         //items[i].remove();
         items[i].setAttribute("style", "list-style-type: disc;list-style-position: inside;");
         break;
      }
   }
   body.appendChild(navBar);
}, false);
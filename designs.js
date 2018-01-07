// Select color input
// Select size input

/* Order of development:
  1. Submit button event listener / call to makeGrid method
  2. Grab table dimensions and add html element (no jQuery)
  3. Set new event listeners (submit clears and grabs color)
*/

var submit = document.getElementById('submit-button'); //declare submit as var
submit.addEventListener('click', makeGrid);

function makeGrid(e) {
  e.preventDefault();   //block form submission to itself

  var table = document.getElementById('pixel_canvas');  //set table reference var

  //remove an existing grid
  console.log(table.hasChildNodes()); //white space must be removed in HTML
  if (table.hasChildNodes()){
    table = clearTable(table);
  }

  //declare the 3 variable that we need
  var gridWidth = document.getElementById('input_width').value;
  var gridHeight = document.getElementById('input_height').value;
  var color = document.getElementById('colorPicker').value;

  //loop through gid creation
  for (var i = 0; i < gridHeight; i++) {                //row loop
    var newRow = document.createElement('tr');          //create new row
    for (var j = 0; j < gridWidth; j++) {               //col loop
      var newCol = document.createElement('td')         //create new col
      newRow.appendChild(newCol);                       //add col to row
    }
    table.appendChild(newRow);                          //add row to html table
  }
}

function clearTable(table) {
  table.innerHTML = "";       //not pretty, but it works
  return table;
}

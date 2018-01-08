

var submit = document.getElementById('submit-button'); //declare submit as var
submit.addEventListener('click', makeGrid);

var mouseDown = false;
var canvas = document.querySelector('body');
canvas.addEventListener('mousedown', function() {
  mouseDown = true;
});
canvas.addEventListener('mouseup', function() {
  mouseDown = false;
});


function makeGrid(e) {
  e.preventDefault();   //block form submission to itself
  var table = document.getElementById('pixel_canvas');  //set table reference var
  //remove an existing grid
  if (table.hasChildNodes()){
    table = clearTable(table);
  }
  //declare the 2 variable that we need
  var gridWidth = document.getElementById('input_width').value;
  var gridHeight = document.getElementById('input_height').value;
  //loop through gid creation
  for (var i = 0; i < gridHeight; i++) {
    var newRow = document.createElement('tr');
    for (var j = 0; j < gridWidth; j++) {
      var newCol = document.createElement('td')
      newRow.appendChild(newCol);
      addEvents(newCol);  //use function to add multiple event listeners
    }
    table.appendChild(newRow);
  }
}//end of make grid

function clearTable(table) {
  table.innerHTML = "";       //not pretty, but it works
  return table;
}

function getColor() {
  var color = document.getElementById('colorPicker').value;
  return color;
}

//adds pixel event listeners
function addEvents(tableCell) {
  tableCell.addEventListener('mousemove', function() {
    if (mouseDown){
      tableCell.style.backgroundColor = getColor();
    }
  });
}

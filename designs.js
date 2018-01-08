/*Author: Eric Olsen
  Date: 8 Jan 2018
  Description: This javascript file takes two form inputs and generates a
  blank table according to user provided dimensions. It also allows the user
  to click and drag color settings. This is an html table and the color is
  using the CSS background (this does not use HTML canvas). This code also
  does not utilize JQuery. I don't know enough about javascript yet to start
  relying on a library. There is a slight bug remaining with the mouse cursor.
  Sometimes the browser thinks that the mouse is clicking and dragging the
  table element. This trips the mouse event listeners and causes the program to
  miss the 'mouseup' listener. The result is that you continue drawing on
  the table with the mouse button up. I think using HTML canvas would be the
  true solution. I tried enhancing the CSS with the hover status, but this
  started affecting the column width in the table and made the experience a
  little weird, so I left it out.
*/

const submit = document.getElementById('submit-button'); //declare submit as var
submit.addEventListener('click', makeGrid);

let mouseDown = false;  //helper variable for multiple event listeners
const canvas = document.querySelector('body'); //track event over entire body

//these two listeners will enable click and draw drawing
canvas.addEventListener('mousedown', function() {
  mouseDown = true;
});
canvas.addEventListener('mouseup', function() {
  mouseDown = false;
});

//grid generator method
function makeGrid(e) {
  e.preventDefault();   //block form's default submission
  let table = document.getElementById('pixel_canvas');  //set table reference var

  //clear any existing grid
  if (table.hasChildNodes()){
    table = clearTable(table);
  }

  //declare the 2 variable for width and height
  let gridWidth = document.getElementById('input_width').value;
  let gridHeight = document.getElementById('input_height').value;

  //loop through gid creation
  for (let i = 0; i < gridHeight; i++) {
    let newRow = document.createElement('tr');
    for (let j = 0; j < gridWidth; j++) {
      let newCol = document.createElement('td')
      newRow.appendChild(newCol); //add new cell to row
      addEvents(newCol);  //add event listners inside the created cell
    }
    table.appendChild(newRow); //add completed row to table
  }
}//end of make grid

function clearTable(table) {
  table.innerHTML = "";       //not pretty, but it works
  return table;
}

//adds pixel event listeners
function addEvents(tableCell) {
  tableCell.addEventListener('mousemove', function() {
    if (mouseDown){
      tableCell.style.backgroundColor = getColor();
    }
  });
}

//called by cell event listener, basic getter for color setting
function getColor() {
  var color = document.getElementById('colorPicker').value;
  return color;
}

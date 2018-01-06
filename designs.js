// Select color input
// Select size input

/* Order of development:
  1. Submit button event listener / call to makeGrid method
  2. Grab table dimensions and add html element (no jQuery)
  3.
*/

//submit button Event listener
var submit = document.getElementById('submit-button');
submit.addEventListener('click', makeGrid);

function makeGrid(e) {
  e.preventDefault();
  console.log('button clicked');
}

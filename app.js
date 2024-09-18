const grandParent = document.getElementById('grandParent');
const parentDiv = document.getElementById('parent');
const childButton = document.getElementById('child');

// Event listener for the grandParent div
grandParent.addEventListener('click', function (e) {
  console.log('grandParent clicked');
})
// Event listener for the parent div
parentDiv.addEventListener('click', function (e) {
  console.log('Parent Div clicked!');
  // e.stopPropagation();
});

// Event listener for the child button
childButton.addEventListener('click', function (event) {
  console.log('Child Button clicked!');
  // event.stopImmediatePropagation(); // Prevent the event from bubbling up to the parent
  event.stopPropagation(); // Prevent the event from bubbling up to the parent
});
childButton.addEventListener('click', function (event) {
  alert('Child Button clicked!');
})


/*                  -----------------------------------------

  Event listener for the list items using event delegation

-------------------------------------------                    */
const list = document.getElementById('myList');

list.addEventListener('click', function (event) {
  // Check if a list item was clicked
  console.log('you clicked');
  if (event.target.tagName === 'LI') {
    // alert('You clicked on ' + event.target.textContent);
    console.log('You clicked on ' + event.target.textContent);
    event.stopImmediatePropagation()
  } else {
    console.log('outside');
  }
});
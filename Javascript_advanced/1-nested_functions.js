// Define the global variable
var globalVariable = 'Welcome';

// Define the outer function
function outer() {
  // Display the globalVariable
  alert(globalVariable);

  // Create a local variable course
  var course = 'Holberton';

  // Define the inner function
  function inner() {
    // Display the globalVariable and course concatenated
    alert(globalVariable + ' ' + course);

    // Create a local variable exclamation
    var exclamation = '!';

    // Define the inception function
    function inception() {
      // Display globalVariable, course, and exclamation concatenated
      alert(globalVariable + ' ' + course + exclamation);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function
outer();


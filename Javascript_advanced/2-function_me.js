function welcomeMessage(fullName) {
  return function () {
    alert('Welcome ' + fullName);
  };
}

// Create three variables with different names
var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');

// Test the functions
guillaume(); // Displays: Welcome Guillaume
alex();      // Displays: Welcome Alex
fred();      // Displays: Welcome Fred


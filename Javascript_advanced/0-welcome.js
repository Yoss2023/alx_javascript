function welcome(firstName, lastName) {
  let fullName = firstName + ' ' + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }

  displayFullName();
}

// Test the welcome function
welcome('Holberton', 'School');


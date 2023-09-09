const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const todos = JSON.parse(body);
    const completedTasks = {};

    for (const todo of todos) {
      if (todo.completed) {
        if (completedTasks[todo.userId]) {
          completedTasks[todo.userId]++;
        } else {
          completedTasks[todo.userId] = 1;
        }
      }
    }

    console.log(completedTasks);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
    process.exit(1);
  }
});


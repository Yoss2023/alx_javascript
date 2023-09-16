// Log "Start of the execution queue"
console.log("Start of the execution queue");

// Use setTimeout to schedule the final code block with a delay of 0
setTimeout(function () {
  // Log "Final code block to be executed"
  console.log("Final code block to be executed");

  // Use a loop to log numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }

  // Log "End of the loop printing"
  console.log("End of the loop printing");
}, 0);


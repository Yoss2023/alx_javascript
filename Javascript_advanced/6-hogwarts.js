// Create the studentHogwarts module
const studentHogwarts = (function () {
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName(newName) {
      name = newName;
    },
    rewardStudent() {
      changeScoreBy(1);
    },
    penalizeStudent() {
      changeScoreBy(-1);
    },
    getScore() {
      return `${name}: ${privateScore}`;
    },
  };
})();

// Create an instance for Harry
const harry = Object.create(studentHogwarts);
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log Harry's name and score
console.log(harry.getScore()); // Should display "Harry: 4"

// Create an instance for Draco
const draco = Object.create(studentHogwarts);
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log Draco's name and score
console.log(draco.getScore()); // Should display "Draco: -2"


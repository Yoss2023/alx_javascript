<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Changer</title>
</head>
<body>
  <p>Welcome Holberton!</p>
  <button id="spookyBtn">Spooky</button>
  <button id="darkModeBtn">Dark mode</button>
  <button id="screamModeBtn">Scream mode</button>

  <script>
    function changeMode(size, weight, transform, background, color) {
      return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
      };
    }

    function main() {
      const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
      const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
      const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

      document.getElementById('spookyBtn').addEventListener('click', spooky);
      document.getElementById('darkModeBtn').addEventListener('click', darkMode);
      document.getElementById('screamModeBtn').addEventListener('click', screamMode);
    }

    // Call the main function to set up event listeners
    main();
  </script>
</body>
</html>


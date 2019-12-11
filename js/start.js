window.onload = function() {
    startButton = document.getElementById("start-button");
    logoImage = document.getElementById("logo-image");
    maze = document.getElementById("")

    startButton.onclick = function() {
      startGame();
      startButton.style.display = "none"
      logoImage.style.display = "none"
    };
  
    function startGame() {
      maze.init()
    }
  
  };
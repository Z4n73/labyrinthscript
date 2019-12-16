window.onload = function() {

    startButton = document.getElementById("start-button");
    logoImage = document.getElementById("logo-image");
    mazeCanvas = document.getElementById("maze-canvas");

    mazeCanvas.style.display = "none";

    startButton.onclick = function() {

      startGame();

      startButton.style.display = "none"
      logoImage.style.display = "none"
      mazeCanvas.style.display = "block"
      
    };
  
    function startGame() {
      let img = new Image();
      img.src = "./images/maze1.png";
      maze_one = new Maze(img, 1291, 791);
      maze_one.init();
    }
  
  };
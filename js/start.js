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

    /* Approach 1 : with file Reader */

    // function toDataURL(url, callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.onload = function() {
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //       callback(reader.result);
    //     }
    //     reader.readAsDataURL(xhr.response);
    //   };
    //   xhr.open('GET', url);
    //   xhr.responseType = 'blob';
    //   xhr.send();
    // }

    // function instanceImage(dataUrl){
    //   let img = new Image();
    //   img.src = dataUrl;
    // }

    /* Approach 2: Images from the local file system  */

    // function encodeImageFileAsURL(element) {
    //   var file = element.files[0];
    //   var reader = new FileReader();
    //   reader.onloadend = function() {
    //     console.log('RESULT', reader.result)
    //   }
    //   reader.readAsDataURL(file);
    // }
  
    function startGame() {
      let img = new Image();
      //img.crossOrigin = "Anonymous";
      //img.setAttribute('crossOrigin', '');

      // Try 2: with file reader:

      // toDataURL('./images/maze1.png', function(dataUrl){
      //     console.log("Data URL = ", dataUrl);
      //     instanceImage(dataUrl);
      // });

      img.src = "http://localhost/home/zante/Desktop/IronHack/Javascript/Proyect_Module1_CanvasGame/images/maze1.png";
      console.log(img)

      maze_one = new Maze(img, 1001, 23, 10, 10, 1291, 791);
      maze_one.init();
    }
  
  };

  // toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
  //   console.log('RESULT:', dataUrl)
  // })
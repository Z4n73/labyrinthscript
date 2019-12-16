// const maze = {
//     canvas: undefined,
//     ctx: undefined,
//     fps: 60, //cambiar request animation frame
//     width: undefined,
//     height: undefined,
//     framesCounter:0,
//     playerKeys:{
//         north: 87,
//         east: 68,
//         south: 83,
//         west: 65,
//         up: 38,
//         right: 39,
//         down: 40,
//         left: 37,
//     },    

//     init: function(){
//         this.canvas = document.getElementById('maze-canvas');
//         this.ctx = this.canvas.getContext('2d');
//         this.width = window.innerWidth / 1.1;
//         this.height = window.innerHeight / 1.1;
//         this.canvas.width = this.width;
//         this.canvas.height = this.height;

//         drawMaze();
//     }

    

// }

class Maze {
    
    constructor(img, width, height){
        this.canvas = undefined;
        this.ctx = undefined;
        //this.fps = 60;
        //this.width = undefined;
        //this.height = undefined;
        this.width = width;
        this.height = height;
        this.x = 200;
        this.y = 5;
        //this.framesCounter = 0;
        this.img = img;
        // this.image = new Image();
        // this.image.src = "maze1.png";
        this.playerKeys = {
            north: 87,
            east: 68,
            south: 83,
            west: 65,
            up: 38,
            right: 39,
            down: 40,
            left: 37,
        }
    }

    drawAll() {
        this.clear();
        this.drawMaze();
        this.ctx.fillStyle = "blue";
        this.rect(this.x, this.y, 15, 15);
    }

    init(){
        this.canvas = document.getElementById('maze-canvas');
        this.ctx = this.canvas.getContext('2d');
        //this.width = 1291; //window.innerWidth / 1.1;
        //this.height = 791; //window.innerHeight / 1.1;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.start();
    }

    start (){
        setInterval(this.drawAll.bind(this),1000 / 60);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMaze(){
        this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    }

    rect(x,y,w,h) {
        this.ctx.beginPath();
        this.ctx.rect(x,y,w,h);
        this.ctx.closePath();
        this.ctx.fill();
    }

}
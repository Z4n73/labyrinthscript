class Player{

    constructor(ctx, x, y, width, height, maze){

        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.dx = 5;
        this.dy = 5;

        this.width = width;
        this.height = height;

        this.maze = maze;

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

        this.collision = 0;

        this.setListeners();
    }

    draw(){
        this.ctx.fillStyle = "blue";
        this.rect(this.x, this.y, this.width, this.height);
    }

    rect(x,y,width,height) {
        this.ctx.beginPath();
        this.ctx.rect(x,y,width,height);
        this.ctx.closePath();
        this.ctx.fill();
    }

    checkCollision() {
        let imgData = this.ctx.getImageData(this.x, this.y, this.width, this.height);
        console.log(imgData)
        let pixelColors = imgData.data;
        for (var i = 0; i < pixelColors.length; i += 4) {
            if (pixelColors[i] == 0) {
                collision = 1;
            }
        }
    }

    setListeners(){
        document.addEventListener('keydown', (e) =>{
            switch(e.keyCode){
                case this.playerKeys.up:
                    if(this.y - this.dy > 0){
                        this.checkCollision();
                        if(this.collision === 0){
                            this.y -= this.dy;
                        }else{
                            this.collision = 0;
                        }
                    }
                    break;
                case this.playerKeys.right:
                    if(this.x + this.dx < this.maze.width){
                        this.checkCollision();
                        if(this.collision === 0){
                            this.x += this.dx;
                        }else{
                            this.collision = 0;
                        }
                    }
                    break;
                case this.playerKeys.down:
                    if(this.y + this.dy < this.maze.height){
                        this.checkCollision();
                        if(this.collision === 0){
                            this.y += this.dy;
                        }else{
                            this.collision = 0;
                        }
                    }
                    break;
                case this.playerKeys.left:
                    if(this.x - this.dx > 0){
                        this.checkCollision();
                        if(this.collision === 0){
                            this.x -= this.dx;
                        }else{
                            this.collision = 0;
                        }
                    }
                    break;
            }   
        });
    }

}
const maze = {
    canvas: undefined,
    ctx: undefined,
    fps: 60, //cambiar request animation frame
    width: undefined,
    height: undefined,
    framesCounter:0,
    playerKeys:{
        north: 87,
        east: 68,
        south: 83,
        west: 65,
        up: 38,
        right: 39,
        down: 40,
        left: 37,
    },    

    init: function(){
        this.canvas = document.getElementById('maze-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth / 1.2;
        this.height = window.innerHeight / 1.6;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

}
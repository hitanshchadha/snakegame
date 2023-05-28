let blocks=25;
let row=20;
let col=30;
let mainboard = document.getElementById("mainboard");
var context =mainboard.getContext("2d");

let velx=0;
let vely=0;

var sx=2*blocks;
var sy=2*blocks;

var snakelen=[];
let foodX;
let foodY;

let bombx;
let bomby;

let bombx2;
let bomby2;

let bombx3;
let bomby3;

let bombx4;
let bomby4;

let score=0;
let gameover1= new Audio('gameover1.mp3');
let food= new Audio('eating.mp3');
let bomb= new Audio('bomb.mp3');


// let a=prompt("Enter Level 1-10 of the game",);

window.onload=function(){
  mainboard.height= row*blocks;
  mainboard.width= col*blocks;
  
  document.addEventListener("keyup",changeDirection);
  placeFood();
  
  setInterval(update, 1000/(10));
  setInterval(placebomb,1000);
  setInterval(placebomb2,2000);
  setInterval(placebomb3,4000);
  setInterval(placebomb4,6000);
 
};
function update() {

    context.fillStyle="black";
    context.fillRect(0, 0, mainboard.width, mainboard.height);

    context.fillStyle="red";
    context.fillRect(bombx, bomby, blocks, blocks);

    context.fillStyle="red";
    context.fillRect(bombx2, bomby2, blocks, blocks);

    context.fillStyle="red";
    context.fillRect(bombx3, bomby3, blocks, blocks);

    context.fillStyle="red";
    context.fillRect(bombx4, bomby4, blocks, blocks);
    
    context.fillStyle="orange";
    context.fillRect(foodX, foodY, blocks, blocks);


    if (sx == foodX && sy == foodY) {
        snakelen.push([foodX, foodY]);
        placeFood();
        setInterval(placeFood,10000);
        score++;
        food.play();
    }
   
    document.getElementById("score").innerHTML=score;
   
    for (let i = snakelen.length-1; i > 0; i--) {
        snakelen[i] = snakelen[i-1];
    }
    if (snakelen.length) {
        snakelen[0] = [sx, sy];
    }

    context.fillStyle="lime";
    sx += velx * blocks;
    sy += vely * blocks;
    context.fillRect(sx, sy, blocks, blocks);
     for (let i = 0; i < snakelen.length; i++) {
    context.fillRect(snakelen[i][0], snakelen[i][1], blocks, blocks);

    

     }
     if (sx>=col*blocks || sx<0 || sy>=row*blocks || sy<0) {
        document.getElementById("gameover").style.display='flex';
        document.querySelector("body").style.background='red';
        gameover1.play();
        
        
     }
     if (sx==bombx && sy==bomby || sx==bombx2 && sy==bomby2 || sx==bombx3 && sy==bomby3 || sx==bombx4 && sy==bomby4 ) {
        document.getElementById("gameover").style.display='flex';
        document.querySelector("body").style.background='red';
        bomb.play();

     }
}


function changeDirection(e) {
    if (e.code == "ArrowUp" && vely!=1) {
        velx = 0;
        vely = -1;
    }
    else if (e.code == "ArrowDown" && vely!=-1) {
        velx = 0;
        vely = 1;
    }
    else if (e.code == "ArrowLeft" && velx!=1) {
        velx = -1;
        vely = 0;
    }
    else if (e.code == "ArrowRight" && velx!=-1) {
        velx = 1;
        vely= 0;
    }
}
function placeFood() {
    foodX = Math.floor(Math.random() * col) * blocks;
    foodY = Math.floor(Math.random() * row) * blocks;}

    function placebomb() {
        bombx = Math.floor(Math.random() * col) * blocks;
        bomby = Math.floor(Math.random() * row) * blocks;}

        function placebomb2() {
            bombx2 = Math.floor(Math.random() * col) * blocks;
            bomby2 = Math.floor(Math.random() * row) * blocks;}
            function placebomb3() {
                 bombx3= Math.floor(Math.random() * col) * blocks;
                bomby3 = Math.floor(Math.random() * row) * blocks;}

    function placebomb4() {
        bombx4 = Math.floor(Math.random() * col) * blocks;
        bomby4 = Math.floor(Math.random() * row) * blocks;}
let blocks=18;
let row=25;
let col=20;
let mainboard = document.getElementById("mainboard");
var context =mainboard.getContext("2d");

let velx=0;
let vely=0;

var sx=2*blocks;
var sy=2*blocks;

var snakelen=[];
let foodX;
let foodY;

let foodX2;
let foodY2;

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
let bombso= new Audio('bomb.mp3');

let s=15;
let b=1000;
var timer=0

let left=document.getElementById("btn-left");
let right=document.getElementById("btn-right");
let up=document.getElementById("btn-up");
let down=document.getElementById("btn-down");

let restart= document.getElementById("restart");

// let a=prompt("Enter Level 1-10 of the game",);

window.onload=function(){
  mainboard.height= row*blocks;
  mainboard.width= col*blocks;
  document.addEventListener("keyup",changeDirection);
  placeFood();
  placeFood2();
  update();
  setInterval(placebomb,1000);
  setInterval(placebomb2,2000);
  setInterval(placebomb3,4000);
  setInterval(placebomb4,6000);
 
};
function update() {
   timer= setTimeout(function(){ requestAnimationFrame(update);
    context.fillStyle="black";
    context.fillRect(0, 0, mainboard.width, mainboard.height);

    var bomb= document.getElementById("bomb1");
    context.drawImage(bomb, bombx, bomby, blocks+2, blocks+2);

    var bomb= document.getElementById("bomb1");
    context.drawImage(bomb, bombx2, bomby2,blocks+2, blocks+2);

    var bomb= document.getElementById("bomb1");
    context.drawImage(bomb, bombx3, bomby3, blocks+2, blocks+2);

    var bomb= document.getElementById("bomb1");
    context.drawImage(bomb, bombx4, bomby4, blocks+2, blocks+2);
    
    
    var food1= document.getElementById("food1");
    context.drawImage(food1, foodX, foodY, blocks, blocks);

    var food2= document.getElementById("food1");
    context.drawImage(food2, foodX2, foodY2, blocks, blocks);

    if ((sx == foodX && sy == foodY) || (sx==foodX2 && sy==foodY2)) {
        snakelen.push([foodX, foodY]);
        placeFood();
        placeFood2();
        setInterval(placeFood,20000);
        setInterval(placeFood2,20000);
        score++;
        food.play();
        s+=2;
        clearInterval(timer);
        timer=0;
        
        

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
//   var image= document.getElementById("eagle");
// context.drawImage(image, sx, sy, 25, 25);
     for (let i = 0; i < snakelen.length; i++) {
    context.fillRect(snakelen[i][0], snakelen[i][1], blocks, blocks);

    

     }
     if (sx>=col*blocks || sx<0 || sy>=row*blocks || sy<0) {
        document.getElementById("gameover").style.display='flex';
        document.querySelector("body").style.background='red';
        gameover1.play();
        document.getElementById("restart").style.display='flex';
        restart.addEventListener("click",function(){
         refreshPage();
        });

        
        
        
     }
     if (sx==bombx && sy==bomby || sx==bombx2 && sy==bomby2 || sx==bombx3 && sy==bomby3 || sx==bombx4 && sy==bomby4 ) {
        document.getElementById("gameover").style.display='flex';
        document.querySelector("body").style.background='red';
        bombso.play();
        b=0;
        document.getElementById("restart").style.display='flex';
        restart.addEventListener("click",function(){
         refreshPage();
        });
        

     }
},b/s)}


function changeDirection(e) {
    if ((e.code == "ArrowUp" || (e.code=="KeyW")) && vely!=1) {
        velx = 0;
        vely = -1;
    }
    else if ((e.code == "ArrowDown" || (e.code=="KeyS")) && vely!=-1) {
        velx = 0;
        vely = 1;
    }
    else if ((e.code == "ArrowLeft" || (e.code=="KeyA"))  && velx!=1) {
        velx = -1;
        vely = 0;
    }
    else if ((e.code == "ArrowRight" || (e.code=="KeyD")) && velx!=-1) {
        velx = 1;
        vely= 0;
    }
}
function placeFood() {
    foodX = Math.floor(Math.random() * col) * blocks;
    foodY = Math.floor(Math.random() * row) * blocks;}

    function placeFood2() {
        foodX2 = Math.floor(Math.random() * col) * blocks;
        foodY2 = Math.floor(Math.random() * row) * blocks;}

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


        up.addEventListener("click", function(){
            if (vely !== "1") {
                velx=0;
                vely = "-1";
            }
        });
        down.addEventListener("click",function(){
            if (vely !== "-1") {
                velx = 0;
                vely = 1;
            }
        });
    left.addEventListener("click", function(){
            if (velx!=1) {
                velx = -1;
                vely = 0; ;
            }
        });
        right.addEventListener("click", function(){
            if (velx!=-1) {
                velx = 1;
                vely= 0;
            }
        });       
        function refreshPage(){
            window.location.reload();
        }  
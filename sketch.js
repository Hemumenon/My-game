var database;
var playerCount=0;
var gameState = 0;

var allPlayers;
var score = 0;
var player1,player2;
var players;

var form, player, game;
var girlImg,boyImg;
var track;

function preload(){

    girlImg = loadImage("girl.png");
    boyImg = loadImage("boy.png");
    track = loadImage("trackimg.png");
}


function setup(){

    createCanvas(displayWidth-30,displayHeight-30);

    database = firebase.database();
    

    game = new Game();
    game.getState();
    game.start();

    



}

function draw(){

    if(playerCount === 2){
        
       game.update(1);
      

    }

    if(gameState === 1){

        clear();
        game.play();
    }

}


class Game{

    constructor(){
     
    
    }
    
    getState(){

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){

            gameState = data.val();
        });

    }

    update(state){

        database.ref("/").update({

            gameState : state
        });

    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
           }
          form = new Form()
          form.display();
        }
        
        player1 = createSprite(100,200,100,100);
        player1.addImage(girlImg);
        
        player2 = createSprite(500,200,100,100);
        player2.addImage(boyImg);

        players = [player1,player2];
    }

    play(){

        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();


        if(allPlayers !== undefined){
            
            background("#c68767");

            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            var index = 0;

            var x ;
            var y = 175;

            for(var plr in allPlayers){

                index = index + 1;

                y = y + 200;
                x = windowWidth - allPlayers[plr].distance;
                
                
                players[index-1].x = x;
                players[index-1].y = y;
                
                if(index === player.index){

                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);

                    players[index-1].shapeColor = "red";
                    camera.position.x = players[index-1].x;
                    camera.position.y = displayHeight/2;
                    
                }

            }

        }

        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distance +=20
            player.update();
          }
    }
}

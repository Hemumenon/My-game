class Form{

    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.title = createElement("h2");
        this.greeting = createElement("h2");
        

    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.input.hide();
    }

    display(){

        this.title.html("Treasure Hunt Game");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-50,displayHeight/2-80);
        this.button.position(displayWidth/2-70,displayHeight/3-60);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2 - 70,displayHeight/4);
        });
        
    }
    
}




class Rock{

    constructor(){
        var options={
            isStatic:true,
            density:1.5
        }
        this.image=loadImage("stone.png");
        this.body=Matter.Bodies.rectangle(200,100,50,50,options);
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);

        if(this.body.speed < 3){
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
      
          }else {
            World.remove(world,this.body);
            this.visiblity=this.visiblity-5
            push();
            tint(255,this.visiblity)
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
          }
    }

}
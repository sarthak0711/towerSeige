class Box{

    constructor(x,y){

        var options={
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.image=loadImage("rec.png")
        this.body=Matter.Bodies.rectangle(x,y,100,50,options);
        World.add(world,this.body);


    }
    display(){

       // rectMode(CENTER);
       // rect(this.body.position.x,this.body.position.y,100,50)

       if(this.body.speed < 3){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,100,50);
  
      }/*else {
        World.remove(world,this.body);
        this.visiblity=this.visiblity-5
        push();
        tint(255,this.visiblity)
        Image(this.body.position.x,this.body.position.y,100,50);
        pop();
      }*/

    }

}
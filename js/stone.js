class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
         }
    this.Stone=Bodies.circle(x,y,150/2,options);
    this.radius=150;
    this.image=loadImage("images/stone.png");
    World.add(world,this.Stone)

    }
display(){
     
     imageMode(CENTER);
     image(this.image,0,10,this.radius,this.radius);
    }
}
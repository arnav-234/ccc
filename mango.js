class mango1{
    constructor(x,y,r)
{
var options={
//isStatic:true,
restitution:0,
friction:1,
density:1.2
}

this.r=r;
this.image=loadImage("mango.png");
this.image.scale=0.2
this.body=Bodies.circle(x,y,this.r,options);
World.add(world,this.body);
}

display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40);
    
}
}
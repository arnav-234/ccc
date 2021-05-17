    class tree1{
        constructor(x,y,w,h)
    {
    var options={
    isStatic:true,
    restitution:0,
    friction:1,
    density:1.2
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.image=loadImage("tree.png")
    this.image.scale=0.2
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    World.add(world,this.body)
    }
    display(){
        image(this.image,400,90,400,400)
        
    }
    }
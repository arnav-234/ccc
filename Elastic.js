class elastic{
    constructor(bodyA,pointB){

    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length : 10
   } 

   this.pointB=pointB
   this.elas=Constraint.create(options)
   World.add(world,this.elas)
    }
   display()
   {
       var pointA = this.elas.bodyA.position
       var pointB = this.pointB
       strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x,)
       
   }
   }
class Chain {


constructor (bA, pB)

{
this.chain = Matter.Constraint.create({bodyA: bA, pointB: pB,
     stiffness: 0.008, length: 20})

     World.add(world, this.chain)

     this.dustbin = loadImage ("dustbingreen.png")
}


display ()

{
if(this.chain.bodyA)
    {
push ()
strokeWeight(2)

line (this.chain.bodyA.position.x, this.chain.bodyA.position.y, 
    this.chain.pointB.x, this.chain.pointB.y)

pop ()
    }
    
}
  release ()
        {
this.chain.bodyA = null
        }


}


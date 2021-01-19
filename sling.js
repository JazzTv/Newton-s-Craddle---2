class Sling 
{
    constructor(body1,body2, offsetX, offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.7,
            length : 400, 
            pointB : {
                       x: this.offsetX,
                       y: this.offsetY 
                     }
      }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    display ()
    {
        var firstPos = this.rope.bodyA.position;
        var secondPos = this.rope.bodyB.position;
        var anchorX = secondPos.x + this.offsetX

        line(firstPos.x,firstPos.y,anchorX,secondPos.y);
    }
}
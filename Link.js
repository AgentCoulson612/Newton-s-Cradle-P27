class Link {
    constructor(bodyA, bodyB, offsetX) {

        this.offsetX = offsetX;
        var options = {
            length : 200, 
            stiffness : 0, 
            damping: 0, 
            bodyA : bodyA, 
            bodyB : bodyB,
            pointA : { x : this.offsetX, y : 0}
        }

        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.x = offsetX;
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    display() {
        stroke(255);
        var pointA = {x : this.bodyA.position.x + this.x, y : this.bodyA.position.y};
        var pointB = this.constraint.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
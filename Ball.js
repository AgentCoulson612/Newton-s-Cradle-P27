class Ball {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction': 0,
            'airResistance' : 0,
            'density':1.0,
            'isStatic' : false,
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        noStroke();
        fill('#ffac12');
        ellipse(this.body.position.x, this.body.position.y, this.radius * 2);
        rotate(angle);
        pop();
      }
}
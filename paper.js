class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      // translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      stroke("green");
      strokeWeight(4);
      fill(255);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
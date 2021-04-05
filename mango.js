class Mango {
    constructor(x, y) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1,
          density: 1.2
      }
      this.x=x;
      this.y=y;
     
      
      this.image = loadImage("sprites/mango.png");
      this.body = Bodies.circle(x,y, 50, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("green");
      image(this.image, 0,0, 50, 50);
      pop();

    }
};
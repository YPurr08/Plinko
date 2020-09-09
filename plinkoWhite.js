class White {
    constructor(x, y, diameter) {
      var options = {  
        isStatic:true,
        restitution: 0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.diameter = diameter;
      
      //Add to world
      World.add(engine.world, this.body);
    }
    
    display(){
      stroke(0);

      fill("white");
  
      //Create circle using given parameters in sketch.js
      circle(this.body.position.x, this.body.position.y, this.diameter)
    }
  }
  
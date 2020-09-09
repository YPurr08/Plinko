class Color {
    constructor(x, y, diameter) {
      var options = {  
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.diameter = diameter;
      this.color1 = random(0,255)
      this.color2 = random(0,255)
      this.color3 = random(0,255);
      
      //Add to world
      World.add(engine.world, this.body);
    }
    
    display(){
      stroke(rgb(this.color1, this.color2, this.color3));

      //Fill with color
      fill(this.color1, this.color2, this.color3);
  
      //Create circle using given parameters in sketch.js
      circle(this.body.position.x, this.body.position.y, this.diameter)
    }
  }
  
/*
Rectangles class is that craetes rectangles (for the fround and divisions)
*/

class Rect {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //Add to world
      World.add(world, this.body);
    }
    
  display(){
      stroke("white");
      
      //fill with color
      fill("white");
      
      rectMode(CENTER);
      //create rectanales using parameters giving in sketch.js
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
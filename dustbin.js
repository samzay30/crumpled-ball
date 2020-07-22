class dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight (4);
      stroke ("red");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  


/*class dustbin{
    constructor(x, y, width, height) 
    {
    
    var boxSide1Sprite = createSprite(330, height - 90, 20, 100);
	boxSide1Sprite.shapeColor = color(255,0,0);

	var boxSide2Sprite = createSprite(420, height - 50, 200, 20);
	boxSide2Sprite.shapeColor = color(255,0,0);

	var boxBottomSprite = createSprite(510, height - 90, 20, 100);
	boxBottomSprite.shapeColor = color(255,0,0);
    
    World.add(world, this.body);

   }
   display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight (4);
    stroke ("red");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }

}
*/
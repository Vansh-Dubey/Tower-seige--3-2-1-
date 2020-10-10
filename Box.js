class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.Visiblity=255;
  }
  score(){
    if(this.Visiblity<0 && this.Visiblity > -1005){
      score++;
    }
  }


  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }

    
    else{
      push();
      World.remove(world,this.body);
      this.Visiblity=this.Visiblity-5;
    tint(255,this.Visiblity);
   pop();
    
    }
  
  }

};

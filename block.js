class Block{
  constructor(x, y, width, height, angle) {
      var options = {
        restitution : 0.7,
        friction : 0.6,
        isStatic : false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=0
    }
    display(){
      var angle = this.body.angle;
      push();
      if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        
        rect(0, 0, this.width, this.height);
        pop();
      }else {
          push();
          World.remove(world, this.body);
          this.visibility = this.visibility - 1;
          
          tint(255, this.visibility);
          pop();
          console.log(this.visibility)
      }
      
}
score() {
  if(this.visibility < 0 && this.visibility > -105){
      Score += 1;
      console.log("Harikrishna")
  }
}
}


    

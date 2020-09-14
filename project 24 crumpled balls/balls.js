class Balls {
  constructor(x, y,diametre) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':0.1
    } 
    this.x = x;
    this.y = y;
    this.diametre=diametre;
    this.body = Bodies.circle(x, y, diametre/2, options);

    this.image=loadImage("sprites/tissuePaper.png");

    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    imageMode(CENTER);

    image(this.image, this.body.position.x, this.body.position.y, this.diametre,this.diametre);
  }
} 
class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 40
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB;
    }

    display(){
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke(0);
            strokeWeight(4);            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.chain.bodyA=null;
    }
}
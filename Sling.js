class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:10,
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(){
        this.body.bodyA = bodya;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke("grey");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.4,
            'friction':0.0,
            
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.Visibility = 225;
        World.add(world, this.body);
    }

    score(){
        if(this.Visibility<0 && this.Visibility >- 105){
            score++

        }
    }
    display(){
        if(this.body.speed<10){
            var pos = this.body.position;
            var angle = this.body.angle
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke("green")
            fill(0);
            rect(0, 0, this.width, this.height);
            pop();
        }else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility-155;
            tint(255, this.Visibility);
            rect(pos.x, pos.y, 50, 50);
        }
    }
};
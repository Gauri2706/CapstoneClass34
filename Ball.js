class Ball{
    constructor(x,y,r){
        var options={
            density:1,
            frictionAir:0.005
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body)

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
       

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
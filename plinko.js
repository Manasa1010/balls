class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10/2,options);
        this.diameter=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("white");
        circle( pos.x,pos.y, this.diameter);
        pop();
    }
}
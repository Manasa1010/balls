class Plinko{
    constructor(x,y ){
var options = {
    isStatic:true
}
this.body=Bodies.circle(x,y,10,options);
this.diameter=10;
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
     circle( 0, 0, this.diameter);
        pop();
    }
}
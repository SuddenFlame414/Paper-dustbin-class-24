class Paper {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body = Matter.Bodies.circle(100, 660, 10, options);
    
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        pos.x = 100;
        pos.y = 660;
        stroke("PINK");
        fill("Pink");
    }
};
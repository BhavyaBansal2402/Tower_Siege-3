class polygon
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        this.image=loadImage("polygon.png")
        this.smokeImage= loadImage("smoke.png");
        this.trajectory = [];
    }

    display()
    {
        if(this.body.velocity.x > 10 && this.body.position.x > 200 && gameState === "launched")
        {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }
        
        for(var i=0; i<this.trajectory.length; i++)
        {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }

        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        strokeWeight(1);
        pop();
    }

}
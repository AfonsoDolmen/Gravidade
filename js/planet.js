class Planet{
    constructor(x,y,mass,size){
        this.position = createVector(x,y);
        this.mass = mass;
        this.size = size;

        this.acceleration = createVector(15,0);
    }

    draw(){
        circle(this.position.x,this.position.y,this.size);
    }

    gravity(attractor){
        this.attraction = p5.Vector.sub(attractor.position,this.position);
        this.distanceSqrt = this.attraction.magSq();

        this.gravityForce = 10 * attractor.mass * this.mass / this.distanceSqrt;

        this.attraction.setMag(this.gravityForce);
        this.acceleration.add(this.attraction);
        this.acceleration.limit(20);

        this.position.add(this.acceleration);
    }
}
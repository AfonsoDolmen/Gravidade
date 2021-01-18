let earth;
let moon;

let planets = [];

let mouse;
let mouseAcceleration;
let acceleration;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);

    earth = new Planet(width/2,height/2,50,20);
    moon  = new Planet(width/2,height/2-100,50,10);

    mouse = createVector(0,0);
}

function draw(){
    background(0);

    earth.draw();
    moon.draw();

    moon.gravity(earth);

    mouse.x = mouseX;
    mouse.y = mouseY;

    for(let i in planets){
        planets[i].draw();
        planets[i].gravity(earth);
    }
}

function mousePressed(){
    planets.push(new Planet(mouseX,mouseY,50,10));
}
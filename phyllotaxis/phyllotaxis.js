let c = 5;
let n = 0;

function setup() {
    createCanvas(500, 700);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
    noStroke();
}

function draw() {
    var angle = n * 137.5;
    var radius = c * sqrt(n);

    var x = width / 2 + (radius * cos(angle));
    var y = height / 2 + (radius * sin(angle));
    fill((n - radius) % 255, 255, 255);
    ellipse(x, y, 6);

    n++;
}

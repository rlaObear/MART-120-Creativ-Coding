var x = 50;
var y = 50;
var diameter = 25;
function setup()
{
    createCanvas(800,600);
}
function draw()
{
    background(0);
    fill(24,200,29);
    circle(x,y,diameter);
    x+=10;
    y+=3;
    diameter+=8;
}
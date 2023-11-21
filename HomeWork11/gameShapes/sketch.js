// x and y for my character
var playerShapeX = 100;
var PlayerShapeY = 100;
// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(23,40,123);
    circle(playerShapeX,PlayerShapeYY,35);

    // handle the keys
    if(keyIsDown(w))
    {
        playerShapeY -= 10;   
    }
    if(keyIsDown(s))
    {
        playerShapeY += 10;   
    }
    if(keyIsDown(a))
    {
        playerShapeX -= 10;   
    }
    if(keyIsDown(d))
    {
        playerShapeX += 10;   
    }

    // potential enemy
    fill(13,145,14);
    // draw the shape
    circle(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check to see if the character has left the exit
    if(playerShapeX > width && playerShapeY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

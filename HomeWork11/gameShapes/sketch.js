// x and y for my character
var playerShapeX = 90;
var PlayerShapeY = 90;
// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

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
    createCanvas(600, 700);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(22,249,245);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,20);
    // left border
    rect(0,0,20,height);
    // bottom border
    rect(0, height-20,width, 20);
    // right upper border
    rect(width-20,0,20,height-50);

    // exit message
    textSize(15);
    text("Get Out Here!", width-100,height-30)

    //character
    fill(255,23,252);
    circle(playerShapeX,PlayerShapeY,35);

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
    fill(237,28,36);
    // draw the shape
    circle(shapeX, shapeY, 30);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -10)) + -1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -10)) + -1);

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
        textSize(45);
        text("You Win!", width/2-60, height/2-60);
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
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
  */
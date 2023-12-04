// x and y for player
var playerX = 90;
var playerY = 90;

// Defining key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for villains
var villainX = 30;
var villainY = 50;
var villainXSpeed;
var villainYSpeed;
var villain2X = 100;
var villain2Y = 200;
var villain2XSpeed;
var villain2YSpeed;
// Shape created when mouse is clicked.
var mouseShapeX;
var mouseShapeY;
function setup() {
    createCanvas(600, 700);
    // Get random speeds when it first starts for both villains
    villainXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    villainYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    villain2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    villain2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw() {
    // Borders
    background(255, 255, 153);
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
    // Escape message
    textSize(14);
    text("Escape Here!", width - 100, height - 30);
    // Player shape and color
    fill(255, 23, 252);
    circle(playerX, playerY, 35);

    // W, S, A, and D key movements
    if (keyIsDown(w)) {
        playerY -= 10;
    }
    if (keyIsDown(s)) {
        playerY += 10;
    }
    if (keyIsDown(a)) {
        playerX -= 10;
    }
    if (keyIsDown(d)) {
        playerX += 10;
    }

    // Villain 1
    fill(0, 255, 0);
    circle(villainX, villainY, 30);

    // Get random speed when it first starts
    villainX += villainXSpeed;
    villainY += villainYSpeed;

    // Verify if the villain has gone out of bounds
    if (villainX > width) {
        villainX = 0;
    }
    if (villainX < 0) {
        villainX = width;
    }
    if (villainY > height) {
        villainY = 0;
    }
    if (villainY < 0) {
        villainY = height;
    }

    // Villain 2
    fill(145, 25, 255);
    circle(villain2X, villain2Y, 40);

    // Get random speed when it first starts
    villain2X += villain2XSpeed;
    villain2Y += villain2YSpeed;

    // Verify if the villain has gone out of bounds
    if (villain2X > width) {
        villain2X = 0;
    }
    if (villain2X < 0) {
        villain2X = width;
    }
    if (villain2Y > height) {
        villain2Y = 0;
    }
    if (villain2Y < 0) {
        villain2Y = height;
    }

    // check to see if the player has left the exit
    if(playerX > width && playerY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // Create the shape when mouse clicked
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
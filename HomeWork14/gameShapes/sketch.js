// x and y for player
var playerX = 90;
var playerY = 90;

// Defining key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Array to store shapeobstacles
var obstacles = [];

// x and y for shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// Shape created when mouse is clicked.
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(600, 700);
    createObstacles();
     // Get random speed when it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createPlayer(200, 350);
}
function draw() {
    background(255, 255, 153);
    stroke(0);
    fill(0);
    // call createBorders function
    createBorders(10);
     //Escape message
    textSize(12);
    text("Escape Here!!", width - 100, height - 20);
    // call drawPlayer function
    drawPlayer();
    playerMovement();
    // call moveObstacles function
    moveObstacles();
    // call drawObstacles function
    drawObstacles();
    // check to see if the cplayer has left the exit
    if(playerX > width && playerY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    // create a shape when mouse clicked
    fill(160, 130, 240);
    circle(mouseShapeX, mouseShapeY, 25);
}
function playerMovement() {
    // W, S, A, and D key movements
    if (keyIsDown(w)) {
        playerY -= 10;
    }
    if (keyIsDown(s)) {
        playerY += 10;
    }
    if (keyIsDown(a)) {
        playerX -= 10;
        console.log("movement: " + playerX);
    }
    if (keyIsDown(d)) {
        playerX += 10;
    }
}
function createPlayer(x, y) {
    playerX = x;
    playerY = y;
    console.log(playerX);
}
function drawPlayer() {
    fill(255, 23, 252);
    circle(playerX, playerY, 35);
}
function createObstacles() {
    obstacles.push({ x: 100, y: 200, size: 20, color: [0, 255, 0] });
    obstacles.push({ x: 300, y: 400, size: 30, color: [20, 255, 220] });
    obstacles.push({ x: 450, y: 100, size: 25, color: [99, 9, 219] });
}
function moveObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacles[i].y += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        if (obstacles[i].x > width) {
            obstacles[i].x = 0;
        }
        if (obstacles[i].x < 0) {
            obstacles[i].x = width;
        }
        if (obstacles[i].y > height) {
            obstacles[i].y = 0;
        }
        if (obstacles[i].y < 0) {
            obstacles[i].y = height;
        }
    }
}
function drawObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        fill(obstacles[i].color);
        circle(obstacles[i].x, obstacles[i].y, obstacles[i].size);
    }
}
function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}
function displayWinMessage() {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", width / 2 - 50, height / 2 - 50);
}
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
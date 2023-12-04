// x and y for player
var playerX = 90;
var playerY = 90;

// Defining key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Variables for shape obstacles
var obstacleX1 = 100;
var obstacleY1 = 200;
var obstacleSize1 = 20;
var obstacleColor1 = [0, 255, 0];

var obstacleX2 = 300;
var obstacleY2 = 400;
var obstacleSize2 = 30;
var obstacleColor2 = [20, 255, 220];

var obstacleX3 = 450;
var obstacleY3 = 100;
var obstacleSize3 = 25;
var obstacleColor3 = [99, 9, 219];

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
    // Get random speed when it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createPlayer(100, 150);
}

function draw() {
    background(255, 255, 153);
    stroke(0);
    fill(0);
    // call createBorders function
    createBorders(10);
    // Escape message
    textSize(12);
    text("Save Yourself! Escape Here!!", width - 200, height - 20);
    // call drawPlayer function
    drawPlayer();
    playerMovement();
    // call moveObstacles function
    moveObstacles();
    // call drawObstacles function
    drawObstacles();
    // check to see if the player has left the exit
    if (playerX > width && playerY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
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

function moveObstacles() {
    obstacleX1 += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleY1 += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleX2 += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleY2 += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleX3 += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleY3 += Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    if (obstacleX1 > width) {
        obstacleX1 = 0;
    }
    if (obstacleX2 > width) {
        obstacleX2 = 0;
    }
    if (obstacleX3 > width) {
        obstacleX3 = 0;
    }

    if (obstacleY1 > height) {
        obstacleY1 = 0;
    }
    if (obstacleY2 > height) {
        obstacleY2 = 0;
    }
    if (obstacleY3 > height) {
        obstacleY3 = 0;
    }
}

function drawObstacles() {
    fill(obstacleColor1);
    circle(obstacleX1, obstacleY1, obstacleSize1);

    fill(obstacleColor2);
    circle(obstacleX2, obstacleY2, obstacleSize2);

    fill(obstacleColor3);
    circle(obstacleX3, obstacleY3, obstacleSize3);
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
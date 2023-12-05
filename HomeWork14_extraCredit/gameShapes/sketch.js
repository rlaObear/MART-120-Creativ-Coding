// x and y for player
var playerX = 90;
var playerY = 90;

// Defining key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y Array code for obstacles
var obstacleXs = [];
var obstacleYs = [];
var diameters = [];

var obstacleXSpeeds = [];
var obstacleYSpeeds = [];

// Control the number of obstacles
var numObstacles = 5;

function setup() {
    createCanvas(500, 600);
    createPlayer(200, 350);
    // Initialize obstacles directly
    for (var i = 0; i < numObstacles; i++) {
        obstacleXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleXs[i] = getRandomNumber(500);
        obstacleYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
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
    }
    if (keyIsDown(d)) {
        playerX += 10;
    }
}

function createPlayer(x, y) {
    playerX = x;
    playerY = y;
}

function drawPlayer() {
    fill(255, 23, 252);
    circle(playerX, playerY, 35);
}

function moveObstacles() {
    for (var i = 0; i < obstacleXs.length; i++) {
        obstacleXs[i] += obstacleXSpeeds[i];
        obstacleYs[i] += obstacleYSpeeds[i];
        handleObstacleBounds(i);
    }
}

function handleObstacleBounds(index) {
    if (obstacleXs[index] > width) {
        obstacleXs[index] = 0;
    }
    if (obstacleXs[index] < 0) {
        obstacleXs[index] = width;
    }
    if (obstacleYs[index] > height) {
        obstacleYs[index] = 0;
    }
    if (obstacleYs[index] < 0) {
        obstacleYs[index] = height;
    }
}

function drawObstacles() {
    for (var i = 0; i < obstacleXs.length; i++) {
        fill(0, 255, 0); // Green color for existing obstacles
        circle(obstacleXs[i], obstacleYs[i], diameters[i]);
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

function mouseClicked() {
    // Add new obstacle at the mouse click position
    obstacleXs.push(mouseX);
    obstacleYs.push(mouseY);
    diameters.push(getRandomNumber(30));
    obstacleXSpeeds.push(randomSpeed());
    obstacleYSpeeds.push(randomSpeed());
}

function randomSpeed() {
    return Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
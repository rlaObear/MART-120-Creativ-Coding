let player;
let obstacles = [];
let exit;

function setup() {
  createCanvas(800, 600);
  player = new Player(width / 2, height / 2, 20, color(0, 255, 0));
  exit = createVector(random(width), random(height));
  for (let i = 0; i < 2; i++) {
    obstacles.push(new Obstacle());
  }
}

function draw() {
  background(220);

  // Move and display player
  player.move();
  player.display();

  // Check if player reached the exit
  if (player.checkExit()) {
    textSize(32);
    fill(0, 255, 0);
    text("You won!", width / 2 - 80, height / 2);
  }

  // Display exit
  fill(255, 0, 0);
  ellipse(exit.x, exit.y, 20, 20);

  // Move and display obstacles
  for (let obstacle of obstacles) {
    obstacle.move();
    obstacle.display();
  }
}

function keyPressed() {
  // Move player using arrow keys
  if (keyCode === UP_ARROW) {
    player.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  } else if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}

function mousePressed() {
  // Add a non-moving obstacle when the mouse is clicked
  obstacles.push(new Obstacle(mouseX, mouseY, 30, color(255, 0, 0)));
}

class Player {
  constructor(x, y, size, col) {
    this.pos = createVector(x, y);
    this.size = size;
    this.col = col;
  }

  move() {
    // Player movement logic using arrow keys
  }

  moveUp() {
    this.pos.y -= 10;
  }

  moveDown() {
    this.pos.y += 10;
  }

  moveLeft() {
    this.pos.x -= 10;
  }

  moveRight() {
    this.pos.x += 10;
  }

  display() {
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  checkExit() {
    // Check if the player is inside the exit
    let d = dist(this.pos.x, this.pos.y, exit.x, exit.y);
    return d < this.size / 2 + 10;
  }
}

class Obstacle {
  constructor(x, y, size, col) {
    this.pos = createVector(x || random(width), y || random(height));
    this.size = size || random(20, 40);
    this.col = col || color(random(255), random(255), random(255));
    this.speed = createVector(random(3, 5), random(3, 5));
  }

  move() {
    // Move obstacle randomly and wrap around if it goes off-screen
    this.pos.add(this.speed);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  display() {
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
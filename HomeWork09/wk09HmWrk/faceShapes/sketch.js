function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    // Head
    fill(255, 220, 180);
    circle(198,115,50);
    // Nose
    fill(255, 150, 150);
    triangle(200, 200, 195, 200, 205, 220);
    // Ears
    fill(255, 220, 180);
    ellipse(172, 115, 10, 20);
    ellipse(225, 115, 10, 20);
    // Mouth
    fill(255, 150, 150);
    arc(198, 120, 20, 30, 0, PI);
    // Body
    fill(150, 200, 255); // Blue color for the body
    ellipse(200, 200, 70, 120);
    // Arms
    fill(150, 200, 255); // Match body color
    ellipse(160, 200, 20, 60);
    ellipse(240, 200, 20, 60);
    // legs
    fill(150, 200, 255); // Match body color
    ellipse(190, 289, 20, 60);
    ellipse(210, 289, 20, 60);
  
  }
    text('Obear Self Potrait!', 10, 30);
}
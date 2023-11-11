function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    // Hair
    fill(173, 128, 79); // Light brown color for hair
    beginShape();
    vertex(190, 90);
    bezierVertex(130, 250, 50, 50, 205, 260); // Adjusted for       shoulder-length hair
    bezierVertex(250, 80, 310, 250, 210,90);
    endShape();
    // Hair 2 back
    fill(173, 128, 79); // Light Brown color for hair
    arc(198, 110, 60, 60, PI, TWO_PI, CHORD);
    // Head
    fill(255, 220, 180);
    circle(198,115,50);
      // Hair 3 bangs
    fill(173, 128, 79); // Light Brown color for hair
    arc(198, 99, 40, 40, PI, TWO_PI, CHORD);
    // Nose
    fill(255, 150, 150);
    triangle(200, 200, 195, 200, 205, 220);
    // Ears
    fill(255, 220, 180);
    ellipse(172, 115, 10, 20);
    ellipse(225, 115, 10, 20);
    // Eyes
    fill(255);
    ellipse(210, 110, 20, 10);
    ellipse(190, 110, 20, 10);
    // Pupils
    fill(0);
    circle(190, 110, 8, 8);
    circle(210, 110, 8, 8);
    // Eyebrows
    fill(173, 128, 79); // Match hair color
    rect(185, 100, 10, 2);
    rect(205, 100, 10, 2);
    // Eyelashes
    fill(0);
    // EyelashesLeft eye
    line(175, 99, 182, 107);
    line(182, 100, 186, 105);
    line(185, 100, 190, 105);
    line(190, 100, 195, 105);
    // EyelashesRight eye
    line(225, 99, 218, 106);
    line(209, 100, 206, 105);
    line(215, 100, 210, 105);
    line(220, 100, 215, 105);
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
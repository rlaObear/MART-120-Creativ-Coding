function setup()
{
    createCanvas(500,700);
}
function draw()
{
    background(120,45,78);
    circle(100,120,160);
    textSize(32);
    // Head
    fill(255, 220, 180);
    ellipse(200, 100, 50, 50);
  // Body
     fill(150, 200, 255); // Blue color for the body
     ellipse(200, 200, 80, 120);

  // Arms
     fill(150, 200, 255); // Match body color
     ellipse(150, 200, 20, 60);
     ellipse(250, 200, 20, 60);
     // Legs
     line(200, 250, 250, 300);
     line(200, 250, 150, 300);
    }
    text('Obear Self Potrait!', 10, 30);
}
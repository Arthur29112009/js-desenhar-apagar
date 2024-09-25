function setup() {
    createCanvas(600, 600);
      background("purple");
  
  }
  
  function draw() {
   
  
    stroke("white");
    fill("white");
  
  
  
    if (mouseIsPressed) rect(mouseX, mouseY, 40, 40);
  }
  
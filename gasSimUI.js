/* 'ui.js' handles all visual elements of the simulation. The move() and show() calls for particles happen here. Additionally, ui handles mousePressed and mouseDragged events and by extension button presses. Finally, this file contains all button functions, and runs their listener and publisher functions. */

class gasSimUI /*extends UI*/ {
  constructor () {
    
  }
  
  show () {
    //super.show();
    image(gasSimBackgroundImage, 0,0, windowWidth);
    //image (gasSimSubsectionImage, windowWidth/4, windowHeight - 200);
    context.save();
    context.textAlign ="left";
    gasConfig.boxHeight = windowHeight - 250;
  
    textAlign(CENTER, CENTER);

    // for (let i = 0; i < particles.length; i++) {
    //   particles[i].move(); /* perform movement calculations for particle at index i (all particles) */
    //   particles[i].show(); // perform rendering of particles at index i
    // }
    particles.forEach (element => element.move());
    particles.forEach (element => element.show());

    // hitbox
    stroke(globalConfig.veryLight);
    noFill();
    rect(gasConfig.boxX, gasConfig.boxY, gasConfig.boxWidth, gasConfig.boxHeight, 7);
  
    textSize(20);
    fill (globalConfig.redAccent);
    noStroke();
    text("PARTICLES", windowWidth - 1155, windowHeight - 170);
    text("READOUTS", windowWidth - 700, windowHeight - 170);
    text("TOGGLES", windowWidth - 265, windowHeight - 170);
  
    let debugToggleButton = new debugToggle();
    buttons.push(debugToggleButton);
    if (gasConfig.debug) {
      fill (globalConfig.veryLight);
      stroke(globalConfig.dark);
      let cursorTextPositionX = mouseX;
      let cursorTextPositionY = mouseY - 15;
      if (mouseX < 30) {
        cursorTextPositionX = 30;
      }
      if (mouseY < 45) {
        cursorTextPositionY = 30
      }
      text('' + mouseX + ', ' + mouseY, cursorTextPositionX, cursorTextPositionY);
    }
    buttons.forEach(element => element.show());
    }
  }

  function mousePressed() {
    //buttons.forEach (element => element.clicked());
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].clicked();
    }
  }

  function mouseDragged() {
  //   thermometer.clicked();
  //   pullHandle.clicked();
}
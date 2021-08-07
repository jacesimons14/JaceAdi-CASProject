/* 'ui.js' handles all visual elements of the simulation. The move() and show() calls for particles happen here. Additionally, ui handles mousePressed and mouseDragged events and by extension button presses. Finally, this file contains all button functions, and runs their listener and publisher functions. */

class gasSimUI extends UI {
  constructor(gasConfig, context2d) {
    super();
    this.config = gasConfig;
    this.context = context2d;
  }

  show() {
    //context.restore();
    image(gasSimBackgroundImage, 0, 0, windowWidth);
    image(gasSimSubsectionImage, windowWidth / 4, windowHeight - 200);
    this.context.save();
    this.context.textAlign = "left";

    textAlign(CENTER, CENTER);

    super.show();

    // particles.forEach (element => element.move());
    // particles.forEach (element => element.show());

    // hitbox
    stroke(globalConfig.veryLight);
    noFill();
    rect(this.config.boxX, this.config.boxY, this.config.boxWidth, this.config.boxHeight, 7);

    textSize(20);
    fill(globalConfig.redAccent);
    noStroke();
    text("PARTICLES", windowWidth - 1155, windowHeight - 170);
    text("READOUTS", windowWidth - 700, windowHeight - 170);
    text("TOGGLES", windowWidth - 265, windowHeight - 170);

    // let debugToggleButton = new debugToggle(this.config);
    // buttons.push(debugToggleButton);
    // if (this.config.debug) {
    //   fill (globalConfig.veryLight);
    //   stroke(globalConfig.dark);
    //   let cursorTextPositionX = mouseX;
    //   let cursorTextPositionY = mouseY - 15;
    //   if (mouseX < 30) {
    //     cursorTextPositionX = 30;
    //   }
    //   if (mouseY < 45) {
    //     cursorTextPositionY = 30
    //   }
    //   text('' + mouseX + ', ' + mouseY, cursorTextPositionX, cursorTextPositionY);
    // }
    // buttons.forEach(element => element.show());
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
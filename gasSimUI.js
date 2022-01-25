/* 'ui.js' handles all visual elements of the simulation. The move() and show() calls for particles happen here. Additionally, ui handles mousePressed and mouseDragged events and by extension button presses. Finally, this file contains all button functions, and runs their listener and publisher functions. */

class gasSimUI extends UI {
  constructor(globalConfig, context2d, gasConfig) {
    super(globalConfig, context2d);
    this.config = gasConfig;
    super.topTitleText = "GAS";
    super.bottomTitleText = "SIM";
  }

  show() {
    //background(0,0,0);
    this.context.restore();

    //console.log(this.config.debug);
    image(gasSimBackgroundImage, 0, 0, windowWidth);
    image(gasSimSubsectionImage, windowWidth / 4, windowHeight - 200);
     this.context.save();
     //this.context.textAlign = "left";

    super.show();
    textAlign(CENTER, CENTER);


    // injection buttons
    let distance = dist (mouseX, mouseY, 35, 395);
      if (distance <= this.threshold) {
        for (let i = 0; i < Members.llimit; i++) {
          angleMode(DEGREES);
          let lP = new lightParticle(Members.linjectionX, Members.linjectionY, random(-3, 3), random(-3, 3), this.config);
          particles.push(lP);
          Members.lightParticles++;
        }
      }

    particles.forEach (element => element.move());
    particles.forEach (element => element.show());

    // hitbox
    stroke(globalConfig.veryLight);
    fill(globalConfig.buttonOff);
    rect(this.config.boxX, this.config.boxY, this.config.boxWidth, this.config.boxHeight, 7);

    // textSize(20);
    // fill(this.globalConfig.redAccent);
    // noStroke();
    // text("PARTICLES", windowWidth - 1155, windowHeight - 170);
    // text("READOUTS", windowWidth - 700, windowHeight - 170);
    // text("TOGGLES", windowWidth - 265, windowHeight - 170);

    // let debugToggleButton = new debugToggle(this.config);
    // buttons.push(debugToggleButton);
    // if (this.config.debug) {
    //   fill (this.globalConfig.veryLight);
    //   stroke(this.globalConfig.dark);
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
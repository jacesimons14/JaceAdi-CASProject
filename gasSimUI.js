/* 'ui.js' handles all visual elements of the simulation. The move() and show() calls for particles happen here. Additionally, ui handles mousePressed and mouseDragged events and by extension button presses. Finally, this file contains all button functions, and runs their listener and publisher functions. */

class gasSimUI extends UI {
    constructor(globalConfig, context2d, gasConfig) {
        super(globalConfig, context2d);
        this.config = gasConfig;
        super.topTitleText = "GAS";
        super.bottomTitleText = "SIM";
    }

    show() {
        background(0,0,0);
        this.context.restore();

        //console.log(this.config.debug);
        image(gasSimBackgroundImage, 0, 0, windowWidth);
        image(gasSimSubsectionImage, windowWidth / 4, windowHeight - 200);
        this.context.save();
        this.context.textAlign = "left";

        super.show();
        textAlign(CENTER, CENTER);

        angleMode(DEGREES);
        //background(0,0,0)

        // hitbox
        stroke(globalConfig.veryLight);
        fill(globalConfig.buttonOff);
        rect(this.config.boxX, this.config.boxY, this.config.boxWidth, this.config.boxHeight, 7);

        textSize(20)
        text(particles.length, 500,500)

        particles.forEach(element => element.move());
        particles.forEach(element => element.show());

        noStroke();

        // inject light particles
        fill(this.config.l);
        ellipse(this.config.lightInjectionButtonPos[0], this.config.lightInjectionButtonPos[1], 60, 60);
        let lightInjectionDistance = dist(mouseX, mouseY, this.config.lightInjectionButtonPos[0], this.config.lightInjectionButtonPos[1]);
        if (lightInjectionDistance <= 30 && mouseIsPressed) {
            let lP = new lightParticle(this.config.linjectionX, this.config.linjectionY, random(-3, 3), random(-3, 3), this.config);
            particles.push(lP);
            this.config.lightParticles++;
        }

        // inject heavy particles
        fill(this.config.h);
        ellipse(this.config.heavyInjectionButtonPos[0], this.config.heavyInjectionButtonPos[1], 60, 60);
        let heavyInjectionDistance = dist(mouseX, mouseY, this.config.heavyInjectionButtonPos[0], this.config.heavyInjectionButtonPos[1]);
        if (heavyInjectionDistance <= 30 && mouseIsPressed) {
            let hP = new heavyParticle(this.config.hinjectionX, this.config.linjectionY, random(-1,1), random(-1,1), this.config)
            particles.push(hP);
            this.config.heavyParticles++;
        }

        // clear particles
        fill(this.globalConfig.buttonOff);
        ellipse(this.config.deleteButtonPos[0], this.config.deleteButtonPos[1], 60, 60);
        let deleteDistance = dist(mouseX, mouseY, this.config.deleteButtonPos[0], this.config.deleteButtonPos[1]);
        if (deleteDistance <= 30 && mouseIsPressed && particles.length > 0) {
            text("deleted particles",1235, 785);
            for (let i = 0; i < particles.length; i++) {
                particles.pop();
            }
        }



        // textSize(20);
        // fill(this.globalConfig.redAccent);
        // noStroke();
        // text("PARTICLES", windowWidth - 1155, windowHeight - 170);
        // text("READOUTS", windowWidth - 700, windowHeight - 170);
        // text("TOGGLES", windowWidth - 265, windowHeight - 170);

        // let debugToggleButton = new debugToggle(this.config);
        // buttons.push(debugToggleButton);
        // if (this.config.debug) {
          fill (this.globalConfig.veryLight);
          stroke(this.globalConfig.dark);
          let cursorTextPositionX = mouseX;
          let cursorTextPositionY = mouseY - 15;
          if (mouseX < 30) {
            cursorTextPositionX = 30;
          }
          if (mouseY < 45) {
            cursorTextPositionY = 30
          }
          text('' + mouseX + ', ' + mouseY, cursorTextPositionX, cursorTextPositionY);
        // }
        // buttons.forEach(element => element.show());
    }
}
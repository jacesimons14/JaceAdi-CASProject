/* 'ui.js' handles all visual elements of the simulation. The move() and show() calls for particles happen here.
Additionally, ui handles mousePressed and mouseDragged events and by extension button presses. Finally, this file
contains all button functions, and runs their listener and publisher functions. */

class gasSimUI extends UI {
    constructor(globalConfig, context2d, gasConfig) {
        super(globalConfig, context2d);
        this.config = gasConfig;
        super.topTitleText = "GAS";
        super.bottomTitleText = "SIM";
    }

    show() {
        //background(0, 0, 0);
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

        particles.forEach(element => element.move());
        particles.forEach(element => element.show());

        noStroke();

        // inject light particles
        lightButton(this.config);
        let lightInjectionDistance = dist(mouseX, mouseY, this.config.lightInjectionButtonPos[0],
            this.config.lightInjectionButtonPos[1]);
        if (lightInjectionDistance <= 30 && mouseIsPressed) {
            let lP = new lightParticle(gasConfig.linjectionX, gasConfig.linjectionY, gasConfig);
            particles.push(lP);
            gasConfig.lightParticles++;
        }

        // inject heavy particles
        fill (globalConfig.buttonOff)
        ellipse(this.config.heavyInjectionButtonPos[0], this.config.heavyInjectionButtonPos[1], 60, 60);
        fill(this.config.h);
        ellipse(this.config.heavyInjectionButtonPos[0], this.config.heavyInjectionButtonPos[1], 10, 10)
        let heavyInjectionDistance = dist(mouseX, mouseY, this.config.heavyInjectionButtonPos[0],
            this.config.heavyInjectionButtonPos[1]);
        if (heavyInjectionDistance <= 30 && mouseIsPressed) {
            let hP = new heavyParticle(this.config.hinjectionX, this.config.linjectionY,
                this.config)
            particles.push(hP);
            this.config.heavyParticles++;
        }

        // clear particles
        fill(globalConfig.buttonOff);
        ellipse(this.config.deleteButtonPos[0], this.config.deleteButtonPos[1], 60, 60);
        noStroke()
        fill(globalConfig.veryLight)
        text(particles.length, this.config.deleteButtonPos[0], this.config.deleteButtonPos[1]-5);
        let deleteDistance = dist(mouseX, mouseY, this.config.deleteButtonPos[0], this.config.deleteButtonPos[1]);
        if (deleteDistance <= 30 && mouseIsPressed && particles.length > 0) {
            particles = []
        }

        // temperature increment
        fill(globalConfig.buttonOff)
        ellipse(this.config.temperatureIncrementButtonPos[0], this.config.temperatureIncrementButtonPos[1], 60,
            60);
        stroke(this.config.therLight)
        fill (this.config.therLight)
        textAlign(CENTER)
        text("+", this.config.temperatureIncrementButtonPos[0], this.config.temperatureIncrementButtonPos[1] -
            5);
        noStroke()
        let temperatureDistance = dist(mouseX, mouseY, this.config.temperatureIncrementButtonPos[0], this.config.
            temperatureIncrementButtonPos[1]);
        if (temperatureDistance <= 30 && mouseIsPressed) {
            this.config.boxTemperature++;
        }

        // temperature decrement
        fill(globalConfig.buttonOff)
        ellipse(this.config.temperatureDecrementButtonPos[0], this.config.temperatureDecrementButtonPos[1],
            60, 60);
        stroke(this.config.therLight)
        fill (this.config.therLight);
        textAlign(CENTER)
        text("-", this.config.temperatureDecrementButtonPos[0], this.config.temperatureDecrementButtonPos[1] -
            5);
        noStroke();
        let temperatureDecrementDistance = dist(mouseX, mouseY, this.config.temperatureDecrementButtonPos[0],
            this.config.temperatureDecrementButtonPos[1]);
        if (temperatureDecrementDistance <= 30 && mouseIsPressed && this.config.boxTemperature > 0) {
            this.config.boxTemperature--;
        }

        fill(globalConfig.veryLight)
        noStroke();
        text(this.config.boxTemperature + " K", this.config.temperatureReadoutPos[0],
            this.config.temperatureReadoutPos[1])

        textSize(25);
        fill(globalConfig.veryLight);
        noStroke();
        text("PARTICLES", (this.config.deleteButtonPos[0]+this.config.lightInjectionButtonPos[0])/2,
            (this.config.boxHeight + this.config.lightInjectionButtonPos[1])/2);
        text("TEMPERATURE", (this.config.temperatureDecrementButtonPos[0]+this.config.
            temperatureReadoutPos[0])/2, (this.config.boxHeight + this.config.temperatureDecrementButtonPos[1])/2);

        // if (this.config.debug) {
        //     fill(globalConfig.veryLight);
        //     stroke(globalConfig.dark);
        //     let cursorTextPositionX = mouseX;
        //     let cursorTextPositionY = mouseY - 15;
        //     if (mouseX < 30) {
        //         cursorTextPositionX = 30;
        //     }
        //     if (mouseY < 45) {
        //         cursorTextPositionY = 30
        //     }
        //     text('' + mouseX + ', ' + mouseY, cursorTextPositionX, cursorTextPositionY);
        // }
    }
}

function lightButton (config) {
    fill(globalConfig.buttonOff)
    ellipse(config.lightInjectionButtonPos[0], config.lightInjectionButtonPos[1], 60, 60)
    fill(config.l);
    ellipse(config.lightInjectionButtonPos[0], config.lightInjectionButtonPos[1], 7, 7)
}
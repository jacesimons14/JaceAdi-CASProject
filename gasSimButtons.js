class button {
  constructor(gasConfig, threshold = 20) {
    this.config = gasConfig;
    this.threshold = threshold;
  }
}

class debugToggle extends button {
  constructor(gasConfig, threshold) {
    super(gasConfig, threshold);
    this.x = 750//1530;
    this.y = 500//850;
  }

  clicked() {
    let distance = dist(mouseX, mouseY, this.x + globalConfig.buttonSize / 2, this.y + globalConfig.buttonSize / 2);
    if (distance <= this.threshold) {
      this.config.debug = !this.config.debug;
      this.config.debug.initialize();
      //console.log("button");
      //console.log(!this.config.debug);
    }
  }

  show() {
    noStroke();
    if (this.config.debug) { // toggled on
      fill(globalConfig.buttonOn);
    }
    else { // toggled off
      fill(globalConfig.buttonOff);
    }
    rect(this.x, this.y, this.x + globalConfig.buttonSize, this.y + globalConfig.buttonSize, 10);
    text (this.config.debug, this.x + 50, this.y + 10);
  }
}

// const lightParticleInjection = {
//   x : Buttons.lightParticleInjectionButtonX,
//   y : Buttons.lightParticleInjectionButtonY,
//   threshold : 20,
//
//   clicked () {
//     let distance = dist (mouseX, mouseY, this.x, this.y);
//       if (distance <= this.threshold) {
//         for (let i = 0; i < Members.llimit; i++) {
//         angleMode (DEGREES);
//         let lP = new lightParticle(Members.linjectionX, Members.linjectionY, random(-3,3), random(-3,3), this.config);
//         particles.push(lP);
//         Members.lightParticles++;
//        }
//       }
//   },
//   show() {
//     noStroke();
//     fill(Particles.ld);
//     ellipse(this.config.lightParticleInjectionButtonX - 2, Buttons.lightParticleInjectionButtonY + 3, 45, 45);
//     rect(Buttons.lightParticleInjectionButtonX + 10, Buttons.lightParticleInjectionButtonY - 5, Buttons.lightParticleInjectionButtonX + 40, Buttons.lightParticleInjectionButtonY + 5);
//     fill(Particles.l);
//     ellipse(Buttons.lightParticleInjectionButtonX, Buttons.lightParticleInjectionButtonY, 45, 45);
//     fill(Particles.ld);
//     textSize(14);
//     textFont(fontBold);
//     text(Members.lightParticles, Buttons.lightParticleInjectionButtonX, Buttons.lightParticleInjectionButtonY - 2.5);
//   }
// }
//
// const heavyParticleInjection = {
//   x : Buttons.heavyParticleInjectionButtonX,
//   y : Buttons.heavyParticleInjectionButtonY,
//   threshold : 22.5,
//
//   clicked () {
//     let distance = dist (mouseX, mouseY, this.x, this.y);
//       if (distance <= this.threshold) {
//         for (let i = 0; i < Members.hlimit; i++) {
//           let hP = new heavyParticle(Members.hinjectionX, Members.hinjectionY, random(-3,3), random(-3,3));
//         particles.push(hP);
//         Members.heavyParticles++;
//        }
//       }
//   },
//   show() {
//     noStroke();
//     fill(Particles.hd); // dark red
//     ellipse(Buttons.heavyParticleInjectionButtonX - 2, Buttons.heavyParticleInjectionButtonY + 3, 45, 45); // shade of button
//     rect(Buttons.heavyParticleInjectionButtonX + 10, Buttons.heavyParticleInjectionButtonY - 5, Buttons.heavyParticleInjectionButtonX + 40, Buttons.heavyParticleInjectionButtonY + 5); // pipe
//     fill(Particles.h);
//     ellipse(Buttons.heavyParticleInjectionButtonX, Buttons.heavyParticleInjectionButtonY, 45, 45); // heavy inject button
//     fill(Particles.hd); // dark red
//     textSize(14);
//     textFont(fontBold);
//     text(Members.heavyParticles, 35, 392.5);
//   }
// }

// const limitPlus = {
//   x : Buttons.limitPlusX,
//   y : Buttons.limitPlusY,
//   threshold : 15,
//   clicked () {
//     let distance = dist (mouseX, mouseY, this.x, this.y);
//       if (distance <= this.threshold) {
//         if (Members.typeToggle) {
//           Members.llimit++;
//         } else {
//           Members.hlimit++;
//         }
//       }
//   },
//   show() {
//     noStroke();
//     fill(UI.dark);
//     rect(Buttons.limitPlusX - 20, Buttons.limitPlusY - 2.5, Buttons.limitPlusX, Buttons.limitPlusY + 2.5); // plus hori
//     fill(UI.light); // light gray
//     rect(Buttons.limitPlusX - 12.5, Buttons.limitPlusY - 10, Buttons.limitPlusX - 7.5, Buttons.limitPlusY + 10); // plus vert
//   }
// }

// const limitMinus = {
//   x : Buttons.limitMinusX,
//   y : Buttons.limitMinusY,
//   threshold : 15,
//   clicked () {
//     let distance = dist (mouseX, mouseY, this.x, this.y);
//       if (distance <= this.threshold) {
//         if (Members.typeToggle) {
//           Members.llimit--;
//         } else {
//           Members.hlimit--;
//         }
//       }
//   },
//   show() {
//     noStroke();
//     fill(UI.light); // light gray
//     rect(Buttons.limitMinusX - 7.5, Buttons.limitMinusY - 2.5, Buttons.limitMinusX + 7.5, Buttons.limitMinusY + 2.5); // minus
//   }
// }

// const pullHandle = {
//   x : Members.boxWidth + 7.5,
//   y : Buttons.pullHandleY,
//   threshold : 200,
//   clicked () {
//     let distance = dist (mouseX, mouseY, Members.boxWidth+7.5, this.y);
//       if (distance <= this.threshold) {
//         Members.boxWidth = mouseX;
//         console.log('got here!');
//       }
//   },
//   show() {
//     // fill(UI.dark);
//     // stroke(UI.dark);
//     // rect(Members.boxWidth + 1, Buttons.pullHandleY - 50, Members.boxWidth + 15, Buttons.pullHandleY + 50, 0, 15, 15, 0);
//   }
// }

// const typeToggleSwitch = {
//   x : Buttons.typeToggleX,
//   y : Buttons.typeToggleY,
//   threshold : 20,
//   clicked() {
//     let distance = dist (mouseX, mouseY, this.x, this.y);
//       if (distance <= this.threshold) {
//         Members.typeToggle = !Members.typeToggle;
//       }
//   },
//   show() {
//     // red limit blue limit toggle
//     if (!Members.typeToggle) {
//       // PUT COLOR ANIMATION CHANGE HERE I THINM
//       // toggled left to heavy particles
//       fill (Particles.hd);
//       stroke(Particles.hd);
//       rect(Buttons.typeToggleX - 10, Buttons.typeToggleY - 5, Buttons.typeToggleX + 10, Buttons.typeToggleY + 5, 250);
//       fill(Particles.h);
//       stroke(Particles.h);
//       ellipse(Buttons.typeToggleX - 10, Buttons.typeToggleY, 15, 15);
//       noStroke();
//       textSize(16);
//       text(Members.hlimit, Buttons.typeToggleX - 2.5, Buttons.typeToggleY - 35);
//     } else {
//       // toggled right to light particles
//       fill(Particles.ld);
//       stroke(Particles.ld);
//       rect(Buttons.typeToggleX - 10, Buttons.typeToggleY - 5, Buttons.typeToggleX + 10, Buttons.typeToggleY + 5, 250);
//       fill(Particles.l);
//       stroke(Particles.l);
//       ellipse(Buttons.typeToggleX + 10, Buttons.typeToggleY, 15, 15); // 60
//       noStroke();
//       textSize(16);
//       text(Members.llimit, Buttons.typeToggleX - 2.5, Buttons.typeToggleY - 35);
//     }
//   }
// }

// const resetButton = {
//   x: Members.boxWidth - 10,
//   y: Buttons.resetY,
//   threshold: 20,
//   clicked () {
//     let distance = dist(mouseX, mouseY, Members.boxWidth-10, this.y);
//     if (distance <= this.threshold) {
//       for (let i = 0; i < particles.length; i++) {
//         particles.splice(i, particles.length);
//         Members.lightParticles = 0;
//         Members.heavyParticles = 0;
//       }
//     }
//   },
//   show() {
//     angleMode (RADIANS);
//     noFill();
//     strokeWeight(2);
//     stroke(UI.light);
//     arc(Members.boxWidth - 10, Buttons.resetY, 25, 25, TWO_PI, (16 * PI) / 9);
//     line(Members.boxWidth - 5, Buttons.resetY - 7, Members.boxWidth, Buttons.resetY - 7);
//     line(Members.boxWidth, Buttons.resetY - 12, Members.boxWidth, Buttons.resetY - 7);
//   },
// };

// const tempIncrement = {
//   x: Buttons.tempIncXV1,
//   y: Buttons.tempIncYH1 + 2.5,
//   threshold: 20,
//   clicked: function () {
//     let distance = dist(mouseX, mouseY, this.x, this.y);
//     if (distance <= this.threshold) {
//       Members.temperatureK++;
//       Members.temperatureF++;
//       Members.temperatureC++;
//     }
//   },
//   show() {
//     noStroke();
//     fill(UI.dark);
//     rect(
//       Buttons.tempIncXH1,
//       Buttons.tempIncYH1,
//       Buttons.tempIncXH2,
//       Buttons.tempIncYH2
//     ); // plus hori
//     fill(UI.light); // light gray
//     rect(
//       Buttons.tempIncXV1,
//       Buttons.tempIncYV1,
//       Buttons.tempIncXV2,
//       Buttons.tempIncYV2
//     ); // plus vert
//   },
// };

// const tempDecrement = {
//   x: Buttons.tempIncXV1,
//   y: Buttons.tempDecY1 + 2.5,
//   threshold: 20,
//   clicked () {
//     let distance = dist(mouseX, mouseY, this.x, this.y);
//     if (distance <= this.threshold) {
//       Members.temperatureK--;
//       Members.temperatureF--;
//       Members.temperatureC--;
//     }
//   },
//   show() {
//     rect(
//       Buttons.tempIncXH1,
//       Buttons.tempDecY1,
//       Buttons.tempIncXH2,
//       Buttons.tempDecY2
//     ); // minus
//   },
// };

// const thermometer = {
//   x: Buttons.therBulbCenterX-2.5, // 35
//   y: Buttons.therBulbCenterY-46.5, // 178.5

//   threshold: 50,
//   clicked () {
//     let distance = dist(mouseX, mouseY, this.x, this.y);
//     if (distance <= this.threshold) {
//       if (pmouseY > mouseY) {
//         Members.temperatureK += round(mouseY / 10);
//         Members.temperatureF += round(mouseY / 10);
//         Members.temperatureC += round(mouseY / 10);
//       } else {
//         Members.temperatureK -= round(mouseY / 10);
//         Members.temperatureF -= round(mouseY / 10);
//         Members.temperatureC -= round(mouseY / 10);
//       }
//     }
//   },
//   show() {
//     fill(UI.dark);
//     noStroke();
//     ellipse(Buttons.therBulbCenterX - 3, Buttons.therBulbCenterY + 3, 50, 50);
//     rect(
//       Buttons.tempIncXH1 - 3,
//       Buttons.tempIncYH1 + 28,
//       Buttons.tempIncXH2 - 3,
//       Buttons.tempIncYH1 + 153,
//       10
//     );
//     fill(UI.light);
//     ellipse(Buttons.therBulbCenterX, Buttons.therBulbCenterY, 50, 50);
//     rect(
//       Buttons.tempIncXH1,
//       Buttons.tempIncYH1 + 25,
//       Buttons.tempIncXH2,
//       Buttons.tempIncYH1 + 150,
//       10
//     );
//     fill(UI.therLight);
//     ellipse(Buttons.therBulbCenterX, Buttons.therBulbCenterY, 42, 42);
//     rect(
//       Buttons.tempIncXH1 + 4,
//       Buttons.therOffset,
//       Buttons.tempIncXH2 - 4,
//       236.5,
//       10
//     );
//     fill(UI.therDark);
//     textSize(14);
//     if (Members.temperatureK > 999) {
//       textSize(12);
//     }
//     if (Members.temperatureK <= 0) {
//       Members.temperatureK = 0;
//     }
//     if (Members.tempUnit === "K") {
//       text(
//         Members.temperatureK + " " + Members.tempUnit,
//         Buttons.therBulbCenterX,
//         Buttons.therBulbCenterY - 3.5
//       );
//     }

//     if (Members.tempUnit === "F") {
//       text(
//         Members.temperatureF + " " + Members.tempUnit,
//         Buttons.therBulbCenterX,
//         Buttons.therBulbCenterY - 3.5
//       );
//     } else if (Members.tempUnit === "C") {
//       text(
//         Members.temperatureC + " " + Members.tempUnit,
//         Buttons.therBulbCenterX,
//         Buttons.therBulbCenterY - 3.5
//       );
//     }
//   },
// };

// const kelvinsSelect = {
//   x: Buttons.tempUnitKX,
//   y: Buttons.tempUnitY,
//   threshold: 10,
//   clicked () {
//     let distance = dist(mouseX, mouseY, this.x, this.y);
//     if (distance <= this.threshold) {
//       Members.tempUnit = "K";
//     }
//   },
//   show () {
//     if (Members.tempUnit === "K") {
//       // temp unit selections
//       textSize(14);
//       fill(UI.dark);
//       textFont(fontBold);
//       text("C", Buttons.tempUnitCX, Buttons.tempUnitY);
//       text("F", Buttons.tempUnitFX, Buttons.tempUnitY);
//       fill(UI.light);
//       text("K", Buttons.tempUnitKX, Buttons.tempUnitY);
//     }
//   },
// };

// const farenheitSelect = {
//   x: Buttons.tempUnitFX,
//   y: Buttons.tempUnitY,
//   threshold: 10,
//   clicked () {
//     let distance = dist(mouseX, mouseY, this.x, this.y);
//     if (distance <= this.threshold) {
//       Members.tempUnit = "F";
//     }
//   },
//   show () {
//     if (Members.tempUnit === "F") {
//       // temp unit selections
//       textSize(14);
//       fill(UI.dark);
//       textFont(fontBold);
//       text("C", Buttons.tempUnitCX, Buttons.tempUnitY);
//       text("K", Buttons.tempUnitKX, Buttons.tempUnitY);
//       fill(UI.light);
//       text("F", Buttons.tempUnitFX, Buttons.tempUnitY);
//     }
//   },
// };

// const celsiusSelect = {
//   x: Buttons.tempUnitCX,
//   y: Buttons.tempUnitY,
//   threshold: 10,
//   clicked () {
//     let distance = dist(mouseX, mouseY, this.x, this.y);
//     if (distance <= this.threshold) {
//       Members.tempUnit = "C";
//     }
//   },
//   show () {
//     if (Members.tempUnit === "C") {
//       // temp unit selections
//       textSize(14);
//       fill(UI.dark);
//       textFont(fontBold);
//       text("K", Buttons.tempUnitKX, Buttons.tempUnitY);
//       text("F", Buttons.tempUnitFX, Buttons.tempUnitY);
//       fill(UI.light);
//       text("C", Buttons.tempUnitCX, Buttons.tempUnitY);
//     }
//   },
// };
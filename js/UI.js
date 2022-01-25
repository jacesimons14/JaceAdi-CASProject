class UI {
  show() {
    // left third card
    noStroke();
    // let gradient = this.context.createLinearGradient(0, 0, windowWidth / 4, 0);
    // gradient.addColorStop(0, '#21343F');
    // gradient.addColorStop(1, '#4E6573');
    // this.context.shadowColor = '#B5CBD8';
    // this.context.shadowBlur = 200;
    // this.context.shadowOffsetX = 10;
    // this.context.fillStyle = gradient;
    // this.context.fillRect(0, 0, windowWidth / 4, windowHeight);

    //this.context.restore();

    // gas sim text

    //this.context.shadowColor = '#B5CBD8';
    //this.context.shadowBlur = 200;
    textAlign(LEFT);
    textSize(250);
    textFont(galataSans);
    fill(189, 210, 222, 190);
    text("GAS", 320, 300);
    text("SIM", 320, 500);

    //this.context.shadowBlur = 0;

    // dashboard bar

    // this.context.save();

    rect (100,100,100,100);

    fill(78, 104, 119, 150);
    rect(windowWidth / 4, windowHeight - 200, windowWidth, windowHeight);

    // jace & adi watermark

    fill(globalConfig.light);
    textSize(15);
    textFont(fontBold);
    text("Jace Simons & Adi Bhushan 2021", windowWidth - 225, windowHeight - 20);

    //this.context.restore();

    textFont(fontBold);
    strokeWeight(2);
  }
}

// function animateColorTransition(color1, color2) {
//   // UI.transR = color1;
//   // UI.transG = color1;
//   // UI.transB = color1;

//   // hex to rgb conversion by Jon Kantner
//   let r1 = color("0x" + color1.charAt(1) + color1.charAt(2));
//   let g1 = color("0x" + color1.charAt(3) + color1.charAt(4));
//   let b1 = color("0x" + color1.charAt(5) + color1.charAt(6));

//   let r2 = color("0x" + color2.charAt(1) + color2.charAt(2));
//   let g2 = color("0x" + color2.charAt(3) + color2.charAt(4));
//   let b2 = color("0x" + color2.charAt(5) + color2.charAt(6));

//   colorMode (RGB);
//   let from = color(0,195,230);
//   let to = color(235,64,52);
//   let interA = lerpColor(from, to, 0.33);
//   stroke(interA);

// //   let r3 = r1;
// //   let g3 = g1;
// //   let b3 = b1;
// //   for (let amt = 0.0 ; amt <= 1.0; amt+=0.1) {
// //     let c = lerpColor (from, to, 0.5);
// //     fill (c);
// //     stroke(c);
// //     strokeWeight(15);
// //     point (250,250);
// //   }

//   // UI.transR = r3;
//   // UI.transG = g3;
//   // UI.transB = b3;
// }

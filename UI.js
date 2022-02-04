let buttons = [];

class UI {
  constructor(globalConfig, context2d) {
    this.globalConfig = globalConfig;
    this.context = context2d;
    this.topTitleText;
    this.bottomTitleText;
  }

  show() {
    // left third card
    noStroke();
    let gradient = this.context.createLinearGradient(0, 0, windowWidth / 4, 0);
    gradient.addColorStop(0, '#104869');
    //  #21343F ^
    gradient.addColorStop(1, '#365a70');
    //  #4E6573 ^
    this.context.shadowColor = '#B5CBD8';
    this.context.shadowBlur = 200;
    this.context.shadowOffsetX = 10;
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, windowWidth / 4, windowHeight);

    this.context.restore();

    // sim title text

    this.context.shadowColor = '#B5CBD8';
    this.context.shadowBlur = 200;
    textAlign(LEFT);
    textSize(250);
    textFont(galataSans);
    fill(189, 210, 222, 190);
    text(this.topTitleText, 320, 300);
    text(this.bottomTitleText, 320, 500);

    this.context.shadowBlur = 0;

    // dashboard bar

    this.context.save();

    fill(78, 104, 119, 150);
    rect(windowWidth / 4, windowHeight - 200, windowWidth, windowHeight);

    // jace & adi watermark

    fill(globalConfig.light);
    textSize(15);
    textFont(fontBold);
    text("Jace Simons & Adi Bhushan 2021", windowWidth - 225, windowHeight - 20);

    this.context.restore();

    textFont(fontBold);
    strokeWeight(2);
    //redraw();
  }
}

// function mousePressed() {
//   buttons.forEach(element => element.clicked());
// }
//
// function mouseDragged() {
//   //this.buttons.forEach(button => button.show());
// }
/* simulation.js is effectively the 'main.js' file in the sense that it is the starting point for our code. It calls all other functions and thereby assembles the simulation */
let particles = []; // array of all existing particles
let buttons = []; // array of all buttons
let gasConfig;
//let gasSim;
let gasUI;

let context2d;
let globalConfig;

function preload() {
  fontReg = loadFont("BalooThambi2Regular.ttf");
  fontBold = loadFont("BalooThambi2Bold.ttf");
  galataSans = loadFont("GalataSans.ttf");
  gasSimBackgroundImage = loadImage("background.png");
  gasSimSubsectionImage = loadImage("subsection.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // this makes a canvas that takes up the window width of the webpage its on
  rectMode(CORNERS); // corners mode allows you to make rectangles based on its top left and bottom right corners. This is just preference
  angleMode(DEGREES); // the collision calculations are done much easier when using degrees vs radians

  context2d = canvas.getContext('2d');
  //gasSim = new gasSimulation(context2d);
  globalConfig = new globalConfiguration();
  this.gasConfig = new gasSimConfig();
  this.gasConfig.initialize();
  this.gasUI = new gasSimUI(this.gasConfig, context2d);

}

function draw () {
  this.gasUI.show();
  //gasSim.update();
}




// class gasSimulation {
//   constructor(context2d) {
//     this.gasConfig = new gasSimConfig();
//     this.gasConfig.initialize();
//     this.gasUI = new gasSimUI(this.gasConfig, context2d);
//   }
//
//   update() {
//     //(particles);
//     this.gasUI.show();
//   }
// }
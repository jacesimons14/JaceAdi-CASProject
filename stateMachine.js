/* simulation.js is effectively the 'main.js' file in the sense that it is the starting point for our code. It calls all other functions and thereby assembles the simulation */
let context;
let states = [];
let currentState;
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
  
  context = canvas.getContext('2d');
  states.push("gasSim");
}

function draw() {
  globalConfig = new globalConfiguration();
  currentState = new gasSimulation();
  stateMachine(currentState, states);
}

function stateMachine (currentState, states) {
  try {
    currentState.update();
  }
  catch (error) {
    console.error("State machine returned error: " + error);
  }
}
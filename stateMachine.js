/* simulation.js is effectively the 'main.js' file in the sense that it is the starting point for our code. It calls all other functions and thereby assembles the simulation */

let context2d;
let globalConfig;

let currentState;

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

    globalConfig = new globalConfiguration();

    context2d = canvas.getContext('2d');

    currentState = new gasSimulation(context2d, globalConfig);

}

function draw() {
    stateMachine(currentState);
}

function stateMachine(currentState) {
    currentState.update();
    // try {
    //   currentState.update();
    // }
    // catch (error) {
    //   console.error("State machine returned error: " + error);
    // }
}
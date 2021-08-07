/* simulation.js is effectively the 'main.js' file in the sense that it is the starting point for our code. It calls all other functions and thereby assembles the simulation */
let particles = []; // array of all existing particles
let buttons = []; // array of all buttons
let gasConfig;
let gasUI;

class gasSimulation {
  constructor(context2d) {
    this.gasConfig = new gasSimConfig();
    this.gasConfig.initialize();
    this.gasUI = new gasSimUI(this.gasConfig, context2d);
  }

  update() {
    doCollisions(particles);
    this.gasUI.show();
  }
}
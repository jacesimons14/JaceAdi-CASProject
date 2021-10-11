/* simulation.js is effectively the 'main.js' file in the sense that it is the starting point for our code. It calls all other functions and thereby assembles the simulation */
let particles = []; // array of all existing particles
let gasConfig;
let gasUI;

class gasSimulation {
  constructor(context2d, globalConfig) {
    this.gasConfig = new gasSimConfig();
    this.gasConfig.initialize();
    this.globalConfig = globalConfig;
    this.gasUI = new gasSimUI(this.globalConfig, context2d, this.gasConfig);
  }

  update() {
    //doCollisions(particles);
    this.gasUI.show();
    //console.log("reached!");
  }
}
/* simulation.js is effectively the 'main.js' file in the sense that it is the starting point for our code. It calls all other functions and thereby assembles the simulation */
let particles = []; // array of all existing particles
let gasConfig;
let gasUI;

class gasSimulation {
  constructor(context2d, globalConfig) {
    gasConfig = new gasSimConfig();
    gasConfig.initialize();
    //globalConfig = globalConfig;
    gasUI = new gasSimUI(globalConfig, context2d, gasConfig);
  }

  update() {
    doCollisions(particles);
    gasUI.show();
  }
}
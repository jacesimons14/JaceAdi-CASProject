/* 'config.js' is for variables that are used globally and/or collections of variables that are too long  to keep in a file; especially color codes and coordinates of ui elements. */

class gasSimConfig {
  constructor() {
    this.lightParticles = 0;
    this.heavyParticles = 0;

    this.llimit = 10;
    this.hlimit = 10;

    this.boxTemperature = 273;

    this.boxX = 700;
    this.boxY = 150;
    this.boxHeight = windowHeight - 250;
    this.boxWidth = 1700;
   
    this.debug = false;

    this.l = color("#37E6D8");
    this.ld = color("#014c59");
    this.h = color('#e63946');
    this.hd = color("#9c1d14");
    this.therLight = color('#e31010');
    this.therDark = color('#590000');

    let buttonHeight = this.boxHeight + 150

    this.lightInjectionButtonPos = [this.boxX + 30, buttonHeight];
    this.heavyInjectionButtonPos = [this.boxX + 120, buttonHeight];
    this.deleteButtonPos = [this.boxX + 210, buttonHeight];
    this.temperatureIncrementButtonPos = [this.boxX + 590, buttonHeight];
    this.temperatureDecrementButtonPos = [this.boxX + 500, buttonHeight];
    this.temperatureReadoutPos = [this.boxX + 680, buttonHeight]

    if (this.llimit <= 0) {
      this.llimit = 1; // keeps the limit of light particles per injection at 1
    }
    if (this.hlimit <= 0) {
      this.hlimit = 1; // ^^ for heavy
    }
    this.boxWidth = 1700; // x coordinate of the right edge of the box. Can be resized with the pull handle.
    // if (this.boxWidth < 775) {
    //   this.boxWidth = 775;
    // }
    if (this.boxWidth > windowWidth - 150) {
      this.boxWidth = windowWidth - 150;
    }
    // if (this.debug) {
    //   this.linjectionX = 250 + random(-20, 20); // if the debug switch is toggled, all particles spawn in the center of the screen
    //   this.linjectionY = 250 + random(-20, 20);
    //   this.hinjectionX = 250 + random(-20, 20);
    //   this.hinjectionY = 250 + random(-20, 20);
    // }
    // else {
    this.linjectionX = 735 + random(5, 20); // point at which all new particles are spawned
    this.linjectionY = 370 + random(20, 20);
    this.hinjectionX = 735 + random(5, 20);
    this.hinjectionY = 430 + random(20, 20);
    //}

  }

  initialize() {

  }

  /* deprecated */

  // var Buttons = { 
  //   // coordinates of buttons and other UI elements(some are still stored in ui.js but that should be deprecated)

  //   // temperature increment
  //   tempIncXH1: 27.5,
  //   tempIncYH1: 82.5,
  //   tempIncXH2: 47.5,
  //   tempIncYH2: 87.5,
  //   tempIncXV1: 35,
  //   tempIncYV1: 75,
  //   tempIncXV2: 40,
  //   tempIncYV2: 95,

  //   // temperature decrement
  //   tempDecY1: 270,
  //   tempDecY2: 275,

  //   // thermometer
  //   therBulbCenterX : 37.5,
  //   therBulbCenterY : 225,

  //   therOffset : undefined,

  //   // temp unit selections
  //   tempUnitKX : 25,
  //   tempUnitFX : 37.5,
  //   tempUnitCX : 50,
  //   tempUnitY : 50,

  //   // reset switch
  //   resetY : 462.5,

  //   // type toggle
  //   typeToggleX : 50,
  //   typeToggleY : 485,

  //   // pull handle
  //   pullHandleY : 5409,

  //   // limit minus
  //   limitMinusX : 72.5,
  //   limitMinusY : 452.5,

  //   // limit plus
  //   limitPlusX : 30,
  //   limitPlusY : 452.5,

  //   // heavy particle injection button
  //   heavyParticleInjectionButtonX : 35,
  //   heavyParticleInjectionButtonY : 395,

  //   // light particle injection button
  //   lightParticleInjectionButtonX : 35,
  //   lightParticleInjectionButtonY : 335,

  //   // debug toggle switch
  //   debugToggleX : 1530,
  //   debugToggleY : 850,
  // };
}
/* 'config.js' is for variables that are used globally and/or collections of variables that are too long  to keep in a file; especially color codes and coordinates of ui elements. */

class gasSimConfig {
  constructor() {
    this.lightParticles = 0;
    this.heavyParticles = 0;

    this.llimit = 10;
    this.hlimit = 10;

    this.boxTemperature = 273;
    this.tempUnit = 'K';

    this.typeToggle = false;

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

    this.lightInjectionButtonPos = [this.boxX + 30, this.boxHeight + 150];
    this.heavyInjectionButtonPos = [this.boxX + 120, this.boxHeight + 150];
    this.deleteButtonPos = [this.boxX + 210, this.boxHeight + 150];
    //console.log(this.lightInjectionButtonPos[1]);
    //console.log(this.deleteButtonPos[1]);
  }

  initialize() {
    if (this.boxTemperature >= 1380) {
      this.therOffset = 112; // keeps the liquid in the thermometer from exceeding the top of the thermometer
    } else if (this.boxTemperature <= 0) {
      this.therOffset = 225; // puts the therOffset at a set place if temp is 0 kelvins
    }
    this.therOffset = 250 - this.boxTemperature * 0.1; // the therOffset variable is used in the rendering of the thermometer, by altering the height of the liquid by taking into account the current temperature of the volume
    if (this.boxTemperature <= 50) {
      this.therOffset = therBulbCenterY; // if the temperature is less than 50 kelvins, we set the therOffset to the center of the thermometer's bulb because otherwise it would start rendering below and outside of the thermometer
    }
    this.temperatureF = round(((this.boxTemperature - 273.15) * 9) / 5 + 32); // instantiate farenheit and celsius temperatures, as all temperature related information in the simulation is based on the temperature in Kelvin in one way or another. Farenheit and celsius are only used on the thermometer to help understand temperature readout if the user doesn't recognize kelvins
    this.temperatureC = round(this.boxTemperature - 273.15);
    if (this.boxTemperature <= 0) {
      this.temperatureF = -459.7;
      this.temperatureC = -273.2;
    }
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
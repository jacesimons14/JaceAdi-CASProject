function doCollisions(arr) {
  angleMode(DEGREES);
  let pars = arr; // passed in array of all existing particles
  for (let i = 0; i < pars.length; i++) {
    // iterate through the array
    let p1 = pars[i]; // store the object at index i in the iteration above
    //console.log(p1.prevX + ', ' + p1.prevY);
    for (let n = 0; n < pars.length && n !== i; n++) {
      /* we iterate through the array again once we are inside the loop so that every particle is checked against every
      other particle. In other words, for every object in the outer loop, we loop through the entirety of the rest of
      the particles and calculate any collisions */
      let p2 = pars[n]; // store object index n
      let combinedRadii = p1.getRad() + p2.getRad(); // calculate sum of the two radii
      let distance = dist(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
      //console.log("distance: " + distance);
      // calculate distance between centers of each particle
      if (distance <= combinedRadii) {


        //if the distance between the two is less than the sum of their radii, they are intersecting
        // variables for physics equations
        let t1 = p1.velocity.heading();
        let t2 = p2.velocity.heading();
        let m1 = p1.getMass();
        let m2 = p2.getMass();
        //console.log("m1: " + m1 + " m2: " + m2 + " t1: " + t1 + " t2: " + t2);

        let dx = p2.position.x - p1.position.x;
        //let dx = dist(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
        // let dy = p2.position.y - p1.position.y;
        let phi;

        if (dx === 0) {
         phi = 90;
        } else {
          phi = p1.velocity.angleBetween(p2.velocity);
        }

        // particle 1
        let p1x = (p1.velocity.x * cos(t1 - phi) * (m1 - m2) + (2 * m2 * p2.velocity.x * cos(t2 - phi)) /
            (m1 + m2)) * cos(phi) + p1.velocity.x * sin(t1 - phi * cos(phi + 90));
        let p1y = (p1.velocity.y * cos(t1 - phi) * (m1 - m2) + (2 * m2 * p2.velocity.y * cos(t2 - phi)) /
            (m1 + m2)) * sin(phi) + p1.velocity.y * sin(t1 - phi * sin(phi + 90));

        p1.velocity.set(p1x, p1y);
        p1.position.set(p1.prevX[p1.prevX.length - 2], p1.prevY[p1.prevX.length - 2]);

        // particle 2
        let p2x = (p2.velocity.x * cos(t2 - phi) * (m2 - m1) + (2 * m1 * p2.velocity.x * cos(t1 - phi)) /
            (m2 + m1)) * cos(phi) + p2.velocity.x * sin(t2 - phi * cos(phi + 90));
        let p2y = (p2.velocity.y * cos(t2 - phi) * (m2 - m1) + (2 * m1 * p2.velocity.y * cos(t1 - phi)) /
            (m2 + m1)) * sin(phi) + p2.velocity.y * sin(t2 - phi * sin(phi + 90));

        p2.velocity.set(p2x, p2y);
        p2.position.set(p2.prevX[p2.prevX.length - 2], p2.prevY[p2.prevX.length - 2]);
      }
    }
  }
}

class particle {
  /* this is the abstract parent class of all particles. It handles movement of both light and heavy particles,
  including bouncing off the edges of the hitbox, by getting their own radii and using that to make a margin. Show,
  getRad() and getMass() are relegated to the the individual concretion of the particle because said methods differ. */
  constructor(x, y, velX, velY, gasConfig) {
    this.position = createVector(x, y); // we take in an x and y, which is located at the particle injection point,
    // which itself has a range; we then take in an x velocity component and a y velocity component. We then make
    // vectors for each to store this information
    this.velocity = createVector(velX, velY);
    this.prevX = [];
    this.prevY = [];
    this.config = gasConfig;
  }

  move() {
    this.prevX.push(this.position.x);
    this.prevY.push(this.position.y);

    this.position.add(this.velocity); // the position is a vector by itself. Remember, in p5, a vector is NOT explicitly
    // direction and maginute, but instead an x and y component. Think of it like an array with two items. By adding the
    // velocity to the position every frame, the particle will traverse the canvas by whatever the velocity is, which
    // starts at 7 for a light particle but can be affected when it collides with other particles and/or by the
    // temeperature

    if (this.position.x <= this.config.boxX + 10 || this.position.x >= this.config.boxWidth - this.getRad() - 2) {
      this.velocity.mult(-1, 1); // when the ball hits an x axis, we multiply the x value by -1 and the y value by 1.
      // In other words, when it hits the right or left side we invert only the x dimension of the velocity vector
    }
    if (this.position.y <= this.config.boxY + this.getRad() + 2 || this.position.y >= this.config.boxHeight - this.getRad() - 2) {
      this.velocity.mult(1, -1); // when the ball hits a y axis, we multiply the x value in the velocity vector by 1
      // and the y value by -1. In other words, when it hits the top or bottom we invert only the y dimension of the
      // velocity vector
    }

    if (this.position.x >= this.config.boxWidth) {
      this.position.x = this.config.boxWidth - this.getRad() - 2;
    }
    if (this.position.x <= this.config.boxX) {
      this.position.x = this.config.boxX + this.getRad();
    }
    this.prevX.shift();
    this.prevY.shift();
  }

  getRad () {
    return this.getRad();
  }
}

class lightParticle extends particle { // since we have an abstraction above, we make a concrete version of that class
  // to house the relegated methods of show(), getRad() and getMass()
  constructor(x, y, velX, velY, gasConfig) {
    super(x, y, velX, velY, gasConfig); // the super function calls into the parent class and effectively runs the code
    // in its constructor for each instance of the lightParticle object
  }

  show() {
    // show is one of the relegated methods mentioned above, as both the size and color of each type is unique
    fill(this.config.l);
    stroke(this.config.l);
    ellipse(this.position.x, this.position.y, 7);
    angleMode(DEGREES);
    // if (this.config.debug) { // if the debug switch is flipped, the velocity and direction of the particle is written
    // on the particle
    //   fill(globalConfig.veryDark);
    //   textSize(15);
    //   text("" + round(this.velocity.mag(), 2) + "," + round(this.velocity.heading()) + char(186), this.position.x,
    //   this.position.y);
    //}
  }

  getRad() {
    return 3.5; // ellipse w/h is 7 so radius is 3.5
  }

  getMass() {
    // the mass is used to calculate the resultant vector of a prospective particle post-collision. This mass is an
    // arbitrary value, as the math is done relative to the two particles colliding. For the sake of simplification,
    // I've chosen the mass to be the same as the diameter of the particle, however, there is no correlation in the
    // code.
    return 7;
  }
}

class heavyParticle extends particle {
  // concretion for heavy particles
  constructor(x, y, velX, velY, gasConfig) {
    super(x, y, velX, velY, gasConfig);
  }

  show() {
    fill(this.config.h);
    stroke(this.config.h);
    ellipse(this.position.x, this.position.y, 10);
    // if (this.config.debug) {
    //   fill(globalConfig.veryDark);
    //   textSize(15);
    //   text("" + round(this.velocity.mag(), 2) + "," + round(this.velocity.heading()) + char(186), this.position.x, this.position.y);
    // }
  }

  getRad() {
    return 5;
  }

  getMass() {
    return 10;
  }
}

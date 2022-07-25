var HoneyMakerBee = function() {
  // call the Bee superclass
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

// set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// Add new methods

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
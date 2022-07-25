var RetiredForagerBee = function() {
  // call the ForagerBee superclass
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};


// set the prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// set the constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// methods
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.gamble = ForagerBee.prototype.forage;
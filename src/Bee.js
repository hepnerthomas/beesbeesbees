var Bee = function() {
  // this = new Grub();
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // instance.color = 'yellow';
  // instance.job = 'keep on growing';
};

// Bee.prototype.constructor = Bee;
// Bee.prototype = new Grub();
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
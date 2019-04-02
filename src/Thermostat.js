function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype = {
  constructor: Thermostat,
  increase: function(change) {
    this.temperature += change;
    if (this.temperature > 25) {
      this.temperature = 25;
    }
  }
};

// Different syntax for creating function for learning purposes
Thermostat.prototype.decrease = function(change) {
  this.temperature -= change;
  if (this.temperature < 10) {
    this.temperature = 10;
  }
};

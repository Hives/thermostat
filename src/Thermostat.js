function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype = {
    constructor: Thermostat,
    increase: function(change) {
        this.temperature += change;
    }
};

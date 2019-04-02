function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this._powerSaving = true;
  this.POWER_SAVING_MAX = 25;
  this.POWER_SPENDING_MAX = 32;
  this.MIN_TEMP = 10;
  this.MEDIUM_ENERGY_TEMP = 18;
  this.HIGH_ENERGY_TEMP = 25;
};

Thermostat.prototype = {
  constructor: Thermostat,
  increase: function(change) {
    this.temperature += change;
    if (this._powerSaving) {
        if (this.temperature > this.POWER_SAVING_MAX) {
            this.temperature = this.POWER_SAVING_MAX;
        }
    } else {
        if (this.temperature > this.POWER_SPENDING_MAX) {
            this.temperature = this.POWER_SPENDING_MAX;
        }
    }
  },

  decrease: function(change) {
    this.temperature -= change;
    if (this.temperature < this.MIN_TEMP) {
      this.temperature = this.MIN_TEMP;
    }
  },

  reset: function() {
    this.temperature = this.DEFAULT_TEMP;
  },
  
  powerSavingOff: function() {
    this._powerSaving = false;
  },

  powerSavingOn: function() {
    this._powerSaving = true;
  },

  energyUsage: function() {
    if (this.temperature < this.MEDIUM_ENERGY_TEMP) {
      return "low";
    } else if (this.temperature < this.HIGH_ENERGY_TEMP) {
      return "medium";
    } else {
      return "high";
    }
  }
};

function Thermostat() {
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this._powerSaving = true;
  this.powerSavingMax = 25;
  this.powerSpendingMax = 32;
  this.minTemp = 10;
};

Thermostat.prototype = {
  constructor: Thermostat,
  increase: function(change) {
    this.temperature += change;
    if (this._powerSaving) {
        if (this.temperature > this.powerSavingMax) {
            this.temperature = this.powerSavingMax;
        }
    } else {
        if (this.temperature > this.powerSpendingMax) {
            this.temperature = this.powerSpendingMax;
        }
    }
  },

  decrease: function(change) {
    this.temperature -= change;
    if (this.temperature < this.minTemp) {
      this.temperature = this.minTemp;
    }
  },

  reset: function() {
    this.temperature = this.defaultTemp;
  },
  
  powerSavingOff: function() {
    this._powerSaving = false;
  },

  powerSavingOn: function() {
    this._powerSaving = true;
  },

  energyUsage: function() {
    if (this.temperature < 18) {
      return "low";
    } else if (this.temperature < 20) {
      return "medium";
    } else {
      return "high";
    }
  }
};

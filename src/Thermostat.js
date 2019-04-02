function Thermostat() {
  this.temperature = 20;
  this._powerSaving = true;
  this.powerSavingMax = 25;
  this.powerSpendingMax = 32;
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
  }
};

// Different syntax for creating function for learning purposes
Thermostat.prototype.decrease = function(change) {
  this.temperature -= change;
  if (this.temperature < 10) {
    this.temperature = 10;
  }
};

Thermostat.prototype.powerSavingOff = function() {
  this._powerSaving = false;
};
Thermostat.prototype.powerSavingOn = function() {
  this._powerSaving = true;
};

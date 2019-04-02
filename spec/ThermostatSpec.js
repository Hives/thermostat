describe("Thermostat", function() {
    var thermostat;
    var defaultTemp;
    var minTemp;
    var powerSavingMax;
    var powerSpendingMax;
    var mediumEnergyTemp;
    var highEnergyTemp;
    
    beforeEach(function() {
        thermostat = new Thermostat();
        defaultTemp = thermostat.DEFAULT_TEMP;
        minTemp = thermostat.MIN_TEMP;
        powerSavingMax = thermostat.POWER_SAVING_MAX;
        powerSpendingMax = thermostat.POWER_SPENDING_MAX;
        mediumEnergyTemp = thermostat.MEDIUM_ENERGY_TEMP;
        highEnergyTemp = thermostat.HIGH_ENERGY_TEMP;
    });
    
    describe("initial thermostat state", function() {
        it("should have powerSaving on", function() {
            thermostat.increase(powerSavingMax - thermostat.temperature + 1);
            expect(thermostat.temperature).toEqual(powerSavingMax);
        });

        it("should have the default temperature", function() {
            expect(thermostat.temperature).toEqual(defaultTemp);
        });
    });

    it("increases temperature", function() {
        thermostat.increase(1);
        expect(thermostat.temperature).toEqual(defaultTemp + 1);
    });

    it("decreases temperature", function() {
        thermostat.decrease(1);
        expect(thermostat.temperature).toEqual(defaultTemp - 1);
    });

    it("does not go below 10 degrees", function() {
        thermostat.decrease((defaultTemp - minTemp) + 1);
        expect(thermostat.temperature).toEqual(minTemp);
    });

    it("the reset function restores the default temperature", function() {
        thermostat.increase(5);
        thermostat.reset();
        expect(thermostat.temperature).toEqual(defaultTemp);
    });

    it("returns low energy usage level for one below medium limit", function() {
        thermostat.decrease((defaultTemp - mediumEnergyTemp) + 1);
        expect(thermostat.energyUsage()).toEqual("low");
    });

    it("returns medium energy usage level for one below high limit", function() {
        thermostat.increase((highEnergyTemp - defaultTemp) - 1)
        expect(thermostat.energyUsage()).toEqual("medium");
    });

    it("returns medium energy usage level for lower medium limit", function() {
        thermostat.decrease(defaultTemp - mediumEnergyTemp);
        expect(thermostat.energyUsage()).toEqual("medium");
    });

    it("returns high energy usage level", function() {
        thermostat.temperature = thermostat.HIGH_ENERGY_TEMP;
        expect(thermostat.energyUsage()).toEqual("high");
    });

    describe("if power saving mode is on", function() {
        it("does not go above power saving maximum temp", function() {
            thermostat.powerSavingOn();
            thermostat.increase((powerSavingMax - thermostat.temperature) + 1);
            expect(thermostat.temperature).toEqual(powerSavingMax);
        });
    });

    describe("if power saving mode is off", function() {
        it("allows temperature to go to above power saving max temp", function() {
            thermostat.powerSavingOff();
            thermostat.increase((powerSavingMax - thermostat.temperature) + 1)
            expect(thermostat.temperature).toEqual(powerSavingMax + 1);
        });

        it("does not go above power spending max temp", function() {
            thermostat.powerSavingOff();
            thermostat.increase((powerSpendingMax - thermostat.temperature) + 1)
            expect(thermostat.temperature).toEqual(powerSpendingMax);
        });
    });

});

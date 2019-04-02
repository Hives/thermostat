describe("Thermostat", function() {
    var thermostat;
    var defaultTemp;
    var minTemp;
    var powerSavingMax;
    var powerSpendingMax;
    
    beforeEach(function() {
        thermostat = new Thermostat();
        defaultTemp = thermostat.defaultTemp;
        minTemp = thermostat.minTemp;
        powerSavingMax = thermostat.powerSavingMax;
        powerSpendingMax = thermostat.powerSpendingMax;
    });
    
    describe("initial thermostat state", function() {
        it("should have powerSaving on", function() {
            thermostat.increase(6)
            expect(thermostat.temperature).toEqual(25);
        });

        it("should have the default temperature", function() {
            expect(thermostat.temperature).toEqual(defaultTemp);
        });
    });

    it("increases temperature", function() {
        thermostat.increase(1);
        expect(thermostat.temperature).toEqual(21);
    });

    it("decreases temperature", function() {
        thermostat.decrease(1);
        expect(thermostat.temperature).toEqual(19);
    });

    it("does not go below 10 degrees", function() {
        thermostat.decrease(11);
        expect(thermostat.temperature).toEqual(minTemp);
    });

    it("the reset function restores the default temperature", function() {
        thermostat.increase(5);
        thermostat.reset();
        expect(thermostat.temperature).toEqual(defaultTemp);
    });

    it("returns low energy usage level", function() {
        thermostat.decrease(3);
        expect(thermostat.energyUsage()).toEqual("low");
    });

    describe("if power saving mode is on", function() {
        it("does not go above 25 degrees", function() {
            thermostat.powerSavingOn();
            thermostat.increase(6);
            expect(thermostat.temperature).toEqual(powerSavingMax);
        });
    });

    describe("if power saving mode is off", function() {
        it("allows temperature to go to 26", function() {
            thermostat.powerSavingOff();
            thermostat.increase(6);
            expect(thermostat.temperature).toEqual(26);
        });

        it("does not go above 32 degrees", function() {
            thermostat.powerSavingOff();
            thermostat.increase(13);
            expect(thermostat.temperature).toEqual(powerSpendingMax);
        });
    });

});

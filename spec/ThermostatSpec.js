describe("Thermostat", function() {
    var thermostat;
    
    beforeEach(function() {
        thermostat = new Thermostat();
    });
    
    it("should have a temperature of 20 degrees when initialised", function() {
        expect(thermostat.temperature).toEqual(20);
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
        expect(thermostat.temperature).toEqual(10);
    });
});

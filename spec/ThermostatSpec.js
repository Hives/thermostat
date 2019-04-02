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

    it("decreasese temperature", function() {
        thermostat.decrease(1);
        expect(thermostat.temperature).toEqual(19);
    });
});

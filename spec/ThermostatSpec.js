describe("Thermostat", function() {
    var thermostat;
    it("should have a temperature of 20 degrees when initialised", function() {
        thermostat = new Thermostat();
        expect(thermostat.temperature).toEqual(20);
    });
});

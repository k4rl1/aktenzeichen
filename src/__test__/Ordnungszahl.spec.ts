import Ordnungszahl from "@/Ordungszahl";

describe('Ordnungszahl', () => {
    it('should create a valid instance with 2 digits', () => {
        const ordnungszahl = new Ordnungszahl("50");

        expect(ordnungszahl).toBeInstanceOf(Ordnungszahl);
    });

    it('should create a valid instance 3', () => {
        const ordnungszahl = new Ordnungszahl("500");

        expect(ordnungszahl).toBeInstanceOf(Ordnungszahl);
    });

    it('should not create a valid instance for more than 3 digits', () => {
        expect(() => new Ordnungszahl("5001")).toThrowError();
    });

    it('should not create a valid instance with ordnungszahl and description', () => {
        const ordnungszahl = new Ordnungszahl("500 (description)");

        expect(ordnungszahl).toBeInstanceOf(Ordnungszahl);
    });
});
import Aktenzahl from '@/Aktenzahl';

describe('Aktenzahl', () => {
    it('should create a valid instance', () => {
        const aktenzahl = new Aktenzahl("12");

        expect(aktenzahl).toBeInstanceOf(Aktenzahl);
    });

    it('should throw error if value is not valid', () => {
        expect(() => new Aktenzahl("test")).toThrowError();
    });
});

import Geschaeftsabteilung from "@/Geschaeftsabteilung";

describe('Geschäftsabteilung', () => {
    it('should create a valid instance', () => {
        const geschaeftsabteilung = new Geschaeftsabteilung("123");

        expect(geschaeftsabteilung).toBeInstanceOf(Geschaeftsabteilung);
    });

    it('should throw error if value include none numeric values', () => {
        expect(() => new Geschaeftsabteilung("123j")).toThrowError();

    });
});
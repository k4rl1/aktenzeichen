import Jahr from '@/Jahr';

describe('Jahr', () => {
    it('should create a valid instance with 2 character', () => {
        const jahr = new Jahr("12");

        expect(jahr).toBeInstanceOf(Jahr);
    });

    it('should create a valid instance with 4 character', () => {
        const jahr = new Jahr("2020");

        expect(jahr).toBeInstanceOf(Jahr);
    });

    it('should throw error if value is not valid', () => {
        expect(() => new Jahr("123")).toThrowError();
    });

    it('should throw error if year is in the future', () => {
        expect(() => new Jahr("2025")).toThrowError();
    });
});

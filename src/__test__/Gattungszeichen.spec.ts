import Gattungszeichen, {validGattungszeichen} from '@/Gattungszeichen';

describe('Gattungszeichen', () => {
    it('should create a valid instance', () => {
        const gattungszeichen = new Gattungszeichen(validGattungszeichen[0]);

        expect(gattungszeichen).toBeInstanceOf(Gattungszeichen);
    });

    it('should throw error if value is not valid gattugnszeichen', () => {
        expect(() => new Gattungszeichen("BaNa - Ne")).toThrowError();
    });

    it('should throw error if value contains not allowed characters', () => {
        expect(() => new Gattungszeichen("123")).toThrowError();
    });
});

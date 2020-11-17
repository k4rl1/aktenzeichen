import Aktenzeichen from "@/Akentzeichen";
import AktenzeichenParser from "@/AktenzeichenParser";

describe('Aktenzeichen Parser', () => {
    it('should should parse aktenzeichen input', () => {
        const aktenzeichenParser = new AktenzeichenParser();

        const aktenzeichen = aktenzeichenParser.parse("3 BE 420/05 - 232 (test)");

        expect(aktenzeichen).toBeInstanceOf(Aktenzeichen);
        expect(aktenzeichen.geschaeftsabteilung.getValue()).toEqual("3");
        expect(aktenzeichen.gattungszeichen.getValue()).toEqual("BE");
        expect(aktenzeichen.aktenzahl.getValue()).toEqual("420");
        expect(aktenzeichen.jahr.getValue()).toEqual("05");
        expect(aktenzeichen.ordnungszahl.getValue()).toEqual("232 (test)");
    });

    it('should should null for invalid input', () => {
        const aktenzeichenParser = new AktenzeichenParser();

        const aktenzeichen = aktenzeichenParser.parse("3 5 420/05 - 232 (test)");

        expect(aktenzeichen).toBeNull()
    });

    it('should should error for semantic error', () => {
        const aktenzeichenParser = new AktenzeichenParser();

        expect(() => aktenzeichenParser.parse("3 C 420/05 - 232 (test)")).toThrowError();
    });

});
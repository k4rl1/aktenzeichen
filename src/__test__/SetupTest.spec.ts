import SetupTest from "@/SetupTest";

describe('initial test should pass', () => {
    it('should pass', () => {
        expect(new SetupTest()).toBeInstanceOf(SetupTest);
    });
});
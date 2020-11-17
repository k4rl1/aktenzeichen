export default class Geschaeftsabteilung {
    private readonly value: string;
    public static readonly groupName: string = "geschaeftsabteliung";
    public static readonly groupPattern: string = `(?<${Geschaeftsabteilung.groupName}>\\d{1,3}\\s)?`;

    constructor(value: string) {
        if (!this.validate(value)) {
            throw Error(`${value} is invalid`);
        }
        this.value = value;
    }

    // noinspection JSMethodCanBeStatic
    private validate(value: string) {
        return RegExp(/^\d{1,3}$/).test(value);
    }

    getValue() {
        return this.value;
    }
}

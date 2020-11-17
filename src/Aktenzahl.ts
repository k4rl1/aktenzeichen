export default class Aktenzahl {
    private readonly value: string;
    public static readonly groupName: string = "aktenzahl";
    public static readonly groupPattern: string = `(?<${Aktenzahl.groupName}>\\d{1,5})`;

    constructor(value: string) {
        if (!this.validate(value)) {
            throw Error(`${value} is invalid`);
        }
        this.value = value;
    }

    // noinspection JSMethodCanBeStatic
    private validate(value: string) {
        return RegExp(/^\d{1,5}$/).test(value);
    }

    getValue() {
        return this.value;
    }
}

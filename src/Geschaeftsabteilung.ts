export default class Geschaeftsabteilung {
    private readonly value: string;

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
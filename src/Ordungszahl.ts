export default class Ordnungszahl {
    private readonly value: string;

    constructor(value: string) {
        if (!this.validate(value)) {
            throw Error(`${value} is invalid`);
        }
        this.value = value;
    }

    // noinspection JSMethodCanBeStatic
    private validate(value: string) {
        return RegExp(/^(\d{1,3})\s?(?:\((.*)\))?$/).test(value);
    }

    getValue() {
        return this.value;
    }
}

export const validGattungszeichen: string[] = ['BE', 'BergB', 'W II', 'Verschluß','BVK-V'];

export default class Gattungszeichen {
    private readonly value: string;
    public static readonly groupName: string = "gattungszeichen";
    public static readonly groupPattern: string = `(?<${Gattungszeichen.groupName}>[a-zA-Z\\s\\-ß]+)`;

    constructor(value: string) {
        if (!this.validate(value)) {
            throw Error(`${value} is invalid`);
        }
        this.value = value;
    }

    // noinspection JSMethodCanBeStatic
    private validate(value: string) {
        return validGattungszeichen.includes(value) && RegExp(/^([a-zA-Z\s-ß]+)$/).test(value);
    }

    getValue() {
        return this.value;
    }
}

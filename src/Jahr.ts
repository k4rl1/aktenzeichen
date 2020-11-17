export default class Jahr {
    private readonly value: string;
    public static readonly groupName: string = "jahr";
    public static readonly groupPattern: string = `(?<${Jahr.groupName}>\\d{2}|\\d{4})`;

    constructor(value: string) {
        if (!this.validate(value)) {
            throw Error(`${value} is invalid`);
        }
        this.value = value;
    }

    // noinspection JSMethodCanBeStatic
    private validate(value: string) {
        const isValidInput = RegExp(/^(\d{2}|\d{4})$/).test(value);

        const currentYear = (new Date()).getFullYear();
        const isInTheFuture = currentYear < Number(value);
        return isValidInput && !isInTheFuture;
    }

    getValue() {
        return this.value;
    }
}

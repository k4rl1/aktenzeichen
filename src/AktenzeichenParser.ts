import Aktenzeichen from "@/Akentzeichen";
import Geschaeftsabteilung from "@/Geschaeftsabteilung";
import Jahr from "@/Jahr";
import Ordnungszahl from "@/Ordungszahl";
import Gattungszeichen from "@/Gattungszeichen";
import Aktenzahl from "@/Aktenzahl";

export default class AktenzeichenParser {
    public static readonly jahrSeparator: string = `\\/`;
    public static readonly preufbuchstabe: string = `\\w?`;
    public static readonly ordnungszahlSeparator: string = `\\s?\\-\\s?`;

    public parse(value: string): Aktenzeichen {
        const groups = value.match(this.buildGroupRegex());
        if (!groups) {
            return null;
        }

        const aktenzeichen = new Aktenzeichen();
        aktenzeichen.geschaeftsabteilung = new Geschaeftsabteilung(this.getTrimmedGroupValue(groups, Geschaeftsabteilung.groupName));
        aktenzeichen.gattungszeichen = new Gattungszeichen(this.getTrimmedGroupValue(groups, Gattungszeichen.groupName));
        aktenzeichen.aktenzahl = new Aktenzahl(this.getTrimmedGroupValue(groups, Aktenzahl.groupName));
        aktenzeichen.jahr = new Jahr(this.getTrimmedGroupValue(groups, Jahr.groupName));
        aktenzeichen.ordnungszahl = new Ordnungszahl(this.getTrimmedGroupValue(groups, Ordnungszahl.groupName));

        return aktenzeichen;
    }

    // noinspection JSMethodCanBeStatic
    private buildGroupRegex() {
        return RegExp([
            `^`,
            Geschaeftsabteilung.groupPattern,
            Gattungszeichen.groupPattern,
            Aktenzahl.groupPattern,
            AktenzeichenParser.jahrSeparator,
            Jahr.groupPattern,
            AktenzeichenParser.preufbuchstabe,
            AktenzeichenParser.ordnungszahlSeparator,
            Ordnungszahl.groupPattern
        ].join(''));
    }

    // noinspection JSMethodCanBeStatic
    private getTrimmedGroupValue(groups, groupName: string) {
        return groups.groups[groupName].trim();
    }
}
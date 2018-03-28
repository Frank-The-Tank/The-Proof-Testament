export declare class Theorem {
    $key: string;
    eq: string;
    name: string;
    rule: string;
    section: string;
    type: string;
    constructor($key: string, eq: string, name: string, rule: string, section: string, type: string);
    static fromJsonList(array: any): Theorem[];
    static fromJson({$key, eq, name, rule, section, type}: {
        $key: any;
        eq: any;
        name: any;
        rule: any;
        section: any;
        type: any;
    }): Theorem;
}

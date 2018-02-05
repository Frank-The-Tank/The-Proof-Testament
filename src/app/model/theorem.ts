export class Theorem {

  constructor(
    public $key: string,
    public eq: string,
    public name: string,
    public rule: string,
    public section: string,
    public type: string) {}

    static fromJsonList(array): Theorem[] {
      return array.map(Theorem.fromJson);
    }

    static fromJson({$key, eq, name, rule, section, type}): Theorem {
      return new Theorem(
        $key,
        eq,
        name,
        rule,
        section,
        type
      );
    }

}

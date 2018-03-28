"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Theorem {
    constructor($key, eq, name, rule, section, type) {
        this.$key = $key;
        this.eq = eq;
        this.name = name;
        this.rule = rule;
        this.section = section;
        this.type = type;
    }
    static fromJsonList(array) {
        return array.map(Theorem.fromJson);
    }
    static fromJson({ $key, eq, name, rule, section, type }) {
        return new Theorem($key, eq, name, rule, section, type);
    }
}
exports.Theorem = Theorem;
//# sourceMappingURL=theorem.js.map
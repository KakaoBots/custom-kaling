"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class TitleDescription extends Component_1.default {
    constructor(title = '', description = '') {
        super();
        this.title = title;
        this.description = description;
    }
    get Title() {
        return this.title;
    }
    get Description() {
        return this.description;
    }
    set Title(query) {
        this.title = query;
    }
    set Description(query) {
        this.description = query;
    }
    toJson() {
        return {
            T: this.title,
            D: this.description
        };
    }
}
exports.default = TitleDescription;

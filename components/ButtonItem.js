"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class ButtonItem extends Component_1.default {
    constructor(title = '', show = 'both', highlight = false) {
        super();
        this.title = title;
        this.show = show;
        this.highlight = highlight;
    }
    get Title() {
        return this.title;
    }
    get Show() {
        return this.show;
    }
    get Highlight() {
        return this.highlight;
    }
    set Title(query) {
        this.title = query;
    }
    set Show(query) {
        this.show = query;
    }
    set Highlight(query) {
        this.highlight = query;
    }
    toJson() {
        return {
            T: this.title,
            SR: this.show,
            HL: this.highlight
        };
    }
}
exports.default = ButtonItem;

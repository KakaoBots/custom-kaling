"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const ButtonItem_1 = require("./ButtonItem");
const Link_1 = require("./Link");
class Button extends Component_1.default {
    constructor(title = '', link = new Link_1.default('')) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.item = new ButtonItem_1.default(title);
        this.link = link;
    }
    get Link() {
        return this.link;
    }
    get Item() {
        return this.item;
    }
    set Link(query) {
        this.link = query;
    }
    set Item(query) {
        this.item = query;
    }
    toJson() {
        return {
            BU: this.item.toJson(),
            L: this.link.toJson()
        };
    }
}
exports.default = Button;

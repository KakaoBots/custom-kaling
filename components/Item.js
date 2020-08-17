"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const TitleDescription_1 = require("./TitleDescription");
class Item extends Component_1.default {
    constructor(title = '', description = '') {
        super();
        this.text = new TitleDescription_1.default(title, description);
    }
    get Text() {
        return this.text;
    }
    set Text(query) {
        this.text = query;
    }
    toJson() {
        return {
            TD: this.text.toJson()
        };
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map
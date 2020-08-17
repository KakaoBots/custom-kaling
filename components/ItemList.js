"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentList_1 = require("../ComponentList");
class ItemList extends ComponentList_1.default {
    constructor(...items) {
        super(items);
    }
    toJson() {
        const result = [];
        for (let item of this) {
            result.push(item.toJson());
        }
        return result;
    }
}
exports.default = ItemList;

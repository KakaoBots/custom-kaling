"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentList_1 = require("../ComponentList");
class ButtonList extends ComponentList_1.default {
    constructor(...buttons) {
        super(buttons);
    }
    toJson() {
        const result = [];
        for (let button of this) {
            result.push(button.toJson());
        }
        return result;
    }
}
exports.default = ButtonList;
//# sourceMappingURL=ButtonList.js.map
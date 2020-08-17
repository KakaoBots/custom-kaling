"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class Link extends Component_1.default {
    constructor(href = '') {
        super();
        this.linkPC = href;
        this.linkMobile = href;
    }
    get Global() {
        return this.linkPC || this.linkMobile;
    }
    get PC() {
        return this.linkPC;
    }
    get Mobile() {
        return this.linkMobile;
    }
    set Global(query) {
        this.linkPC = query;
        this.linkMobile = query;
    }
    set PC(query) {
        this.linkPC = query;
    }
    set Mobile(query) {
        this.linkMobile = query;
    }
    toJson() {
        return {
            LPC: this.linkPC,
            LMO: this.linkMobile,
            LCP: this.linkPC,
            LCM: this.linkPC,
            LCA: this.linkMobile,
            LCI: this.linkMobile
        };
    }
}
exports.default = Link;
//# sourceMappingURL=Link.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class Social extends Component_1.default {
    constructor(comment = 0, like = 0, share = 0, subscribe = 0, view = 0) {
        super();
        this.comment = comment;
        this.like = like;
        this.share = share;
        this.subscribe = subscribe;
        this.view = view;
    }
    get Comment() {
        return this.comment;
    }
    get Like() {
        return this.like;
    }
    get Share() {
        return this.share;
    }
    get Subscribe() {
        return this.subscribe;
    }
    get View() {
        return this.view;
    }
    set Comment(query) {
        this.comment = query;
    }
    set Like(query) {
        this.like = query;
    }
    set Share(query) {
        this.share = query;
    }
    set Subscribe(query) {
        this.subscribe = query;
    }
    set View(query) {
        this.view = query;
    }
    toJson() {
        return {
            CM: this.comment,
            LK: this.like,
            SH: this.share,
            SB: this.subscribe,
            VC: this.view
        };
    }
}
exports.default = Social;
//# sourceMappingURL=Social.js.map
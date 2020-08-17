"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Content_1 = require("./Content");
const ButtonList_1 = require("./ButtonList");
const Profile_1 = require("./Profile");
const Social_1 = require("./Social");
const Link_1 = require("./Link");
class ProfileContent extends Content_1.default {
    constructor(name = '', icon = '', link = new Link_1.default('')) {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.buttons = new ButtonList_1.default();
        this.profile = new Profile_1.default(name, icon, link);
        this.social = new Social_1.default();
    }
    get Buttons() {
        return this.buttons;
    }
    get Profile() {
        return this.profile;
    }
    get Social() {
        return this.social;
    }
    set Buttons(query) {
        this.buttons = query;
    }
    set Profile(query) {
        this.profile = query;
    }
    set Social(query) {
        this.social = query;
    }
    toJson() {
        return {
            BUL: this.buttons.toJson(),
            PR: this.profile.toJson(),
            SO: this.social.toJson()
        };
    }
}
exports.default = ProfileContent;
//# sourceMappingURL=ProfileContent.js.map
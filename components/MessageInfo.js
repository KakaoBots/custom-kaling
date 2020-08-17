"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const Link_1 = require("./Link");
class MessageInfo extends Component_1.default {
    constructor(type, link = new Link_1.default(''), serviceName = '', serviceIcon = '') {
        super();
        if (typeof link === 'string')
            link = new Link_1.default(link);
        this.type = type;
        this.link = link;
        this.serviceLink = link;
        this.serviceName = serviceName;
        this.serviceIcon = serviceIcon;
        this.isForwardable = true;
        this.isVerified = false;
        this.message = '카카오링크';
        this.versionAndroid = '6.4.5';
        this.versionIphone = '6.4.5';
        this.versionWindows = '2.3.5';
        this.versionMac = '2.6.1';
        this.serviceID = 'capri_331278';
        this.documentID = link.PC;
    }
    get Type() {
        return this.type;
    }
    get Link() {
        return this.link;
    }
    get ServiceLink() {
        return this.serviceLink;
    }
    get ServiceName() {
        return this.serviceName;
    }
    get ServiceIcon() {
        return this.serviceIcon;
    }
    get IsForwardable() {
        return this.isForwardable;
    }
    get IsVerified() {
        return this.isVerified;
    }
    get Message() {
        return this.message;
    }
    set Type(query) {
        this.type = query;
    }
    set Link(query) {
        this.link = query;
    }
    set ServiceLink(query) {
        this.serviceLink = query;
    }
    set ServiceName(query) {
        this.serviceName = query;
    }
    set ServiceIcon(query) {
        this.serviceIcon = query;
    }
    set IsForwardable(query) {
        this.isForwardable = query;
    }
    set IsVerified(query) {
        this.isVerified = query;
    }
    set Message(query) {
        this.message = query;
    }
    toJson() {
        return {
            TP: this.type,
            ME: this.message,
            SNM: this.serviceName,
            SIC: this.serviceIcon,
            L: this.link.toJson(),
            SL: this.serviceLink.toJson(),
            FW: this.isForwardable,
            KV: this.isVerified,
            VA: this.versionAndroid,
            VI: this.versionIphone,
            VW: this.versionWindows,
            VM: this.versionMac,
            SID: this.serviceID,
            DID: this.documentID
        };
    }
}
exports.default = MessageInfo;
//# sourceMappingURL=MessageInfo.js.map
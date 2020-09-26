"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const KakaoLinkInfo_1 = require("./KakaoLinkInfo");
class MessageTemplate extends Component_1.default {
    constructor(header, content, info = new KakaoLinkInfo_1.default()) {
        super();
        this.header = header;
        this.content = content;
        this.info = info;
    }
    get Header() {
        return this.header;
    }
    get Content() {
        return this.content;
    }
    get Info() {
        return this.info;
    }
    set Header(query) {
        this.header = query;
    }
    set Content(query) {
        this.content = query;
    }
    set Info(query) {
        this.info = query;
    }
    toJson() {
        return {
            C: this.content.toJson(),
            P: this.header.toJson(),
            K: this.info.toJson()
        };
    }
    readAttachment(rawJson) { }
    toJsonAttachment() {
        return this.toJson();
    }
    get RequiredMessageType() {
        return 71; // 커스텀 템플릿의 상수
    }
}
exports.default = MessageTemplate;
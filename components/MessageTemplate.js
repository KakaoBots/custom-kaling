"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const KakaoLinkInfo_1 = require("./KakaoLinkInfo");
class MessageTemplate extends Component_1.default {
    constructor(header, content) {
        super();
        if (KakaoLinkInfo_1.default.appID)
            header.ServiceID = `capri_${KakaoLinkInfo_1.default.appID}`;
        this.header = header;
        this.content = content;
    }
    get Header() {
        return this.header;
    }
    get Content() {
        return this.content;
    }
    set Header(query) {
        this.header = query;
    }
    set Content(query) {
        this.content = query;
    }
    toJson() {
        return {
            C: this.content.toJson(),
            P: this.header.toJson(),
            K: KakaoLinkInfo_1.default.toJson()
        };
    }
    readAttachment(rawJson) { }
    toJsonAttachment() {
        return this.toJson();
    }
    get RequiredMessageType() {
        return 71; // 커스텀 템플릿의 메시지 타입 상수
    }
}
exports.default = MessageTemplate;
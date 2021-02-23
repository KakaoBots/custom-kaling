"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class KakaoLinkInfo extends Component_1.default {
    static appID = null;
    static templateID = '3139';
    constructor() {
        super();
    }
    static toJson() {
        return {
            ai: KakaoLinkInfo.appID,
            ti: KakaoLinkInfo.templateID
        };
    }
}
exports.default = KakaoLinkInfo;

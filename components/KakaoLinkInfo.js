"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
class KakaoLinkInfo extends Component_1.default {
    static appID = 'null'; // 카카오톡 디벨로퍼에서의 appID를 직접 넣어줘야함
    static templateID = '3139';
    constructor() {
        super();
    }
    toJson() {
        return {
            ai: KakaoLinkInfo.appID,
            ti: KakaoLinkInfo.templateID
        };
    }
}
exports.default = KakaoLinkInfo;

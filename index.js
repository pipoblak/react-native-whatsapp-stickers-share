"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppStickersShare = void 0;
const react_native_1 = require("react-native");
class WhatsAppStickersShare {
    share(config) {
        return react_native_1.NativeModules.WhatsAppStickersShare.share(config);
    }
    isWhatsAppAvailable() {
        return react_native_1.Linking.canOpenURL("whatsapp://send");
    }
}
exports.WhatsAppStickersShare = WhatsAppStickersShare;
exports.default = new WhatsAppStickersShare();

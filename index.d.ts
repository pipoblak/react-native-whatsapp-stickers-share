export interface StickerConfig {
    emojis?: string[];
    url: string;
}
export interface StickerPackConfig {
    identifier: string;
    title: string;
    author: string;
    trayImage: string;
    publisherEmail: string;
    publisherURL: string;
    privacyPolicyURL: string;
    licenseURL: string;
    stickers: StickerConfig[];
    iosAppStoreLink?: string;
    androidPlayStoreLink?: string;
}
export declare class WhatsAppStickersShare {
    share(config: StickerPackConfig): any;
    isWhatsAppAvailable(): Promise<boolean>;
}
declare const _default: WhatsAppStickersShare;
export default _default;

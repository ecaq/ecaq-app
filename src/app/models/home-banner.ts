import { BaseEntity } from "./base-entity";

export interface HomeBanner extends BaseEntity {
    name: string;
    desc: string;
    imageMobile: string;
    imageDesktop: string;
    buttonText: string;
    buttonUrl: string;
    buttonUrlExternal: boolean;
    videoUrl: string
    videoDuration: string
    isVideo: boolean
}
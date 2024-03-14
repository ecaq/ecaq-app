import { BaseEntity } from "./base-entity";

export interface GalleryModel extends BaseEntity {
  name: string;
  desc: string;
  thumbUrl: string;
  imageUrl: string;
  pathUrl: string;
  imageFileNames?: string[];
}

export interface GalleryWithImagesDto extends BaseEntity {
    name: string;
    desc: string;
    imageUrl: string;
    pathUrl: string;
    imageFileNames: string[];
}
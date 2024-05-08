import { BaseEntity } from "./base-entity";

export interface NewsModel extends BaseEntity {
    title: string;
    intro: string;
    description: string;
    imageUrl: string;
    newsDate: string;
}
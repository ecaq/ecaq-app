import { BaseEntity } from "./base-entity";

export interface EcaqCoreModel extends BaseEntity {
    name: string
    desc: string
    designation: string
    thumbUrl: string
    imageUrl: string
}
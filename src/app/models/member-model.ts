import { BaseEntity } from "./base-entity";

export interface MemberModel extends BaseEntity {
    memberName: string;
    description: string;
    contact: string;
    logoUrl: string;
    joinDate: string;
    notes: string;
    lat: number;
    lng: number;
}
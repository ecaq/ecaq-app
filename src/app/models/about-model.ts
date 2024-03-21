import { BaseEntity } from "./base-entity";
export interface AboutModel extends BaseEntity {
    title: string;
    subtitle: string;
    desc: string;    
    desc2: string;
    statNationalityText: string;
    statNationalityValue: string;
    statMembersText: string;
    statMembersyValue: string;
    statChurchesText: string;
    statChurchesValue: string;
    statAllianceText: string;
    statAlianceValue: string;
    source: string;
    backgroundImage: string;
}
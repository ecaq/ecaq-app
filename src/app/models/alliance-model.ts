 
  export interface AllianceModel {
    id: number;
    sort: number;
    isActive: boolean;
    title: string;
    subtitle: string;
    imageUrl: string;
    allianceCollectionModels: AllianceCollectionModel[];
  }

  export interface AllianceCollectionModel {
    id: number;
    sort: number;
    isActive: boolean;
    name: string;
    desc: string;
    email: string;
    contact: string;
    website: string;
    logo: string;
    allianceModelId: number;
    allianceModel: string;
  }
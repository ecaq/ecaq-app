export interface Member {
    cityName: string;
    country: string;
    joinDate: Date | null;
    notes: string;
    position: {
        lat: number;
        lng: number;
    };
    id: number;
}
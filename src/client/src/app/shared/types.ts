export interface IProduct {
    id: number;
    price_per_ton: number;
    offered_volume_in_tons: number;
    name: string;
    image: string;
    description: string;
    count?: string | number
}
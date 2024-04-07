import { IHotel } from "./hotel";

export interface IContext {
    photo: IHotel[];
    rows: IHotel[];
    blog: IHotel[];
    image: string;
    show: string;
    getImage: (event: any, photo: string) => void;
}
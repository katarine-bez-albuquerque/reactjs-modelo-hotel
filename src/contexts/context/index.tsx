import { createContext, useState } from "react";
import { Layout } from "../../model/layout";
import MyData from '../../api/holtel.json';
import { IHotel } from "../../model/hotel";
import { IContext } from "../../model/context";

const initial: IContext = {
    photo: MyData.data[0].photos,
    rows: MyData.data[0].rows,
    blog: MyData.data[0].blog,
    image: '',
    getImage: () => { },
    show: "active"
}

export const Context = createContext(initial);

export const HomeContextProvider = ({ children }: Layout) => {

    const [photo] = useState<IHotel[]>(initial.photo);
    const [rows] = useState<IHotel[]>(initial.rows);
    const [blog] = useState<IHotel[]>(initial.blog);
    const [image, setImage] = useState(initial.image);
    const [show] = useState(initial.show);

    const getImage = (event: any, photo: string): void => {
        event.preventDefault();
        setImage(String(photo));
    }

    return (
        <Context.Provider value={{ photo, rows, blog, image, getImage, show }}>
            {children}
        </Context.Provider>
    )
}
import { IImage } from "../../model/image";

const Image = ({ src, alt }: IImage) => (
    <img src={src} alt={alt} />
)

export default Image;
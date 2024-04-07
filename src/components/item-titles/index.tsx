import { IText } from "../../model/text";

const ItemTitles = ({ subtitle, title, span, children }: IText) => (
    <>
        {subtitle && (<h6>{subtitle}</h6>)}
        {title && span ? (<h2>{title}<span>{span}</span></h2>) : title && (<h2>{title}</h2>)}
        {children}
    </>
)

export default ItemTitles;
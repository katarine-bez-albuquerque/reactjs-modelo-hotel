import { IText } from "../../model/text";

const Titles = ({ subtitle, title, children }: IText) => (
    <>
        <h6>{subtitle}</h6>
        <h2>{title}</h2>
        {children}
    </>
)

export default Titles;
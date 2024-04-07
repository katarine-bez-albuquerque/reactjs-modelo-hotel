import { Layout } from "../../model/layout";

const Box = ({ id, classname, children }: Layout) => (
    <article id={id} className={classname}>
        {children}
    </article>
)

export default Box;
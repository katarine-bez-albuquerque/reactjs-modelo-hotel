import { Layout } from "../../model/layout";

const Section = ({ id, classname, children }: Layout) => (
    <section id={id} className={classname}>
        {children}
    </section>
)

export default Section;
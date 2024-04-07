import Box from "../../components/box";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Section from "../../components/section";
import ItemTitles from "../../components/item-titles";
import Titles from "../../components/titles";
import Image from "../../components/image";
import { useContext } from "react";
import { Context } from "../../contexts/context";

const Home = () => {

    const { photo, rows, blog, image, getImage, show } = useContext(Context);

    return (
        <div id="page">
            <Navbar />
            <Header />
            <Section id="values">
                <Box classname="item">
                    <ItemTitles
                        subtitle="Entrada"
                        title="26/"
                        span="junho"
                    />
                </Box>
                <Box classname="item">
                    <ItemTitles
                        subtitle="Saída"
                        title="29/"
                        span="junho"
                    />
                </Box>
                <Box classname="item">
                    <ItemTitles
                        subtitle="Tempo"
                        title="03"
                    />
                </Box>
                <Box classname="item button">
                    <ItemTitles subtitle="Loren Ipsum">
                        <a href="">Avaliar</a>
                    </ItemTitles>
                </Box>
            </Section>
            <main id="main">
                <Section id="sobre">
                    <Box id="info">
                        <Titles subtitle="Sobre" title="Mattis Erat Orci Id Est">
                            <p>Suspendisse tincidunt, neque id hendrerit lobortis, nibh nunc lacinia eros, eu mattis erat orci
                                id est. Aenean accumsan et magna sed maximus. Sed non aliquam massa, a congue dui. Donec aliquam
                                porttitor placerat.</p>
                        </Titles>
                    </Box>
                    <Box id="galeria">
                        <ul>
                            {
                                photo.map(item => {
                                    return (
                                        <li key={item.image}><Image src={`/images/${item?.image}`} alt="banner" /></li>
                                    )
                                })
                            }
                        </ul>
                    </Box>
                </Section>
                <Section id="link">
                    <Box id="info">
                        <a href="">Ver fotos do hotel</a>
                    </Box>
                </Section>
                <Section id="nossas-linhas">
                    <Box id="description">
                        <Titles subtitle="Lorem ipsum sit amet" title="Loren Ipsum" />
                        <Section id="images">
                            <ul>
                                {
                                    rows.map(item => {
                                        return (
                                            <li key={item.image} className={item.image === image ? show : ''}>
                                                <a href="" onClick={(e) => getImage(e,String(item.image))}>
                                                    <Image src={`/images/${item.image}`} alt="quarto" />
                                                    <Section classname="item-description">
                                                        <h5>{item.title}</h5>
                                                        <p><span>{item.value}</span></p>
                                                    </Section>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Section>
                    </Box>
                    <Box id="photo">
                        {
                            image ?
                                (<Image src={`/images/${image}`} alt="Quarto"/>)
                            :
                                (<Image src={`/images/quarto4.jpg`} alt="Quarto"/>)
                        }
                        
                    </Box>
                </Section>
                <Section id="depoimento">
                    <Box id="description">
                        <Titles subtitle="Depoimento" title="Arcu Risus Efficitur Est">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed eros pharetra, laoreet risus
                                eget, ornare nulla. Vestibulum pretium nisi et urna pulvinar eleifend.</p>
                        </Titles>
                        <Section id="stars">
                            <Image src="/images/star.svg" alt="Star" />
                            <Image src="/images/star.svg" alt="Star" />
                            <Image src="/images/star.svg" alt="Star" />
                            <Image src="/images/star.svg" alt="Star" />
                            <Image src="/images/star.svg" alt="Star" />
                        </Section>
                        <Section id="logo">
                            <Image src="/images/owl.svg" alt="Owl" />
                            <h6>My <span>Type</span></h6>
                        </Section>
                        <Section id="marca">
                            <h6><span>Loren Ipsun</span> - Amet - <span>type</span></h6>
                        </Section>
                    </Box>
                </Section>
                <Section id="blog">
                    <Box id="titles">
                        <Titles subtitle="Explorar" title="Novidades do Nosso Blog" />
                    </Box>
                    <Box id="posts">
                        <ul>
                            {
                                blog.map(item => {
                                    return (
                                        <li key={item.image}>
                                            <Image src={`/images/${item.image}`} alt="foto" />
                                            <Section classname="description">
                                                <h6>{item.data}</h6>
                                                <p>{item.description}</p>
                                                <a href={item.link}>{item.name}</a>
                                            </Section>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Box>
                </Section>
                <Section id="contato">
                    <Section id="info">
                        <Box id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117625.20113714316!2d-43.20627202564964!3d-22.884305695506498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1712328092417!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                        <Box id="local">
                            <Titles subtitle="Informação" title="Contate-nos">
                                <h6>Rio de Janeiro, <span>Brasil</span></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id fermentum arcu.</p>
                                <h6><span>E-mail:</span></h6>
                                <h5>meuemail@email.com.br</h5>
                                <h6><span>Telefone:</span></h6>
                                <h5>21 9 9999-2222</h5>
                            </Titles>
                        </Box>
                    </Section>
                </Section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;
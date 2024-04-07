import { useEffect, useRef } from "react";

const Navbar = () => {

    let menuRef: any = useRef(null);
    const { innerWidth } = window;

    const toggleMenu = () => {
        if (menuRef.current !== null) {
            if (menuRef.current.style.display === "none") {
                menuRef.current.style.display = "flex";
            }
            else {
                menuRef.current.style.display = "none";
            }
        }
    }

    useEffect(() => {
        let tam = innerWidth;
        if (tam >= 829) {
            menuRef.current.style.display = "flex";
        }
    }, []);

    return (
        <nav id="navbar">
            <h4>Loren Ipsum</h4>
            <button id="btn-menu" onClick={() => toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul ref={menuRef}>
                <li><a href="/">Início</a></li>
                <li><a href="/#sobre">Sobre</a></li>
                <li><a href="/#nossas-linhas">Nossas Linhas</a></li>
                <li><a href="/">Reserva</a></li>
                <li><a href="/#blog">Blog</a></li>
                <li><a href="/#contato">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import logo from '../../assets/img/whiteLogo.svg'
import './style.css'
export function Footer() {
    return (
        <footer>
            <div className="d-flex">
                <div className="flex-column font box">
                    <div className="logo">
                        <img src={logo} alt="whiteLogo" />
                    </div>
                    <p>Uma empresa focada em automações e serviços elétricos.</p>
                </div>
                <div className="flex-column font navegue">
                    <h4>Navegue</h4>
                    {/* <Link className="link">Início</Link>
                    <Link className="link">Serviços</Link>
                    <Link className="link">Parceiros</Link>
                    <Link className="link">Contato</Link> */}
                </div>
                <div className="flex-column font fale-conosco">
                    <h4>Fale Conosco</h4>

                    <div className="contato-btn">
                        <FaWhatsapp className="icon-size" />
                        <p><a target='_blank' href="https://wa.me/5511988060205">+55 (11) 98806-0205</a></p>
                    </div>
                    <div className="contato-btn">
                        <FaLinkedin className="icon-size" />
                        <p><a target='_blank' href="https://linkedin.com/in/rodrigobedutti/">linkedin.com/in/rodrigobedutti/</a></p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="reserved font">
                <FaRegCopyright className="margin" /> <p>Direitos Reservados</p>
            </div>
        </footer>
    )
}
import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import logo from '../../assets/img/whiteLogo.svg'
import './style.css'

export function Footer() {
    const scrollToSection = (target) => {
        if (target === '#inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
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
                    <Link to="#inicio" onClick={() => scrollToSection('#inicio')} className="link">Início</Link>
                    <Link to="#servicos" onClick={() => scrollToSection('#servicos')} className="link">Serviços</Link>
                    <Link to="#parceiros" onClick={() => scrollToSection('#parceiros')} className="link">Parceiros</Link>
                    <Link to="#contato" onClick={() => scrollToSection('#contato')} className="link">Contato</Link>
                </div>
                <div className="flex-column font fale-conosco">
                    <h4>Fale Conosco</h4>

                    <div className="contato-btn">
                        <FaWhatsapp className="icon-size" />
                        <p><a target='_blank' rel='noreferrer' href="https://wa.me/5511988060205">+55 (11) 98806-0205</a></p>
                    </div>
                    <div className="contato-btn">
                        <FaLinkedin className="icon-size" />
                        <p><a target='_blank' rel='noreferrer' href="https://linkedin.com/in/rodrigobedutti/">linkedin.com/in/rodrigobedutti/</a></p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="reserved font">
                <FaRegCopyright className="margin" /> <p>Direitos Reservados</p>
            </div>
        </footer>
    );
}

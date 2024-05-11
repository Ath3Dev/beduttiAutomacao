import { useState } from 'react';
import { Link } from 'react-router-dom/dist';
import logo from '../../assets/img/logo.svg';
import './style.css';

export function Header() {
    const [activeItem, setActiveItem] = useState('INÍCIO');
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseOver = (item) => {
        setActiveItem(item);
    };

    const handleMouseOut = () => {
        setActiveItem('INÍCIO');
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const scrollToSection = (target) => {
        if (target === '#inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setShowMenu(!showMenu);
        } else {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(!showMenu);
            }
        }
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="mobile-menu" onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
                    {[
                        { label: 'INÍCIO', target: '#inicio' },
                        { label: 'SERVIÇOS', target: '#servicos' },
                        { label: 'PARCEIROS', target: '#parceiros' },
                        { label: 'SOBRE', target: '#sobre' },
                        { label: 'CONTATO', target: '#contato' }
                    ].map((item, index) => (
                        <li
                            key={item.label}
                            onMouseOver={() => handleMouseOver(item.label)}
                            onMouseOut={handleMouseOut}
                            onClick={() => scrollToSection(item.target)}
                            className={activeItem === item.label ? 'active' : ''}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <Link to={item.target}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    );
}

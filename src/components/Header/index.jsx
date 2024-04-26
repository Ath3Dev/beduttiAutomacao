import { useState, useEffect } from 'react';
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

    const preventClick = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
    }

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
                            onClick={preventClick}
                            className={activeItem === item.label ? 'active' : ''}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <a href={item.target}>{item.label}</a>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    );
}

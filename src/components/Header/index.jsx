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
                    {['INÍCIO', 'SERVIÇOS', 'PARCEIROS', 'SOBRE', 'CONTATO'].map((item, index) => (
                        <li
                            key={item}
                            onMouseOver={() => handleMouseOver(item)}
                            onMouseOut={handleMouseOut}
                            onClick={preventClick}
                            className={activeItem === item ? 'active' : ''}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMenu(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="mobile-menu" onClick={() => setShowMenu(!showMenu)}>
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

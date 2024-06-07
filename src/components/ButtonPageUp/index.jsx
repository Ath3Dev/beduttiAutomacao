import { FaArrowAltCircleUp } from 'react-icons/fa';
import './style.css';

export function ButtonPageUp() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="ButtonPageUp" onClick={scrollToTop}>
            <FaArrowAltCircleUp className='pageUp-icon'/>
        </div>
    );
}
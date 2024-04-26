import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../assets/img/main-carousel/caroussel-images.svg';
import image2 from '../assets/img/main-carousel/image-caroussel-2.svg';
import image3 from '../assets/img/main-carousel/image-caroussel-3.svg';

import '../assets/css/Home.css';

export function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="home-container">
            <div className="main-carousel">
                <Slider {...settings} className='slider'>
                    <div>
                        <img src={image} alt="Imagem 1" />
                    </div>
                    <div>
                        <img src={image2} alt="Imagem 2" />
                    </div>
                    <div>
                        <img src={image3} alt="Imagem 3" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

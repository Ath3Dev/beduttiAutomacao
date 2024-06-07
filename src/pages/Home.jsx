import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { image, image2, image3, imageMobile, imageMobile2, imageMobile3 } from '../data/carousel-images';
import servicesData from '../data/servicesData';
import sobreCard from '../data/sobreCard'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
    const settingsServices = {
        dots: false,
        infinite: false,
        slidesToShow: 2.4,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 1.1,
                }
            }
        ]
    };

    const [selectedService, setSelectedService] = useState(null);

    const handleCloseModal = (e) => {
        if (e.target.className === 'modal') {
            setSelectedService(null);
        }
    };

    return (
        <div className="home-container">
            <div className="main-carousel">
                <Slider {...settings} className='slider slider-desktop'>
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
                <Slider {...settings} className='slider slider-mobile'>
                    <div>
                        <img src={imageMobile} alt="Imagem 1" />
                    </div>
                    <div>
                        <img src={imageMobile2} alt="Imagem 2" />
                    </div>
                    <div>
                        <img src={imageMobile3} alt="Imagem 3" />
                    </div>
                </Slider>
            </div>

            <div className="servicos" id='servicos'>
                <div className="text">
                    <div className="orange-line"></div>
                    <h2 className='font'>Nossos Serviços</h2>
                    <div className="orange-line"></div>
                </div>
                <div className="card-carousel">
                    <Slider {...settingsServices} className='services-slider'>
                        {servicesData.map((service, index) => (
                            <div key={index} className="card-servico">
                                <img src={service.image} alt={service.title} />
                                <div className='font service-info' onClick={() => setSelectedService(service)}>
                                    {service.title}
                                    <MdOutlineKeyboardArrowDown className="service-icon" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {selectedService && (
                    <div className="modal" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedService.image} alt="" />
                            <div className="modal-text">
                                <h2 className='font'>{selectedService.title}</h2>
                                <p className='font'>{selectedService.description}</p>
                                <button className='font' onClick={() => setSelectedService(null)}>Fechar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="sobre" id="sobre">
                <div className="sobre-title">
                    <h2 className='font'>Sua vida simplificada pela automação.</h2>
                    <hr />
                </div>

                <div className="sobre-card">
                    <div className="sobre-cardHeader">
                        <div className="card-title">
                            <h2 className='font3'>{sobreCard.titleText1}</h2>
                            <h2 className='font2 sobrecard-titletext2'>{sobreCard.titleText2}</h2>
                        </div>
                        <div className="card-subtitle">
                            <h2 className='font'>{sobreCard.subtitleText}</h2>
                        </div>
                    </div>
                    <div className="sobre-cardBody">
                        <h3 className='font'>{sobreCard.bodyText1}</h3>

                        <div className="cardBody-contato">
                            <h3 className='font'>{sobreCard.bodyText2} <span>{sobreCard.bodyText3}</span></h3>
                            <a
                                className='font'
                                target='_blank'
                                href="https://wa.me/5511988060205?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Bedutti%20Automa%C3%A7%C3%B5es.%20Tenho%20interesse%20em%20contratar%20seus%20servi%C3%A7os!">
                                Entre em Contato
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

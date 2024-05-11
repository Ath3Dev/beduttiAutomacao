import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { image, image2, image3, imageMobile, imageMobile2, imageMobile3 } from '../data/carousel-images'
import servicesData from '../data/servicesData';
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
    }

    const [selectedService, setSelectedService] = useState(null);

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
                <div className="text" >
                    <div className="orange-line"></div>
                    <h2 className='font'>Nossos Serviços</h2>
                    <div className="orange-line"></div>
                </div>
                <div className="card-carousel">
                    <Slider {...settingsServices} className='services-slider'>
                        {servicesData.map((service, index) => (
                            <div key={index} className="card-servico">
                                <img src={service.image} alt={service.title} />
                                <div className='font service-info' onClick={() => setSelectedService(service)} >
                                    {service.title}
                                    <MdOutlineKeyboardArrowDown className="service-icon"/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {selectedService && (
                    <div className="modal">
                        <div className="modal-content">
                            <img src={selectedService.image} alt="" srcset="" />
                            <div className="modal-text">
                                <h2 className='font'>{selectedService.title}</h2>
                                <p className='font'>{selectedService.description}</p>
                                <button className='font' onClick={() => setSelectedService(null)}>Fechar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            

        </div>
    );
}

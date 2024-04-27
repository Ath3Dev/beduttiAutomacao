import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../assets/img/main-carousel/caroussel-images.svg';
import image2 from '../assets/img/main-carousel/image-caroussel-2.svg';
import image3 from '../assets/img/main-carousel/image-caroussel-3.svg';
import servicesImage1 from '../assets/img/card-carousel/servicesImage1.svg';
import servicesImage2 from '../assets/img/card-carousel/servicesImage2.svg';
import servicesImage3 from '../assets/img/card-carousel/servicesImage3.svg';
import servicesImage4 from '../assets/img/card-carousel/servicesImage4.svg';
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
        dots: true,
        infinite: false,
        slidesToShow: 2.4,
        slidesToScroll: 1,
        autoplay: false,
    }

    const servicesData = [
        {
            title: "Manutenção Industrial",
            description: "Suas máquinas industriais não estão mais como antes? Não se preocupe! Nossa equipe de manutenção industrial pode revitalizá-las. Com soluções para recuperar a eficiência perdida e parcerias para revitalização mecânica, mantemos sua produção em pleno vigor.",
            image: servicesImage1
        },
        {
            title: "Retrofit de Máquinas Industriais",
            description: "Tem uma máquina que precisa de um upgrade? Podemos revitalizá-la e automatizá-la para você. Além disso, nossas parcerias podem cuidar da parte mecânica. Deixe-nos dar nova vida ao seu equipamento.",
            image: servicesImage2
        },
        {
            title: "Automação Industrial",
            description: "Buscando aumentar a eficiência dos seus processos industriais? Conte com nossa automação industrial. Com soluções tecnológicas avançadas, otimizamos seus sistemas e aumentamos sua produtividade. Deixe-nos ajudar a levar sua produção ao próximo nível.",
            image: servicesImage3
        },
        {
            title: "Manutenção Elétrica em geral",
            description: "Está com problemas elétricos mas não tem uma empresa? Sem problemas! Eletricidade é a nossa paixão, não importa se você tem uma indústria, administra um condomínio ou precisa de ajuda com a sua residência, podemos ajudar.",
            image: servicesImage4
        }
    ];

    const [selectedService, setSelectedService] = useState(null);

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
                                <div className='font service-info'>
                                    {service.title}
                                    <MdOutlineKeyboardArrowDown className="service-icon" onClick={() => setSelectedService(service)} />
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

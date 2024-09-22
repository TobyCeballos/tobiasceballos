"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    heading: "Desarrollo de Software a Medida",
    heading2: "Soluciones adaptadas a vos",
    name: "Creamos software personalizado para optimizar los procesos de tu empresa y mejorar su eficiencia.",
    imgSrc: "/assets/services/software-development.svg",
  },
  {
    heading: "Desarrollo de Páginas Web",
    heading2: "Diseño moderno y funcional",
    name: "Diseñamos y desarrollamos páginas web responsivas y adaptadas a tus necesidades para mejorar tu presencia online.",
    imgSrc: "/assets/services/web-development.svg",
  },
  {
    heading: "Desarrollo de Aplicaciones Web",
    heading2: "Aplicaciones escalables y seguras",
    name: "Construimos aplicaciones web dinámicas y escalables para que puedas ofrecer a tus usuarios una experiencia única.",
    imgSrc: "/assets/services/app-development.svg",
  },
  {
    heading: "Integración de APIs y fetching",
    heading2: "Conectividad sin límites",
    name: "Conectamos tus sistemas con soluciones de terceros mediante integraciones de APIs robustas y seguras.",
    imgSrc: "/assets/services/api-integration.svg",
  },
  {
    heading: "Mantenimiento y Soporte Técnico",
    heading2: "Soporte 24/7",
    name: "Ofrecemos mantenimiento y soporte continuo para asegurar el óptimo funcionamiento de tus soluciones digitales.",
    imgSrc: "/assets/services/support.svg",
  },
  {
    heading: "Consultoría Tecnológica",
    heading2: "Asesoría experta en tecnología",
    name: "Te ayudamos a elegir las mejores soluciones tecnológicas para tu negocio y a implementar estrategias efectivas.",
    imgSrc: "/assets/services/consulting.svg",
  },
  {
    heading: "Optimización SEO en google y redes",
    heading2: "Mejora tu visibilidad en línea",
    name: "Optimizamos tu sitio web para mejorar su posicionamiento en buscadores y atraer más tráfico orgánico.",
    imgSrc: "/assets/services/seo.svg",
  },
  {
    heading: "Automatización de Procesos",
    heading2: "Optimiza y ahorra tiempo",
    name: "Automatizamos flujos de trabajo para aumentar la productividad y reducir errores humanos en tus procesos.",
    imgSrc: "/assets/services/automation.svg",
  },
  {
    heading: "Migración a la Nube y databases locales",
    heading2: "Lleva tus datos a la nube",
    name: "Te ayudamos a migrar tus sistemas a soluciones en la nube, mejorando la accesibilidad y seguridad de tus datos.",
    imgSrc: "/assets/services/cloud-migration.svg",
  },
  {
    heading: "Desarrollo de Aplicaciones Móviles",
    heading2: "Lleva tu negocio al móvil",
    name: "Creamos aplicaciones móviles intuitivas y funcionales para mejorar la experiencia de tus usuarios.",
    imgSrc: "/assets/services/mobile-development.svg",
  },
  {
    heading: "Auditoría y testing de Seguridad",
    heading2: "Protege tu infraestructura digital",
    name: "Realizamos auditorías para identificar vulnerabilidades y asegurar que tu infraestructura esté protegida.",
    imgSrc: "/assets/services/security-audit.svg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div
        id="courses"
        className="bg-gradient-to-r from-black to-gray-900 py-12"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="sm:flex justify-between items-center mb-12">
            <h3 className="text-midnightblue text-5xl lg:text-6xl font-bold mb-5 sm:mb-0 tracking-wide uppercase">
              Servicios
            </h3>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i} className="flex  justify-center">
                <div className="bg-darkgray bg-opacity-90 backdrop-blur-lg mx-4 px-6 py-8 shadow-lg hover:shadow-neonblue transition-shadow duration-300 ease-in-out rounded-3xl flex flex-col justify-between border border-cornflowerblue">
                  {/* Título del Servicio */}
                  <div className="text-center max-h-[200px] h-full">
                    <h4 className="text-2xl font-semibold text-neonpink mb-2 tracking-wide uppercase">
                      {items.heading}
                    </h4>
                    <h5 className="text-lg font-medium text-neonblue mb-4">
                      {items.heading2}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

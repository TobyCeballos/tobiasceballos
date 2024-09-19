"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Roberto Fernández",
    profession: "CEO, Desarrollos Innovadores S.A.",
    comment:
      "El equipo ha demostrado una dedicación y profesionalismo excepcionales. Su capacidad para enfrentar desafíos con creatividad y eficiencia es admirable.",
  },
  {
    name: "Mariana López",
    profession: "Directora de Tecnología, Solucion Argenta Ltda.",
    comment:
      "Estoy impresionada por el nivel de compromiso y habilidad técnica que el equipo ha mostrado. Su trabajo es un verdadero ejemplo de excelencia.",
  },
  {
    name: "Gabriel Martínez",
    profession: "Fundador, Creaciones Digitales SRL",
    comment:
      "El grupo ha superado todas las expectativas. Su capacidad para colaborar y resolver problemas de manera innovadora es encomiable.",
  },
  {
    name: "Roberto Fernández",
    profession: "CEO, Desarrollos Innovadores S.A.",
    comment:
      "El equipo ha demostrado una dedicación y profesionalismo excepcionales. Su capacidad para enfrentar desafíos con creatividad y eficiencia es admirable.",
  },
  {
    name: "Mariana López",
    profession: "Directora de Tecnología, Solucion Argenta Ltda.",
    comment:
      "Estoy impresionada por el nivel de compromiso y habilidad técnica que el equipo ha mostrado. Su trabajo es un verdadero ejemplo de excelencia.",
  },
  {
    name: "Gabriel Martínez",
    profession: "Fundador, Creaciones Digitales SRL",
    comment:
      "El grupo ha superado todas las expectativas. Su capacidad para colaborar y resolver problemas de manera innovadora es encomiable.",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
        <div className="sm:flex px-4 lg:px-8 mx-auto max-w-7xl justify-between items-center">
          <h3 className="text-midnightblue text-5xl lg:text-6xl font-bold mb-5 sm:mb-0 tracking-wide uppercase">
            Reseñas
          </h3>
        </div>
        <div className="mx-auto max-w-7xl lg:px-8">
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className={`bg-white m-4 p-5 my-20 rounded-md relative`}>
                  <h4 className="text-base font-normal text-darkgray my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "#fc9efc" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
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

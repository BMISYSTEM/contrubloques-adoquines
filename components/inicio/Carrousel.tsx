'use client'

import dynamic from "next/dynamic"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
})

export const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // móviles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "16px",
        },
      },
    ],
  }

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="px-2 md:px-10 h-96 w-96">

            <div className="bg-white w-full h-full rounded-[80px] shadow-xl flex flex-col overflow-hidden">
              
              {/* Video / imagen */}
              <div className="w-full h-1/2 bg-black" />

              {/* Contenido */}
              <div className="w-full h-1/2 flex flex-col gap-2 justify-between px-5 pb-3">
                <div className="flex flex-col">
                  <span className="text-sm text-black font-semibold">
                    Constructora X
                  </span>
                  <span className="text-sm text-slate-500">
                    María Rodríguez – CEO
                  </span>
                </div>

                <span className="text-sm text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quis ut dicta nisi atque velit nobis.
                </span>

                <div className="w-full flex items-center justify-center">
                  <button className="bg-blue-800 text-white rounded-lg px-5 py-1">
                    <span className="text-sm">Ver Artículo →</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

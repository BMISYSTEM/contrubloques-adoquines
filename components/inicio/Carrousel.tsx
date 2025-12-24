'use client'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          arrows: false,
        },
      }
    ],
  }
  return (
    <div className="w-full max-w-6xl mx-auto ">
      <Slider {...settings}>
        {[1,2,3,4,5,6].map(n => (
          <div key={n} className="md:px-10">
            <div className="bg-white h-110 w-80 rounded-[80px] shadow-xl flex flex-col gap-1 overflow-hidden ">
                <div className="w-full h-full bg-black">
                    {/* video */}
                </div>
                <div className="w-full h-full flex flex-col gap-1 justify-between px-5 pb-3">
                    <div className="flex flex-col ">
                        <span className="text-sm text-black font-semibold ">Contructora x </span>
                        <span className="text-sm text-slate-500">Maria rodriguez - CEO</span>
                    </div>
                    <span className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut dicta nisi atque velit nobis </span>
                    <div className="w-full flex items-center justify-center">
                        <button className="bg-blue-800 text-white rounded-lg px-5 py-1">
                            <span className="text-sm">Ver Articulo →</span>
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

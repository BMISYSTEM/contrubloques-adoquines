'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Carrousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <SwiperSlide key={n}>
            <div className="h-96 w-96 px-2 md:px-6 py-5">
              <div className="bg-white h-full rounded-[80px] shadow-xl flex flex-col overflow-hidden">
                <div className="w-full h-1/2 bg-black" />
                <div className="w-full h-1/2 flex flex-col gap-2 justify-between px-5 pb-3">
                  <div>
                    <span className="text-sm font-semibold">
                      Constructora X
                    </span>
                    <span className="text-sm text-slate-500 block">
                      María Rodríguez – CEO
                    </span>
                  </div>

                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <button className="bg-blue-800 text-white rounded-lg px-5 py-1 mx-auto">
                    Ver Artículo →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

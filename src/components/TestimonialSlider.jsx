import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialSlider = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div
            className="rounded-2xl p-7 h-full flex flex-col"
            style={{
              background: 'var(--theme-surface-2)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--theme-border)',
            }}
          >
            <div className="flex items-start justify-between mb-5">
              <FaQuoteLeft size={28} style={{ color: t.color, opacity: 0.4 }} />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} size={13} style={{ color: '#FFD600' }} />
                ))}
              </div>
            </div>

            <p className="text-sm font-inter leading-relaxed flex-1 mb-6 italic" style={{ color: 'var(--theme-t2)' }}>
              "{t.quote}"
            </p>

            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--theme-border)' }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-space font-bold text-sm shrink-0"
                style={{
                  background: `${t.color}20`,
                  border: `1px solid ${t.color}40`,
                  color: t.color,
                  boxShadow: `0 0 15px ${t.color}20`,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="font-space font-semibold text-sm" style={{ color: 'var(--theme-t1)' }}>{t.name}</p>
                <p className="text-xs font-inter" style={{ color: 'var(--theme-t3)' }}>
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider

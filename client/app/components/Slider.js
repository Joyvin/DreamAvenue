import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import slider2Details from '../data/slider2Details'
import { slider2Settings } from '../data/slider2Settings'

export default function Slider() {
  return (
    <div className='relative mt-10'>
        <Swiper {...slider2Settings}>
            <SliderButtons />
            {
                slider2Details.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-[20rem] opp-card hover:scale-[1.025] hover:cursor-pointer flex flex-col items-center gap-[0.6rem] px-[1rem] pb-[1rem] pt-[1.3rem] m-auto'>
                            <img className='w-[20rem] h-[15rem] rounded-[10%] mb-1' src={card.imgUrl} alt="cardImg" />
                            <p className='text-[1.5rem] w-full text-center text-[#f9cb6f] font-bold'>{card.title}</p>
                            {/* <span className='text-[0.9rem] w-full text-center font-semibold'>{card.desc}</span> */}
                            <span className='font-bold w-full text-center text-[1.1rem] text-white'>
                                <span>{card.desc}</span>
                            </span>
                        </div>
                    </SwiperSlide>
                ))   
            }
        </Swiper>
    </div>
  )
}


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center gap-[1rem] pt-4'>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-[#f9cb6f] border-none rounded-[5px] bg-[#f6edda] cursor-pointer' onClick={() => swiper.slidePrev()}>❰</button>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-[#f9cb6f] border-none rounded-[5px] bg-[#f6edda] cursor-pointer' onClick={() => swiper.slideNext()}>❱</button>
        </div>
    )
}
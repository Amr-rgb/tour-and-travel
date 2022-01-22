import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from 'swiper'

import "swiper/css"
import "swiper/css/navigation"

SwiperCore.use([Navigation]);

function Testimonials() {
    return (
        <section className='mt-36'>
            <div className="container text-center">
                <h2 className='mb-10'>Testimonials</h2>

                <Swiper
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                >

                    <SwiperSlide className='flex flex-col items-center gap-y-10'>
                        <div className='max-w-xs rounded-[14px] overflow-hidden relative'>
                            <Image src='/man.jpg' width={384} height={491} alt='user' />

                            <div className='flex gap-x-4 absolute bottom-1 right-0 bg-white pt-3 pl-6 rounded-tl-2xl'>
                                <button className='prev font-black text-xl p-2 rounded-full border-2 disabled:text-grey'><IoIosArrowBack /></button>
                                <button className='next font-black text-xl p-2 rounded-full border-2 disabled:text-grey'><IoIosArrowForward /></button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-4 text-left max-w-xs'>
                            <div className='text-[#FFBB0C] text-5xl flex gap-x-2'>
                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            </div>
                            <p className="font-mulish text-3xl">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                            <p className="font-inter font-bold text-3xl -mb-4 mt-6">Edward Newgate</p>
                            <p className="font-inter text-base opacity-[.85]">Founder Circle</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col items-center gap-y-10'>
                        <div className='max-w-xs rounded-[14px] overflow-hidden relative'>
                            <Image src='/man2.jpg' width={384} height={491} alt='user' />

                            <div className='flex gap-x-4 absolute bottom-1 right-0 bg-white pt-3 pl-6 rounded-tl-2xl'>
                                <button className='prev font-black text-xl p-2 rounded-full border-2 disabled:text-grey'><IoIosArrowBack /></button>
                                <button className='next font-black text-xl p-2 rounded-full border-2 disabled:text-grey' disabled={true}><IoIosArrowForward /></button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-4 text-left max-w-xs'>
                            <div className='text-[#FFBB0C] text-5xl flex gap-x-2'>
                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            </div>
                            <p className="font-mulish text-3xl">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                            <p className="font-inter font-bold text-3xl -mb-4 mt-6">Gary Nilson</p>
                            <p className="font-inter text-base opacity-[.85]">Design CEO</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
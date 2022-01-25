import { useEffect, useState } from 'react';
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
    const [screenSize, setScreenSize] = useState()

    useEffect(_ => {
        setScreenSize(window.innerWidth)

        function handleResize() {
            setScreenSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return _ => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className='mt-36 md:mt-48 xl:mt-52 before:content-[none] after:content-[none]'>
            <div className="container text-center md:text-left lg:px-20 xl:pr-28 after:left-3/4 after:bottom-8 md:after:left-[3%] md:after:top-1/2 lg:after:left-[5%]">
                <h2 className='mb-6'>Testimonials</h2>

                <Swiper
                    spaceBetween={screenSize >= 768 ? 100 : 20}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                >

                    <SwiperSlide className='flex flex-col items-center gap-y-10 md:flex-row-reverse md:justify-between pt-4 md:pr-4 md:pb-4'>
                        <div className="w-10/12 max-w-xs relative before:absolute before:w-[42px] before:h-[42px] before:bg-[url('/element2.png')] before:bg-cover after:absolute after:w-[32px] after:h-[32px] after:bg-[url('/element.png')] after:bg-cover after:z-50 after:-left-4 after:-bottom-2 before:-top-4 before:-right-4">
                            <Image className='rounded-[14px]' src='/man.jpg' width={384} height={491} alt='user' />

                            <div className='flex gap-x-4 absolute bottom-1 right-0 bg-white pt-3 pl-6 rounded-tl-2xl'>
                                <button className='prev font-black text-xl p-2 rounded-full border-2 disabled:text-grey'><IoIosArrowBack /></button>
                                <button className='next font-black text-xl p-2 rounded-full border-2 disabled:text-grey'><IoIosArrowForward /></button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-4 text-left max-w-xs xl:max-w-md'>
                            <div className='text-[#FFBB0C] text-5xl flex gap-x-2 xl:text-6xl'>
                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            </div>
                            <p className="font-mulish text-3xl xl:text-5xl">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                            <p className="font-inter font-bold text-3xl -mb-4 mt-6 xl:text-4xl">Edward Newgate</p>
                            <p className="font-inter text-base opacity-[.85] xl:text-xl">Founder Circle</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col items-center gap-y-10 md:flex-row-reverse md:justify-between pt-4 md:pr-4 md:pb-4'>
                        <div className="w-10/12 max-w-xs relative before:absolute before:w-[42px] before:h-[42px] before:bg-[url('/element2.png')] before:bg-cover after:absolute after:w-[32px] after:h-[32px] after:bg-[url('/element.png')] after:bg-cover after:z-50 after:-left-4 after:-bottom-2 before:-top-4 before:-right-4">
                            <Image className='rounded-[14px]' src='/man2.jpg' width={384} height={491} alt='user' />

                            <div className='flex gap-x-4 absolute bottom-1 right-0 bg-white pt-3 pl-6 rounded-tl-2xl'>
                                <button className='prev font-black text-xl p-2 rounded-full border-2 disabled:text-grey'><IoIosArrowBack /></button>
                                <button className='next font-black text-xl p-2 rounded-full border-2 disabled:text-grey' disabled={true}><IoIosArrowForward /></button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-4 text-left max-w-xs xl:max-w-md'>
                            <div className='text-[#FFBB0C] text-5xl flex gap-x-2 xl:text-6xl'>
                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            </div>
                            <p className="font-mulish text-3xl xl:text-5xl">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                            <p className="font-inter font-bold text-3xl -mb-4 mt-6 xl:text-4xl">Gary Nilson</p>
                            <p className="font-inter text-base opacity-[.85] xl:text-xl">Design CEO</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
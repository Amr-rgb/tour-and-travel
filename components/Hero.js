import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'

function Hero() {
    const [location, setLocation] = useState('Location')
    const [activity, setActivity] = useState('Activity')
    const [grade, setGrade] = useState('Grade')
    const [date, setDate] = useState('Date')

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)

    function choiceClickHandler(value, choice) {
        if(value === 'location') {
            setIsOpen1(false)
            setLocation(choice)
        }
        if(value === 'activity') {
            setIsOpen2(false)
            setActivity(choice)
        }
        if(value === 'grade') {
            setIsOpen3(false)
            setGrade(choice)
        }
        if(value === 'date') {
            setIsOpen4(false)
            setDate(choice)
        }
    }

    return (
        <section>
            <div className="container text-center flex flex-col items-center gap-4">
                <div className="max-w-sm">
                    <Image src='/ill1.png' width={687} height={654} />
                </div>

                <div>
                    <h1>Explore and<br />Travel</h1>
                    <p className='mt-16 mb-12 text-lightBlack font-inter font-semibold text-3xl relative after:absolute after:w-8 after:h-0.5 after:bg-lightBlack after:-bottom-4 after:left-1/2 after:-translate-x-1/2'>Holiday finder</p>
                    
                    <form action="#" onSubmit={(e) => {e.preventDefault()}}>
                        <div className="flex flex-wrap gap-x-2 gap-4 justify-center m-auto max-w-sm">

                            <div className='font-inter text-xs text-darkGrey min-w-[144px] flex-1 relative'>
                                <button
                                    onClick={() => {setIsOpen1(prev => !prev)}}
                                    className='flex w-full items-center justify-between border-.8 border-[#AFB0B9] rounded-md px-[18px] py-5'
                                >
                                    {location}  <IoIosArrowDown className='' /></button>
                                {isOpen1 && (
                                    <div className='border-.8 border-[#AFB0B9] bg-[#F3F3F3] absolute left-0 right-0 top-full z-10'>
                                        <p onClick={() => choiceClickHandler('location', 'Cairo')} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>Cairo</p>
                                        <p onClick={() => choiceClickHandler('location', 'Giza')} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>Giza</p>
                                    </div>
                                )}
                            </div>

                            <div className='font-inter text-xs text-darkGrey min-w-[144px] flex-1 relative'>
                                <button
                                    onClick={() => {setIsOpen2(prev => !prev)}}
                                    className='flex w-full items-center justify-between border-.8 border-[#AFB0B9] rounded-md px-[18px] py-5'
                                >
                                    {activity}  <IoIosArrowDown className='' /></button>
                                {isOpen2 && (
                                    <div className='border-.8 border-[#AFB0B9] bg-[#F3F3F3] absolute left-0 right-0 top-full z-10'>
                                        <p onClick={() => choiceClickHandler('activity', 'Tourism')} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>Tourism</p>
                                        <p onClick={() => choiceClickHandler('activity', 'Work')} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>Work</p>
                                    </div>
                                )}
                            </div>

                            <div className='font-inter text-xs text-darkGrey min-w-[144px] flex-1 relative'>
                                <button
                                    onClick={() => {setIsOpen3(prev => !prev)}}
                                    className='flex w-full items-center justify-between border-.8 border-[#AFB0B9] rounded-md px-[18px] py-5'
                                >
                                    {grade}  <IoIosArrowDown className='' /></button>
                                {isOpen3 && (
                                    <div className='border-.8 border-[#AFB0B9] bg-[#F3F3F3] absolute left-0 right-0 top-full z-10'>
                                        <p onClick={() => choiceClickHandler('grade', 5)} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>5</p>
                                        <p onClick={() => choiceClickHandler('grade', 4)} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>4</p>
                                    </div>
                                )}
                            </div>

                            <div className='font-inter text-xs text-darkGrey min-w-[144px] flex-1 relative'>
                                <button
                                    onClick={() => {setIsOpen4(prev => !prev)}}
                                    className='flex w-full items-center justify-between border-.8 border-[#AFB0B9] rounded-md px-[18px] py-5'
                                >
                                    {date}  <IoIosArrowDown className='' /></button>
                                {isOpen4 && (
                                    <div className='border-.8 border-[#AFB0B9] bg-[#F3F3F3] absolute left-0 right-0 top-full z-10'>
                                        <p onClick={() => choiceClickHandler('date', '16/3/22')} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>16/3/22</p>
                                        <p onClick={() => choiceClickHandler('date', '14/3/22')} className='px-[18px] py-4 text-left cursor-pointer hover:bg-olive hover:text-white transition-colors'>14/3/22</p>
                                    </div>
                                )}
                            </div>

                        </div>
                        <button type="submit" className="main-btn mt-6">Explore</button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Hero;
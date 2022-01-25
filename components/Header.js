import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from 'react-icons/io5'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('Home')

    const links = [
        {id: 1, title: 'Home', link: '/'},
        {id: 2, title: 'Destinations', link: '#'},
        {id: 3, title: 'About', link: '#'},
        {id: 4, title: 'Partner', link: '#'},
    ]

    return (
        <header className="bg-white w-full top-0 left-0 z-40">
            <div className="container py-4 flex items-center justify-between md:py-6 lg:p-8 after:content-[none]">
                <Link href='/'><a className="z-50" onClick={() => setActive('Home')}>
                    <div className="flex items-center justify-center w-[34px] md:w-auto">
                        <Image src='/images/logo.svg' width={41} height={41} alt="logo" />
                    </div>
                </a></Link>

                <IoMenuOutline
                    onClick={() => setIsOpen(prev => !prev)}
                    className="font-bold text-8xl cursor-pointer z-50 md:text-[45px] lg:hidden"
                    name={isOpen ? 'close' : 'menu'} 
                />

                <ul className={`z-40 font-inter text-base text-[#B8BECD] bg-white absolute top-0 left-0 right-0 h-[100vh] py-8 flex flex-col items-center justify-center gap-x-8 gap-y-4 ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} duration-1000 ease-in-out lg:static lg:h-auto lg:flex-row lg:p-0`}>
                    {links.map(link => (
                        <li key={link.id}><Link href={link.link}><a className={`hover:text-lightBlack hover:font-medium duration-200 ${link.title === active ? 'active' : ''} before:content-[attr(title)] before:block before:font-medium before:h-0 before:overflow-hidden before:invisible`} title={link.title} onClick={() => setActive(link.title)}>{link.title}</a></Link></li>
                    ))}
                    <li className="mt-6 -mb-2 lg:mt-0 lg:mb-0 lg:-mr-4 lg:ml-2"><button className="cta-btn border border-orange text-orange hover:bg-orange hover:text-white active:bg-[#E97700] duration-200">Login</button></li>
                    <li><button className="cta-btn border border-orange bg-orange text-white hover:bg-[#FF9E37] active:bg-[#E97700] duration-200">Register</button></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
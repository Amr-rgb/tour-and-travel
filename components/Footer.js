import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

function Footer() {
    return (
        <footer className="bg-[#F9F9FB] mt-36">
            <div className="container pt-12 pb-8 md:pt-16">
                <div className="font-mulish font-light text-lightGrey grid grid-cols-2 gap-y-8 md:grid-cols-3 xl:grid-cols-5  xl:items-start xl:gap-x-16">

                    <div className="col-span-2 flex flex-col gap-y-6 mb-8 md:col-span-3 md:max-w-lg xl:col-span-2">
                        <div className="w-9 md:w-11">
                            <Image src='/logo.png' width={44} height={44} />
                        </div>
                        <p className="text-base xl:text-xl xl:max-w-xs">Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                        <p className="text-sm xl:text-lg xl:mt-8">©2020 Thousand Sunny. All rights reserved</p>
                    </div>

                    <ul className="text-base grid gap-y-1 xl:justify-self-end xl:text-xl xl:gap-y-3">
                        <li className="font-bold text-lg text-black mb-3 xl:text-2xl">Destinations</li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Africa</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Antarctica</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Asia</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Europe</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>America</a></Link></li>
                    </ul>

                    <ul className="text-base grid gap-y-1 xl:justify-self-end xl:text-xl xl:gap-y-3">
                        <li className="font-bold text-lg text-black mb-3 xl:text-2xl">Shop</li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Destination Guides</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Pictorial & Gifts</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Special Offers</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Delivery Times</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>FAQs</a></Link></li>
                    </ul>

                    <ul className="text-base grid gap-y-1 xl:justify-self-end xl:text-xl xl:gap-y-3">
                        <li className="font-bold text-lg text-black mb-3 xl:text-2xl">Interests</li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Adventure Travel</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Art And Culture</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Wildlife And Nature</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Family Holidays</a></Link></li>
                        <li className="hover:underline hover:transition-all"><Link href='#'><a>Food And Drink</a></Link></li>
                    </ul>

                </div>

                <div className="text-xl flex gap-x-6 justify-center mt-24 relative before:absolute before:w-full before:h-px before:bg-[#C4C4C4] before:-top-8 lg:text-3xl lg:gap-x-8 xl:text-4xl">
                    <Link href='#'><a className="hover:text-lightGrey transition-colors"><BsTwitter /></a></Link>
                    <Link href='#'><a className="hover:text-lightGrey transition-colors"><FaFacebookF /></a></Link>
                    <Link href='#'><a className="hover:text-lightGrey transition-colors"><BsInstagram /></a></Link>
                    <Link href='#'><a className="hover:text-lightGrey transition-colors"><FaLinkedinIn /></a></Link>
                    <Link href='#'><a className="hover:text-lightGrey transition-colors"><BsYoutube /></a></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
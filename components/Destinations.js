import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io'

function Destinations() {
    return (
        <section className="mt-36">
            <div className="container font-inter text-center grid gap-y-10 md:grid-cols-2 md:text-left lg:px-20">
                <h2>Featured destinations</h2>
                
                <div className="flex flex-wrap justify-center gap-y-5 gap-x-6 md:col-span-2 md:justify-start xl:grid xl:grid-cols-4">

                    <div className="rounded-lg basis-[261px] h-[332px] bg-[url('/image1.png')] relative">

                        <div className="text-left bg-white w-fit pt-3 pr-6 rounded-tr-md absolute bottom-0 left-0">
                            <p className="font-semibold text-olive text-lg">Raja Ampat</p>
                            <p className="font-medium text-lightOlive text-sm">Indonesia</p>
                        </div>
                    </div>

                    <div className="rounded-lg basis-[261px] h-[332px] bg-[url('/image2.png')] relative">

                        <div className="text-left bg-white w-fit pt-3 pr-6 rounded-tr-md absolute bottom-0 left-0">
                            <p className="font-semibold text-olive text-lg">Fanjingshan</p>
                            <p className="font-medium text-lightOlive text-sm">China</p>
                        </div>
                    </div>

                    <div className="rounded-lg basis-[261px] h-[332px] bg-[url('/image3.png')] relative">

                        <div className="text-left bg-white w-fit pt-3 pr-6 rounded-tr-md absolute bottom-0 left-0">
                            <p className="font-semibold text-olive text-lg">Vevey</p>
                            <p className="font-medium text-lightOlive text-sm">Switze rland</p>
                        </div>
                    </div>

                    <div className="rounded-lg basis-[261px] h-[332px] bg-[url('/image4.png')] relative">

                        <div className="text-left bg-white w-fit pt-3 pr-6 rounded-tr-md absolute bottom-0 left-0">
                            <p className="font-semibold text-olive text-lg">Skadar</p>
                            <p className="font-medium text-lightOlive text-sm">Montenegro</p>
                        </div>
                    </div>

                </div>

                <Link href='#'><a className="text-orange font-semibold text-sm justify-self-center flex items-center gap-x-2 py-2 md:row-start-1 md:col-start-2 md:justify-self-end">View all <IoIosArrowForward /></a></Link>
            </div>
        </section>
    );
}

export default Destinations;
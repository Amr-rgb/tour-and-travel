import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io'

function Stories() {
    return (
        <section className='mt-36 md:mt-48 xl:mt-52 before:left-3/4 before:-top-4 after:left-1/4 md:after:left-[80%] md:after:bottom-20 md:before:left-1/4 lg:before:left-1/2 lg:before:-top-10 xl:before:left-[40%] xl:after:-bottom-12 xl:after:left-[65%]'>
            <div className="container font-inter grid justify-center text-center grid-cols-1 gap-y-10 md:text-left md:col-span-2 lg:px-20 after:content-[none] md:after:content-[''] md:after:top-3/4 md:after:left-4 lg:after:left-10 lg:after:top-[60%]">
                <h2>Trending stories</h2>

                <div className="flex flex-wrap justify-center gap-y-5 gap-x-6 md:col-span-2 md:justify-start xl:grid xl:grid-cols-4">
                    <div className="text-left flex flex-col gap-y-3 max-w-[261px]">
                        <div className="h-[231px] bg-[url('/storyimg1.jpg')] bg-cover rounded-t-lg"></div>
                        <h3>The many benefits of taking a healing holiday</h3>
                        <p className="font-inter text-sm text-grey">‘Helaing holidays’ are on the rise tohelp maximise your health and happines...</p>
                        <Link href='#'><a className="text-orange font-semibold text-sm py-2">Read more</a></Link>
                    </div>

                    <div className="text-left flex flex-col gap-y-3 max-w-[261px]">
                        <div className="h-[231px] bg-[url('/storyimg2.jpg')] bg-cover rounded-t-lg"></div>
                        <h3>The best Kyoto restaurant to try Japanese food</h3>
                        <p className="font-inter text-sm text-grey">From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...</p>
                        <Link href='#'><a className="text-orange font-semibold text-sm py-2">Read more</a></Link>
                    </div>

                    <div className="text-left flex flex-col gap-y-3 max-w-[261px]">
                        <div className="h-[231px] bg-[url('/storyimg3.jpg')] bg-cover rounded-t-lg"></div>
                        <h3>Skip Chichen Itza and head to this remote Yucatan</h3>
                        <p className="font-inter text-sm text-grey">It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...</p>
                        <Link href='#'><a className="text-orange font-semibold text-sm py-2">Read more</a></Link>
                    </div>

                    <div className="text-left flex flex-col gap-y-3 max-w-[261px]">
                        <div className="h-[231px] bg-[url('/storyimg4.jpg')] bg-cover rounded-t-lg"></div>
                        <h3>Surf’s up at these beginner spots around the world</h3>
                        <p className="font-inter text-sm text-grey">If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...</p>
                        <Link href='#'><a className="text-orange font-semibold text-sm py-2">Read more</a></Link>
                    </div>
                </div>

                <Link href='#'><a className="text-orange font-semibold text-sm justify-self-center flex items-center gap-x-2 py-2 md:row-start-1 md:col-start-2 md:justify-self-end">View all <IoIosArrowForward /></a></Link>
            </div>
        </section>
    );
}

export default Stories;
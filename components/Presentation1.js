import Image from "next/image";
import Link from "next/link";

function Presentation1() {
    return (
        <section className="mt-36 md:mt-48 xl:mt-52">
            <div className="container flex flex-col items-center gap-y-4 max-w-md md:flex-row md:max-w-small md:gap-x-6 lg:max-w-large lg:pr-20 xl:max-w-xlarge xl:gap-x-20 2xl:max-w-2xlarge">
                <div className="max-w-sm md:max-w-none md:flex-1 xl:basis-3/5">
                    <Image src='/ill2.png' width={659} height={534} alt="illustration" />
                </div>

                <div className="text-center flex flex-col items-center gap-y-5 md:items-start md:text-left md:flex-1 xl:basis-2/5">
                    <h2>A new way to explore the world</h2>
                    <p className="font-mulish font-light text-grey text-sm xl:text-lg">For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <Link href='#'><a className="sec-btn">Learn more</a></Link>
                </div>
            </div>
        </section>
    );
}

export default Presentation1;
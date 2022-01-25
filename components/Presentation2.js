import Image from "next/image";
import Link from "next/link";

function Presentation1() {
    return (
        <section className="mt-36 md:mt-48 xl:mt-52">
            <div className="container flex flex-col items-center gap-y-4 max-w-md md:flex-row-reverse md:max-w-small md:gap-x-6 lg:max-w-large lg:pl-20 xl:max-w-xlarge xl:gap-x-20 2xl:max-w-2xlarge">
                <div className="max-w-sm md:max-w-none md:flex-1 xl:basis-3/5">
                    <Image src='/ill3.png' width={599} height={542} alt="illustration" />
                </div>

                <div className="text-center flex flex-col items-center gap-y-5 md:items-start md:text-left md:flex-1 xl:basis-2/5">
                    <h2>Guides by Thousand Sunny</h2>
                    <p className="font-mulish font-light text-grey text-sm">Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip</p>
                    <Link href='#'><a className="sec-btn xl:mt-4">Download</a></Link>
                </div>
            </div>
        </section>
    );
}

export default Presentation1;
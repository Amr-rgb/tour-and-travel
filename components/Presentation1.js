import Image from "next/image";
import Link from "next/link";

function Presentation1() {
    return (
        <section className="mt-36">
            <div className="container flex flex-col items-center gap-y-4 max-w-md">
                <div className="max-w-sm">
                    <Image src='/ill2.png' width={659} height={534} />
                </div>

                <div className="text-center flex flex-col items-center gap-y-5">
                    <h2>A new way to explore the world</h2>
                    <p className="font-mulish font-light text-grey text-sm">For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <Link href='#'><a className="sec-btn">Learn more</a></Link>
                </div>
            </div>
        </section>
    );
}

export default Presentation1;
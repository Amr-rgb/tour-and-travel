import Image from "next/image";
import Link from "next/link";

function Presentation1() {
    return (
        <section className="mt-36">
            <div className="container flex flex-col items-center gap-y-4 max-w-md">
                <div className="max-w-sm">
                    <Image src='/ill3.png' width={599} height={542} />
                </div>

                <div className="text-center flex flex-col items-center gap-y-5">
                    <h2>Guides by Thousand Sunny</h2>
                    <p className="font-mulish font-light text-grey text-sm">Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip</p>
                    <Link href='#'><a className="sec-btn">Download</a></Link>
                </div>
            </div>
        </section>
    );
}

export default Presentation1;
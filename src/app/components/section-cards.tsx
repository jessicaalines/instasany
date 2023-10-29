import Image from "next/image";
import Mockup from "/public/mockup-main.png";

import Card01 from "/public/image-01.png";
import Card02 from "/public/image-02.png";
import Card03 from "/public/image-03.png";
import Card04 from "/public/image-04.png";
import Card05 from "/public/image-05.png";
import Card06 from "/public/image-06.png";

export function SectionCards() {
  return (
    <section className="w-full pb-20">
      <Image
        src={Mockup}
        alt="Imagem de um celular com uma mulher aparecendo na tela"
        className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16"
      />

      <h2 className="text-center text-7xl font-semibold text-black mb-56">
        Faça <p className="flex flex-row text-green-title-card">você</p> mesmo
        de casa
      </h2>
      <div className="relative w-full max-w-area-cards mx-auto h-area-cards">
        <Image src={Card01} className="absolute top-8 letf-44" alt="Card 01" />
        <Image
          src={Card02}
          className="absolute bottom-32 letf-0"
          alt="Card 02"
        />
        <Image
          src={Card03}
          className="absolute bottom-0 left-80"
          alt="Card 03"
        />
        <Image src={Card04} className="absolute top-0 right-32" alt="Card 04" />
        <Image
          src={Card05}
          className="absolute right-0 bottom-28"
          alt="Card 05"
        />
        <Image
          src={Card06}
          className="absolute bottom-0 right-80"
          alt="Card 06"
        />
      </div>
    </section>
  );
}

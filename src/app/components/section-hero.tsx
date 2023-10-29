"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { GridContainer } from "./grid";

import IconFile from "/public/icon-file.svg";
import IconMockup from "/public/mockup.svg";
import gsap from "gsap";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;

    gsap.FromTo(
      textHero,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }, []);

  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo curso focado em Instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">
            Destrave suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="ícone de arquivo" />
              <p className="text-white font-medium">Assinar lista de espera</p>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Imagem do contorno de um celular"
            className="relative -rotate-12 top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Imagem do contorno de um celular"
            className="relative rotate-12 top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}

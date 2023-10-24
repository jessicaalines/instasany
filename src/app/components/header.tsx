import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";

export function Header() {
  return (
    <header>
      <div>
        <Image src={LogoImg} alt="Logo " />
        <div>
          <nav>
            <Link href="#">Início</Link>
            <Link href="#">Benefícios</Link>
            <Link href="#">Para quem é o curso?</Link>
            <Link href="#">Preços promocionais</Link>
            <Link href="#">Sobre nós</Link>
          </nav>
          <div>
            <button>
              <Image src={SearchIcon} alt="Icon search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

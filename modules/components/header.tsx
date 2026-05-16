import { Button } from "@/components/ui/button";
import { IoIosArrowRoundDown } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex mx-auto max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl">FindYourCountry</span>
        </Link>

        <a href="#explore" hrefLang="#explore">
          <Button className="cursor-pointer flex items-center">
            Explorar <IoIosArrowRoundDown />
          </Button>
        </a>
      </header>
    </>
  );
};

export default Header;

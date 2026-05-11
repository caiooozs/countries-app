import { Button } from "@/components/ui/button";
import { WiDirectionUpRight } from "react-icons/wi";

const Header = () => {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl">FindYourCountry</span>
        </a>

        <a href="#explore" hrefLang="#explore">
          <Button className="cursor-pointer flex items-center">
            Começar <WiDirectionUpRight />
          </Button>
        </a>
      </header>
    </>
  );
};

export default Header;

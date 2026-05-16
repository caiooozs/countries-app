import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";
import { WiDirectionUpRight } from "react-icons/wi";

const Hero = () => {
  return (
    <>
      <div>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-28 md:pb-32">
          <Badge variant={"outline"} className="flex items-center">
            +<NumberTicker value={100} className="" /> Countries with updated
            data <WiDirectionUpRight />
          </Badge>
          <div className="mt-6 mb-6">
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              The whole world,
              <br />
              <span className="italic text-muted-foreground">
                on a single page.
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-md w-1/2">
              Explore population, capitals, languages, currencies, and culture
              for each country. A modern, fast, and beautiful encyclopedia.
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-8 pt-8 md:grid-cols-4 mb-35">
            <div className="flex flex-col">
              <div className="flex items-center">
                +<NumberTicker value={120} className="font-semibold text-4xl" />
              </div>
              <span className="text-sm text-muted-foreground">Countries</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <NumberTicker value={7} className="font-semibold text-4xl" />
              </div>
              <span className="text-sm text-muted-foreground">Continents</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                +
                <NumberTicker value={7000} className="font-semibold text-4xl" />
              </div>
              <span className="text-sm text-muted-foreground">Languages</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                +<NumberTicker value={180} className="font-semibold text-4xl" />
              </div>
              <span className="text-sm text-muted-foreground">Currencies</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hero;

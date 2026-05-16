import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CountryCardProps } from "@/types/types";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <>
      <div>
        <Card className="transition-all transform hover:shadow-sm h-full grid grid-rows-[min-content_1fr_min-content] m-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <h1>{country.name.common}</h1>
                <span className="text-muted-foreground italic text-xs">
                  {country.subregion}
                </span>
              </div>
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                className="w-24"
              />
            </div>
          </CardHeader>
          <Separator />
          <CardContent>
            <div className="flex justify-between">
              <div>
                <h1 className="text-foreground text-md">Capital</h1>
                <span className="text-muted-foreground">{country.capital}</span>
              </div>
              <Separator orientation="vertical" />
              <div className="">
                <h1 className="text-foreground text-md">Population</h1>
                <span className="text-muted-foreground flex items-center gap-2">
                  <FaUser />
                  {country.population.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href={`/country/${country.cca3}`}>
              <Button className="cursor-pointer">
                Learn more <LuArrowUpRight />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default CountryCard;

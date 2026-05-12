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
import { FaUser } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <>
      <div>
        <Card className="transition-all transform hover:shadow-sm h-full grid grid-rows-[min-content_1fr_min-content]">
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
                <h1 className="text-foreground text-md">População</h1>
                <span className="text-muted-foreground flex items-center gap-2">
                  <FaUser />
                  {country.population.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full cursor-pointer">
              Saiba mais <LuArrowUpRight />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default CountryCard;

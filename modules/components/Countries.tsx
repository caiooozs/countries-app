"use client";
import { Badge } from "@/components/ui/badge";
import CountryCard from "./CountriesCard/card-view";
import { LuArrowUpRight } from "react-icons/lu";
import useCountries from "@/hook/useCountries";
import { CountryCardSkeleton } from "./CardSkeleton";

const Countries = () => {
  const { data: countries = [], isLoading, isError } = useCountries();
  const featuredCountries = countries.slice(0, 10);
  return (
    <>
      <div id="explore" className="bg-muted/50 border-t border-border p-12">
        <div className="flex justify-between p-12 items-center">
          <div>
            <Badge variant={"outline"}>Em destaque</Badge>
            <h1 className="font-semibold text-2xl">Explore alguns países</h1>
          </div>
          <div>
            <a
              href="/allCountries"
              className="flex items-center gap-1 transition-all transform hover:font-semibold"
            >
              Ver todos <LuArrowUpRight />
            </a>
          </div>
        </div>

        {isLoading && <CountryCardSkeleton />}
        {isError && (
          <p className="px-12 text-red-500">Erro ao carregar países.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-12 pb-12">
          {featuredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;

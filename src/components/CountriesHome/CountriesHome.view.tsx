import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LuArrowUpRight } from "react-icons/lu";
import { CountriesHomeViewProps } from "./CountriesHome.model";
import CountryCard from "../CountriesCard/CountryCard";
import { CountryCardSkeleton } from "../CardSkeleton/CardSkeleton";

const CountriesView = ({
  allCountries,
  featuredCountries,
  isError,
  isLoading,
}: CountriesHomeViewProps) => {
  return (
    <>
      <div id="explore" className="bg-muted/50 border-t border-border p-12">
        <div className="flex justify-between items-center">
          <div className="">
            <Badge variant={"outline"}>Featured</Badge>
            <h1 className="font-semibold text-2xl">Explore some countries</h1>
          </div>
          <div>
            <Link
              href="/allCountries"
              className="flex items-center gap-1 transition-all transform hover:font-semibold"
            >
              <Button>
                View all <LuArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>

        {isLoading && <CountryCardSkeleton />}
        {isError && (
          <p className="px-12 text-red-500">Error loading countries.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pb-12">
          {featuredCountries?.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CountriesView;
